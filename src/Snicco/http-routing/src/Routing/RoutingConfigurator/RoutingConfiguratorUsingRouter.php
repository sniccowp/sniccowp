<?php

declare(strict_types=1);

namespace Snicco\HttpRouting\Routing\RoutingConfigurator;

use Closure;
use ArrayIterator;
use LogicException;
use Webmozart\Assert\Assert;
use Snicco\Component\StrArr\Arr;
use Snicco\Component\StrArr\Str;
use Snicco\HttpRouting\Routing\Router;
use Snicco\Component\Core\Utils\UrlPath;
use Snicco\HttpRouting\Routing\Route\Route;
use Snicco\HttpRouting\Routing\Controller\ViewController;
use Snicco\HttpRouting\Routing\AdminDashboard\AdminMenuItem;
use Snicco\HttpRouting\Routing\Controller\RedirectController;
use Snicco\HttpRouting\Routing\Exception\BadRouteConfiguration;
use Snicco\HttpRouting\Routing\Condition\AbstractRouteCondition;
use Snicco\HttpRouting\Routing\Condition\IsAdminDashboardRequest;
use Snicco\HttpRouting\Routing\AdminDashboard\AdminDashboardPrefix;

/**
 * @interal
 */
final class RoutingConfiguratorUsingRouter implements WebRoutingConfigurator, AdminRoutingConfigurator
{
    
    private Router $router;
    
    private AdminDashboardPrefix $admin_dashboard_prefix;
    
    private array $delegate_attributes = [];
    
    private array $config;
    
    private bool $locked = false;
    
    /**
     * @var AdminMenuItem[]
     */
    private array $menu_items = [];
    
    private Route $current_parent_route;
    
    public function __construct(Router $router, AdminDashboardPrefix $admin_dashboard_prefix, array $config)
    {
        $this->admin_dashboard_prefix = $admin_dashboard_prefix;
        $this->router = $router;
        $this->config = $config;
    }
    
    public function page(string $name, string $path, $action = Route::DELEGATE, ?array $menu_attributes = [], $parent = null) :Route
    {
        $this->validateThatDelegatedAttributesAreEmpty($name);
        
        $this->validateThatNoAdminPrefixesAreSet($path, $name);
        
        $route = $this->router->registerAdminRoute(
            $name,
            $this->admin_dashboard_prefix->appendPath($path),
            $action
        );
        
        $this->validateThatAdminRouteHasNoSegments($route);
        
        // Route handling is delegated, we don't need a menu item.
        if (Route::DELEGATE === $action) {
            return $route;
        }
        // A menu item should explicitly not be added
        if (null === $menu_attributes) {
            return $route;
        }
        
        $this->addMenuItem($route, $menu_attributes, $parent);
        
        return $route;
    }
    
    public function subPages(Route $parent_route, Closure $routes) :void
    {
        if (isset($this->current_parent_route)) {
            throw new BadRouteConfiguration(
                sprintf(
                    "Nested calls to [%s] are not possible.",
                    implode('::', [AdminRoutingConfigurator::class, 'subPages'])
                )
            );
        }
        
        $this->current_parent_route = $parent_route;
        
        $this->middleware($parent_route->getMiddleware())
             ->group($routes);
        
        unset($this->current_parent_route);
    }
    
    public function get(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, ['GET', 'HEAD'], $action);
    }
    
    public function post(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, ['POST'], $action);
    }
    
    public function put(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, ['PUT'], $action);
    }
    
    public function patch(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, ['PATCH'], $action);
    }
    
    public function delete(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, ['DELETE'], $action);
    }
    
    public function options(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, ['OPTIONS'], $action);
    }
    
    public function any(string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, Route::ALL_METHODS, $action);
    }
    
    public function match(array $verbs, string $name, string $path, $action = Route::DELEGATE) :Route
    {
        return $this->addWebRoute($name, $path, array_map('strtoupper', $verbs), $action);
    }
    
    /**
     * @param  string|array<string>  $middleware
     */
    public function middleware($middleware) :self
    {
        $this->delegate_attributes[RoutingConfigurator::MIDDLEWARE_KEY] = Arr::toArray($middleware);
        return $this;
    }
    
    public function name(string $name) :self
    {
        $this->delegate_attributes[RoutingConfigurator::NAME_KEY] = $name;
        return $this;
    }
    
    public function prefix(string $prefix) :self
    {
        $this->delegate_attributes[RoutingConfigurator::PREFIX_KEY] = UrlPath::fromString($prefix);
        return $this;
    }
    
    public function namespace(string $namespace) :self
    {
        $this->delegate_attributes[RoutingConfigurator::NAMESPACE_KEY] = $namespace;
        return $this;
    }
    
    public function fallback(
        $fallback_action, array $dont_match_request_including = [
        'favicon',
        'robots',
        'sitemap',
    ]
    ) :Route {
        Assert::allString(
            $dont_match_request_including,
            'All fallback excludes have to be strings.'
        );
        
        $dont_match_request_including[] = trim($this->admin_dashboard_prefix->asString(), '/');
        
        $regex = sprintf('(?!%s).+', implode('|', $dont_match_request_including));
        
        $route = $this->any(Route::FALLBACK_NAME, '/{path}', $fallback_action)
                      ->requirements(['path' => $regex])
                      ->condition(AbstractRouteCondition::NEGATE, IsAdminDashboardRequest::class);
        
        $this->locked = true;
        
        return $route;
    }
    
    public function view(string $path, string $view, array $data = [], int $status = 200, array $headers = []) :Route
    {
        $name = 'view:'.Str::afterLast($view, '/');
        
        $route = $this->match(['GET', 'HEAD'], $name, $path, [ViewController::class, 'handle']);
        $route->defaults([
            'view' => $view,
            'data' => $data,
            'status' => $status,
            'headers' => $headers,
        ]);
        
        return $route;
    }
    
    public function redirect(string $from_path, string $to_path, int $status = 302, array $query = []) :Route
    {
        $route = $this->any(
            $this->redirectRouteName($from_path, $to_path),
            $from_path,
            [RedirectController::class, 'to']
        );
        $route->defaults([
            'to' => $to_path,
            'status' => $status,
            'query' => $query,
        ]);
        
        return $route;
    }
    
    public function permanentRedirect(string $from_path, string $to_path, array $query = []) :Route
    {
        return $this->redirect($from_path, $to_path, 301, $query);
    }
    
    public function temporaryRedirect(string $from_path, string $to_path, array $query = [], int $status = 307) :Route
    {
        return $this->redirect($from_path, $to_path, $status, $query);
    }
    
    public function redirectAway(string $from_path, string $location, int $status = 302) :Route
    {
        $name = $this->redirectRouteName($from_path, $location);
        return $this->any($name, $from_path, [RedirectController::class, 'away'])->defaults([
            'location' => $location,
            'status' => $status,
        ]);
    }
    
    public function redirectToRoute(string $from_path, string $route, array $arguments = [], int $status = 302) :Route
    {
        $name = $this->redirectRouteName($from_path, $route);
        return $this->any($name, $from_path, [RedirectController::class, 'toRoute'])->defaults([
            'route' => $route,
            'arguments' => $arguments,
            'status' => $status,
        ]);
    }
    
    public function group(Closure $create_routes, array $extra_attributes = []) :void
    {
        $attributes = Arr::mergeRecursive($this->delegate_attributes, $extra_attributes);
        $this->delegate_attributes = [];
        $this->router->createInGroup(
            $this,
            $create_routes,
            $attributes
        );
    }
    
    public function configValue(string $key)
    {
        Assert::keyExists($this->config, $key);
        return $this->config[$key];
    }
    
    public function include($file_or_closure) :void
    {
        $routes = $file_or_closure;
        if ( ! $routes instanceof Closure) {
            Assert::string($file_or_closure, '$file_or_closure has to be a string or a closure.');
            Assert::readable($file_or_closure, "The file $file_or_closure is not readable.");
            Assert::isInstanceOf(
                $routes = require $file_or_closure,
                Closure::class,
                sprintf(
                    "Requiring the file [%s] has to return a closure.\nGot: [%s]",
                    $file_or_closure,
                    gettype($file_or_closure)
                )
            );
        }
        
        $this->group($routes);
    }
    
    public function getIterator() :ArrayIterator
    {
        return new ArrayIterator($this->items());
    }
    
    public function items() :array
    {
        return array_values($this->menu_items);
    }
    
    private function redirectRouteName(string $from, string $to) :string
    {
        return "redirect_route:$from:$to";
    }
    
    private function addWebRoute(string $name, string $path, array $methods, $action) :Route
    {
        $this->validateThatDelegatedAttributesAreEmpty($name);
        
        if ($this->locked) {
            throw BadRouteConfiguration::becauseFallbackRouteIsAlreadyRegistered($name);
        }
        
        if (UrlPath::fromString($path)->startsWith($this->admin_dashboard_prefix->asString())) {
            throw BadRouteConfiguration::becauseWebRouteHasAdminPrefix($name);
        }
        
        return $this->router->registerWebRoute($name, $path, $methods, $action);
    }
    
    private function validateThatDelegatedAttributesAreEmpty(string $route_name) :void
    {
        if ( ! empty($this->delegate_attributes)) {
            throw BadRouteConfiguration::becauseDelegatedAttributesHaveNotBeenGrouped($route_name);
        }
    }
    
    /**
     * @param  Route|string|null  $parent_route
     */
    private function addMenuItem(Route $route, array $attributes, $parent_route) :void
    {
        $this->validateParentPageType($parent_route);
        
        $parent_item = null;
        
        $parent_route = $parent_route ?? $this->current_parent_route ?? null;
        
        if (is_string($parent_route)) {
            $this->validateThatParentHasNoAdminPrefixSet($parent_route, $route->getName());
            $parent_route = $this->admin_dashboard_prefix->appendPath($parent_route);
            $parent_item = $parent_route;
        }
        
        if ($parent_route instanceof Route) {
            $parent_name = $parent_route->getName();
            
            if ( ! isset($this->menu_items[$parent_name])) {
                throw new BadRouteConfiguration(
                    "Can not use route [$parent_name] as a parent for [{$route->getName()}] because it has no menu item."
                );
            }
            
            $parent_item = $this->menu_items[$parent_name];
        }
        
        if ($parent_item instanceof AdminMenuItem) {
            if (null !== $parent_item->parentSlug()) {
                $parent_name = $parent_route->getName();
                throw new BadRouteConfiguration(
                    sprintf(
                        'Cannot use route [%s] as a parent for route [%s] because [%s] is already a child route with parent slug [%s].',
                        $parent_name,
                        $route->getName(),
                        $parent_name,
                        $this->menu_items[$parent_name]->parentSlug()->asString()
                    )
                );
            }
        }
        
        if ($parent_item) {
            $this->validateSlugCompatibility($parent_item, $route);
        }
        
        if ($parent_item instanceof AdminMenuItem) {
            $parent_item = $parent_item->slug()->asString();
        }
        
        $menu_item = AdminMenuItem::fromRoute($route, $attributes, $parent_item);
        $this->menu_items[$route->getName()] = $menu_item;
    }
    
    /**
     * @param  AdminMenuItem|string  $parent_item
     *
     * @throws LogicException
     */
    private function validateSlugCompatibility($parent_item, Route $child_route) :void
    {
        if ($parent_item instanceof AdminMenuItem) {
            $parent_slug = $parent_item->slug()->asString();
            $compare_against = Str::beforeLast($parent_slug, '/');
        }
        else {
            $parent_slug = $parent_item;
            $compare_against = $parent_item;
        }
        
        $route_pattern = $child_route->getPattern();
        
        if ( ! UrlPath::fromString($route_pattern)->startsWith($compare_against)) {
            throw new BadRouteConfiguration(
                "Route pattern [$route_pattern] is incompatible with parent slug [$parent_slug].\nAffected route [{$child_route->getName()}]."
            );
        }
    }
    
    /**
     * @param  string|Route|null  $parent
     */
    private function validateParentPageType($parent) :void
    {
        if (null === $parent) {
            return;
        }
        
        if ( ! is_string($parent) && ! $parent instanceof Route) {
            throw new BadRouteConfiguration(
                '$parent has to be a string or an instance of Route.'
            );
        }
        
        if (isset($this->current_parent_route)) {
            throw new BadRouteConfiguration(
                sprintf(
                    'You can not pass route/parent_slug [%s] as the last argument during a call to subPages().',
                    ($parent instanceof Route ? $parent->getName() : $parent)
                )
            );
        }
    }
    
    private function validateThatNoAdminPrefixesAreSet(string $path, string $name)
    {
        $prefix = $this->admin_dashboard_prefix->asString();
        if (UrlPath::fromString($path)->startsWith($prefix)) {
            throw BadRouteConfiguration::becauseAdminRouteWasAddedWithHardcodedPrefix(
                $name,
                $prefix
            );
        }
    }
    
    private function validateThatParentHasNoAdminPrefixSet(string $parent, string $name)
    {
        $prefix = $this->admin_dashboard_prefix->asString();
        if (UrlPath::fromString($parent)->startsWith($prefix)) {
            throw new BadRouteConfiguration(
                "You should not add the prefix [$prefix] to the parent slug of pages.\nAffected route [$name]."
            );
        }
    }
    
    private function validateThatAdminRouteHasNoSegments(Route $route)
    {
        if (count($route->getSegmentNames())) {
            throw BadRouteConfiguration::becauseAdminRouteHasSegments($route->getName());
        }
    }
    
}