<?php

declare(strict_types=1);

namespace Snicco\Bridge\SignedUrlPsr16\Tests;

use PHPUnit\Framework\TestCase;
use Snicco\Component\TestableClock\Clock;
use Cache\Adapter\PHPArray\ArrayCachePool;
use Snicco\Component\TestableClock\TestClock;
use Snicco\Bridge\SignedUrlPsr16\Psr16Storage;
use Snicco\Component\SignedUrl\Storage\SignedUrlStorage;
use Snicco\Component\SignedUrl\Testing\SignedUrlStorageTests;

use function sleep;

final class Psr16StorageTest extends TestCase
{
    
    use SignedUrlStorageTests;
    
    protected function advanceTime(int $seconds, TestClock $clock)
    {
        return sleep($seconds);
    }
    
    protected function createStorage(Clock $clock) :SignedUrlStorage
    {
        return new Psr16Storage(new ArrayCachePool());
    }
    
}