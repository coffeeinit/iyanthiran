<?php
include 'includes/functions.php';
include 'includes/header.php';

// Events data
$eventsData = [
    [
        'id' => 1,
        'type' => 'past',
        'visibility' => true,
        'title' => 'Graphic Designer Hiring',
        'description' => 'Join Raphael Creatives as a Graphic Designer. Work on exciting projects, collaborate with a passionate team, and grow your career. Strong Photoshop & Illustrator skills required.',
        'date' => 'September 13, 2025',
        'image' => 'assets/events/raphaeliyanthrian.jpg',
        'icon' => 'Users',
        'registerUrl' => 'mailto:careers@iyanthiran.com',
        'knowMoreUrl' => 'https://www.instagram.com/p/DOJCinSE337/'
    ],
    [
        'id' => 2,
        'type' => 'past',
        'visibility' => true,
        'title' => 'VLSI Design Engineers Hiring',
        'description' => 'TenSemi (Powered by Iyanthiran) is hiring VLSI Design Engineers. Walk-in interview on 13th Sept 2025 at Vaazhai Incubator, SVCET Campus. RTL Design, Verification skills, and EDA tools knowledge required.',
        'date' => 'September 13, 2025',
        'image' => 'assets/events/tensemiiyanthiran.jpg',
        'icon' => 'Users',
        'registerUrl' => 'mailto:careers@iyanthiran.com',
        'knowMoreUrl' => 'https://www.instagram.com/p/DOJB19GE8MR/'
    ],
    [
        'id' => 3,
        'type' => 'past',
        'visibility' => true,
        'title' => 'E-Commerce Insights Session',
        'description' => 'Engaging session on E-Commerce delivered for students of P.A.C.R. Polytechnic College. Highlighted how e-commerce is shaping future business and creating new career opportunities.',
        'date' => 'August 30, 2025',
        'image' => '',
        'icon' => 'BookOpen',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DN-o21Ak5Pp/'
    ],
    [
        'id' => 4,
        'type' => 'past',
        'visibility' => true,
        'title' => 'Fabless Chip Design Guest Lecture',
        'description' => 'Guest lecture at Ramco Institute of Technology on Fabless Chip Design and opportunities for young engineers. Featuring Mr. Ananthan Ayyasamy, Founder & CEO of TenSemi.',
        'date' => 'August 23, 2025',
        'image' => '',
        'icon' => 'Microchip',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DNsmOJZ5ll_/'
    ],
    [
        'id' => 5,
        'type' => 'past',
        'visibility' => true,
        'title' => 'Future of AI: Beyond Prompt Engineering',
        'description' => 'Impactful session at Ramco Institute of Technology exploring how AI is moving beyond prompt-based interactions into real-world applications and future career skills.',
        'date' => 'August 21, 2025',
        'image' => '',
        'icon' => 'Cpu',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DNnnJLqTqXK/'
    ],
    [
        'id' => 6,
        'type' => 'past',
        'visibility' => true,
        'title' => 'ITI Professionals Job Opportunity',
        'description' => 'Job openings for skilled ITI professionals at Chettinad Cements. Positions include Fitter, Welder, Electrician, Instrument Technician, and Turner with accommodation and benefits.',
        'date' => 'August 9, 2025',
        'image' => '',
        'icon' => 'Briefcase',
        'registerUrl' => 'mailto:iyanthiranedge@gmail.com',
        'knowMoreUrl' => 'https://www.instagram.com/p/DNIiZjpzNjN/'
    ],
    [
        'id' => 7,
        'type' => 'past',
        'visibility' => true,
        'title' => 'College First Year Guidance Session',
        'description' => 'Inspiring session at Rajapalayam Rajus\' College sharing experiences and practical tips for freshers on navigating college life, handling pressure, and building confidence.',
        'date' => 'July 4, 2025',
        'image' => '',
        'icon' => 'GraduationCap',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DLr5RylTQBg/'
    ],
    [
        'id' => 8,
        'type' => 'past',
        'visibility' => true,
        'title' => 'Kovilpatti Women Entrepreneur Confluence',
        'description' => 'Participation in the inspiring event that brought together women entrepreneurs from across Tamil Nadu to celebrate women-led businesses and share success stories.',
        'date' => 'July 1, 2025',
        'image' => '',
        'icon' => 'Users',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DLPjKdQzViA/'
    ],
    [
        'id' => 9,
        'type' => 'past',
        'visibility' => true,
        'title' => 'Effective Communication Skills Workshop',
        'description' => 'High-energy session designed to help participants boost confidence, clarity, and connection in personal and professional conversations with practical tools and techniques.',
        'date' => 'June 29, 2025',
        'image' => '',
        'icon' => 'MessageCircle',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DLM-Rxbz1jO/'
    ],
    [
        'id' => 10,
        'type' => 'past',
        'visibility' => true,
        'title' => 'Digital Marketing Training for LIC Agents',
        'description' => 'Exclusive training tailored for LIC Agents to help insurance professionals thrive in the digital age with brand building, social media outreach, and lead generation strategies.',
        'date' => 'June 28, 2025',
        'image' => '',
        'icon' => 'TrendingUp',
        'registerUrl' => '',
        'knowMoreUrl' => 'https://www.instagram.com/p/DLKZfMezGL2/'
    ]
];

$liveEvents = array_filter($eventsData, function($ev) {
    return $ev['type'] === 'live' && $ev['visibility'];
});

$pastEvents = array_filter($eventsData, function($ev) {
    return $ev['type'] === 'past' && $ev['visibility'];
});
?>

<!-- Recent Events Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                Recent Events
                    </div>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Recent Events</h2>
            <p class="text-xl text-gray-700">Check out our latest workshops, hiring events, and educational sessions</p>
                </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php 
            // Show first 6 recent events
            $recentEvents = array_slice($pastEvents, 0, 6);
            if (empty($recentEvents)): ?>
            <div class="col-span-full text-center text-gray-500">No recent events available.</div>
            <?php else: ?>
                <?php foreach ($recentEvents as $ev): ?>
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div class="bg-gray-100 rounded-xl mb-7 flex items-center justify-center overflow-hidden">
                        <?php if (!empty($ev['image'])): ?>
                            <img src="<?php echo $ev['image']; ?>" alt="<?php echo $ev['title']; ?>" class="max-w-full max-h-80 object-contain rounded-xl" />
                        <?php else: ?>
                            <img src="https://placehold.co/600x400" alt="<?php echo $ev['title']; ?>" class="max-w-full max-h-80 object-contain rounded-xl" />
                        <?php endif; ?>
            </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3"><?php echo $ev['title']; ?></h3>
                    <p class="text-gray-700 mb-4 text-sm leading-relaxed"><?php echo $ev['description']; ?></p>
                    <div class="flex items-center text-sm text-gray-500 mb-2">
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span><?php echo $ev['date']; ?></span>
                    </div>
                    <div class="flex gap-2 mt-2">
                        <?php if (!empty($ev['registerUrl'])): ?>
                        <a href="<?php echo $ev['registerUrl']; ?>" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm">Contact</a>
                        <?php endif; ?>
                        <?php if (!empty($ev['knowMoreUrl'])): ?>
                        <a href="<?php echo $ev['knowMoreUrl']; ?>" target="_blank" rel="noopener noreferrer" class="border-2 border-teal-600 text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition-colors text-sm">View Details</a>
                        <?php endif; ?>
                </div>
            </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</section>

<!-- All Events Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-6">
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                All Events
                    </div>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">All Events</h2>
            <p class="text-xl text-gray-700">Complete list of our workshops, hiring events, and educational sessions</p>
                </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php if (empty($pastEvents)): ?>
            <div class="col-span-full text-center text-gray-500">No events available.</div>
            <?php else: ?>
                <?php foreach ($pastEvents as $ev): ?>
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div class="bg-gray-100 rounded-xl mb-7 flex items-center justify-center overflow-hidden">
                        <?php if (!empty($ev['image'])): ?>
                            <img src="<?php echo $ev['image']; ?>" alt="<?php echo $ev['title']; ?>" class="max-w-full max-h-80 object-contain rounded-xl" />
                        <?php else: ?>
                            <img src="https://placehold.co/600x400" alt="<?php echo $ev['title']; ?>" class="max-w-full max-h-80 object-contain rounded-xl" />
                        <?php endif; ?>
            </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3"><?php echo $ev['title']; ?></h3>
                    <p class="text-gray-700 mb-4 text-sm leading-relaxed"><?php echo $ev['description']; ?></p>
                    <div class="flex items-center text-sm text-gray-500 mb-2">
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span><?php echo $ev['date']; ?></span>
                    </div>
                    <div class="flex gap-2 mt-2">
                        <?php if (!empty($ev['registerUrl'])): ?>
                        <a href="<?php echo $ev['registerUrl']; ?>" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm">Contact</a>
                        <?php endif; ?>
                        <?php if (!empty($ev['knowMoreUrl'])): ?>
                        <a href="<?php echo $ev['knowMoreUrl']; ?>" target="_blank" rel="noopener noreferrer" class="border-2 border-teal-600 text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition-colors text-sm">View Details</a>
                        <?php endif; ?>
                </div>
            </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Stay Updated with Our Events</h2>
        <p class="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Don't miss out on our upcoming workshops, career fairs, and networking events. Join our community and stay ahead in your career journey.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="application.php" class="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Register for Events
            </a>
            <a href="contact.php" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                Contact Us
            </a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
