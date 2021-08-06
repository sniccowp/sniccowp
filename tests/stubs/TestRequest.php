<?php


    declare(strict_types = 1);


    namespace Tests\stubs;

    use Nyholm\Psr7\Factory\Psr17Factory;
    use Snicco\Http\Psr7\Request;
    use Tests\helpers\CreatePsr17Factories;

    /**
     * @internal
     */
    class TestRequest extends Request
    {

        use CreatePsr17Factories;

        public $body;

        public static function fromFullUrl(string $method, string $url) : TestRequest
        {

            $psr17Factory = new Psr17Factory();

            $request = new TestRequest($psr17Factory->createServerRequest($method, $url, ['REQUEST_METHOD' => $method]));

            parse_str($request->getUri()->getQuery(), $query);
            $request = $request->withQueryParams($query);

            return $request->withAttribute('_wp_admin_folder', 'wp-admin');

        }

        public static function from(string $method, $path, $host = null) : TestRequest
        {

            $psr17Factory = new Psr17Factory();

            $path = ltrim($path, '/');
            $method = strtoupper($method);

            $host = $host ?? 'https://foo.com';
            $url = trim($host, '/').'/'.$path;

            $request = new TestRequest($psr17Factory->createServerRequest($method, $url, ['REQUEST_METHOD' => $method]));
            parse_str($request->getUri()->getQuery(), $query);
            $request = $request->withQueryParams($query);

            return $request->withAttribute('_wp_admin_folder', 'wp-admin');

        }

        public static function withServerParams(Request $request, array $params) :TestRequest {

            $psr17Factory = new Psr17Factory();

            $request = new TestRequest($psr17Factory->createServerRequest($request->getMethod(), $request->getUri(), $params));

            return $request->withAttribute('_wp_admin_folder', 'wp-admin');

        }

        public function withLoadingScript (string $script ) {

            $psr17Factory = new Psr17Factory();

            $request = new TestRequest($psr17Factory->createServerRequest($this->getMethod(), $this->getUri(), ['SCRIPT_NAME' => $script]));

            return $request;

        }

    }