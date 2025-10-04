<?php
require_once __DIR__ . '/../utils.php';
require_once __DIR__ . '/../db.php';

require_method('GET');
$userId = require_auth();
$pdo = get_pdo();

// Aggregate stats similar to dashboard
$statsStmt = $pdo->prepare('SELECT 
    COUNT(*) AS total_courses,
    SUM(CASE WHEN status = "completed" THEN 1 ELSE 0 END) AS completed_courses,
    ROUND(AVG(NULLIF(score_percent,0))) AS avg_score,
    ROUND(AVG(progress_percent)) AS avg_progress
  FROM enrollments WHERE user_id = ?');
$statsStmt->execute([$userId]);
$stats = $statsStmt->fetch() ?: ['total_courses'=>0,'completed_courses'=>0,'avg_score'=>0,'avg_progress'=>0];

$detailStmt = $pdo->prepare('SELECT c.id, c.title, c.teacher, e.progress_percent, e.score_percent, e.status
  FROM enrollments e JOIN courses c ON c.id = e.course_id WHERE e.user_id = ? ORDER BY c.id DESC');
$detailStmt->execute([$userId]);
$courses = $detailStmt->fetchAll();

send_json(['stats' => $stats, 'courses' => $courses]);
?>

