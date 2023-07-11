<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
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
            $validatedData = $request->validate([
                'description' => 'required|string|max:255',
                'day' => 'required|date',
                'time' => 'required|date_format:H:i:s',
                'category' => 'required|string|max:255',
                'frequency' => 'required|string|max:255',
            ]);

            //crea el item
            $item = Item::create([
                'description' => $validatedData['description'],
                'day' => $validatedData['day'],
                'time' => $validatedData['time'],
                'category' => $validatedData['category'],
                'frequency' => $validatedData['frequency'],
            ]);

            //guarda el item creado
            $item->save();

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

        //actualiza el item con los datos del request
        $item->description = $request->description;
        $item->day = $request->day;
        $item->time = $request->time;
        $item->category = $request->category;
        $item->frequency = $request->frequency;

        //guarda el item
        $item->save();

        //retorna el item actualizado, sino error
        if ($item) {
            return response()->json([
                        'message' => 'Item updated',
                        'item' => $item
            ]);
        } else {
            return response()->json([
                        'message' => 'Item not found',
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
