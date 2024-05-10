<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/

Route::resource('users', UserController::class)->only([
    'index', 'store', 'update' 
]);

Route::resource('addresses', AddressController::class)->only([
    'index'
]);