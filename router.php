<?php
// PHP built-in server router
// Usage: php -S localhost:8000 router.php

$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Serve existing files directly
if ($uri !== '/' && file_exists(__DIR__ . $uri) && !is_dir(__DIR__ . $uri)) {
    return false;
}

// Forward API requests to backend router
if (strpos($uri, '/api/') === 0) {
    require __DIR__ . '/backend/routes.php';
    return true;
}

// Default to index if requested file doesn't exist
$path = __DIR__ . '/index.html';
if (file_exists(__DIR__ . $uri) && !is_dir(__DIR__ . $uri)) {
    $path = __DIR__ . $uri;
}
// Fallback to requested HTML page if it exists
if (preg_match('/\.html$/', $uri) && file_exists(__DIR__ . $uri)) {
    $path = __DIR__ . $uri;
}

readfile($path);
return true;

