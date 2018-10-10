<?php
include_once '../shared/database.php';

define("READ_SUCCESS", "");
define("READ_NO_ROWS", "Ingen abonnementer fundet");

define("CREATE_EMAIL_EXISTS", "Email eksisterer allerede");
define("CREATE_SUCCESS", "Nyt abonnement er oprettet");
define("CREATE_ERROR", "Fejl under oprettelse af abonnement");

define("UPDATE_SUCCESS", "Abonnement er opdateret");
define("UPDATE_ERROR", "Fejl under opdatering af abonnement");

define("DELETE_SUCCESS", "Abonnement er slettet");
define("DELETE_ERROR", "Fejl under sletning af abonnement");

class subscription_shared
{
    private $table_name = "subscriptions";

    public function __construct()
    {
        $this->database = new Database;
    }

    public function read($id)
    {
        $conn = $this->database->getConnection();

        $sql = "SELECT * FROM {$this->table_name}";

        if (!empty($id)) {
            $sql .= " WHERE subscription_id = {$id}";
        }

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            $subscriptions_array = array();

            while ($row = $result->fetch_object()) {
                $subscriptions_item = new Subscription($row);
                array_push($subscriptions_array, $subscriptions_item);
            }

            $result = $subscriptions_array;
        } else {
            $result = READ_NO_ROWS;
        }

        mysqli_close($conn);
        return $result;
    }

    public function create($subscription)
    {
        $conn = $this->database->getConnection();

        $sql    = "SELECT * FROM {$this->table_name} WHERE email = '{$subscription->email}'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            mysqli_close($conn);
            return CREATE_EMAIL_EXISTS;
        }
        
        $sql = "INSERT INTO {$this->table_name} (email, firstname, lastname, adress, postal_code, city, phone, titel)
                VALUES ('{$subscription->email}', '{$subscription->firstname}', '{$subscription->lastname}',
                        '{$subscription->adress}', '{$subscription->postal_code}', '{$subscription->city}',
                        '{$subscription->phone}', '{$subscription->titel}')";

        if (mysqli_query($conn, $sql)) {
            $result = CREATE_SUCCESS;
        } else {

            $result = CREATE_ERROR;
        }

        mysqli_close($conn);
        return $result;
    }

    public function update($subscription)
    {
        $conn = $this->database->getConnection();

        $sql = "UPDATE {$this->table_name} SET
                    email       = '{$subscription->email}',
                    firstname   = '{$subscription->firstname}',
                    lastname    = '{$subscription->lastname}',
                    adress      = '{$subscription->adress}',
                    postal_code =  {$subscription->postal_code},
                    city        = '{$subscription->city}',
                    phone       = '{$subscription->phone}',
                    titel       = '{$subscription->titel}'
                WHERE subscription_id = {$subscription->subscription_id}";

        if (mysqli_query($conn, $sql)) {
            $result = UPDATE_SUCCESS;
        } else {
            $result = UPDATE_ERROR;
        }

        mysqli_close($conn);
        return $result;
    }

    public function delete($id)
    {
        $conn = $this->database->getConnection();

        $sql = "DELETE FROM {$this->table_name} WHERE subscription_id = {$id}";

        if (mysqli_query($conn, $sql)) {
            $result = DELETE_SUCCESS;
        } else {
            $result = DELETE_ERROR;
        }

        mysqli_close($conn);
        return $result;
    }
}
