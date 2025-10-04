<?php
require_once __DIR__ . '/config.php';

function send_json($data, int $code = 200): void {
    header('Content-Type: application/json');
    // If an Origin header is present, echo it back to allow credentials
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    } else {
        header('Access-Control-Allow-Origin: ' . CORS_ORIGIN);
    }
    header('Access-Control-Allow-Credentials: true');
    http_response_code($code);
    echo json_encode($data);
    exit;
}

function get_json_input(): array {
    $raw = file_get_contents('php://input');
    if (!$raw) { return []; }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function require_method(string $method): void {
    if (strtoupper($_SERVER['REQUEST_METHOD'] ?? '') !== strtoupper($method)) {
        send_json(['error' => 'Method Not Allowed'], 405);
    }
}

function start_session_if_needed(): void {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function require_auth(): int {
    start_session_if_needed();
    if (!isset($_SESSION['user_id'])) {
        send_json(['error' => 'Unauthorized'], 401);
    }
    return (int)$_SESSION['user_id'];
}

?>

