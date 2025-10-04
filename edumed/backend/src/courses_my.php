<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$userId = require_auth();
$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT c.id, c.title, c.teacher, e.progress_percent, e.score_percent, e.status
    FROM enrollments e
    JOIN courses c ON c.id = e.course_id
    WHERE e.user_id = ?
    ORDER BY c.id DESC');
$stmt->execute([$userId]);
$courses = $stmt->fetchAll();
send_json(['courses' => $courses]);
?>

