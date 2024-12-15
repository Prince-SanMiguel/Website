<?php 
session_start(); 
 
if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
    $email = $_POST['Email']; 
    $password = $_POST['Password']; 
 
    // Hardcoded credentials for testing 
    $validEmail = "test@example.com"; 
    $validPassword = "password123"; 
 
    if ($email === $validEmail && $password === $validPassword) { 
        $_SESSION['user'] = $email; 
        echo "Login successful! Welcome, " . htmlspecialchars($email) . "."; 
        // Redirect to dashboard 
        header("Location: dashboard.html"); 
        exit(); 
    } else { 
        echo "Invalid email or password."; 
    } 
} 
?>