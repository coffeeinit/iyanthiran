<?php
// Main index.php - Entry point for the PHP application
session_start();

// Get the current page from URL parameter
$page = $_GET['page'] ?? 'home';

// Define allowed pages for security
$allowed_pages = [
    'home', 'about', 'courses', 'blog', 'partners', 'contact', 
    'events', 'privacy', 'terms', 'application'
];

// Validate page parameter
if (!in_array($page, $allowed_pages)) {
    $page = 'home';
}

// Include the page content
$page_file = "{$page}.php";
if (file_exists($page_file)) {
    include $page_file;
} else {
    include 'home.php';
}
?>
