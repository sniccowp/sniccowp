<?php

namespace Snicco\Core\Http\Responses;

use Snicco\Core\Http\Psr7\Response;
use Psr\Http\Message\ResponseInterface;

/**
 * @api The delegated response can be used to signal that no it should not be sent to the client.
 */
final class DelegatedResponse extends Response
{
    
    private bool $should_sent_headers;
    
    public function __construct(bool $should_sent_headers, ResponseInterface $psr_response)
    {
        parent::__construct($psr_response);
        $this->should_sent_headers = $should_sent_headers;
    }
    
    public function shouldHeadersBeSent() :bool
    {
        return $this->should_sent_headers;
    }
    
}