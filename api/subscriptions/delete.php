<?php
include_once '../shared/api_constants.php';
error_reporting(ERROR_LEVEL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'subscription_shared.php';
include_once '../models/subscription.php';

if (strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE') != 0) {
    throw new Exception('Request method must be DELETE!');
}

if (!isset($_GET['id'])) {
    throw new Exception('ID skal være udfyldt!');
}

$subscription_shared = new Subscription_shared();

$result = $subscription_shared->delete($_GET['id']);

echo json_encode($result);
