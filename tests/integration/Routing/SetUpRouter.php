<?php


	declare( strict_types = 1 );


	namespace Tests\integration\Routing;

	use SniccoAdapter\BaseContainerAdapter;
	use Tests\SetUpDefaultMocks;
	use Tests\TestRequest;
	use WPEmerge\Facade\WP;
	use WPEmerge\Factories\HandlerFactory;
	use WPEmerge\Factories\ConditionFactory;
	use WPEmerge\Http\Response;
	use WPEmerge\Routing\Conditions\AdminCondition;
	use WPEmerge\Routing\Conditions\AjaxCondition;
	use WPEmerge\Routing\Conditions\CustomCondition;
	use WPEmerge\Routing\Conditions\NegateCondition;
    use WPEmerge\Routing\Conditions\AdminPageCondition;
    use WPEmerge\Routing\Conditions\PostIdCondition;
	use WPEmerge\Routing\Conditions\PostSlugCondition;
	use WPEmerge\Routing\Conditions\PostStatusCondition;
	use WPEmerge\Routing\Conditions\PostTemplateCondition;
	use WPEmerge\Routing\Conditions\PostTypeCondition;
	use WPEmerge\Routing\Conditions\QueryStringCondition;
	use WPEmerge\Routing\Conditions\QueryVarCondition;
	use WPEmerge\Routing\FastRoute\FastRouteMatcher;
	use WPEmerge\Routing\RouteCollection;
	use WPEmerge\Routing\Router;
    use WPEmerge\ServiceProviders\RoutingServiceProvider;

    trait SetUpRouter {

		use SetUpDefaultMocks;

		/**
		 * @var \WPEmerge\Routing\Router
		 */
		private $router;

		/** @var \Contracts\ContainerAdapter */
		private $container;

		/** @var RouteCollection */
		private $route_collection;

		protected function setUp() : void {

			parent::setUp();

			$this->newRouter();

			WP::setFacadeContainer($this->container);

		}

		private function newRouterWith( \Closure $routes ) {

			$this->newRouter();

			$routes( $this->router );

		}

		private function newRouter() {

			$conditions = is_callable( [
				$this,
				'conditions',
			]) ? $this->conditions() : $this->allConditions();
			$container         = new BaseContainerAdapter();
			$condition_factory = new ConditionFactory( $conditions, $container );
			$handler_factory   = new HandlerFactory( [], $container );
			$route_collection  = new RouteCollection(
				$condition_factory,
				$handler_factory,
				new FastRouteMatcher()
			);
			$this->route_collection = $route_collection;
			$this->container   = $container;
			$this->router      = new Router( $container, $route_collection );

		}

		private function request( $method, $path ) : TestRequest {

			return TestRequest::from( $method, $path );

		}

		private function seeResponse( $expected, $response ) {

			if ( $response instanceof Response ) {

				$response = $response->body();

			}

			$this->assertSame( $expected, $response );

		}

		private function allConditions() : array {

		    return array_merge(RoutingServiceProvider::CONDITION_TYPES , [

                'true'                 => \Tests\stubs\Conditions\TrueCondition::class,
                'false'                => \Tests\stubs\Conditions\FalseCondition::class,
                'maybe'                => \Tests\stubs\Conditions\MaybeCondition::class,
                'unique'               => \Tests\stubs\Conditions\UniqueCondition::class,
                'dependency_condition' => \Tests\stubs\Conditions\ConditionWithDependency::class,

            ]);


		}

		private function assertRouteActionConstructedTimes( int $times, $class ) {

			$actual = $GLOBALS['test'][ $class::constructed_times ] ?? 0;

			$this->assertSame(
				$times, $actual,
				'RouteAction [' . $class . '] was supposed to run: ' . $times . ' times. Actual: ' . $GLOBALS['test'][ $class::constructed_times ]
			);

		}

	}