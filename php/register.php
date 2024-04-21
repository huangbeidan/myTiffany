<?php
header('Access-Control-Allow-Origin: http://localhost:3003');

// Database configuration
include 'db.php';

// Read POST data
$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encrypt password

// Insert into database
$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $password);

if ($stmt->execute()) {
    echo json_encode(['success' => '1']);
} else {
    echo json_encode(['success' => '0', 'error' => $conn->error]);
}

$stmt->close();
$conn->close();
?>
