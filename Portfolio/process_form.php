<?php
$fname = $_POST["fname"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

echo 'The data recieved is ' . ' ' . 'Name: ' . $fname . ', ' . 'Email: ' . ' ' . $email . ', ' .  'Subject: ' . ' ' . $subject . ', ' . 'Message: ' . $message;