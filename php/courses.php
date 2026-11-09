<?php
include 'includes/functions.php';
include 'includes/header.php';

// Course categories data
$courseCategories = [
    [
        'id' => 'it',
        'title' => 'IT and Computer Science Programs',
        'color' => 'bg-blue-600',
        'gradient' => 'from-blue-600 to-blue-700',
        'courses' => [
            [
                'name' => 'Python Programming Course',
                'description' => 'Master Python for software development, AI, data analysis, and automation.',
                'duration' => '3-4 months',
                'level' => 'Beginner to Advanced',
                'features' => ['Hands-on coding practice', 'Real-world projects', 'Interview preparation', 'Placement support'],
                'highlights' => ['AI & Machine Learning', 'Data Analysis', 'Web Development', 'Automation Scripts']
            ],
            [
                'name' => 'Java Programming Course',
                'description' => 'Build strong foundations in Core and Advanced Java.',
                'duration' => '4-5 months',
                'level' => 'Beginner to Advanced',
                'features' => ['Industry-grade projects', 'App development', 'Backend systems', 'Mock interviews'],
                'highlights' => ['Spring Framework', 'Microservices', 'Database Integration', 'Enterprise Applications']
            ],
            [
                'name' => 'Full Stack Development Course',
                'description' => 'Complete web development with modern technologies.',
                'duration' => '6 months',
                'level' => 'Intermediate to Advanced',
                'features' => ['Frontend: HTML, CSS, JavaScript, React', 'Backend: Node.js, Express, MongoDB', 'Complete web app projects', '100% Placement assistance'],
                'highlights' => ['MERN Stack', 'RESTful APIs', 'Database Design', 'Deployment & DevOps']
            ]
        ]
    ],
    [
        'id' => 'business',
        'title' => 'Business and Marketing Programs',
        'color' => 'bg-teal-600',
        'gradient' => 'from-teal-600 to-teal-700',
        'courses' => [
            [
                'name' => 'Business Management Essentials',
                'description' => 'Comprehensive business strategy and management training.',
                'duration' => '3 months',
                'level' => 'Beginner to Intermediate',
                'features' => ['Business Strategy & CRM', 'Financial Basics', 'Entrepreneurial Skills', 'Corporate readiness training'],
                'highlights' => ['Strategic Planning', 'Team Leadership', 'Financial Management', 'Market Analysis']
            ],
            [
                'name' => 'Digital Marketing and SEO Course',
                'description' => 'Master digital marketing across all platforms.',
                'duration' => '2-3 months',
                'level' => 'Beginner to Advanced',
                'features' => ['SEO, SEM, Google Ads', 'Social Media Marketing', 'Content Strategy & Analytics', 'Live campaigns & certification'],
                'highlights' => ['Google Ads Certified', 'Social Media Strategy', 'Content Marketing', 'Analytics & ROI']
            ],
            [
                'name' => 'Branding & Marketing Strategy',
                'description' => 'Learn branding principles and positioning strategies.',
                'duration' => '2 months',
                'level' => 'Intermediate',
                'features' => ['Brand positioning & storytelling', 'Result-driven marketing strategies', 'Real-world campaigns', 'Brand identity development'],
                'highlights' => ['Brand Identity', 'Market Positioning', 'Campaign Strategy', 'Creative Development']
            ],
            [
                'name' => 'LinkedIn & Personal Branding (100-Day Program)',
                'description' => 'Build your professional brand and online presence.',
                'duration' => '100 days',
                'level' => 'All Levels',
                'features' => ['LinkedIn profile optimization', 'Personal brand development', 'SEO for personal branding', '100-day action plan'],
                'highlights' => ['Profile Optimization', 'Content Strategy', 'Network Building', 'Personal SEO']
            ]
        ]
    ],
    [
        'id' => 'science',
        'title' => 'Science and Literature Career Pathways',
        'color' => 'bg-purple-600',
        'gradient' => 'from-purple-600 to-purple-700',
        'courses' => [
            [
                'name' => 'Physics, Chemistry, Mathematics Core Program',
                'description' => 'Advanced concept mastery for academic and research excellence.',
                'duration' => '4-6 months',
                'level' => 'Intermediate to Advanced',
                'features' => ['Concept mastery', 'Research excellence', 'Scientific communication', 'Academic preparation'],
                'highlights' => ['Research Methods', 'Scientific Writing', 'Lab Techniques', 'Academic Publishing']
            ],
            [
                'name' => 'Literature and Scientific Writing with SEO',
                'description' => 'Professional writing and content creation skills.',
                'duration' => '3 months',
                'level' => 'Intermediate',
                'features' => ['Content writing & editing', 'Research articles', 'SEO for publishing', 'Portfolio building'],
                'highlights' => ['Technical Writing', 'Content Strategy', 'SEO Writing', 'Publishing Skills']
            ]
        ]
    ]
];
?>

<!-- Hero Section -->
<section class="py-5 bg-gradient-to-br from-teal-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Industry-Ready Training
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Industry-Ready Courses</h1>
            <p class="text-xl text-gray-700 max-w-4xl mx-auto">
                Comprehensive training programs designed to equip you with industry-relevant skills and knowledge for career success. 
                From beginner to advanced levels, our courses are crafted by industry experts.
            </p>
        </div>
    </div>
</section>

<!-- Course Categories -->
<section class="py-5 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php foreach ($courseCategories as $category): ?>
        <div id="<?php echo $category['id']; ?>" class="mb-20">
            <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-16 h-16 <?php echo $category['color']; ?> rounded-2xl mb-6">
                    <?php if ($category['id'] === 'it'): ?>
                    <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <?php elseif ($category['id'] === 'business'): ?>
                    <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                    </svg>
                    <?php else: ?>
                    <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <?php endif; ?>
                </div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4"><?php echo $category['title']; ?></h2>
        </div>
        
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <?php foreach ($category['courses'] as $course): ?>
                <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col">
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-3">
                            <h3 class="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                                <?php echo $course['name']; ?>
                            </h3>
                            <div class="flex items-center space-x-1 text-xs text-gray-500">
                                <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                                <span><?php echo $course['duration']; ?></span>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                            <?php echo $course['description']; ?>
                        </p>
                        
                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <span class="text-xs font-medium text-gray-700">Level: </span>
                                <span class="ml-2 px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                                    <?php echo $course['level']; ?>
                                </span>
                </div>
            </div>

                        <div class="mb-4">
                            <h4 class="text-xs font-semibold text-gray-900 mb-2">Key Features:</h4>
                            <ul class="space-y-1">
                                <?php foreach (array_slice($course['features'], 0, 3) as $feature): ?>
                                <li class="flex items-center text-xs text-gray-600">
                                    <svg class="h-3 w-3 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                                    <?php echo $feature; ?>
                                </li>
                                <?php endforeach; ?>
                </ul>
            </div>

                        <div class="mb-4">
                            <h4 class="text-xs font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                            <div class="flex flex-wrap gap-1">
                                <?php foreach (array_slice($course['highlights'], 0, 3) as $highlight): ?>
                                <span class="px-2 py-1 bg-gradient-to-r <?php echo $category['gradient']; ?> text-white text-xs rounded-full">
                                    <?php echo $highlight; ?>
                                </span>
                                <?php endforeach; ?>
                            </div>
                </div>
                        
                               <div class="flex flex-col gap-2 mt-auto">
                                   <a 
                                       href="application.php" 
                                       class="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                                   >
                                       Enroll Now
                                       <svg class="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
                                   <a 
                                       href="contact.php" 
                                       class="text-gray-600 hover:text-teal-600 font-medium text-xs transition-colors text-center"
                                   >
                                       Learn More
                </a>
            </div>
        </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- CTA Section -->
<section class="py-5 bg-gradient-to-r from-teal-600 to-teal-700">5
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
        <p class="text-xl text-teal-100 mb-8">
            Choose your course and begin your journey towards a successful career.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="?page=application"
                class="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
                Apply Now
                <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
            <a
                href="?page=contact"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
                Contact Us
            </a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
