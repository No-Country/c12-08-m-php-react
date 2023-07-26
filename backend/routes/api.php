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

Route::group(['middleware' => 'api'], function ($router) {

        //Rutas de autenticación
        Route::post('login', 'App\Http\Controllers\AuthController@login');
        Route::post('logout', 'App\Http\Controllers\AuthController@logout');
        Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
        Route::post('me', 'App\Http\Controllers\AuthController@me');

        //Rutas de notas
        Route::post('/notes/create', 'App\Http\Controllers\NoteController@store');
        Route::get('/notes', 'App\Http\Controllers\NoteController@show');
        Route::put('/notes/update/{id}', 'App\Http\Controllers\NoteController@update');
        Route::delete('/notes/delete/{id}', 'App\Http\Controllers\NoteController@destroy');

        //Ruta de items
        Route::post('/items/create', 'App\Http\Controllers\ItemController@store');
        Route::get('/items', 'App\Http\Controllers\ItemController@show');
        Route::put('/items/update/{id}', 'App\Http\Controllers\ItemController@update');
        Route::delete('/items/delete/{id}', 'App\Http\Controllers\ItemController@destroy');

});

Route::post('/mail',' App\Http\Mail\NotificacionItem@build');
