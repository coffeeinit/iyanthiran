<?php
include 'includes/functions.php';
include 'includes/header.php';

// Blog posts data
$blogPosts = [
    [
        'title' => 'Career Guidance: Your Roadmap to Success',
        'excerpt' => 'Choosing the right career path is one of the most important decisions you will make. Learn how to identify your strengths and explore industry trends.',
        'readTime' => '5 min read',
        'category' => 'Career Planning',
        'tips' => [
            'Identify your strengths and interests',
            'Explore industry trends and future opportunities',
            'Choose courses that boost your market value',
            'Get mentorship from industry experts'
        ],
        'highlight' => 'Before choosing a course, research where the industry is heading. Technology, healthcare, and digital marketing are growing rapidly.'
    ],
    [
        'title' => 'Skills Development: The Power of a Strong Skillset',
        'excerpt' => 'In today\'s job market, your skillset defines your value. Whether it\'s technical skills or soft skills, developing the right abilities is crucial.',
        'readTime' => '7 min read',
        'category' => 'Skill Building',
        'tips' => [
            'Soft skills like public speaking and leadership',
            'Domain-specific knowledge in IT, Science, Arts, Business',
            'Practical learning through workshops and internships',
            'Continuous skill enhancement and certification'
        ],
        'highlight' => '80% of job success depends on soft skills according to LinkedIn\'s Global Talent Trends report.'
    ],
    [
        'title' => 'Interview Preparation: Clearing the Final Step',
        'excerpt' => 'Facing an interview can be intimidating, but the right preparation leads to interview clearance. Master the art of professional presentation.',
        'readTime' => '6 min read',
        'category' => 'Interview Success',
        'tips' => [
            'Resume building and LinkedIn profile optimization',
            'Mock interviews with industry experts',
            'Behavioral and technical question training',
            'Post-interview feedback and improvement'
        ],
        'highlight' => 'Always research the company and practice common interview questions related to your field.'
    ],
    [
        'title' => 'Placement Strategies: Turning Effort Into Offers',
        'excerpt' => 'Getting placed is the ultimate goal. Learn proven strategies to increase your chances of landing your dream job through effective preparation.',
        'readTime' => '8 min read',
        'category' => 'Placement Success',
        'tips' => [
            'Build a strong professional network',
            'Participate in campus recruitment drives',
            'Apply for internships and gain experience',
            'Stay updated with industry requirements'
        ],
        'highlight' => 'Students who complete internships are 3x more likely to get placed in their preferred companies.'
    ],
    [
        'title' => 'Soft Skills: The Hidden Game Changer',
        'excerpt' => 'Technical skills get you noticed, but soft skills get you hired. Discover the essential interpersonal skills that employers value most.',
        'readTime' => '6 min read',
        'category' => 'Personal Development',
        'tips' => [
            'Communication and presentation skills',
            'Teamwork and collaboration abilities',
            'Problem-solving and critical thinking',
            'Time management and organization'
        ],
        'highlight' => 'Companies prefer candidates with strong soft skills over those with only technical expertise.'
    ],
    [
        'title' => 'Industry Trends: Staying Ahead of the Curve',
        'excerpt' => 'The job market is constantly evolving. Stay informed about emerging trends and technologies to remain competitive in your field.',
        'readTime' => '9 min read',
        'category' => 'Industry Insights',
        'tips' => [
            'Follow industry leaders and thought leaders',
            'Attend webinars and conferences',
            'Join professional associations',
            'Keep learning new technologies and tools'
        ],
        'highlight' => 'Professionals who continuously upskill earn 40% more than those who don\'t adapt to changing trends.'
    ]
];
?>

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Career Insights & Tips
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Career Blog</h1>
            <p class="text-xl text-gray-700 max-w-4xl mx-auto">
                Expert insights, practical tips, and industry trends to help you build a successful career. 
                Stay updated with the latest career guidance, skill development strategies, and placement success stories from our experts.
            </p>
        </div>
    </div>
</section>

<!-- Blog Posts -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8">
            <?php foreach ($blogPosts as $index => $post): ?>
            <article class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center space-x-3">
                        <div class="bg-teal-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                            <?php if ($index === 0): ?>
                            <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <?php elseif ($index === 1): ?>
                            <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            <?php elseif ($index === 2): ?>
                            <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                            </svg>
                            <?php elseif ($index === 3): ?>
                            <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <?php elseif ($index === 4): ?>
                            <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                            <?php else: ?>
                            <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            <?php endif; ?>
                </div>
                        <div>
                            <span class="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
                                <?php echo $post['category']; ?>
                            </span>
                    </div>
                </div>
                    <div class="flex items-center text-sm text-gray-500">
                        <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span><?php echo $post['readTime']; ?></span>
                    </div>
                </div>
                
                <h2 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    <?php echo $post['title']; ?>
                </h2>
                
                <p class="text-gray-600 mb-6 leading-relaxed">
                    <?php echo $post['excerpt']; ?>
                </p>
                
                <div class="mb-6">
                    <h4 class="font-semibold text-gray-900 mb-3">Key Takeaways:</h4>
                    <ul class="space-y-2">
                        <?php foreach ($post['tips'] as $tip): ?>
                        <li class="flex items-start">
                            <svg class="h-4 w-4 text-teal-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700 text-sm"><?php echo $tip; ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <div class="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg mb-6">
                    <div class="flex items-start">
                        <svg class="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                        </svg>
                        <p class="text-gray-700 text-sm font-medium"><?php echo $post['highlight']; ?></p>
                    </div>
                </div>
                
                <a href="#" class="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                    Read Full Article
                    <svg class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Career Journey?</h2>
        <p class="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Apply the insights from our blog posts and take the next step towards your dream career with our expert guidance.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="application.php" class="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
            </a>
            <a href="courses.php" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                View Courses
            </a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
