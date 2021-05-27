<?php


    declare(strict_types = 1);


    namespace Tests\helpers;

    use WPEmerge\Routing\FastRoute\FastRouteMatcher;

    trait CreateRouteMatcher
    {

        public function createRouteMatcher() : FastRouteMatcher
        {

            return new FastRouteMatcher();

        }

    }