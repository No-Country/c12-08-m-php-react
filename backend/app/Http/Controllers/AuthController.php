<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function register(Request $request)
    {
        try{
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'surname' => 'required|string|max:255',
                'birth' => 'required|date',
                'phone' => 'required|numeric|min:10',
                'username' => 'required|string|max:255|unique:users',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);

            $user = User::create([
                'name' => $validatedData['name'],
                'surname' => $validatedData['surname'],
                'birth' => $validatedData['birth'],
                'phone' => $validatedData['phone'],
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);
        }
        catch(ValidationException $e){
            return response()->json([
                'error' => 'Invalid data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
        ]);
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function login(Request $request)
    {
        //valida los datos del request
        try{
            $validatedData = $request->validate([
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:6',
            ]);

                    //si el correo no tiene un formato valido
                    if (!filter_var($validatedData['email'], FILTER_VALIDATE_EMAIL)) {
                        return response()->json([
                        'error' => 'The email is not valid'
                        ], 400);
                    }

            //busca el usuario
            $user = User::where('email', $validatedData['email'])->first();

            //si no existe el usuario
            if (!$user || !Hash::check($validatedData['password'], $user->password)) {
                return response()->json([
                    'error' => 'The email or password are incorrect'
                ], 400);
            }

            //si existe el usuario
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        }
        catch(ValidationException $e){
            return response()->json([
                'error' => 'Invalid data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    public function me(Request $request)
    {
        return $request->user();
    }

    public function logout()
    {
        auth()->logout();
        request()->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
