<?php

declare(strict_types=1);

namespace Snicco\Component\HttpRouting;

use Webmozart\Assert\Assert;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ServerRequestInterface;
use Snicco\Component\HttpRouting\Http\Redirector;
use Snicco\Component\HttpRouting\Http\Psr7\Request;
use Snicco\Component\HttpRouting\Http\Psr7\Response;
use Snicco\Component\HttpRouting\Http\TemplateRenderer;
use Snicco\Component\HttpRouting\Http\Psr7\ResponseFactory;
use Snicco\Component\HttpRouting\Routing\UrlGenerator\UrlGenerator;

abstract class AbstractMiddleware implements MiddlewareInterface
{
    
    private ContainerInterface $container;
    
    public function setContainer(ContainerInterface $container)
    {
        $this->container = $container;
    }
    
    /**
     * @param  Request  $request
     * @param  RequestHandlerInterface  $handler
     *
     * @return ResponseInterface
     */
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler) :ResponseInterface
    {
        return $this->handle($request, $handler);
    }
    
    /**
     * @param  Request  $request
     * @param  NextMiddleware  $next  This class can be called as a closure. $next($request)
     *
     * @return ResponseInterface
     */
    abstract public function handle(Request $request, NextMiddleware $next) :ResponseInterface;
    
    final protected function respond() :ResponseFactory
    {
        return $this->container[ResponseFactory::class];
    }
    
    final protected function redirect() :Redirector
    {
        return $this->container[Redirector::class];
    }
    
    final protected function url() :UrlGenerator
    {
        return $this->container[UrlGenerator::class];
    }
    
    final protected function render(string $template_identifier, array $data = []) :Response
    {
        /** @var TemplateRenderer $renderer */
        $renderer = $this->container[TemplateRenderer::class];
        Assert::isInstanceOf(TemplateRenderer::class, $renderer);
        return $this->respond()->html($renderer->render($template_identifier, $data));
    }
    
}