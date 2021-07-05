<?php


    declare(strict_types = 1);


    namespace Tests\integration\Blade;

    use Tests\integration\Blade\traits\AssertBladeView;
    use Tests\IntegrationTest;
    use Tests\stubs\TestApp;
    use BetterWP\Blade\BladeEngine;
    use BetterWP\Blade\BladeServiceProvider;
    use BetterWP\Blade\BladeView;
    use BetterWP\Contracts\ViewEngineInterface;

    class ViewComposingTest extends BladeTestCase
    {


        /**
         * @var BladeEngine
         */
        private $engine;

        protected function setUp() : void
        {


            $this->afterApplicationCreated(function () {
                $this->engine = TestApp::resolve(ViewEngineInterface::class);
            });
            parent::setUp();


        }


        private function makeView(string $view) {

            $view = $this->engine->make($view);
            return $view->toString();

        }

        /** @test */
        public function global_data_can_be_shared_with_all_views () {

            TestApp::globals('globals', ['foo' => 'calvin']);

            $this->assertSame('calvin', $this->makeView('globals'));


        }

        /** @test */
        public function a_view_composer_can_be_added_to_a_view () {

            TestApp::addComposer('view-composer', function (BladeView $view ) {

                $view->with(['name' => 'calvin']);

            });

            $this->assertViewContent('calvin', $this->makeView('view-composer'));

        }



    }