<?php
require_once __DIR__ . '/utils.php';
require_once __DIR__ . '/db.php';

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
} else {
    header('Access-Control-Allow-Origin: ' . CORS_ORIGIN);
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { exit; }

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

// Simple router
switch (true) {
    // Auth
    case preg_match('#/api/auth/register$#', $path): require __DIR__ . '/src/auth_register.php'; break;
    case preg_match('#/api/auth/login$#', $path): require __DIR__ . '/src/auth_login.php'; break;
    case preg_match('#/api/auth/logout$#', $path): require __DIR__ . '/src/auth_logout.php'; break;
    case preg_match('#/api/auth/me$#', $path): require __DIR__ . '/src/auth_me.php'; break;

    // Courses
    case preg_match('#/api/courses$#', $path): require __DIR__ . '/src/courses_list.php'; break;
    case preg_match('#/api/my/courses$#', $path): require __DIR__ . '/src/courses_my.php'; break;

    // Exams
    case preg_match('#/api/exams$#', $path): require __DIR__ . '/src/exams_list.php'; break;
    case preg_match('#/api/my/exams$#', $path): require __DIR__ . '/src/exams_my.php'; break;

    // Messages + Notifications
    case preg_match('#/api/my/messages$#', $path): require __DIR__ . '/src/messages_list.php'; break;
    case preg_match('#/api/my/notifications$#', $path): require __DIR__ . '/src/notifications_list.php'; break;

    // Groups + Progress
    case preg_match('#/api/my/groups$#', $path): require __DIR__ . '/src/groups_list.php'; break;
    case preg_match('#/api/my/progression$#', $path): require __DIR__ . '/src/progression.php'; break;

    default:
        send_json(['error' => 'Not Found', 'path' => $path], 404);
}

?>

