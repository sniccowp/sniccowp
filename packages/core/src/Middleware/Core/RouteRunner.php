<?php

declare(strict_types=1);

namespace Snicco\Middleware\Core;

use Closure;
use Snicco\Http\Delegate;
use Snicco\Routing\Route;
use Snicco\Routing\Pipeline;
use Snicco\Http\Psr7\Request;
use Snicco\Http\Psr7\Response;
use Snicco\Contracts\Middleware;
use Snicco\Middleware\MiddlewareStack;
use Psr\Http\Message\ResponseInterface;
use Snicco\Factories\RouteActionFactory;

class RouteRunner extends Middleware
{
    
    private Pipeline           $pipeline;
    private MiddlewareStack    $middleware_stack;
    private RouteActionFactory $factory;
    
    public function __construct(Pipeline $pipeline, MiddlewareStack $middleware_stack, RouteActionFactory $factory)
    {
        $this->pipeline = $pipeline;
        $this->middleware_stack = $middleware_stack;
        $this->factory = $factory;
    }
    
    public function handle(Request $request, Delegate $next) :ResponseInterface
    {
        if ( ! $route = $request->route()) {
            return $this->delegateToWordPress($request);
        }
        
        $route->instantiateAction($this->factory);
        
        $middleware = $this->middleware_stack->createForRoute($route);
        
        return $this->pipeline
            ->send($request)
            ->through($middleware)
            ->then($this->runRoute($route));
    }
    
    private function runRoute(Route $route) :Closure
    {
        return function (Request $request) use ($route) {
            return $this->response_factory->toResponse(
                $route->run($request)
            );
        };
    }
    
    private function delegateToWordPress(Request $request) :Response
    {
        $middleware = $this->middleware_stack->createForRequestWithoutRoute($request);
        
        if ( ! count($middleware)) {
            return $this->response_factory->delegateToWP();
        }
        
        return $this->pipeline
            ->send($request)
            ->through($middleware)
            ->then(function () {
                return $this->response_factory->delegateToWP();
            });
    }
    
}