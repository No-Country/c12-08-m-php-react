<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Item;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class RecordatorioPillCare extends Mailable
{
    use Queueable, SerializesModels;

    public $name;

    public function __construct()
    {

    }

    public function build()
    {
        return $this->view('notification');
    }

    public function enviar($id)
    {
        $user = User::find($id);
        $name = $user->name;
        $correo = new RecordatorioPillCare($name);
        Mail::to($user->email)->send($correo);
        return 'MENSAJE ENVIADO';
    }
}
