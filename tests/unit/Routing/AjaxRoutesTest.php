<?php


    declare(strict_types = 1);


    namespace Tests\unit\Routing;

    use Contracts\ContainerAdapter;
    use Mockery;
    use Snicco\Events\Event;
    use Snicco\Events\IncomingAjaxRequest;
    use Snicco\ExceptionHandling\Exceptions\RouteLogicException;
    use Snicco\Routing\Router;
    use Snicco\Support\WP;
    use Tests\helpers\CreateDefaultWpApiMocks;
    use Tests\helpers\CreatesWpUrls;
    use Tests\helpers\CreateTestSubjects;
    use Tests\UnitTest;

    class AjaxRoutesTest extends UnitTest
    {

        use CreateTestSubjects;
        use CreatesWpUrls;
        use CreateDefaultWpApiMocks;

        private Router $router;
        private ContainerAdapter $container;

        protected function beforeTestRun()
        {

            $this->container = $this->createContainer();
            $this->routes = $this->newRouteCollection();
            Event::make($this->container);
            Event::fake();
            WP::setFacadeContainer($this->container);
            WP::shouldReceive('isAdmin')->andReturnTrue();
            WP::shouldReceive('isAdminAjax')->andReturnTrue();

        }

        protected function beforeTearDown()
        {

            Mockery::close();
            Event::setInstance(null);
            WP::reset();

        }

        /** @test */
        public function ajax_routes_can_be_matched_by_passing_the_action_as_the_route_parameter()
        {

            $this->createRoutes(function () {

                $this->router->group(['prefix' => 'wp-admin/admin-ajax.php'], function () {

                    $this->router->post('foo_action')->handle(function () {

                        return 'FOO_ACTION';

                    });

                });

            });

            $ajax_request = new IncomingAjaxRequest($this->ajaxRequest('foo_action'));
            $this->runAndAssertOutput('FOO_ACTION', $ajax_request);


        }

        /** @test */
        public function a_trailing_suffix_for_admin_routes_is_stripped()
        {

            $this->createRoutes(function () {

                $this->router->group(['prefix' => '/wp-admin/admin-ajax.php/'], function () {

                    $this->router->post('/foo_action/')->handle(function () {

                        return 'FOO_ACTION';

                    });

                });

            });

            $ajax_request = new IncomingAjaxRequest($this->ajaxRequest('foo_action'));
            $this->runAndAssertOutput('FOO_ACTION', $ajax_request);

        }

        /** @test */
        public function ajax_routes_with_the_wrong_action_dont_match()
        {

            $this->createRoutes(function () {

                $this->router->group(['prefix' => 'wp-admin/admin-ajax.php'], function () {

                    $this->router->post('foo_action')->handle(function () {

                        return 'FOO_ACTION';

                    });

                });

            });

            $ajax_request = new IncomingAjaxRequest($this->ajaxRequest('bar_action'));
            $this->runAndAssertEmptyOutput($ajax_request);

        }

        /** @test */
        public function ajax_routes_can_be_matched_if_the_action_parameter_is_in_the_query()
        {

            $this->createRoutes(function () {

                $this->router->group(['prefix' => 'wp-admin/admin-ajax.php'], function () {

                    $this->router->get('foo_action')->handle(function () {

                        return 'FOO_ACTION';

                    });

                });

            });

            $ajax_request = $this->ajaxRequest('foo_action', 'GET')
                                 ->withParsedBody([])
                                 ->withQueryParams(['action' => 'foo_action']);

            $this->runAndAssertOutput('FOO_ACTION', new IncomingAjaxRequest($ajax_request));

            $this->runAndAssertEmptyOutput(
                new IncomingAjaxRequest($ajax_request->withQueryParams(['action' => 'bar_action']))
            );


        }

        /** @test */
        public function if_the_action_is_not_correct_but_the_url_is_the_route_will_not_match()
        {

            $this->createRoutes(function () {

                $this->router->group(['prefix' => 'wp-admin/admin-ajax.php'], function () {

                    $this->router->get('foo_action')->handle(function () {

                        return 'FOO_ACTION';

                    });

                });

            });

            $ajax_request = $this->ajaxRequest('foo_action', 'GET', 'admin-ajax.php/foo_action')
                                 ->withParsedBody(['action' => 'bogus']);

            $this->runAndAssertEmptyOutput(new IncomingAjaxRequest($ajax_request));

        }

        /** @test */
        public function ajax_routes_can_be_reversed()
        {

            $this->createRoutes(function () {

                $this->router->group([
                    'prefix' => 'wp-admin/admin-ajax.php', 'name' => 'ajax',
                ], function () {

                    $this->router->post('foo_action')->handle(function () {

                        //

                    })->name('foo');

                });

            });

            $expected = '/wp-admin/admin-ajax.php';

            $this->assertSame($expected, $this->newUrlGenerator()->toRoute('ajax.foo'));

        }

        /** @test */
        public function ajax_routes_can_be_reversed_for_get_request_with_the_action_in_the_query_string()
        {

            WP::shouldReceive('addQueryArg')
              ->with('action', 'foo_action', $this->ajaxUrl())
              ->andReturn($this->ajaxUrl().'?action=foo_action');

            $this->createRoutes(function () {

                $this->router->group(['prefix' => 'wp-admin/admin-ajax.php', 'name' => 'ajax'], function () {

                    $this->router->get('foo_action', function () {
                        //
                    })->name('foo');

                });

            });


            $expected = '/wp-admin/admin-ajax.php?action=foo_action';

            $this->assertSame($expected, $this->newUrlGenerator()
                                              ->toRoute('ajax.foo', ['method' => 'GET']));

        }

        /** @test */
        public function an_exception_gets_thrown_when_the_route_doesnt_support_get_requests()
        {

            $this->expectException('Route: ajax.foo does not respond to GET requests.');
            $this->expectException(RouteLogicException::class);

            $this->createRoutes(function () {


                $this->router->group([
                    'prefix' => 'wp-admin/admin-ajax.php', 'name' => 'ajax',
                ], function () {

                    $this->router->post('foo_action')->handle(function () {

                        //

                    })->name('foo');

                });


            });



            $expected = $this->ajaxUrl().'?action=foo_action';

            $this->assertSame($expected, $this->newUrlGenerator()
                                              ->toRoute('ajax.foo', ['method' => 'GET']));

        }



    }