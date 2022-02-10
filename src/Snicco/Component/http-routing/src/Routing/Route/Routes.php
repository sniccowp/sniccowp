<?php

declare(strict_types=1);

namespace Snicco\Component\HttpRouting\Routing\Route;

use Countable;
use IteratorAggregate;
use Snicco\Component\HttpRouting\Routing\Exception\RouteNotFound;
use Traversable;

interface Routes extends Countable, IteratorAggregate
{

    /**
     * @throws RouteNotFound
     */
    public function getByName(string $name): Route;

    /**
     * @return array<string,Route>
     */
    public function toArray(): array;

    /**
     * @return Traversable|array<string,Route>
     * @psalm-return  Traversable<string,Route>
     */
    public function getIterator(): Traversable;

}