<?php

declare(strict_types=1);

namespace Snicco\Core\EventDispatcher;

use Closure;
use Throwable;
use Snicco\Core\DIContainer;
use Snicco\EventDispatcher\Listener;
use Psr\Container\NotFoundExceptionInterface;
use Snicco\EventDispatcher\Contracts\ListenerFactory;
use Snicco\EventDispatcher\Exceptions\ListenerCreationException;

final class DependencyInversionListenerFactory implements ListenerFactory
{
    
    private DIContainer $container_adapter;
    
    public function __construct(DIContainer $container_adapter)
    {
        $this->container_adapter = $container_adapter;
    }
    
    public function create($listener, string $event_name) :Listener
    {
        if ($listener instanceof Closure) {
            return new Listener($listener);
        }
        try {
            $instance = $this->container_adapter->get($listener[0]);
        } catch (NotFoundExceptionInterface $e) {
            $instance = new $listener[0];
        } catch (Throwable $e) {
            throw ListenerCreationException::becauseTheListenerWasNotInstantiatable(
                $listener,
                $event_name,
                $e
            );
        }
        
        return new Listener(
            function (...$payload) use ($instance, $listener) {
                return $instance->{$listener[1]}(...$payload);
            }
        );
    }
    
}