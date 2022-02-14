<?php

declare(strict_types=1);

namespace Snicco\Component\HttpRouting\Tests\Http;

use BadMethodCallException;
use InvalidArgumentException;
use LogicException;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ServerRequestInterface;
use RuntimeException;
use Snicco\Component\HttpRouting\Http\Psr7\Request;
use Snicco\Component\HttpRouting\Testing\CreatesPsrRequests;
use Snicco\Component\HttpRouting\Tests\helpers\CreateTestPsr17Factories;
use stdClass;

class RequestTest extends TestCase
{

    private Request $request;
    private ServerRequestInterface $psr_request;
    use CreatesPsrRequests;
    use CreateTestPsr17Factories;

    protected function setUp(): void
    {
        parent::setUp();

        $this->request = $this->frontendRequest('/foo');
        $this->psr_request = $this->psrServerRequestFactory()->createServerRequest('GET', '/foo');
    }

    public function testIsImmutable(): void
    {
        $request = $this->frontendRequest('foo');

        $next = $request->withMethod('POST');

        $this->assertInstanceOf(Request::class, $request);
        $this->assertInstanceOf(Request::class, $next);

        $this->assertNotSame($request, $next);

        $this->assertSame('GET', $request->getMethod());
        $this->assertSame('POST', $next->getMethod());
    }

    public function testGetPath(): void
    {
        $request = $this->frontendRequest('/foo/bar');
        $this->assertSame('/foo/bar', $request->path());

        $request = $this->frontendRequest('/foo/bar/');
        $this->assertSame('/foo/bar/', $request->path());

        $request = $this->frontendRequest('/');
        $this->assertSame('/', $request->path());

        $request = $this->frontendRequest('https://foo.com/foo/bar?baz=biz');
        $this->assertSame('/foo/bar', $request->path());

        $request = $this->frontendRequest('https://foo.com/foo/bar/?baz=biz');
        $this->assertSame('/foo/bar/', $request->path());

        $request = Request::fromPsr($this->psrServerRequestFactory()->createServerRequest('GET', ''));
        $this->assertSame('/', $request->path());
    }

    public function testGetUrl(): void
    {
        $request = $this->frontendRequest('https://foo.com/foo/bar');
        $this->assertSame('https://foo.com/foo/bar', $request->url());

        $request = $this->frontendRequest('https://foo.com/foo/bar/');
        $this->assertSame('https://foo.com/foo/bar/', $request->url());

        $request = $this->frontendRequest('https://foo.com/foo/bar?baz=biz');
        $this->assertSame('https://foo.com/foo/bar', $request->url());

        $request = $this->frontendRequest('https://foo.com/foo/bar/?baz=biz');
        $this->assertSame('https://foo.com/foo/bar/', $request->url());
    }

    public function testGetFullUrl(): void
    {
        $request = $this->frontendRequest('https://foo.com/foo/bar');
        $this->assertSame('https://foo.com/foo/bar', $request->fullUrl());

        $request = $this->frontendRequest('https://foo.com/foo/bar/');
        $this->assertSame('https://foo.com/foo/bar/', $request->fullUrl());

        $request = $this->frontendRequest('https://foo.com/foo/bar?baz=biz');
        $this->assertSame('https://foo.com/foo/bar?baz=biz', $request->fullUrl());

        $request = $this->frontendRequest('https://foo.com/foo/bar/?baz=biz');
        $this->assertSame('https://foo.com/foo/bar/?baz=biz', $request->fullUrl());

        $request = $this->frontendRequest('https://foo.com/foo/bar?baz=biz#section');
        $this->assertSame('https://foo.com/foo/bar?baz=biz#section', $request->fullUrl());
    }

    public function test_cookie(): void
    {
        $this->assertSame(null, $this->request->cookie('foo'));

        $request = $this->request->withCookieParams(['foo' => 'bar']);

        $this->assertSame(null, $this->request->cookie('foo'));
        $this->assertSame('bar', $request->cookie('foo'));

        $this->assertSame('default', $request->cookie('baz', 'default'));

        $request = $this->request->withCookieParams(['foo' => ['bar', 'baz']]);
        $this->assertSame('bar', $request->cookie('foo'));
    }

    public function testFullUrlIs(): void
    {
        $request = $this->frontendRequest('https://example.com/foo/bar');

        $this->assertFalse($request->fullUrlIs('https://example.com/foo/'));
        $this->assertFalse($request->fullUrlIs('https://example.com/foo/bar/'));
        $this->assertTrue($request->fullUrlIs('https://example.com/foo/bar'));
        $this->assertTrue($request->fullUrlIs('https://example.com/foo/*'));
    }

    public function testPathIs(): void
    {
        $request = $this->frontendRequest('https://example.com/foo/bar');

        $this->assertFalse($request->pathIs('/foo'));
        $this->assertFalse($request->pathIs('foo'));

        $this->assertTrue($request->pathIs('foo/bar'));
        $this->assertTrue($request->pathIs('/foo/bar'));

        $this->assertFalse($request->pathIs('/foo/bar/'));

        $this->assertTrue($request->pathIs('/foo/*'));

        $this->assertFalse($request->pathIs('/foo/baz', '/foo/biz'));
        $this->assertTrue($request->pathIs('/foo/baz', '/foo/biz', '/foo/bar'));

        $request = $this->frontendRequest('/münchen/foo');

        $this->assertTrue($request->pathIs('/münchen/*'));
    }

    public function testDecodedPath(): void
    {
        $request = $this->frontendRequest('/münchen/düsseldorf');

        $this->assertSame('/münchen/düsseldorf', $request->decodedPath());

        $request = $this->frontendRequest('/AC%2FDC');

        $this->assertSame('/AC%2FDC', $request->decodedPath());
    }

    /**
     * @test
     */
    public function test_IsSecure(): void
    {
        $request = $this->frontendRequest('http://foobar.com');
        $this->assertFalse($request->isSecure());

        $request = $this->frontendRequest('https://foobar.com');
        $this->assertTrue($request->isSecure());
    }

    /**
     * @test
     * @psalm-suppress InvalidArgument
     */
    public function test_exception_if_constructed_with_invalid_type(): void
    {
        $this->expectException(InvalidArgumentException::class);
        new Request($this->psr_request, 'foo');
    }

    /**
     * @test
     */
    public function test_exception_if_decorating_a_request_with_a_different_type(): void
    {
        $request = new Request($this->psr_request, Request::TYPE_FRONTEND);

        $decorated = new Request($request, Request::TYPE_FRONTEND);
        $this->assertTrue($decorated->isToFrontend());

        $this->expectException(LogicException::class);
        $this->expectExceptionMessage('Cant change request type from [frontend] to [admin].');

        new Request($request, Request::TYPE_ADMIN_AREA);
    }

    /**
     * @test
     */
    public function test_isFrontend(): void
    {
        $request = new Request(
            $this->psr_request
        );

        $this->assertTrue($request->isToFrontend());
        $this->assertFalse($request->isToAdminArea());
        $this->assertFalse($request->isToApiEndpoint());
    }

    /**
     * @test
     */
    public function test_isAdminArea(): void
    {
        $request = new Request($this->psr_request, Request::TYPE_ADMIN_AREA);

        $this->assertFalse($request->isToFrontend());
        $this->assertFalse($request->isToApiEndpoint());
        $this->assertTrue($request->isToAdminArea());
    }

    /**
     * @test
     */
    public function test_isApiEndpoint(): void
    {
        $request = new Request($this->psr_request, Request::TYPE_API);

        $this->assertFalse($request->isToFrontend());
        $this->assertFalse($request->isToAdminArea());
        $this->assertTrue($request->isToApiEndpoint());
    }

    /**
     * @test
     */
    public function test_ip(): void
    {
        $request = new Request(
            $this->psrServerRequestFactory()
                ->createServerRequest('GET', '/foo', ['REMOTE_ADDR' => '12345567'])
        );

        $this->assertSame('12345567', $request->ip());

        $this->assertSame(null, $this->frontendRequest('/foo')->ip());
    }

    /**
     * @test
     */
    public function test_from_psr(): void
    {
        $request = Request::fromPsr(
            $this->psrServerRequestFactory()->createServerRequest('GET', '/foo')
        );

        $this->assertSame('/foo', $request->path());
        $this->assertSame('GET', $request->getMethod());
        $this->assertTrue($request->isToFrontend());

        $request = Request::fromPsr(
            $this->psrServerRequestFactory()->createServerRequest('GET', '/foo'),
            Request::TYPE_ADMIN_AREA
        );

        $this->assertTrue($request->isToAdminArea());
    }

    /**
     * @test
     */
    public function test_from_psr_does_not_change_type(): void
    {
        $request = Request::fromPsr(
            $this->psrServerRequestFactory()->createServerRequest('GET', '/foo'),
            Request::TYPE_ADMIN_AREA
        );

        $new = Request::fromPsr($request, Request::TYPE_FRONTEND);

        $this->assertTrue($new->isToAdminArea());
        $this->assertFalse($new->isToFrontend());
        $this->assertTrue($request->isToAdminArea());
    }

    /**
     * @test
     */
    public function test_type_stays_the_same_for_psr_methods(): void
    {
        $request = new Request($this->psr_request, Request::TYPE_ADMIN_AREA);

        $this->assertTrue($request->isToAdminArea());

        $request = $request->withAttribute('foo', 'bar');

        $this->assertSame('bar', $request->getAttribute('foo'));
        $this->assertTrue($request->isToAdminArea());
    }

    /**
     * @test
     */
    public function test_userAgent(): void
    {
        $this->assertNull($this->request->userAgent());

        $request = $this->request->withHeader('user-agent', '');
        $this->assertNull($request->userAgent());

        $request = $this->request->withHeader('user-agent', 'foobar');
        $this->assertSame('foobar', $request->userAgent());
    }

    /**
     * @test
     */
    public function test_getRequestTarget(): void
    {
        $request = $this->frontendRequest('https://foobar.com/baz?biz=boo#section1');

        $this->assertSame('/baz?biz=boo', $request->getRequestTarget());

        $request = $request->withRequestTarget('/baz');
        $this->assertSame('/baz', $request->getRequestTarget());
    }

    /**
     * @test
     */
    public function test_getHeader(): void
    {
        $request = $this->request->withHeader('foo', 'bar');

        $this->assertSame(['bar'], $request->getHeader('foo'));
        $this->assertSame([], $request->getHeader('bogus'));
    }

    /**
     * @test
     */
    public function test_get_protocol_version(): void
    {
        $this->assertSame('1.1', $this->request->getProtocolVersion());
        $request = $this->request->withProtocolVersion('1.0');
        $this->assertSame('1.0', $request->getProtocolVersion());
    }

    /**
     * @test
     */
    public function test_getHeaders(): void
    {
        $request = $this->request
            ->withAddedHeader('foo', 'bar1')
            ->withAddedHeader('foo', 'bar2')
            ->withAddedHeader('baz', 'biz');

        $this->assertSame([
            // default headers, header case is preserved
            'Host' => [
                '127.0.0.1'
            ],
            'foo' => [
                'bar1',
                'bar2'
            ],
            'baz' => [
                'biz'
            ]
        ], $request->getHeaders());
    }

    /**
     * @test
     */
    public function test_hasHeader(): void
    {
        $request = $this->request->withHeader('foo', 'bar');
        $this->assertTrue($request->hasHeader('foo'));
        $this->assertFalse($request->hasHeader('bogus'));
        $request = $request->withoutHeader('foo');
        $this->assertFalse($request->hasHeader('foo'));
    }

    /**
     * @test
     */
    public function test_getBody(): void
    {
        $this->assertSame('', (string)$this->request->getBody());

        $body = $this->psrStreamFactory()->createStream('foo');
        $request = $this->request->withBody($body);

        $this->assertSame('foo', (string)$request->getBody());
    }

    /**
     * @test
     */
    public function test_getUploadedFiles(): void
    {
        $this->assertSame([], $this->request->getUploadedFiles());

        $stream = $this->psrStreamFactory()->createStream('foo');
        $request = $this->request->withUploadedFiles([
            $file = $this->psrUploadedFileFactory()->createUploadedFile($stream)
        ]);

        $this->assertSame([
            $file
        ], $request->getUploadedFiles());
    }

    /**
     * @test
     */
    public function test_getAttributes(): void
    {
        $this->assertSame([], $this->request->getAttributes());
        $request = $this->request
            ->withAttribute('foo', 'bar')
            ->withAttribute('baz', 'biz');

        $this->assertSame([
            'foo' => 'bar',
            'baz' => 'biz'
        ], $request->getAttributes());

        $request = $request->withoutAttribute('foo');

        $this->assertSame([
            'baz' => 'biz'
        ], $request->getAttributes());
    }

    /**
     * @test
     */
    public function test_get_throws_exception_for_input_source_not_being_an_array(): void
    {
        $std = new stdClass();
        $std->foo = 'bar';

        $request = $this->frontendRequest('', [], 'POST')->withParsedBody($std)->withMethod('POST');

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('inputSource');

        $request->boolean('foo');
    }

    /**
     * @test
     */
    public function test_magic_set_throws_exception(): void
    {
        $this->expectException(BadMethodCallException::class);
        $this->expectExceptionMessage('Cannot set undefined property [foo]');

        $this->request->foo = 'bar';
    }

}