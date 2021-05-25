<?php


    declare(strict_types = 1);


    namespace WPEmerge\Middleware\Core;

    use WPEmerge\Contracts\AbstractRouteCollection;
    use WPEmerge\Contracts\Middleware;
    use WPEmerge\Http\Delegate;
    use WPEmerge\Http\Request;

    class RoutingMiddleware extends Middleware
    {

        /**
         * @var AbstractRouteCollection
         */
        private $routes;


        public function __construct(AbstractRouteCollection $routes)
        {
            $this->routes = $routes;
        }


        public function handle(Request $request, Delegate $next)
        {

            $route_result = $this->routes->match($request);

            return $next(
                $request->withAttribute('route_result', $route_result)
            );

        }

    }