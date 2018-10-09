<?php
include_once '../shared/api_constants.php';
error_reporting(ERROR_LEVEL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'subscription_shared.php';
include_once '../models/subscription.php';

if (strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT') != 0) {
    throw new Exception('Request method must be PUT!');
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if (strcasecmp($contentType, 'application/json') != 0) {
    throw new Exception('Content type must be: application/json');
}

$subscription_shared = new Subscription_shared();

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, false);

$subscriptions_item = new Subscription($decoded);

$result = $subscription_shared->update($subscriptions_item);

echo json_encode($result);
