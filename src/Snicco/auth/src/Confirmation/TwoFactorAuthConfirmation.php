<?php

declare(strict_types=1);

namespace Snicco\Auth\Confirmation;

use Snicco\HttpRouting\Http\Psr7\Request;
use Snicco\Component\Core\Shared\Encryptor;
use Snicco\Auth\Contracts\AuthConfirmation;
use Snicco\HttpRouting\Http\ResponseFactory;
use Snicco\Auth\Traits\PerformsTwoFactorAuthentication;
use Snicco\Auth\Contracts\Abstract2FAuthConfirmationView;
use Snicco\Auth\Contracts\TwoFactorAuthenticationProvider;

class TwoFactorAuthConfirmation implements AuthConfirmation
{
    
    use PerformsTwoFactorAuthentication;
    
    private AuthConfirmation                $fallback;
    private TwoFactorAuthenticationProvider $provider;
    
    /**
     * @var ResponseFactory
     */
    private                                $response_factory;
    private Encryptor                      $encryptor;
    private string                         $user_secret;
    private Abstract2FAuthConfirmationView $response;
    
    public function __construct(
        AuthConfirmation $fallback,
        TwoFactorAuthenticationProvider $provider,
        ResponseFactory $response_factory,
        Encryptor $encryptor,
        Abstract2FAuthConfirmationView $response
    ) {
        $this->fallback = $fallback;
        $this->encryptor = $encryptor;
        $this->provider = $provider;
        $this->response_factory = $response_factory;
        $this->response = $response;
    }
    
    public function confirm(Request $request) :bool
    {
        if ( ! $this->userHasTwoFactorEnabled($request->user())) {
            return $this->fallback->confirm($request);
        }
        
        return $this->validateTwoFactorAuthentication(
            $this->provider,
            $request,
            $request->userId()
        );
    }
    
    public function view(Request $request) :string
    {
        if ( ! $this->userHasTwoFactorEnabled($request->user())) {
            return $this->fallback->view($request);
        }
        
        return $this->response->toView($request)->toString();
    }
    
}