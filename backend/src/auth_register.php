<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('POST');
$input = get_json_input();
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if ($name === '' || $email === '' || $password === '') {
    send_json(['error' => 'Missing fields'], 400);
}

$pdo = get_pdo();
// Ensure email unique
$stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
$stmt->execute([$email]);
if ($stmt->fetch()) {
    send_json(['error' => 'Email already registered'], 409);
}

$hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => PASSWORD_COST]);
$stmt = $pdo->prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)');
$stmt->execute([$name, $email, $hash]);
$userId = (int)$pdo->lastInsertId();

start_session_if_needed();
$_SESSION['user_id'] = $userId;

send_json(['id' => $userId, 'name' => $name, 'email' => $email], 201);
?>

