<?php


    declare(strict_types = 1);


    namespace Snicco\Auth\Controllers;

    use Snicco\Auth\Contracts\AuthConfirmation;
    use Snicco\Http\Controller;
    use Snicco\Http\Psr7\Request;
    use Snicco\Http\Psr7\Response;
    use Snicco\Session\Events\SessionRegenerated;

    class ConfirmedAuthSessionController extends Controller
    {

        private AuthConfirmation $auth_confirmation;
        private int $duration;

        public function __construct(AuthConfirmation $auth_confirmation, int $duration)
        {
            $this->auth_confirmation = $auth_confirmation;
            $this->duration = $duration;
        }

        public function create(Request $request)
        {
            return $this->auth_confirmation->viewResponse($request);
        }

        public function store(Request $request) : Response
        {

            $confirmed = $this->auth_confirmation->confirm($request);

            if ($confirmed !== true) {

                return $request->isExpectingJson()
                    ? $this->response_factory->json(['message' => 'Confirmation failed.'], 401)
                    : $this->response_factory->redirect()->toRoute('auth.confirm')
                                             ->withErrors($confirmed);

            }

            $this->confirmAuth($request);

            return $request->isExpectingJson()
                ? $this->response_factory->make()->withStatus(200)
                : $this->response_factory->redirect()
                                           ->intended($request, $this->url->toRoute('dashboard'));

        }

        private function confirmAuth(Request $request) : void
        {

            $session = $request->session();
            $session->forget('auth.confirm');
            $session->confirmAuthUntil($this->duration);
            $session->regenerate();
            SessionRegenerated::dispatch([$session]);

        }

    }