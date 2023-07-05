<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treatment_plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'state',
        'init_date',
        'due_date',
        'lifetime',
    ];
}
