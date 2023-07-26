<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ItemController extends Controller
{

    public function __construct()
     {
         $this->middleware('auth:api');
     }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

            //valida los datos del request

            try {
                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'indications' => 'required|string|max:255',
                    'quantity' => 'required|integer|min:1|max:1000',
                    'is_single_dose' => 'required|boolean',
                    'init_date' => 'required|date',
                    'due_date' => 'required_if:is_single_dose,true|date',
                    'time' => 'required|date_format:H:i:s',
                    'frequency' => 'required_if:is_single_dose,false|integer|min:1|max:168',
                    'category_id' => 'required|exists:categories,id|integer',
                ]);


                //crea el item
                $item = Item::create([
                    'name' => $validatedData['name'],
                    'indications' => $validatedData['indications'],
                    'quantity' => $validatedData['quantity'],
                    'is_single_dose' => $validatedData['is_single_dose'],
                    'init_date' => $validatedData['init_date'],
                    'due_date' => $validatedData['due_date'],
                    'time' => $validatedData['time'],
                    'frequency' => $validatedData['frequency'],
                    'category_id' => $validatedData['category_id'],
                    'user_id' => auth()->user()->id
                ]);

            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalid data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }


            //retorna el item creado, sino error
            if ($item) {
                return response()->json([
                    'message' => 'Item created',
                    'item' => $item
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Item not created',
                ], 400);
            }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $user_id = auth()->user()->id;

        $items = Item::where('user_id', $user_id)->get();

        if ($items) {
            return response()->json([
                        'items' => $items,
            ]);
        } else {
            return response()->json([
                        'message' => 'The user has no items registered',
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        //busca el item segun el id
        $item = Item::find($id);

        if(!$item){
            return response()->json([
                        'message' => 'Item not found',
            ]);
        } else {
            try {
                //valida los datos del request
                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'indications' => 'required|string|max:255',
                    'quantity' => 'required|integer|min:1|max:1000',
                    'is_single_dose' => 'required|boolean',
                    'init_date' => 'required|date',
                    'due_date' => 'required_if:is_single_dose,true|date',
                    'time' => 'required|date_format:H:i:s',
                    'frequency' => 'required_if:is_single_dose,false|integer|min:1|max:168',
                    'category_id' => 'required|exists:categories,id|integer',
                ]);

                //actualiza el item
                $item->update([
                    'name' => $validatedData['name'],
                    'indications' => $validatedData['indications'],
                    'quantity' => $validatedData['quantity'],
                    'is_single_dose' => $validatedData['is_single_dose'],
                    'init_date' => $validatedData['init_date'],
                    'due_date' => $validatedData['due_date'],
                    'time' => $validatedData['time'],
                    'frequency' => $validatedData['frequency'],
                    'category_id' => $validatedData['category_id'],
                ]);
            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalid data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }

            //retorna el item actualizado, sino error
            if ($item) {
                return response()->json([
                    'message' => 'Item updated',
                    'item' => $item
                ], 201) ?? response()->json([
                    'message' => 'Item not updated',
                ], 400);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {

        //busca el item segun el id
        $item = Item::find($id);

        //si consigue el item lo borra, sino muestra un error
        if ($item) {
            $item->delete();
            return response()->json([
                        'message' => 'Item deleted successfully',
            ]);
        } else {
            return response()->json([
                        'message' => 'Item not found',
            ]);
        }
    }
}
