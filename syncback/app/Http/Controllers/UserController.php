<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function __construct(protected User $user) {
    }
    public function index()
    {
        
        return new UserResource($this->user::all()->first());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $user = $this->user::find($id);
        $user->name = $data['name'];
        $user->age = $data['age'];
        $user->biography = $data['biography'];
        $address = $user->address;
        $address->street = $data['street'];
        $address->neighborhood = $data['neighborhood'];
        $address->state = $data['state'];
        $address->save();
        $user->save();
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

  
}
