<?php

header("Acces-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
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
        break;
    case 'PUT':
        $data_entrante = json_decode(file_get_contents("php://input"),true);
        $respuesta = [
            'mensaje'=> 'Metodo Put Correcto',
            'data' => $data_entrante
            ];
            break;
    case 'DELETE':
        $dataEntrante = json_decode(file_get_contents("php://input"), true);
        $respuesta = [
            'mensaje' => 'Método DELETE correcto',
            'data' => $dataEntrante
            ];
            break;
       
    default:
        # code...
        break;
}
echo json_encode($respuesta);

//caso post------------------------------

