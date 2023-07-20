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

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');

});

Route::middleware('api')->group(function () {

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

        //Ruta de planes de tratamiento
        Route::post('/plans/create', 'App\Http\Controllers\TreatmentPlanController@store');
        Route::get('/plans/show/{id}', 'App\Http\Controllers\TreatmentPlanController@show');
        Route::get('/plans/showall', 'App\Http\Controllers\TreatmentPlanController@showall');
        Route::put('/plans/update/{id}', 'App\Http\Controllers\TreatmentPlanController@update');
        Route::delete('/plans/delete/{id}', 'App\Http\Controllers\TreatmentPlanController@destroy');

    });




