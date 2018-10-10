<?php

class Subscription
{
    public $subscription_id;
    public $email;
    public $firstname;
    public $lastname;
    public $adress;
    public $postal_code;
    public $city;
    public $phone;
    public $titel;

    public function __construct($subscription)
    {
        $this->subscription_id = $subscription->subscription_id;
        $this->email           = $subscription->email;
        $this->firstname       = $subscription->firstname;
        $this->lastname        = $subscription->lastname;
        $this->adress          = $subscription->adress;
        $this->postal_code     = $subscription->postal_code;
        $this->city            = $subscription->city;
        $this->phone           = $subscription->phone;
        $this->titel           = $subscription->titel;
    }
}
