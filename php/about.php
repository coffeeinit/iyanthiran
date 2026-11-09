<?php
include 'includes/functions.php';
include 'includes/header.php';

// FAQ data
$faqs = [
    [
        'question' => 'What is Iyanthiran Edge and how can it help my career?',
        'answer' => 'Iyanthiran is a career development organization that offers specialized career guidance, training programs, internships, and placement support. We help students and professionals identify the right career path, build necessary skills, clear interviews, and succeed in the corporate world.'
    ],
    [
        'question' => 'What types of courses do you offer?',
        'answer' => 'We offer a wide range of career-focused courses including Soft Skills & Communication Training, Interview Preparation and Interview Clearance Programs, Final-Year Placement Training, Domain-Specific Programs (IT, Science, Arts, Business), and Skill Development Workshops for Job Seekers and Graduates. Each course is designed to match real industry needs and support faster placement.'
    ],
    [
        'question' => 'Who can enroll in your programs?',
        'answer' => 'Our programs are open to College students, Fresh graduates, Job seekers, Working professionals seeking a career change, and Institutions looking for bulk training and HR services. Whether you\'re at the start of your career path or looking to upskill, we have a program tailored for you.'
    ],
    [
        'question' => 'How do your internship programs work?',
        'answer' => 'Our internships offer Real-time projects and hands-on learning, Free and Sponsored Internship Opportunities, Industry Exposure through Implant Training, and Certification upon successful completion. Internships are a stepping stone to build a strong skillset and enhance your placement opportunities.'
    ],
    [
        'question' => 'What is the fee structure for your courses and services?',
        'answer' => 'Fees vary depending on the program selected. We offer Free internships for selected students, Affordable career training programs, and Customized corporate packages for colleges and businesses. Please contact us directly for detailed fee structures and scholarship options.'
    ],
    [
        'question' => 'How do you assist with interview preparation?',
        'answer' => 'We provide complete interview clearance support through Resume and LinkedIn Profile Optimization, Mock Interviews with Industry Experts, Behavioral and Technical Interview Coaching, and Post-Interview Feedback for Continuous Improvement. Our focus is not just helping you attend interviews — it\'s about helping you clear them confidently.'
    ],
    [
        'question' => 'What kind of placement support does Iyanthiran offer?',
        'answer' => 'Placement support includes Employer tie-ups and corporate referrals, Aptitude and technical training, Campus-to-Corporate transition programs, and Placement readiness workshops. We are proud to have achieved an 80%+ placement success rate across our programs.'
    ],
    [
        'question' => 'How can colleges and corporates collaborate with Iyanthiran?',
        'answer' => 'We offer specialized HR services and partnership programs for colleges and companies including Placement training packages for students, Recruitment drives and talent acquisition support, Sponsored skill development events, and Customized learning and skilling initiatives. Visit our Partner With Us section to learn more or contact us directly.'
    ]
];
?>

<!-- Hero Section -->
<section class="py-5 bg-gradient-to-br from-teal-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                About Our Mission
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">About Iyanthiran Edge</h1>
            <p class="text-xl text-gray-600">Transforming lives through Education and Career Guidance.</p>

            <p class="text-xl text-gray-700 max-w-4xl mx-auto">
                We believe every individual deserves equal opportunities to succeed in their chosen career path.
            </p>
        </div>
    </div>
</section>

<!-- Vision & Mission -->
<section class="py-5 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8 mb-20">
            <div class="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-10 rounded-3xl shadow-xl">
                <div class="flex items-center mb-6">
                    <div class="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold">Our Vision</h3>
                </div>
                <p class="text-xl leading-relaxed">
                    To become the trusted platform for career guidance and career success for rural India.
                </p>
            </div>
            
            <div class="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 rounded-3xl shadow-xl">
                <div class="flex items-center mb-6">
                    <div class="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold">Our Mission</h3>
                </div>
                <ul class="space-y-4 text-lg">
                    <li class="flex items-start">
                        <span class="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Empower students with industry-needed skills
                    </li>
                    <li class="flex items-start">
                        <span class="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Provide practical exposure for faster placements
                    </li>
                    <li class="flex items-start">
                        <span class="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Support interview clearance and career goals
                    </li>
                    <li class="flex items-start">
                        <span class="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        Make quality education accessible for all
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="py-5 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-50 transition-all duration-200">
                        <div class="bg-teal-600 p-2 rounded-lg flex-shrink-0">
                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Industry Expert Trainers</h4>
                            <p class="text-gray-600 text-sm">Learn from professionals with real-world experience</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-50 transition-all duration-200">
                        <div class="bg-teal-600 p-2 rounded-lg flex-shrink-0">
                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Hands-on Projects</h4>
                            <p class="text-gray-600 text-sm">Real-time internships and practical experience</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-50 transition-all duration-200">
                        <div class="bg-teal-600 p-2 rounded-lg flex-shrink-0">
                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">100% Placement Support</h4>
                            <p class="text-gray-600 text-sm">Dedicated placement assistance and interview coaching</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-50 transition-all duration-200">
                        <div class="bg-teal-600 p-2 rounded-lg flex-shrink-0">
                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-1">Career Guidance</h4>
                            <p class="text-gray-600 text-sm">Personalized career path discovery and mentoring</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="py-5 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="text-4xl font-bold text-teal-600 mb-2">12,000+</div>
                <div class="text-gray-600">Students Trained</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-bold text-teal-600 mb-2">3,500+</div>
                <div class="text-gray-600">Successful Placements</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-bold text-teal-600 mb-2">80%+</div>
                <div class="text-gray-600">Placement Success Rate</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-bold text-teal-600 mb-2">50+</div>
                <div class="text-gray-600">Partner Companies</div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Start Your Career Journey?</h2>
        <p class="text-xl text-teal-100 mb-8">
            Join thousands of successful students who have transformed their lives with Iyanthiran Edge.
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
                href="tel:+919787030811"
                class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
                Call Us Now
            </a>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p class="text-xl text-gray-600">Get answers to common questions about our programs and services</p>
        </div>
        
        <div class="space-y-4">
            <?php foreach ($faqs as $index => $faq): ?>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                    class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onclick="toggleFAQ(<?php echo $index; ?>)"
                >
                    <span class="text-lg font-medium text-gray-900"><?php echo $faq['question']; ?></span>
                    <svg 
                        class="h-5 w-5 text-teal-600 transform transition-transform duration-200" 
                        id="faq-arrow-<?php echo $index; ?>"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div 
                    class="px-6 pb-4 text-gray-600 leading-relaxed hidden" 
                    id="faq-answer-<?php echo $index; ?>"
                >
                    <?php echo $faq['answer']; ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
let openFAQ = 0; // First FAQ is open by default

function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const arrow = document.getElementById(`faq-arrow-${index}`);
    
    if (openFAQ === index) {
        // Close current FAQ
        answer.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
        openFAQ = null;
    } else {
        // Close previously open FAQ
        if (openFAQ !== null) {
            const prevAnswer = document.getElementById(`faq-answer-${openFAQ}`);
            const prevArrow = document.getElementById(`faq-arrow-${openFAQ}`);
            prevAnswer.classList.add('hidden');
            prevArrow.style.transform = 'rotate(0deg)';
        }
        
        // Open new FAQ
        answer.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
        openFAQ = index;
    }
}

// Initialize first FAQ as open
document.addEventListener('DOMContentLoaded', function() {
    const firstAnswer = document.getElementById('faq-answer-0');
    const firstArrow = document.getElementById('faq-arrow-0');
    if (firstAnswer && firstArrow) {
        firstAnswer.classList.remove('hidden');
        firstArrow.style.transform = 'rotate(180deg)';
    }
});
</script>

<?php include 'includes/footer.php'; ?>
