<?php

declare(strict_types=1);

namespace Snicco\Component\SignedUrl\Exception;

use Throwable;
use RuntimeException;

/**
 * @api
 */
final class BadIdentifier extends RuntimeException
{
    
    public static function for(string $id, Throwable $previous = null) :BadIdentifier
    {
        return new self(
            "The identifier [$id] does not exists.",
            $previous ? $previous->getCode() : 0,
            $previous
        );
    }
    
}