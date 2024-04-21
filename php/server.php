<?php
    header('Access-Control-Allow-Origin: http://localhost:3003');
   // Check if username is set
   if (isset($_POST['username'])) {
        $user = $_POST['username'];
        echo "Hello from server: $user";
    } else {
        echo "Username not received";
    }
?>
