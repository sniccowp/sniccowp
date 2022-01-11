<?php

declare(strict_types=1);

use Snicco\Core\Routing\WebRoutingConfigurator;
use Tests\Core\fixtures\Controllers\Web\RoutingTestController;

return function (WebRoutingConfigurator $router) {
    $router->get(
        'first_route',
        '/first',
        RoutingTestController::class
    );
};