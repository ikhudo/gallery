<?php
// SPA fallback router — serves index.html for all non-file routes.
// Works on any PHP hosting even if mod_rewrite is disabled.

$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

// If the request is for an actual file or directory, let Apache serve it
if ($path !== '/' && file_exists(__DIR__ . $path)) {
    return false;
}

// Otherwise serve the SPA entry point
readfile(__DIR__ . '/index.html');
