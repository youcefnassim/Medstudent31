<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$userId = require_auth();
$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT e.id, e.title, e.start_at, e.end_at, e.num_questions, c.title AS course_title, r.score_percent, r.taken_at
    FROM exams e
    JOIN courses c ON c.id = e.course_id
    LEFT JOIN exam_results r ON r.exam_id = e.id AND r.user_id = ?
    ORDER BY e.start_at DESC');
$stmt->execute([$userId]);
$exams = $stmt->fetchAll();
send_json(['exams' => $exams]);
?>

