<?php

declare(strict_types=1);

namespace Snicco\Core\Middleware\Internal;

use Snicco\Core\DIContainer;
use Psr\Http\Server\MiddlewareInterface;
use Snicco\Core\Http\AbstractMiddleware;
use Psr\Container\NotFoundExceptionInterface;
use Snicco\Core\Support\ReflectionDependencies;

/**
 * @internal
 */
final class MiddlewareFactory
{
    
    private DIContainer $container;
    
    public function __construct(DIContainer $container)
    {
        $this->container = $container;
    }
    
    public function create(string $middleware_class, array $route_arguments = []) :MiddlewareInterface
    {
        if ( ! empty($route_arguments)) {
            $constructor_args = (new ReflectionDependencies($this->container))
                ->build($middleware_class, $route_arguments);
            
            return new $middleware_class(...array_values($constructor_args));
        }
        
        try {
            $middleware = $this->container->get($middleware_class);
        } catch (NotFoundExceptionInterface $e) {
            $middleware = new $middleware_class;
        }
        
        if ($middleware instanceof AbstractMiddleware) {
            $middleware->setContainer($this->container);
        }
        return $middleware;
    }
    
}