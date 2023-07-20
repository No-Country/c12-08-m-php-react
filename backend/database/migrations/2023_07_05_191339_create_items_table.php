<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->date('day');
            $table->time('time');
            $table->string('category');
            $table->integer('dose');
            $table->integer('frequency');
            $table->unsignedBigInteger('treatment_id');
            $table->timestamps();

            $table->foreign('treatment_id')->references('id')->on('treatment_plans');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
