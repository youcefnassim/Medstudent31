<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$pdo = get_pdo();
$stmt = $pdo->query('SELECT e.id, e.title, e.start_at, e.end_at, e.num_questions, c.title AS course_title
    FROM exams e
    JOIN courses c ON c.id = e.course_id
    ORDER BY e.start_at DESC');
$exams = $stmt->fetchAll();
send_json(['exams' => $exams]);
?>

