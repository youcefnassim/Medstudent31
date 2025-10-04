<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('POST');
$input = get_json_input();
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if ($email === '' || $password === '') {
    send_json(['error' => 'Missing fields'], 400);
}

$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT id, name, email, password_hash FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();
if (!$user || !password_verify($password, $user['password_hash'])) {
    send_json(['error' => 'Invalid credentials'], 401);
}

start_session_if_needed();
$_SESSION['user_id'] = (int)$user['id'];

send_json(['id' => (int)$user['id'], 'name' => $user['name'], 'email' => $user['email']]);
?>

