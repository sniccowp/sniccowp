<?php


    declare(strict_types = 1);


    namespace Tests\unit\Middleware;

    use Mockery;
    use Snicco\Contracts\Middleware;
    use Snicco\Http\Delegate;
    use Snicco\Http\Psr7\Response;
    use Snicco\Http\Responses\RedirectResponse;
    use Snicco\Middleware\Authenticate;
    use Snicco\Support\WP;
    use Tests\MiddlewareTestCase;
    use Tests\stubs\TestRequest;

    class AuthenticateTest extends MiddlewareTestCase
    {

        protected function beforeTestRun()
        {

            $this->route_action = new Delegate(fn() => $this->response_factory->html('FOO'));
            WP::shouldReceive('loginUrl')->andReturn('foobar.com')->byDefault();

        }

        public function newMiddleware(string $url = null) : Middleware
        {

            return $this->middleware ?? new Authenticate($url);
        }

        protected function beforeTearDown()
        {

            WP::clearResolvedInstances();
            Mockery::close();
        }

        /** @test */
        public function logged_in_users_can_access_the_route()
        {

            WP::shouldReceive('isUserLoggedIn')->andReturnTrue();

            $response = $this->runMiddleware();

            $this->assertOutput('FOO', $response);

        }

        /** @test */
        public function logged_out_users_cant_access_the_route()
        {

            WP::shouldReceive('isUserLoggedIn')->andReturnFalse();

            $response = $this->runMiddleware();

            $this->assertInstanceOf(RedirectResponse::class, $response);
            $this->assertStatusCode(302, $response);

        }

        /** @test */
        public function by_default_users_get_redirected_to_wp_login_with_the_current_url_added_to_the_query_args()
        {

            WP::shouldReceive('isUserLoggedIn')->andReturnFalse();
            WP::shouldReceive('loginUrl')
              ->andReturnUsing(fn($redirect_to) => 'https://foo.com/login?redirect_to='.$redirect_to);

            $enc = urlencode('üäö');
            $request = TestRequest::fromFullUrl('GET', 'https://foo.com/'.$enc.'?param=1');

            $response = $this->runMiddleware($request);

            $expected = '/login?redirect_to=/'.$enc.'?param=1';

            $this->assertSame($expected, $response->getHeaderLine('Location'));


        }

        /** @test */
        public function users_can_be_redirected_to_a_custom_url()
        {

            WP::shouldReceive('isUserLoggedIn')->andReturnFalse();
            WP::shouldReceive('loginUrl')
              ->andReturnUsing(fn($redirect_to) => 'https://foo.com/login?redirect_to='.$redirect_to);

            $expected = '/login?redirect_to=/my-custom-login';
            $this->middleware = new Authenticate('/my-custom-login');

            $response = $this->runMiddleware();

            $this->assertSame($expected, $response->getHeaderLine('Location'));

        }

        /** @test */
        public function json_responses_are_returned_for_ajax_requests()
        {

            WP::shouldReceive('isUserLoggedIn')->andReturnFalse();
            $request = $this->request->withAddedHeader('X-Requested-With', 'XMLHttpRequest')
                                     ->withAddedHeader('Accept', 'application/json');

            $response = $this->runMiddleware($request);

            $this->assertInstanceOf(Response::class, $response);
            $this->assertStatusCode(401, $response);
            $this->assertContentType('application/json', $response);

        }

    }
