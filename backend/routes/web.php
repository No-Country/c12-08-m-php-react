<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Mail\RecordatorioPillCare;
use Firebase\JWT\JWT;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/google-auth/redirect', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('/google-auth/callback', function () {
    $google_user = Socialite::driver('google')->user();

    $user = User::updateOrCreate([
        'google_id' => $google_user->google_id,
    ], [
        'name' => $google_user->name,
        'email' => $google_user->email,
        'gender' => $google_user->gender,
        'birth' => $google_user->birthday,
        'phone' => $google_user->phone,
        'photo_url' => $google_user->avatar
    ]);

    Auth::login($user);

    // Crear el token JWT
    $tokenData = [
        'google_id' => $google_user->google_id,
        'name' => $google_user->name,
        'email' => $google_user->email,
    ];

    $token = JWT::encode($tokenData, 'mi_clave_secreta', 'HS256');

    // Adjuntar el token como cookie en la respuesta
    $cookie = cookie('jwt_token', $token, 60, null, null, true, true);
    $response = response('Cookie de JWT');
    $response->withCookie($cookie);

    return redirect('https://c12-08-m-php-react-eta.vercel.app/home');
});

Route::get('/mail/{id}', [RecordatorioPillCare::class, 'enviar']);

Route::get('mailview', function (){
    $user = User::find(3);
    return view('notification', compact('user'));
});
