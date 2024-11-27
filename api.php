<?php

header("Acces-Control-Allow-Origin: *");
$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = [
            'mensaje'=> 'Metodo Get Correcto',
            'data' => $_GET
        ];
        break;
    case 'POST':
        $data_entrante = json_decode(file_get_contents("php://input"),true);
        
        $respuesta = [
            'mensaje'=> 'Metodo Post Correcto',
            'data' => $data_entrante
        ];
    
    default:
        # code...
        break;
}
echo json_encode($respuesta);

//caso post------------------------------

