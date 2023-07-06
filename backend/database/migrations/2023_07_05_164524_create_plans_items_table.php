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
        Schema::create('plans_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedSmallInteger('plan_id');
            $table->unsignedSmallInteger('item_id');
            $table->timestamps();

            $table->foreign('plan_id')->references('id')->on('treatment_plans');
            $table->foreign('item_id')->references('id')->on('items');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans_items');
    }
};
