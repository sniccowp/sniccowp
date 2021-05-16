<?php


    declare(strict_types = 1);


    namespace Tests;

    use BetterWpHooks\Testing\BetterWpHooksTestCase;
    use Tests\traits\CreateContainer;
    use Tests\traits\CreatePsr17Factories;

    class BaseTestCase extends BetterWpHooksTestCase
    {

        use CreatePsr17Factories;
        use CreateContainer;

        protected function setUp() : void
        {

            parent::setUp();

            $this->resetGlobalState();
            $this->createDefaultWpApiMocks();
            $this->beforeTestRun();

        }

        protected function tearDown() : void
        {

            $this->beforeTearDown();
            $this->resetGlobalState();
            $this->tearDownWp();
            parent::tearDown();
        }

        protected function resetGlobalState()
        {

            $GLOBALS['test'] = [];
        }

        protected function createDefaultWpApiMocks()
        {
            //
        }

        protected function beforeTestRun()
        {
            //
        }

        protected function beforeTearDown()
        {

            //

        }

    }