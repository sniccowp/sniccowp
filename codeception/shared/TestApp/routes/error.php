<?php

declare(strict_types=1);

/** @var \Snicco\HttpRouting\Routing\Router $router */

use Snicco\SessionBundle\Exceptions\InvalidCsrfTokenException;
use Snicco\Component\Core\ExceptionHandling\Exceptions\HttpException;

$router->get('error/500', function () {
    throw new HttpException(500, 'Secret logging stuff.');
});

$router->get('error/400', function () {
    throw new HttpException(400, 'Secret logging stuff.');
});

$router->get('error/419', function () {
    throw new InvalidCsrfTokenException('Secret logging stuff.');
});

$router->get('error/fatal', function () {
    trigger_error('Secret logging stuff.', E_USER_ERROR);
});


