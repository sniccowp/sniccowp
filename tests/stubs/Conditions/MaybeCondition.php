<?php


	declare( strict_types = 1 );


	namespace Tests\stubs\Conditions;

	use WPEmerge\Contracts\ConditionInterface;
	use WPEmerge\Contracts\RequestInterface;
    use WPEmerge\Http\Psr7\Request;

    class MaybeCondition implements ConditionInterface {

		/**
		 * @var bool
		 */
		private $make_it_pass;

		public function __construct( $make_it_pass ) {

			$this->make_it_pass = $make_it_pass;

		}

		public function isSatisfied( Request $request ) :bool {

			$GLOBALS['test']['maybe_condition_run'] = true;

			return $this->make_it_pass === true || $this->make_it_pass === 'foobar';
		}

		public function getArguments( Request $request ) :array {

			return [];

		}

	}