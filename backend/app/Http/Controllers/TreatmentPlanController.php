<?php

namespace App\Http\Controllers;

use App\Models\Treatment_plan;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TreatmentPlanController extends Controller
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
        //

        try {
            //valida los datos del request
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'state' => 'required|string|max:255',
                'init_date' => 'required|date',
                'due_date' => 'required|date',
                'lifetime' => 'required|boolean',
                'due_date' => 'after:init_date',

            ]);

            //crea el plan de tratamiento
            $plan = Treatment_plan::create([
                'name' => $validatedData['name'],
                'state' => $validatedData['state'],
                'init_date' => $validatedData['init_date'],
                'due_date' => $validatedData['due_date'],
                'lifetime' => $validatedData['lifetime'],
            ]);

            return response()->json([
                'plan' => $plan
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalid data',
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        $plan = Treatment_plan::find($id);
        if ($plan) {
            return response()->json([
                'plan' => $plan
            ], 200);
        } else {
            return response()->json([
                'error' => 'Plan not found'
            ], 404);
        }
    }

    public function showall(Request $request)
    {
        $plans = Treatment_plan::all();
        if ($plans) {
            return response()->json([
                'plans' => $plans
            ], 200);
        } else {
            return response()->json([
                'error' => 'Plans not found'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $plan = Treatment_plan::find($id);

        if ($plan) {
            try {
                //valida los datos del request
                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'state' => 'required|string|max:255',
                    'init_date' => 'required|date',
                    'due_date' => 'required|date',
                    'lifetime' => 'required|boolean',
                    'due_date' => 'after:init_date',

                ]);

                //actualiza el plan de tratamiento
                $plan->name = $validatedData['name'];
                $plan->state = $validatedData['state'];
                $plan->init_date = $validatedData['init_date'];
                $plan->due_date = $validatedData['due_date'];
                $plan->lifetime = $validatedData['lifetime'];

                $plan->save();

                return response()->json([
                    'updated plan' => $plan
                ], 200);

            } catch (ValidationException $e) {
                return response()->json([
                    'error' => 'Invalid data',
                    'message' => $e->getMessage(),
                    'errors' => $e->errors()
                ], 400);
            }
        } else {
            return response()->json([
                'error' => 'Plan not found'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $plan = Treatment_plan::find($id);
        if ($plan) {
            $plan->delete();
            return response()->json([
                'message' => 'Plan deleted'
            ], 200);
        } else {
            return response()->json([
                'error' => 'Plan not found'
            ], 404);
        }
    }

    public function showItems($id)
    {
        $items = Item::where('treatment_id', $id)->get();
        if ($items) {
            return response()->json([
                'Plan items' => $items
            ], 200);
        } else {
            return response()->json([
                'error' => 'The plan has no items'
            ], 404);
        }
    }

    public function editTime($id)
    {
        $plan = Plan::find($id);
        $plan->
    }
}
