<?php

declare(strict_types=1);

namespace Snicco\Component\Eloquent\Tests\fixtures\Factory;

use Snicco\Component\StrArr\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

class ActivityFactory extends Factory
{
    
    public function definition()
    {
        return [
            'name' => $this->activity(),
        ];
    }
    
    private function activity()
    {
        $activities = [
            'football',
            'tenis',
            'basketball',
            'swimming',
            'sightseeing',
            'hockey',
        ];
        
        return Arr::random($activities);
    }
    
}