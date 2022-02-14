<?php

declare(strict_types=1);

namespace Snicco\Component\HttpRouting\Routing\UrlGenerator;

use InvalidArgumentException;
use Snicco\Component\HttpRouting\Routing\Admin\AdminArea;
use Snicco\Component\HttpRouting\Routing\Exception\BadRouteParameter;
use Snicco\Component\HttpRouting\Routing\Exception\RouteNotFound;
use Snicco\Component\HttpRouting\Routing\Route\Routes;
use Snicco\Component\StrArr\Str;

use function array_diff_key;
use function array_key_exists;
use function array_map;
use function array_merge;
use function is_null;
use function ltrim;
use function parse_str;
use function preg_match;
use function rtrim;
use function str_replace;
use function strpos;
use function trim;

final class Generator implements UrlGenerator
{

    private Routes $routes;
    private UrlGenerationContext $context;
    private AdminArea $admin_area;
    private UrlEncoder $encoder;

    public function __construct(
        Routes $routes,
        UrlGenerationContext $request_context,
        AdminArea $admin_area,
        UrlEncoder $encoder = null
    ) {
        $this->routes = $routes;
        $this->context = $request_context;
        $this->encoder = $encoder ?? new RFC3986Encoder();
        $this->admin_area = $admin_area;
    }

    public function secure(string $path, array $extra = []): string
    {
        return $this->to($path, $extra, self::ABSOLUTE_URL, true);
    }

    public function to(string $path, array $extra = [], int $type = self::ABSOLUTE_PATH, ?bool $secure = null): string
    {
        if ($this->isValidUrl($path)) {
            return $path;
        }

        return $this->generate($path, $extra, $type, $secure);
    }

    public function canonical(): string
    {
        return $this->generate(
            $this->context->currentPathUrlEncoded(),
            [],
            self::ABSOLUTE_URL,
            null,
            false
        );
    }

    public function full(): string
    {
        return $this->context->currentUriAsString();
    }

    public function previous(string $fallback = '/'): string
    {
        $referer = $this->context->referer();

        if (!$referer) {
            return $this->generate($fallback, [], self::ABSOLUTE_URL);
        }

        return $referer;
    }

    public function toLogin(array $arguments = [], int $type = self::ABSOLUTE_PATH): string
    {
        try {
            return $this->toRoute('login', $arguments, $type, true);
        } catch (RouteNotFound $e) {
            //
        }
        try {
            return $this->toRoute('auth.login', $arguments, $type, true);
        } catch (RouteNotFound $e) {
            //
        }
        try {
            return $this->toRoute('framework.auth.login', $arguments, $type, true);
        } catch (RouteNotFound $e) {
            //
        }

        return $this->to($this->admin_area->loginPath(), $arguments, $type, true);
    }

    public function toRoute(
        string $name,
        array $arguments = [],
        int $type = self::ABSOLUTE_PATH,
        ?bool $secure = null
    ): string {
        $route = $this->routes->getByName($name);

        $trailing = $route->matchesOnlyWithTrailingSlash();

        $route_path = $route->getPattern();

        if (Str::startsWith($route_path, (string)$this->admin_area->urlPrefix())) {
            [$route_path, $q] = $this->admin_area->rewriteForUrlGeneration($route_path);
            $arguments = array_merge($arguments, $q);
        }

        $required_segments = $route->getRequiredSegmentNames();
        $optional_segments = $route->getOptionalSegmentNames();
        $requirements = $route->getRequirements();

        $arguments = $this->toStringValues($arguments);

        // All arguments that are not route segments will be used as query arguments.
        $extra = array_diff_key($arguments, array_flip($route->getSegmentNames()));

        // Replace required segments
        $route_path = $this->replaceSegments(
            $required_segments,
            $requirements,
            $arguments,
            $route_path,
            $name,
        );

        // Replace optional segments
        $route_path = $this->replaceSegments(
            $optional_segments,
            $requirements,
            $arguments,
            $route_path,
            $name,
            true
        );

        if ($trailing) {
            $route_path = rtrim($route_path, '/') . '/';
        }

        return $this->generate($route_path, $extra, $type, $secure);
    }

    private function isValidUrl(string $path): bool
    {
        if (preg_match('~^(#|//|https?://|(mailto|tel|sms):)~', $path)) {
            if (false !== filter_var($path, FILTER_VALIDATE_URL)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param array<string,string|int> $extra
     */
    private function generate(
        string $path,
        array $extra = [],
        int $type = self::ABSOLUTE_PATH,
        ?bool $secure = null,
        bool $encode_path = true
    ): string {
        [$path, $existing_query, $existing_fragment] = $this->splitUserPath($path);

        $extra = $this->toStringValues($extra);

        $path = $encode_path
            ? $this->encoder->encodePath($path)
            : $path;

        $path = $this->formatPath($path);

        $extra_fragment = '';
        if (isset($extra[self::FRAGMENT_KEY])) {
            $extra_fragment = trim($extra[self::FRAGMENT_KEY], '#');
            unset($extra[self::FRAGMENT_KEY]);
        }

        $query_string = $this->buildQueryString($extra, $existing_query);
        $fragment = $this->buildFragment($existing_fragment, $extra_fragment);

        if ($type != self::ABSOLUTE_URL && $this->needsUpgradeToAbsoluteHttps($secure)) {
            $type = self::ABSOLUTE_URL;
        }

        $target = $path . $query_string . $fragment;

        if ($type === self::ABSOLUTE_PATH) {
            return $target;
        }

        $scheme = $this->requiredScheme($secure);

        return $scheme . '://' . $this->withHostAndPort($target, $scheme);
    }

    /**
     * @return array{0:string, 1:string, 2:string}
     */
    private function splitUserPath(string $path_with_query_and_fragment): array
    {
        $query_pos = strpos($path_with_query_and_fragment, '?');
        $fragment_pos = strpos($path_with_query_and_fragment, '#');

        $path = $path_with_query_and_fragment;
        $query_string = '';
        $fragment = '';

        if ($query_pos !== false) {
            $path = Str::substr($path_with_query_and_fragment, 0, $query_pos);
            $query_string = Str::substr($path_with_query_and_fragment, $query_pos + 1);
        }

        if ($fragment_pos !== false) {
            $path = Str::substr($path_with_query_and_fragment, 0, $fragment_pos);
            $fragment = Str::substr($path_with_query_and_fragment, $fragment_pos + 1);
        }

        return [
            $path,
            $query_string,
            $fragment,
        ];
    }

    private function formatPath(string $path): string
    {
        $path = ltrim($path, '/');

        return '/' . $path;
    }

    /**
     * @param array<string,string> $extra_query_args
     */
    private function buildQueryString(array $extra_query_args, string $existing_query_string): string
    {
        parse_str($existing_query_string, $existing_query);

        /** @var array<string,string> $existing_query */

        $query = array_merge($existing_query, $extra_query_args);

        if ($query === []) {
            return '';
        }

        return '?' . $this->encoder->encodeQuery($query);
    }

    private function buildFragment(string $existing_fragment, string $extra_fragment): string
    {
        if (!empty($extra_fragment)) {
            return '#' . $this->encoder->encodeFragment($extra_fragment);
        }

        if (!empty($existing_fragment)) {
            return '#' . $this->encoder->encodeFragment($existing_fragment);
        }

        return '';
    }

    private function needsUpgradeToAbsoluteHttps(?bool $secure): bool
    {
        if ($secure === false) {
            return false;
        }

        if ($this->context->isSecure()) {
            return false;
        }

        if ($this->context->shouldForceHttps()) {
            return true;
        }

        return (bool)$secure;
    }

    private function requiredScheme(?bool $secure = null): string
    {
        if (!is_null($secure)) {
            return $secure ? 'https' : 'http';
        }

        if ($this->context->shouldForceHttps()) {
            return 'https';
        }

        return $this->context->currentScheme();
    }

    private function withHostAndPort(string $valid_url_or_path, string $scheme): string
    {
        $port = '';

        if ($scheme === 'https') {
            if ($this->context->httpsPort() !== 443) {
                $port = ':' . (string)$this->context->httpsPort();
            }
        } elseif ($scheme === 'http') {
            if ($this->context->httpPort() !== 80) {
                $port = ':' . (string)$this->context->httpPort();
            }
        }

        return $this->context->host() . $port . $valid_url_or_path;
    }

    /**
     * @param string[] $segments
     * @param array<string,string> $requirements
     * @param array<string,string> $provided_arguments
     */
    private function replaceSegments(
        array $segments,
        array $requirements,
        array $provided_arguments,
        string $route_path,
        string $name,
        bool $optional = false
    ): string {
        foreach ($segments as $segment) {
            $has_value = array_key_exists($segment, $provided_arguments);

            if (!$has_value && !$optional) {
                throw BadRouteParameter::becauseRequiredParameterIsMissing(
                    $segment,
                    $name
                );
            }

            $replacement = $provided_arguments[$segment] ?? '';

            if ($has_value && array_key_exists($segment, $requirements)) {
                $pattern = $requirements[$segment];

                if (!preg_match('/^' . $pattern . '$/', $replacement)) {
                    throw BadRouteParameter::becauseRegexDoesntMatch(
                        $replacement,
                        $segment,
                        $pattern,
                        $name
                    );
                }
            }

            $search = $optional ? '{' . $segment . '?}' : '{' . $segment . '}';

            $route_path = str_replace($search, $replacement, $route_path);
        }

        // Make sure there are no left over trailing slashes for blank optional values.
        return rtrim($route_path, '/');
    }

    /**
     * @param array<string,mixed> $extra
     * @return array<string,string>
     */
    private function toStringValues(array $extra): array
    {
        return array_map(function ($value) {
            if (!is_string($value) && !is_int($value)) {
                throw new InvalidArgumentException(
                    sprintf(
                        'Replacements must be string or integer. Got [%s].',
                        gettype($value)
                    )
                );
            }
            return (string)$value;
        }, $extra);
    }

}