<?php

class ResponseResult
{
    public $status;
    public $message;
    public $error;

    public function __construct($status, $message, $error = "")
    {
        $this->status  = $status;
        $this->message = $message;
        $this->error   = $error;
    }
}
