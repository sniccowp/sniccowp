<?php

declare(strict_types=1);

namespace Snicco\Bridge\Blade\Tests\fixtures\Components;

use Snicco\Bridge\Blade\BladeComponent;
use Snicco\Component\Templating\View\View;

class HelloWorld extends BladeComponent
{

    public function render(): View
    {
        return $this->view('components.hello-world');
    }

}