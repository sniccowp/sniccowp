<?php

declare(strict_types=1);

namespace Snicco\Component\HttpRouting\Tests\Http;

use DateTimeImmutable;
use InvalidArgumentException;
use LogicException;
use PHPUnit\Framework\TestCase;
use Snicco\Component\HttpRouting\Http\Cookie;

class CookieTest extends TestCase
{

    /**
     * @test
     */
    public function testIsImmutable(): void
    {
        $cookie = new Cookie('foo', 'bar');
        $cookie2 = $cookie->withPath('/web');

        $this->assertNotSame($cookie, $cookie2);
        $this->assertSame('foo', $cookie->name);
        $this->assertSame('bar', $cookie->value);
    }

    /**
     * @test
     */
    public function testDefault(): void
    {
        $cookie = new Cookie('foo', 'bar');

        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);

        $this->assertSame('bar', $cookie->value);
        $this->assertSame('foo', $cookie->name);
    }

    /**
     * @test
     */
    public function testAllowJs(): void
    {
        $cookie = new Cookie('foo', 'bar');
        $cookie = $cookie->withJsAccess();

        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => false,
            'same_site' => 'Lax',
        ], $cookie->properties);

        $cookie = $cookie->withOnlyHttpAccess();

        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);
    }

    /**
     * @test
     */
    public function testAllowUnsecure(): void
    {
        $cookie = new Cookie('foo', 'bar');
        $cookie = $cookie->withUnsecureHttp();

        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => false,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);
    }

    /**
     * @test
     *
     * @psalm-suppress InvalidArgument
     */
    public function testSameSite(): void
    {
        $cookie = new Cookie('foo', 'bar');
        $cookie = $cookie->withSameSite('Strict');
        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Strict',
        ], $cookie->properties);

        $cookie = $cookie->withSameSite('Lax');
        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);

        $cookie = $cookie->withSameSite('None');
        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'None',
        ], $cookie->properties);

        // with lowercase
        $cookie = $cookie->withSameSite('lax');
        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);

        $cookie = $cookie->withUnsecureHttp();
        $this->assertFalse($cookie->properties['secure']);

        $cookie = $cookie->withSameSite('None; Secure');
        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => null,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'None',
        ], $cookie->properties);

        $this->expectException(LogicException::class);

        /** @psalm-suppress UnusedMethodCall */
        $cookie->withSameSite('bogus');
    }

    /**
     * @test
     */
    public function testExpiresInteger(): void
    {
        $cookie = new Cookie('foo', 'bar');
        $cookie = $cookie->withExpiryTimestamp(1000);
        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => 1000,
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);
    }

    /**
     * @test
     */
    public function testExpiresDatetimeInterface(): void
    {
        $cookie = new Cookie('foo', 'bar');

        $date = new DateTimeImmutable('2000-01-01');

        $cookie = $cookie->withExpiryTimestamp($date);

        $this->assertSame([
            'domain' => null,
            'host_only' => true,
            'path' => '/',
            'expires' => (int)$date->getTimestamp(),
            'secure' => true,
            'http_only' => true,
            'same_site' => 'Lax',
        ], $cookie->properties);
    }

    /**
     * @test
     * @psalm-suppress InvalidScalarArgument
     */
    public function testExpiresInvalidArgumentThrowsException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $cookie = new Cookie('foo', 'bar');

        /** @psalm-suppress UnusedMethodCall */
        $cookie->withExpiryTimestamp('1000');
    }

    /**
     * @test
     */
    public function testValueIsNotUrlEncoded(): void
    {
        $cookie = new Cookie('foo_cookie', 'foo bar');

        $this->assertSame('foo bar', $cookie->value);
    }

}
