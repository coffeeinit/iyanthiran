<?php
// Get current page for active navigation
$current_page = basename($_SERVER['PHP_SELF'], '.php');
$page_titles = [
    'index' => 'Home',
    'home' => 'Home', 
    'about' => 'About Us',
    'courses' => 'Courses',
    'events' => 'Events',
    'application' => 'Apply Now',
    'partners' => 'Partner With Us',
    'contact' => 'Contact',
    'blog' => 'Blog & Insights',
    'privacy' => 'Privacy Policy',
    'terms' => 'Terms of Service'
];

$page_title = getPageTitle($current_page);
$page_description = getPageDescription($current_page);
$page_keywords = getPageKeywords($current_page);
$canonical_url = getCanonicalUrl($current_page);
$structured_data = generateStructuredData($current_page);

// Add performance headers
addPerformanceHeaders();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?> - Iyanthiran Edge</title>
    <meta name="description" content="<?php echo $page_description; ?>">
    <meta name="keywords" content="<?php echo $page_keywords; ?>">
    <meta name="author" content="Iyanthiran Edge Pvt Ltd">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="<?php echo $canonical_url; ?>">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://iyanthiran.com/">
    <meta property="og:title" content="<?php echo $page_title; ?> - Iyanthiran Edge">
    <meta property="og:description" content="<?php echo $page_description; ?>">
    <meta property="og:image" content="https://iyanthiran.com/assets/logo.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://iyanthiran.com/">
    <meta property="twitter:title" content="<?php echo $page_title; ?> - Iyanthiran Edge">
    <meta property="twitter:description" content="<?php echo $page_description; ?>">
    <meta property="twitter:image" content="https://iyanthiran.com/assets/logo.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="../assets/logo.png">
    <link rel="apple-touch-icon" href="../assets/logo.png">
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://cdn.tailwindcss.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    <?php echo json_encode($structured_data['organization'], JSON_UNESCAPED_SLASHES); ?>
    </script>
    <script type="application/ld+json">
    <?php echo json_encode($structured_data['website'], JSON_UNESCAPED_SLASHES); ?>
    </script>
    <script type="application/ld+json">
    <?php echo json_encode($structured_data['breadcrumb'], JSON_UNESCAPED_SLASHES); ?>
    </script>
    
    <!-- Custom CSS -->
    <style>
        .nav-link {
            @apply font-medium transition-colors;
        }
        .nav-link.active {
            @apply text-teal-600 border-b-2 border-teal-600 pb-1;
        }
        .nav-link:not(.active) {
            @apply text-gray-700 hover:text-teal-600;
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
        }
        
        /* Mobile menu animation */
        .mobile-menu-enter {
            transform: translateY(-100%);
            opacity: 0;
        }
        
        .mobile-menu-enter-active {
            transform: translateY(0);
            opacity: 1;
            transition: all 0.3s ease-out;
        }
        
        .mobile-menu-exit {
            transform: translateY(0);
            opacity: 1;
        }
        
        .mobile-menu-exit-active {
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease-in;
        }
    </style>
</head>
<body class="min-h-screen">
    <header class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="home.php">
                        <img
                            src="../assets/logo.png"
                            alt="Iyanthiran Edge"
                            class="h-12 w-auto hover:scale-105 transition-transform"
                        />
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <a href="home.php" class="nav-link <?php echo $current_page === 'home' || $current_page === 'index' ? 'active' : ''; ?>">
                        Home
                    </a>
                    <a href="about.php" class="nav-link <?php echo $current_page === 'about' ? 'active' : ''; ?>">
                        About Us
                    </a>
                    <div class="relative group" id="courses-dropdown">
                        <button 
                            onclick="toggleCoursesDropdown()" 
                            class="nav-link <?php echo $current_page === 'courses' ? 'active' : ''; ?> flex items-center"
                        >
                            Courses
                            <svg class="ml-1 h-4 w-4 transition-transform" id="courses-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" id="courses-menu">
                            <a href="courses.php" class="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium border-b border-gray-100" onclick="closeCoursesDropdown()">
                                All Courses
                            </a>
                            <a href="courses.php#it" class="block px-6 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600" onclick="closeCoursesDropdown()">
                                IT & Computer Science
                            </a>
                            <a href="courses.php#business" class="block px-6 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600" onclick="closeCoursesDropdown()">
                                Business & Marketing
                            </a>
                            <a href="courses.php#science" class="block px-6 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600" onclick="closeCoursesDropdown()">
                                Science & Literature
                            </a>
                        </div>
                    </div>
                    <a href="events.php" class="nav-link <?php echo $current_page === 'events' ? 'active' : ''; ?>">
                        Events
                    </a>
                    <a href="partners.php" class="nav-link <?php echo $current_page === 'partners' ? 'active' : ''; ?>">
                        Partner With Us
                    </a>
                    <a href="contact.php" class="nav-link <?php echo $current_page === 'contact' ? 'active' : ''; ?>">
                        Contact
                    </a>
                </nav>

                <!-- CTA Button -->
                <div class="hidden lg:block">
                    <a
                        href="application.php"
                        class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Enroll Today
                    </a>
                </div>

                <!-- Mobile menu button -->
                <button
                    onclick="toggleMobileMenu()"
                    class="lg:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
                >
                    <svg id="menu-icon" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="lg:hidden py-4 border-t border-gray-200 bg-white hidden mobile-menu-enter">
                <div class="flex flex-col space-y-4">
                    <a href="home.php" class="nav-link py-2 <?php echo $current_page === 'home' || $current_page === 'index' ? 'active' : ''; ?>" onclick="closeMobileMenu()">
                        Home
                    </a>
                    <a href="about.php" class="nav-link py-2 <?php echo $current_page === 'about' ? 'active' : ''; ?>" onclick="closeMobileMenu()">
                        About Us
                    </a>
                    <a href="courses.php" class="nav-link py-2 <?php echo $current_page === 'courses' ? 'active' : ''; ?>" onclick="closeMobileMenu()">
                        Courses
                    </a>
                    <a href="events.php" class="nav-link py-2 <?php echo $current_page === 'events' ? 'active' : ''; ?>" onclick="closeMobileMenu()">
                        Events
                    </a>
                    <a href="partners.php" class="nav-link py-2 <?php echo $current_page === 'partners' ? 'active' : ''; ?>" onclick="closeMobileMenu()">
                        Partner With Us
                    </a>
                    <a href="contact.php" class="nav-link py-2 <?php echo $current_page === 'contact' ? 'active' : ''; ?>" onclick="closeMobileMenu()">
                        Contact
                    </a>
                    <a
                        href="application.php"
                        class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all text-center mt-4"
                        onclick="closeMobileMenu()"
                    >
                        Enroll Today
                    </a>
                </div>
            </div>
        </div>
    </header>

    <script>
        let isMobileMenuOpen = false;
        let isCoursesDropdownOpen = false;

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            
            if (isMobileMenuOpen) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('mobile-menu-enter-active');
                mobileMenu.classList.add('mobile-menu-exit-active');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                isMobileMenuOpen = false;
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.remove('mobile-menu-enter');
                mobileMenu.classList.add('mobile-menu-enter-active');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                isMobileMenuOpen = true;
            }
        }

        function closeMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu-enter-active');
            mobileMenu.classList.add('mobile-menu-exit-active');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            isMobileMenuOpen = false;
        }

        function toggleCoursesDropdown() {
            const coursesMenu = document.getElementById('courses-menu');
            const coursesArrow = document.getElementById('courses-arrow');
            
            if (isCoursesDropdownOpen) {
                coursesMenu.classList.add('opacity-0', 'invisible');
                coursesArrow.style.transform = 'rotate(0deg)';
                isCoursesDropdownOpen = false;
            } else {
                coursesMenu.classList.remove('opacity-0', 'invisible');
                coursesArrow.style.transform = 'rotate(180deg)';
                isCoursesDropdownOpen = true;
            }
        }

        function closeCoursesDropdown() {
            const coursesMenu = document.getElementById('courses-menu');
            const coursesArrow = document.getElementById('courses-arrow');
            
            coursesMenu.classList.add('opacity-0', 'invisible');
            coursesArrow.style.transform = 'rotate(0deg)';
            isCoursesDropdownOpen = false;
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            const coursesDropdown = document.getElementById('courses-dropdown');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (!coursesDropdown.contains(event.target)) {
                closeCoursesDropdown();
            }
            
            if (!mobileMenu.contains(event.target) && !event.target.closest('button[onclick="toggleMobileMenu()"]')) {
                closeMobileMenu();
            }
        });

        // Smooth scroll for anchor links
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>
