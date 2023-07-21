<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'id' => 1,
            'name' => 'Pastila',
        ]);

        Category::create([
            'id' => 2,
            'name' => 'Inyectable',
        ]);

        Category::create([
            'id' => 3,
            'name' => 'Gotas',
        ]);

        Category::create([
            'id' => 4,
            'name' => 'Supositorios',
        ]);

        Category::create([
            'id' => 5,
            'name' => 'Inhalador',
        ]);

        Category::create([
            'id' => 6,
            'name' => 'Efervescente',
        ]);

        Category::create([
            'id' => 7,
            'name' => 'Otro',
        ]);
    }
}
