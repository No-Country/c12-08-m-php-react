<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;


use Illuminate\Support\Facades\DB;


class AuthController extends Controller
{
        /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        try{
            $validateData = $request->validate([
                'name' => 'required|string|max:255',
                'surname' => 'required|string|max:255',
                'gender' => 'required|string|max:255',
                'birth' => 'required|date',
                'phone' => 'required|numeric|min:10',
                'username' => 'required|string|max:255|unique:users',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);

            $user = User::create([
                'name' => $validateData['name'],
                'surname' => $validateData['surname'],
                'gender' => $validateData['gender'],
                'birth' => $validateData['birth'],
                'phone' => $validateData['phone'],
                'username' => $validateData['username'],
                'email' => $validateData['email'],
                'password' => bcrypt($validateData['password']),
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalid data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }

        if ($user) {
            return response()->json([
                'message' => 'User created',
                'item' => $user
            ], 201);
        } else {
            return response()->json([
                'message' => 'User not created',
            ], 400);
        }

    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Invalid data'], 400);
        }

        $cookie = cookie('jwt_token', $token, 60, null, null, true, true);


        return $this->respondWithToken($token)->withCookie($cookie);
    }

    public function me()
    {
        $user = auth()->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        return response()->json([
            'message' => 'User found',
            'user' => $user
        ], 200);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        // Invalidar la cookie
        $cookie = Cookie::forget('jwt_token');

        return response()->json(['message' => 'Successfully logged out'])->withCookie($cookie);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    //Funcion para verificar si el token del usuario es valido
    public function verifyToken(Request $request)
    {
        $token = $request->cookie('jwt_token');

        if ($token) {
            return response()->json([
                'message' => 'Token is valid'
            ], 200);
        } else {
            return response()->json([
                'message' => 'Token is invalid'
            ], 400);
        }
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    protected function update()
    {
        $user = auth()->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $rules = [
            'name' => 'string|max:255',
            'surname' => 'string|max:255',
            'gender' => 'string|max:255',
            'birth' => 'date',
            'phone' => 'numeric|min:10',
            'username' => 'string|max:255|unique:users,username,' . $user->id,
            'email' => 'string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'string|min:8',
        ];

        $validator = Validator::make(request()->only(array_keys($rules)), $rules);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 400);
        }

        $data = $validator->validated();

        if (isset($data['username']) && $data['username'] !== $user->username) {
            $existingUsername = DB::table('users')->where('username', $data['username'])->first();
            if ($existingUsername) {
                return response()->json([
                    'message' => 'The username already exists'
                ], 401);
            }
        }

        if (isset($data['password']) && $data['password'] !== $user->password) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        $user->update($data);

        return response()->json([
            'message' => 'User updated',
            'user' => $user
        ], 200);
}

    protected function delete()
    {
        $user = auth()->user()->id;

        if (!$user) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        DB::table('users')->where('id', $user)->delete();
        $cookie = Cookie::forget('jwt_token');

        return response()->json([
            'message' => 'User deleted'
        ])->withCookie($cookie);

    }
}
