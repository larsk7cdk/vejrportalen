<?php
include_once 'api_constants.php';

class Database
{
    public function getConnection()
    {
        $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);

        if (!$connection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        return $connection;
    }
}
