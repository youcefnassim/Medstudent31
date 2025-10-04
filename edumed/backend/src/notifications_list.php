<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$userId = require_auth();
$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT id, content, is_read, created_at
    FROM notifications
    WHERE user_id = ?
    ORDER BY created_at DESC');
$stmt->execute([$userId]);
$notifications = $stmt->fetchAll();
send_json(['notifications' => $notifications]);
?>

