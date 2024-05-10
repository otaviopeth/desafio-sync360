<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
    
            'name' => $this->name,
            'age' => $this->age,
            'biography' => $this->biography,
            'street' => $this->address->street,
            'neighborhood' => $this->address->neighborhood,
            'state' => $this->address->state,
        ];
    }
}
