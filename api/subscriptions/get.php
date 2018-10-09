<?php
include_once '../shared/api_constants.php';
error_reporting(ERROR_LEVEL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'subscription_shared.php';
include_once '../models/subscription.php';

if (strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') != 0) {
    throw new Exception('Request method must be GET!');
}

$subscription_shared = new Subscription_shared();
$result              = null;
$subscription_id     = null;

if (isset($_GET['id'])) {
    $subscription_id = $_GET['id'];
}

$result = $subscription_shared->read($subscription_id);

echo json_encode($result);
