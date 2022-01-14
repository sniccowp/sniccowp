<?php

declare(strict_types=1);

namespace Tests\Core\unit\Middleware;

use Snicco\Core\Middleware\NoRobots;
use Tests\Core\InternalMiddlewareTestCase;

class NoRobotsTest extends InternalMiddlewareTestCase
{
    
    /** @test */
    public function everything_is_disabled_by_default()
    {
        $middleware = new NoRobots();
        
        $response = $this->runMiddleware($middleware, $this->frontendRequest());
        
        $response->assertNextMiddlewareCalled();
        $header = $response->getHeader('X-Robots-Tag');
        
        $this->assertContains('noindex', $header);
        $this->assertContains('nofollow', $header);
        $this->assertContains('noarchive', $header);
    }
    
    /** @test */
    public function no_index_can_be_configured_separately()
    {
        $middleware = new NoRobots(false);
        
        $response = $this->runMiddleware($middleware, $this->frontendRequest());
        
        $response->assertNextMiddlewareCalled();
        $header = $response->getHeader('X-Robots-Tag');
        
        $this->assertNotContains('noindex', $header);
        $this->assertContains('nofollow', $header);
        $this->assertContains('noarchive', $header);
    }
    
    /** @test */
    public function no_follow_can_be_configured_separately()
    {
        $middleware = new NoRobots(true, false);
        
        $response = $this->runMiddleware($middleware, $this->frontendRequest());
        
        $response->assertNextMiddlewareCalled();
        $header = $response->getHeader('X-Robots-Tag');
        
        $this->assertContains('noindex', $header);
        $this->assertNotContains('nofollow', $header);
        $this->assertContains('noarchive', $header);
    }
    
    /** @test */
    public function no_archive_can_be_configured_separately()
    {
        $middleware = new NoRobots(true, true, false);
        
        $response = $this->runMiddleware($middleware, $this->frontendRequest());
        
        $response->assertNextMiddlewareCalled();
        $header = $response->getHeader('X-Robots-Tag');
        
        $this->assertContains('noindex', $header);
        $this->assertContains('nofollow', $header);
        $this->assertNotContains('noarchive', $header);
    }
    
}