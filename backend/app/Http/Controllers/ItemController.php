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

    public function verificar(Request $request){
        //Verifica que el usuario este logeado
        if (!$request->user()) {
            return response()->json([
                        'message' => 'You are not logged in',
            ], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $this->verificar($request);

        //valida los datos del request
        $validatedData = $request->validate([
                        'description' => 'required|string|max:255',
                        'day' => 'required|date',
                        'time' => 'required|time',
                        'category' => 'required|string|max:255',
                        'frequency' => 'required|integer',
        ]);

        //crea el item con los datos del request
        $item = Item::create([
                    'description' => $validatedData['description'],
                    'day' => $validatedData['day'],
                    'time' => $validatedData['time'],
                    'category' => $validatedData['category'],
                    'frequency' => $validatedData['frequency'],
        ]);

        $item->save();

        return response()->json([
                    'message' => 'Item created successfully',
        ]);


}

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {

        $this->verificar($request);

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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {

        $this->verificar($request);

        //actualiza el item con los datos del request
        $item->description = $request->description;
        $item->day = $request->day;
        $item->time = $request->time;
        $item->category = $request->category;
        $item->frequency = $request->frequency;

        //guarda el item
        $item->save();

        return response()->json([
                    'message' => 'Item updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $this->verificar($request);

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
