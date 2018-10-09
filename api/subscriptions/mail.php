<?php
include_once '../shared/api_constants.php';
error_reporting(ERROR_LEVEL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'subscription_shared.php';
include_once '../models/subscription.php';

if (strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0) {
    throw new Exception('Request method must be POST!');
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if (strcasecmp($contentType, 'application/json') != 0) {
    throw new Exception('Content type must be: application/json');
}

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content);

// echo $_POST["email"];
// echo $_POST["firstname"];

// echo $decoded->email;
// echo $decoded->firstname;

echo json_encode($decoded);
