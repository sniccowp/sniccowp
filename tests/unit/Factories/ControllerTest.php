<?php


	declare( strict_types = 1 );


	namespace Tests\unit\Factories;

    use Mockery as m;
    use PHPUnit\Framework\TestCase;
    use Snicco\Factories\RouteActionFactory;
    use Snicco\Http\Psr7\Request;
    use Tests\fixtures\TestDependencies\Bar;
    use Tests\fixtures\TestDependencies\Foo;
    use Tests\helpers\CreateContainer;

    class ControllerTest extends TestCase {

        use CreateContainer;

		/** @test */
		public function a_controller_gets_resolved_from_the_container_with_passed_parameter() {


			$container = $this->createContainer();

			$factory = new RouteActionFactory( [], $container);

			$request = m::mock( Request::class);

			$request->foo = 'foo_route';

			$controller = $factory->createUsing([TestController::class, 'foo']);

			$result = $controller->executeUsing(['request' => $request, 'url' => 'url']);

			$this->assertSame('foo_route_url_foo_bar', $result);

		}

	}

	class TestController {


		/**
		 * @var Bar
		 */
		private $bar;

		public function __construct( Bar $bar) {

			$this->bar = '_' . $bar->bar;
		}

		public function foo (Request $request, string $url, Foo $foo ) {

			return $request->foo . '_' . $url . '_' . $foo->foo . $this->bar;

		}

	}

