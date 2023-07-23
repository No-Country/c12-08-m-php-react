<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'indications',
        'quantity',
        'is_single_dose',
        'init_date',
        'due_date',
        'time',
        'frequency',
        'category_id',
        'user_id',
        
    ];
}
