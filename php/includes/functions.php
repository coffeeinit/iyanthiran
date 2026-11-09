<?php
// Utility functions for the PHP application

function getPageTitle($page) {
    $titles = [
        'home' => 'Home',
        'about' => 'About Us',
        'courses' => 'Courses',
        'blog' => 'Blog & Insights',
        'partners' => 'Partner With Us',
        'contact' => 'Contact Us',
        'events' => 'Events',
        'privacy' => 'Privacy Policy',
        'terms' => 'Terms of Service',
        'application' => 'Walk-in Interview Application'
    ];
    
    return $titles[$page] ?? 'Iyanthiran Edge';
}

function loadApplications() {
    $json_file = 'data/applications.json';
    if (file_exists($json_file)) {
        $json_data = file_get_contents($json_file);
        $data = json_decode($json_data, true);
        return $data['applications'] ?? [];
    }
    return [];
}

function saveApplications($applications) {
    $json_file = 'data/applications.json';
    $data = ['applications' => $applications];
    
    // Create data directory if it doesn't exist
    if (!file_exists('data')) {
        mkdir('data', 0755, true);
    }
    
    return file_put_contents($json_file, json_encode($data, JSON_PRETTY_PRINT));
}

function generateFileName($originalName, $phoneNumber, $folder) {
    $extension = pathinfo($originalName, PATHINFO_EXTENSION);
    $random = substr(md5(uniqid(rand(), true)), 0, 8);
    $timestamp = time();
    return "{$folder}/{$random}_{$phoneNumber}_{$timestamp}.{$extension}";
}

function uploadFile($file, $targetDir, $phoneNumber) {
    if (!isset($file['tmp_name']) || $file['error'] !== UPLOAD_ERR_OK) {
        return false;
    }
    
    // Create target directory if it doesn't exist
    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0755, true);
    }
    
    $fileName = generateFileName($file['name'], $phoneNumber, basename($targetDir));
    $targetPath = $targetDir . '/' . $fileName;
    
    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        return $fileName;
    }
    
    return false;
}

function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePhone($phone) {
    return preg_match('/^[+]?[0-9\s\-\(\)]{10,15}$/', $phone);
}

function getStatusColor($status) {
    switch ($status) {
        case 'shortlisted':
            return 'bg-green-100 text-green-800';
        case 'rejected':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-yellow-100 text-yellow-800';
    }
}

function getFilePaths($application) {
    $paths = [];
    if (!empty($application['photo'])) {
        $paths[] = "Photo: {$application['photo']}";
    }
    if (!empty($application['resume'])) {
        $paths[] = "Resume: {$application['resume']}";
    }
    if (!empty($application['documents']) && is_array($application['documents'])) {
        foreach ($application['documents'] as $doc) {
            $paths[] = "{$doc['originalName']}: {$doc['name']}";
        }
    }
    return $paths;
}

function sendEmail($to, $subject, $message) {
    $headers = "From: info@iyanthiran.com\r\n";
    $headers .= "Reply-To: info@iyanthiran.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    return mail($to, $subject, $message, $headers);
}

function getJobRoles() {
    return [
        'Software Developer' => 'Software Developer',
        'Frontend Developer' => 'Frontend Developer',
        'Backend Developer' => 'Backend Developer',
        'Full Stack Developer' => 'Full Stack Developer',
        'Mobile App Developer' => 'Mobile App Developer',
        'UI/UX Designer' => 'UI/UX Designer',
        'Graphic Designer' => 'Graphic Designer',
        'Digital Marketing Specialist' => 'Digital Marketing Specialist',
        'Content Writer' => 'Content Writer',
        'Social Media Manager' => 'Social Media Manager',
        'SEO Specialist' => 'SEO Specialist',
        'Data Analyst' => 'Data Analyst',
        'Business Analyst' => 'Business Analyst',
        'Project Manager' => 'Project Manager',
        'HR Executive' => 'HR Executive',
        'Sales Executive' => 'Sales Executive',
        'Customer Support' => 'Customer Support',
        'Intern - Development' => 'Intern - Development',
        'Intern - Marketing' => 'Intern - Marketing',
        'Intern - Design' => 'Intern - Design',
        'Trainee - IT' => 'Trainee - IT',
        'Trainee - Business' => 'Trainee - Business',
        'Trainee - Design' => 'Trainee - Design'
    ];
}

// SEO and Performance Functions
function getPageDescription($page) {
    $descriptions = [
        'home' => 'Career guidance and training platform helping students and professionals achieve their career dreams. Skill and Business Development for Rural Youth.',
        'about' => 'Learn about Iyanthiran Edge - empowering rural talents with industry-ready skills and career guidance in Tamil Nadu.',
        'courses' => 'Explore our comprehensive courses in IT, Business, and Science. Industry-relevant training with 100% placement support.',
        'events' => 'Join our career guidance events, workshops, and placement drives. Stay updated with latest opportunities.',
        'application' => 'Apply for walk-in interviews and career opportunities. Submit your application with resume and documents.',
        'partners' => 'Partner with Iyanthiran Edge to provide career opportunities and skill development programs.',
        'contact' => 'Get in touch with Iyanthiran Edge for career guidance, course inquiries, and partnership opportunities.',
        'blog' => 'Read our latest insights on career development, skill building, and industry trends.',
        'privacy' => 'Privacy Policy - Learn how Iyanthiran Edge protects and handles your personal information.',
        'terms' => 'Terms of Service - Understand the terms and conditions for using Iyanthiran Edge services.'
    ];
    
    return $descriptions[$page] ?? 'Career guidance and training platform helping students and professionals achieve their career dreams.';
}

function getPageKeywords($page) {
    $keywords = [
        'home' => 'career guidance, skill development, training, placement, rural youth, Tamil Nadu, Iyanthiran Edge, career success',
        'about' => 'about us, Iyanthiran Edge, career guidance, skill development, rural youth, Tamil Nadu, company history',
        'courses' => 'courses, training, IT courses, business courses, skill development, programming, digital marketing',
        'events' => 'events, workshops, career guidance events, placement drives, job opportunities, career fairs',
        'application' => 'job application, walk-in interview, career opportunities, resume submission, job placement',
        'partners' => 'partnership, corporate partnership, career opportunities, skill development programs',
        'contact' => 'contact us, career guidance, course inquiry, partnership, support, help',
        'blog' => 'career blog, skill development, industry insights, career tips, job market trends',
        'privacy' => 'privacy policy, data protection, personal information, privacy rights',
        'terms' => 'terms of service, terms and conditions, user agreement, service terms'
    ];
    
    return $keywords[$page] ?? 'career guidance, skill development, training, placement, rural youth, Tamil Nadu, Iyanthiran Edge';
}

function generateStructuredData($page) {
    $baseUrl = 'https://iyanthiran.com/';
    $organization = [
        "@context" => "https://schema.org",
        "@type" => "Organization",
        "name" => "Iyanthiran Edge Pvt Ltd",
        "url" => $baseUrl,
        "logo" => $baseUrl . "assets/logo.png",
        "description" => "Career guidance and training platform helping students and professionals achieve their career dreams. Skill and Business Development for Rural Youth.",
        "address" => [
            "@type" => "PostalAddress",
            "streetAddress" => "Vaazhai Incubator",
            "addressLocality" => "Tenkasi",
            "addressRegion" => "Tamil Nadu",
            "addressCountry" => "India"
        ],
        "contactPoint" => [
            "@type" => "ContactPoint",
            "telephone" => "+91-9363923506",
            "contactType" => "customer service",
            "email" => "info@iyanthiran.com"
        ],
        "sameAs" => [
            "https://www.facebook.com/iyanthiranedge"
        ]
    ];
    
    $webSite = [
        "@context" => "https://schema.org",
        "@type" => "WebSite",
        "name" => "Iyanthiran Edge",
        "url" => $baseUrl,
        "description" => "Career guidance and training platform for rural youth in Tamil Nadu",
        "publisher" => $organization
    ];
    
    $breadcrumb = [
        "@context" => "https://schema.org",
        "@type" => "BreadcrumbList",
        "itemListElement" => [
            [
                "@type" => "ListItem",
                "position" => 1,
                "name" => "Home",
                "item" => $baseUrl
            ]
        ]
    ];
    
    if ($page !== 'home') {
        $breadcrumb["itemListElement"][] = [
            "@type" => "ListItem",
            "position" => 2,
            "name" => getPageTitle($page),
            "item" => $baseUrl . $page . '.php'
        ];
    }
    
    return [
        'organization' => $organization,
        'website' => $webSite,
        'breadcrumb' => $breadcrumb
    ];
}

function addPerformanceHeaders() {
    // Enable GZIP compression
    if (!ob_get_level()) {
        ob_start('ob_gzhandler');
    }
    
    // Set cache headers
    $expires = 60 * 60 * 24 * 7; // 1 week
    header("Cache-Control: public, max-age={$expires}");
    header("Expires: " . gmdate('D, d M Y H:i:s', time() + $expires) . ' GMT');
    
    // Set security headers
    header("X-Content-Type-Options: nosniff");
    header("X-Frame-Options: SAMEORIGIN");
    header("X-XSS-Protection: 1; mode=block");
    header("Referrer-Policy: strict-origin-when-cross-origin");
}

function getCanonicalUrl($page) {
    $baseUrl = 'https://iyanthiran.com/';
    
    if ($page === 'home' || $page === 'index') {
        return $baseUrl;
    }
    
    return $baseUrl . $page . '.php';
}

function minifyHtml($html) {
    // Remove comments
    $html = preg_replace('/<!--(?!\s*(?:\[if [^\]]+]|<!|>))(?:(?!-->).)*-->/s', '', $html);
    
    // Remove extra whitespace
    $html = preg_replace('/\s+/', ' ', $html);
    $html = preg_replace('/>\s+</', '><', $html);
    
    return trim($html);
}
?>
