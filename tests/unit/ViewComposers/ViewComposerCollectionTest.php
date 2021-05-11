<?php


	declare( strict_types = 1 );


	namespace Tests\unit\ViewComposers;

	use PHPUnit\Framework\TestCase;
	use Tests\stubs\TestView;
	use WPEmerge\Contracts\ResponseInterface;
	use SniccoAdapter\BaseContainerAdapter;
	use WPEmerge\Contracts\ViewInterface;
	use WPEmerge\Support\Arr;
	use WPEmerge\View\PhpViewFinder;
	use WPEmerge\ViewComposers\ViewComposerCollection;
	use WPEmerge\Factories\ViewComposerFactory;

	class ViewComposerCollectionTest extends TestCase {


		/**
		 * @var \WPEmerge\Factories\ViewComposerFactory
		 */
		private $factory;

		protected function setUp() : void {

			parent::setUp();

			$this->factory = new ViewComposerFactory(
				TEST_CONFIG['composers'],
				new BaseContainerAdapter()
			);


		}

		/** @test */
		public function a_view_can_be_composed_if_it_has_a_matching_composer() {

			$collection = $this->newViewComposerCollection();

			$view = new TestView();
			$view->setName( 'view.php' );
			$view->with( [ 'foo' => 'bar' ] );

			$collection->addComposer( 'view.php', function ( ViewInterface $view ) {

				$view->with( [ 'foo' => 'baz' ] );

			} );

			$collection->executeUsing( $view );

			$this->assertSame( 'baz', $view->getContext( 'foo' ) );

		}

		/** @test */
		public function the_view_is_not_changed_if_no_composer_matches() {

			$collection = $this->newViewComposerCollection();

			$view = new TestView();
			$view->setName( 'view.php' );
			$view->with( [ 'foo' => 'bar' ] );

			$collection->addComposer( 'fooview.php', function ( ViewInterface $view ) {

				$view->with( [ 'foo' => 'baz' ] );

			} );

			$collection->executeUsing( $view );

			$this->assertSame( 'bar', $view->getContext( 'foo' ) );

		}

		/** @test */
		public function multiple_composers_can_match_for_one_view() {

			$collection = $this->newViewComposerCollection();

			$view = new TestView();
			$view->setName( 'view.php' );

			$collection->addComposer( 'view.php', function ( ViewInterface $view ) {

				$view->with( [ 'foo' => 'bar' ] );

			} );

			$collection->addComposer( 'view.php', function ( ViewInterface $view ) {

				$view->with( [ 'bar' => 'baz' ] );

			} );

			$collection->executeUsing( $view );

			$this->assertSame( 'bar', $view->getContext( 'foo' ) );
			$this->assertSame( 'baz', $view->getContext( 'bar' ) );

		}

		/** @test */
		public function a_composer_can_be_created_for_multiple_views () {

			$collection = $this->newViewComposerCollection();

			$view1 = new TestView();
			$view1->setName( 'view.php' );
			$collection->addComposer( 'view.php', function ( ViewInterface $view ) {

				$view->with( [ 'foo' => 'bar' ] );

			} );
			$collection->executeUsing( $view1 );
			$this->assertSame( 'bar', $view1->getContext( 'foo' ) );

			$view2 = new TestView();
			$view2->setName( 'welcome.wordpress.php' );
			$collection->addComposer( 'welcome.wordpress.php', function ( ViewInterface $view ) {

				$view->with( [ 'foo' => 'bar' ] );

			} );
			$collection->executeUsing( $view2 );
			$this->assertSame( 'bar', $view2->getContext( 'foo' ) );



		}

		/** @test */
		public function the_view_does_not_need_to_be_type_hinted () {

			$collection = $this->newViewComposerCollection();

			$view = new TestView();
			$view->setName( 'view.php' );
			$view->with( [ 'foo' => 'bar' ] );

			$collection->addComposer( 'view.php', function ( $view_file ) {

				$view_file->with( [ 'foo' => 'baz' ] );

			} );

			$collection->executeUsing( $view );

			$this->assertSame( 'baz', $view->getContext( 'foo' ) );


		}


		private function newViewComposerCollection() : ViewComposerCollection {

			$dir = getenv( 'ROOT_DIR' ) . DS . 'tests' . DS . 'views';

			return new ViewComposerCollection( $this->factory, new PhpViewFinder( [ $dir ] ) );

		}

	}


