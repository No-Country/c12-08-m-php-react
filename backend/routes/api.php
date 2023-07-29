<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [AuthController::class, 'register']);
Route::post('login', 'App\Http\Controllers\AuthController@login');

Route::group(['middleware' => 'api'], function ($router) {

        //Rutas de autenticación y usuario

        Route::post('logout', 'App\Http\Controllers\AuthController@logout');
        Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
        Route::get('me', 'App\Http\Controllers\AuthController@me');
        Route::get('verifyToken', 'App\Http\Controllers\AuthController@verifyToken');
        Route::post('update', 'App\Http\Controllers\AuthController@update');
        Route::post('delete', 'App\Http\Controllers\AuthController@delete');

        //Rutas de notas
        Route::post('/notes/create', 'App\Http\Controllers\NoteController@store');
        Route::get('/notes', 'App\Http\Controllers\NoteController@show');
        Route::get('/notes/{id}', 'App\Http\Controllers\NoteController@showById');
        Route::put('/notes/update/{id}', 'App\Http\Controllers\NoteController@update');
        Route::delete('/notes/delete/{id}', 'App\Http\Controllers\NoteController@destroy');

        //Ruta de items
        Route::post('/items/create', 'App\Http\Controllers\ItemController@store');
        Route::get('/items', 'App\Http\Controllers\ItemController@show');
        Route::put('/items/update/{id}', 'App\Http\Controllers\ItemController@update');
        Route::delete('/items/delete/{id}', 'App\Http\Controllers\ItemController@destroy');

});

