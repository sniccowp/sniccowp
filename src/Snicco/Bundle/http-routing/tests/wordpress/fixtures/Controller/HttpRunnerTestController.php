<?php

declare(strict_types=1);


namespace Snicco\Bundle\HttpRouting\Tests\wordpress\fixtures\Controller;

use Snicco\Component\HttpRouting\Controller\Controller;
use Snicco\Component\HttpRouting\Http\Psr7\Response;
use Snicco\Component\HttpRouting\Http\Response\DelegatedResponse;
use Snicco\Component\HttpRouting\Http\Response\RedirectResponse;

final class HttpRunnerTestController extends Controller
{
    public function __invoke()
    {
        return self::class;
    }

    public function noResponse(): DelegatedResponse
    {
        return $this->responseFactory()->delegate(false);
    }

    public function adminRedirect(): RedirectResponse
    {
        return $this->respondWith()->redirectTo('/foo');
    }

    public function clientError(): Response
    {
        return $this->responseFactory()->html('no way')->withStatus(403);
    }

    public function serverError(): Response
    {
        return $this->responseFactory()->html('server error')->withStatus(500);
    }

}