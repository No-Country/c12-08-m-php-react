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


//Ruta de logeo
Route::post('/login', [AuthController::class, 'login']);
//Ruta de registro
Route::post('/register', [AuthController::class, 'register']);
//Ruta de deslogeo
Route::post('/logout', [AuthController::class, 'logout']);
//Ruta de verificacion de datos de usuario logeado
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {

        //Rutas de notas
        Route::post('/notes/create', 'App\Http\Controllers\NoteController@store');
        Route::get('/notes/show/{id}', 'App\Http\Controllers\NoteController@show');
        Route::get('/notes/showall', 'App\Http\Controllers\NoteController@showall');
        Route::put('/notes/update/{id}', 'App\Http\Controllers\NoteController@update');
        Route::delete('/notes/delete/{id}', 'App\Http\Controllers\NoteController@destroy');

        //Ruta de items
        Route::post('/items/create', 'App\Http\Controllers\ItemController@store');
        Route::get('/items//show/{id}', 'App\Http\Controllers\ItemController@show');
        Route::get('/items/showall', 'App\Http\Controllers\ItemController@showall');
        Route::put('/items/update/{id}', 'App\Http\Controllers\ItemController@update');
        Route::delete('/items/delete/{id}', 'App\Http\Controllers\ItemController@destroy');

    });




