<?php

declare(strict_types=1);

namespace Snicco\Auth\Events;

use Snicco\Component\Core\Utils\WP;
use Snicco\EventDispatcher\Contracts\MappedFilter;
use Snicco\Component\Core\EventDispatcher\Events\CoreEvent;

class GenerateLoginUrl extends CoreEvent implements MappedFilter
{
    
    public string $redirect_to;
    public bool   $force_reauth;
    public string $url;
    
    public function __construct(string $url, string $redirect_to = null, bool $force_reauth = false)
    {
        $this->redirect_to = $redirect_to ?? WP::adminUrl();
        $this->force_reauth = $force_reauth;
        $this->url = $url;
    }
    
    public function filterableAttribute()
    {
        return $this->url;
    }
    
    public function shouldDispatch() :bool
    {
        return true;
    }
    
}