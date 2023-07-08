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

//Ruta de items (POR ARREGLAR)
Route::apiResource('items', 'App\Http\Controllers\ItemController')->middleware('auth:sanctum');

//Ruta de notas
Route::apiResource('notes', 'App\Http\Controllers\NoteController')->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {

        //Rutas de notas
        Route::post('/notes', 'App\Http\Controllers\NoteController@store');
        Route::get('/notes/{id}', 'App\Http\Controllers\NoteController@show');
        Route::put('/notes/{id}', 'App\Http\Controllers\NoteController@update');
        Route::delete('/notes/{id}', 'App\Http\Controllers\NoteController@destroy');

    });




