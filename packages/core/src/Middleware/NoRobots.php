<?php

declare(strict_types=1);

namespace Snicco\Core\Middleware;

use Snicco\Core\Http\Psr7\Request;
use Psr\Http\Message\ResponseInterface;
use Snicco\Core\Http\AbstractMiddleware;

/**
 * @api
 */
final class NoRobots extends AbstractMiddleware
{
    
    private bool $noarchive;
    private bool $nofollow;
    private bool $noindex;
    
    public function __construct(bool $noindex = true, bool $nofollow = true, bool $noarchive = true)
    {
        $this->noindex = $noindex;
        $this->nofollow = $nofollow;
        $this->noarchive = $noarchive;
    }
    
    public function handle(Request $request, Delegate $next) :ResponseInterface
    {
        $response = $next($request);
        
        if ($this->noarchive) {
            $response = $response->withNoArchive();
        }
        
        if ($this->noindex) {
            $response = $response->withNoIndex();
        }
        
        if ($this->nofollow) {
            $response = $response->withNoFollow();
        }
        
        return $response;
    }
    
}