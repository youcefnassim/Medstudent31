<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$userId = require_auth();
$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT m.id, u.name AS sender_name, m.subject, m.body, m.is_read, m.created_at
    FROM messages m
    JOIN users u ON u.id = m.sender_id
    WHERE m.recipient_id = ?
    ORDER BY m.created_at DESC');
$stmt->execute([$userId]);
$messages = $stmt->fetchAll();
send_json(['messages' => $messages]);
?>

