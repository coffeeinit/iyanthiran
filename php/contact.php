<?php
include 'includes/functions.php';
include 'includes/header.php';

// Handle form submission
$isSubmitted = false;
if ($_POST) {
    // Process form data here
    $isSubmitted = true;
}
?>

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Get in Touch
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p class="text-xl text-gray-700 max-w-4xl mx-auto">
                Ready to start your career journey? Get in touch with our experts for personalized guidance and support.
            </p>
        </div>
    </div>
</section>

<!-- Contact Information & Form -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
            <!-- Contact Information -->
            <div class="space-y-8">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                            <div class="bg-teal-100 p-3 rounded-xl">
                                <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900 mb-2">Office Address</h3>
                                <p class="text-gray-600">
                                    Vaazhai Incubator, Tenkasi, Tamil Nadu<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                            <div class="bg-teal-100 p-3 rounded-xl">
                                <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900 mb-2">Phone Number</h3>
                                <p class="text-gray-600">+91 9363923506</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                            <div class="bg-teal-100 p-3 rounded-xl">
                                <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900 mb-2">Email Address</h3>
                                <p class="text-gray-600">info@iyanthiran.com</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                            <div class="bg-teal-100 p-3 rounded-xl">
                                <svg class="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900 mb-2">Office Hours</h3>
                                <p class="text-gray-600">
                                    Monday – Saturday: 10:00 AM to 6:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Why Choose Us -->
                <div class="mt-12">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose Iyanthiran Edge?</h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <div class="bg-teal-100 p-2 rounded-lg">
                                <svg class="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span class="text-gray-700">Expert career guidance and mentorship</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-teal-100 p-2 rounded-lg">
                                <svg class="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span class="text-gray-700">Industry-relevant training programs</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-teal-100 p-2 rounded-lg">
                                <svg class="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span class="text-gray-700">100% placement assistance</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-teal-100 p-2 rounded-lg">
                                <svg class="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span class="text-gray-700">Personalized learning approach</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                <?php if ($isSubmitted): ?>
                <div class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Thank you! Your message has been sent successfully.
                </div>
                <?php endif; ?>

                <form method="POST" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your full name">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="your.email@example.com">
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="+91 98765 43210">
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                            <select id="subject" name="subject" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                                <option value="">Select a subject</option>
                                <option value="career-guidance">Career Guidance & Counseling</option>
                                <option value="course-enrollment">Course Enrollment & Training</option>
                                <option value="placement-support">Placement Support & Job Assistance</option>
                                <option value="internship-program">Internship Program Inquiry</option>
                                <option value="interview-preparation">Interview Preparation & Mock Tests</option>
                                <option value="skill-development">Skill Development Programs</option>
                                <option value="college-partnership">College Partnership & Collaboration</option>
                                <option value="corporate-training">Corporate Training & HR Services</option>
                                <option value="fees-payment">Fees & Payment Related</option>
                                <option value="technical-support">Technical Support & Website Issues</option>
                                <option value="feedback-complaint">Feedback & Complaints</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Tell us how we can help you..."></textarea>
                    </div>

                    <button type="submit" class="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center">
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Career Journey?</h2>
        <p class="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful professionals who have transformed their careers with our guidance and support.
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