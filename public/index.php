<?php
// SPA fallback router — serves index.html for all non-file routes.
// Works on any PHP hosting even if mod_rewrite is disabled.

$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

// Only serve real files directly (not directories — /gallery is both
// a SPA route and a real directory containing images)
if ($path !== '/' && is_file(__DIR__ . $path)) {
    return false;
}

// Otherwise serve the SPA entry point
readfile(__DIR__ . '/index.html');
