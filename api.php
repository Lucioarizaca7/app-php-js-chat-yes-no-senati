<?php

header("Acces-Control-Allow: *");
$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = [
            'mensaje'=> 'Metodo Get Correcto',
            'data' => $_GET
        ];
        break;
    
    default:
        # code...
        break;
}
echo json_encode($respuesta);