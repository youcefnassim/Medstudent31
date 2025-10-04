<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$pdo = get_pdo();
$stmt = $pdo->query('SELECT id, title, teacher, duration_hours FROM courses ORDER BY id DESC');
$courses = $stmt->fetchAll();
send_json(['courses' => $courses]);
?>

