<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
            'name' => 'Administrador',
            'surname' => 'PillCare',
            'birth' => '1999-06-24',
            'phone' => '300-215-8524',
            'username' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('12345678'),
         ]);
    }
}
