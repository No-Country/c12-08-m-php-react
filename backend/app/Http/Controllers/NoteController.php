<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class NoteController extends Controller
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

        try{
            //valida los datos del request
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string|max:255',
            ]);

            //crea la nota
            $note = Note::create([
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'user_id' => auth()->user()->id
            ]);


        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalid data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }

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
    public function show(Request $request)
    {

        $user_id = auth()->user()->id;

        $notes = Note::where('user_id', $user_id)->get();

        if (!$notes) {
            return response()->json([
                'message' => 'Notes not found',
            ], 404);
        } else {
            return response()->json([
                'message' => 'Notes found',
                'notes' => $notes
            ], 200);
        }

    }

    public function showById(Request $request, $id)
    {

        $user_id = auth()->user()->id;

        $note = Note::find($id)->where('user_id', $user_id)->get();

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

                try {
                    //valida los datos del request
                    $validatedData = $request->validate([
                        'title' => 'required|string|max:255',
                        'description' => 'required|string|max:255',
                    ]);

                    //actualiza la nota
                    $note->title = $validatedData['title'];
                    $note->description = $validatedData['description'];
                    $note->user_id = auth()->user()->id;

                    //guarda la nota actualizada
                    $note->save();

                } catch (ValidationException $e) {
                    return response()->json([
                        'error' => 'Invalid data',
                        'message' => $e->getMessage(),
                        'errors' => $e->errors()
                    ], 400);
                }

                //retorna la nota actualizada, sino error

                return response()->json([
                    'message' => 'Note updated',
                    'note' => $note
                ], 201) ?: response()->json([
                    'message' => 'Note not updated',
                ], 400);
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
