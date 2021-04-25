<?php



	namespace WPEmerge\Flash;

	use Closure;
	use WPEmerge\Contracts\Middleware;
	use WPEmerge\Contracts\RequestInterface;


	class FlashMiddleware implements Middleware {

		/** @var \WPEmerge\Flash\Flash  */
		private $flash;

		public function __construct( Flash $flash ) {

			$this->flash = $flash;

		}

		public function handle( RequestInterface $request, Closure $next ) {

			$response = $next( $request );

			if ( $this->flash->enabled() ) {

				$this->flash->shift();
				$this->flash->save();

			}

			return $response;
		}

	}
