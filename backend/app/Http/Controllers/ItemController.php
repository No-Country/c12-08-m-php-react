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
                    'description' => 'required|string|max:255',
                    'day' => 'required|date',
                    'time' => 'required|date_format:H:i:s',
                    'category' => 'required|string|max:255',
                    'dose' => 'required|integer|min:1|max:1000',
                    'frequency' => 'required|integer|min:1|max:168',
                    'treatment_id' => 'required|exists:treatment_plans,id|integer'
                ]);


                //crea el item
                $item = Item::create([
                    'name' => $validatedData['name'],
                    'description' => $validatedData['description'],
                    'day' => $validatedData['day'],
                    'time' => $validatedData['time'],
                    'category' => $validatedData['category'],
                    'dose' => $validatedData['dose'],
                    'frequency' => $validatedData['frequency'],
                    'treatment_id' => $validatedData['treatment_id']
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
    public function show(Request $request, $id)
    {

        //Segun el id, se busca el item
        $item = Item::find($id);

        //si consigue el item lo muestra, sino muestra un error
        if ($item) {
            return response()->json([
                        'item' => $item,
            ]);
        } else {
            return response()->json([
                        'message' => 'Item not found',
            ]);
        }
    }

    //function showall
    public function showall(Request $request)
    {

        //busca todos los items
        $items = Item::all();

        //si consigue los items los muestra, sino muestra un error
        if ($items) {
            return response()->json([
                        'items' => $items,
            ]);
        } else {
            return response()->json([
                        'message' => 'Items not found',
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {

        //valida los datos del request
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'day' => 'required|date',
                'time' => 'required|date_format:H:i:s',
                'category' => 'required|string|max:255',
                'dose' => 'required|integer|min:1|max:1000',
                'frequency' => 'required|integer|min:1|max:168',
                'treatment_id' => 'required|exists:treatment_plans,id|integer'
            ]);

            //actualiza el item
            $item->name = $validatedData['name'];
            $item->description = $validatedData['description'];
            $item->day = $validatedData['day'];
            $item->time = $validatedData['time'];
            $item->category = $validatedData['category'];
            $item->dose = $validatedData['dose'];
            $item->frequency = $validatedData['frequency'];
            $item->treatment_id = $validatedData['treatment_id'];

            //guarda el item actualizado
            $item->save();

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
            ]);
        } else {
            return response()->json([
                        'message' => 'Item not updated',
            ]);
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
