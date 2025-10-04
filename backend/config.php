<?php
// Basic environment configuration
// Fill these in with your MySQL credentials

define('DB_HOST', getenv('DB_HOST') ?: '127.0.0.1');
define('DB_NAME', getenv('DB_NAME') ?: 'med_education');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');

// CORS allowed origin (set to your frontend origin)
define('CORS_ORIGIN', getenv('CORS_ORIGIN') ?: '*');

// Password hashing options
define('PASSWORD_COST', 11);

// Session options
ini_set('session.cookie_samesite', 'Lax');
ini_set('session.cookie_httponly', 1);
// Uncomment when serving over HTTPS
// ini_set('session.cookie_secure', 1);

?>

