<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
        if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json([
        'message' => 'Invalid login details'
                ], 401);
            }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
        ]);
    }

    public function me(Request $request)
    {
        return $request->user();
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
