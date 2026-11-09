<?php
include 'includes/functions.php';
include 'includes/header.php';

// Partnership options data
$partnershipOptions = [
    [
        'title' => 'College Partnerships',
        'description' => 'Enhance your institution\'s placement success with our comprehensive programs',
        'features' => [
            'Placement-Ready Career Programs',
            'Free and Sponsored Internship Opportunities',
            'Final Year Employability Enhancement Training',
            'Customized Workshops (Soft Skills, Interview Prep, Aptitude)',
            'Annual Implant Training & Industrial Visits'
        ],
        'benefits' => [
            'Improve student employability',
            'Achieve higher placement rates',
            'Build reputation as a career-ready institution'
        ],
        'color' => 'bg-blue-600',
        'gradient' => 'from-blue-600 to-blue-700'
    ],
    [
        'title' => 'Corporate Partnerships',
        'description' => 'Access trained, pre-screened candidates and reduce your hiring costs',
        'features' => [
            'Direct Access to Trained, Pre-Screened Candidates',
            'Tailored Recruitment Campaigns',
            'Internship-to-Placement Pipeline Programs',
            'Sponsored Skilling Events for Brand Promotion',
            'CSR-Driven Training Initiatives'
        ],
        'benefits' => [
            'Reduce hiring time and costs',
            'Hire candidates with right skillset',
            'Strengthen social responsibility footprint'
        ],
        'color' => 'bg-teal-600',
        'gradient' => 'from-teal-600 to-teal-700'
    ],
    [
        'title' => 'Sponsorship Opportunities',
        'description' => 'Create larger impact by sponsoring skill development initiatives',
        'features' => [
            'Skill Development Programs',
            'Rural Youth Career Guidance Camps',
            'Women\'s Career Readiness Workshops',
            'Specialized Certification Courses'
        ],
        'benefits' => [
            'Promote brand to thousands of students',
            'Get recognized as a change-maker',
            'Contribute to building sustainable talent pools'
        ],
        'color' => 'bg-purple-600',
        'gradient' => 'from-purple-600 to-purple-700'
    ]
];
?>

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
                Partnership Opportunities
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Partner With Us</h1>
            <p class="text-xl text-gray-700 max-w-4xl mx-auto">
                Build Careers. Build Futures. Build Success. We invite colleges, corporates, and institutions to join hands with us to transform education and employment opportunities across rural and urban regions.
            </p>
        </div>
    </div>
</section>

<!-- Why Partner Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 mb-20 shadow-xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Partner with Iyanthiran?</h2>
                <p class="text-xl text-gray-600">Your trusted partner in building career paths that lead to success</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div class="text-center group">
                    <div class="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <svg class="h-8 w-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">12,000+</h3>
                    <p class="text-sm text-gray-600">Students Trained</p>
                </div>
                
                <div class="text-center group">
                    <div class="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">80%+</h3>
                    <p class="text-sm text-gray-600">Placement Success</p>
                </div>
                
                <div class="text-center group">
                    <div class="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">50+</h3>
                    <p class="text-sm text-gray-600">Partner Companies</p>
                </div>
                
                <div class="text-center group">
                    <div class="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">5+</h3>
                    <p class="text-sm text-gray-600">Years Experience</p>
                </div>
                
                <div class="text-center group">
                    <div class="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <svg class="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <h3 class="font-bold text-gray-900 mb-2">100%</h3>
                    <p class="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Partnership Options -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Partnership Options</h2>
            <p class="text-xl text-gray-600">Choose the partnership model that best fits your organization's goals</p>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
            <?php foreach ($partnershipOptions as $index => $option): ?>
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="text-center mb-8">
                    <div class="bg-gradient-to-br <?php echo $option['gradient']; ?> w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <?php if ($index === 0): ?>
                        <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <?php elseif ($index === 1): ?>
                        <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                        <?php else: ?>
                        <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <?php endif; ?>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4"><?php echo $option['title']; ?></h3>
                    <p class="text-gray-600 leading-relaxed"><?php echo $option['description']; ?></p>
                </div>
                
                <div class="mb-8">
                    <h4 class="font-semibold text-gray-900 mb-4">What We Offer:</h4>
                    <ul class="space-y-3">
                        <?php foreach ($option['features'] as $feature): ?>
                        <li class="flex items-start">
                            <svg class="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700"><?php echo $feature; ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <div class="mb-8">
                    <h4 class="font-semibold text-gray-900 mb-4">Benefits for You:</h4>
                    <ul class="space-y-2">
                        <?php foreach ($option['benefits'] as $benefit): ?>
                        <li class="flex items-center">
                            <svg class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 text-sm"><?php echo $benefit; ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <a href="contact.php" class="w-full bg-gradient-to-r <?php echo $option['gradient']; ?> text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center">
                    Get Started
                    <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
        <p class="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Join us in creating meaningful career opportunities and building a skilled workforce for the future.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="contact.php" class="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
            </a>
            <a href="about.php" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                Learn More
            </a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>