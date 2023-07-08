<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
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
        $validatedData = $request->validate([
            'description' => 'required|string|max:255',
            'date' => 'required|date',
            'user_id' => 'required|exists:users,id',
        ]);

        //crea la nota

        $note = Note::create([
            'description' => $validatedData['description'],
            'date' => $validatedData['date'],
            'user_id' => $request->user()->id,
        ]);

        //guarda la nota creada

        $note->save();

        //retorna nota creada, sino error

        return response()->json([
            'message' => 'Note created',
            'note' => $note
        ], 201) ?: response()->json([
            'message' => 'Note not created',
        ], 400);

    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {

        //muestra la nota con el id especificado

        $note = Note::find($id);

        //si no existe la nota, error, sino retorna la nota

        if (!$note) {
            return response()->json([
                'message' => 'Note not found',
            ], 404);
        } else {
            return response()->json([
                'message' => 'Note found',
                'note' => $note
            ], 200);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

            //busca la nota con el id especificado

            $note = Note::find($id);

            //si no existe la nota, error, sino la actualiza

            if (!$note) {
                return response()->json([
                    'message' => 'Note not found',
                ], 404);
            } else {

                $validatedData = $request->validate([
                    'description' => 'required|string|max:255',
                    'date' => 'required|date',
                ]);

                $note->description = $validatedData['description'];
                $note->date = $validatedData['date'];

                $note->save();

                return response()->json([
                    'message' => 'Note updated',
                    'note' => $note
                ], 200);
            }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {

        //busca la nota con el id especificado

        $note = Note::find($id);

        //si no existe la nota, error, sino la elimina

        if (!$note) {
            return response()->json([
                'message' => 'Note not found',
            ], 404);
        } else {
            $note->delete();
            return response()->json([
                'message' => 'Note deleted',
            ], 200);
        }
    }

}
