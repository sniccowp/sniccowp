<?php

declare(strict_types=1);

namespace Snicco\MailBundle;

use Snicco\Mail\Event\SendingEmail;
use Snicco\Mail\Event\EmailWasSent;
use Snicco\Mail\Contracts\MailEventDispatcher;
use Snicco\Component\EventDispatcher\EventDispatcher;

/**
 * @interal
 */
final class FrameworkMailEventDispatcher implements MailEventDispatcher
{
    
    private EventDispatcher $dispatcher;
    
    public function __construct(EventDispatcher $dispatcher)
    {
        $this->dispatcher = $dispatcher;
    }
    
    public function fireSending(SendingEmail $sending_email) :void
    {
        $this->dispatcher->dispatch(get_class($sending_email->email), $sending_email->email);
    }
    
    public function fireSent(EmailWasSent $mail_sent) :void
    {
        $this->dispatcher->dispatch($mail_sent);
    }
    
}