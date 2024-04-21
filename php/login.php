<?php
header('Access-Control-Allow-Origin: http://localhost:3003');

include 'db.php';


$username = $_POST['username'];
$password = $_POST['password'];

// Prepare SQL to prevent SQL injection
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    // Verify password (assuming you are using hashed passwords)
    if (password_verify($password, $row['password'])) {
        echo json_encode(['success' => true, 'message' => 'Login Successful']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid Credentials']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'User not found']);
}

$stmt->close();
$conn->close();
?>
