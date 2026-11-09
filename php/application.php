<?php
include 'includes/functions.php';
include 'includes/header.php';

// Handle form submission
$isSubmitted = false;
if ($_POST) {
    // Process form data here
    $isSubmitted = true;
}

// Load applications data
$applicationsData = json_decode(file_get_contents('applications.json'), true);
$applications = $applicationsData['applications'] ?? [];

// Filter applications based on search and status
$filteredApplications = $applications;
if (isset($_GET['search']) && !empty($_GET['search'])) {
    $searchTerm = strtolower($_GET['search']);
    $filteredApplications = array_filter($applications, function($app) use ($searchTerm) {
        return strpos(strtolower($app['name']), $searchTerm) !== false ||
               strpos(strtolower($app['email']), $searchTerm) !== false ||
               strpos(strtolower($app['course'] ?? ''), $searchTerm) !== false;
    });
}

if (isset($_GET['status']) && $_GET['status'] !== 'all') {
    $statusFilter = $_GET['status'];
    $filteredApplications = array_filter($filteredApplications, function($app) use ($statusFilter) {
        return $app['status'] === $statusFilter;
    });
}
?>

    <!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <div class="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Walk-in Interview Applications
            </div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Apply for Walk-in Interviews</h1>
            <p class="text-xl text-gray-700 max-w-4xl mx-auto">
                Submit your application for our walk-in interview opportunities. Join us at our Vaazhai Incubator office for direct interviews and career guidance.
                </p>
            </div>
        </div>
    </section>

<!-- Application Form Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Application Form</h2>
                <p class="text-lg text-gray-600">Fill out the form below to apply for walk-in interviews</p>
            </div>

            <?php if ($isSubmitted): ?>
            <div class="mb-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                <svg class="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Thank you! Your application has been submitted successfully.
            </div>
        <?php endif; ?>

            <form method="POST" class="space-y-8" enctype="multipart/form-data">
                <!-- Personal Information -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg class="h-6 w-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Personal Information
                    </h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your full name">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="your.email@example.com">
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="+91 98765 43210">
                        </div>
                        <div>
                            <label for="photo" class="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                            <input type="file" id="photo" name="photo" accept="image/*" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                        </div>
                    </div>
                </div>

                <!-- Address Information -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg class="h-6 w-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Address Information
                    </h3>
                <div class="space-y-6">
                        <div>
                            <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
                            <textarea id="address" name="address" rows="3" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your complete address"></textarea>
                        </div>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div>
                                <label for="pincode" class="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                                <input type="text" id="pincode" name="pincode" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="600001">
                            </div>
                            <div>
                                <label for="state" class="block text-sm font-medium text-gray-700 mb-2">State *</label>
                                <input type="text" id="state" name="state" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Tamil Nadu">
                            </div>
                            <div>
                                <label for="district" class="block text-sm font-medium text-gray-700 mb-2">District *</label>
                                <input type="text" id="district" name="district" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Chennai">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education Information -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg class="h-6 w-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        </svg>
                        Education Information
                    </h3>
                <div class="space-y-6">
                    <!-- 10th Standard -->
                        <div class="border-l-4 border-teal-500 pl-6">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">10th Standard</h4>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div>
                                <label for="tenthSchool" class="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                                    <input type="text" id="tenthSchool" name="tenthSchool" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="School name">
                            </div>
                            <div>
                                <label for="tenthYear" class="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                                    <input type="text" id="tenthYear" name="tenthYear" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="2020">
                            </div>
                            <div>
                                <label for="tenthPercentage" class="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
                                    <input type="text" id="tenthPercentage" name="tenthPercentage" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="85.5">
                            </div>
                        </div>
                    </div>

                    <!-- 12th Standard -->
                        <div class="border-l-4 border-blue-500 pl-6">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">12th Standard</h4>
                        <div class="grid md:grid-cols-3 gap-4">
                            <div>
                                <label for="twelfthSchool" class="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                                    <input type="text" id="twelfthSchool" name="twelfthSchool" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="School name">
                            </div>
                            <div>
                                <label for="twelfthYear" class="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                                    <input type="text" id="twelfthYear" name="twelfthYear" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="2022">
                            </div>
                            <div>
                                <label for="twelfthPercentage" class="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
                                    <input type="text" id="twelfthPercentage" name="twelfthPercentage" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="88.7">
                            </div>
                        </div>
                    </div>

                    <!-- Graduation -->
                        <div class="border-l-4 border-purple-500 pl-6">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">Graduation</h4>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <label for="graduationCollege" class="block text-sm font-medium text-gray-700 mb-2">College/University</label>
                                    <input type="text" id="graduationCollege" name="graduationCollege" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="College name">
                            </div>
                            <div>
                                <label for="graduationCourse" class="block text-sm font-medium text-gray-700 mb-2">Course</label>
                                    <input type="text" id="graduationCourse" name="graduationCourse" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="B.Tech Computer Science">
                            </div>
                            <div>
                                <label for="graduationYear" class="block text-sm font-medium text-gray-700 mb-2">Year of Passing</label>
                                    <input type="text" id="graduationYear" name="graduationYear" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="2024">
                            </div>
                            <div>
                                    <label for="graduationPercentage" class="block text-sm font-medium text-gray-700 mb-2">CGPA/Percentage</label>
                                    <input type="text" id="graduationPercentage" name="graduationPercentage" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="8.5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills and Documents -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <svg class="h-6 w-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        Skills & Documents
                    </h3>
                <div class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                                <label for="skills" class="block text-sm font-medium text-gray-700 mb-2">Skills (comma-separated)</label>
                                <input type="text" id="skills" name="skills" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="React, Node.js, Python, SQL">
                        </div>
                        <div>
                            <label for="languages" class="block text-sm font-medium text-gray-700 mb-2">Languages Known</label>
                                <input type="text" id="languages" name="languages" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="English, Tamil, Hindi">
                    </div>
                </div>
                        <div>
                            <label for="resume" class="block text-sm font-medium text-gray-700 mb-2">Resume (PDF)</label>
                            <input type="file" id="resume" name="resume" accept=".pdf" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <button type="submit" class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-12 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center mx-auto">
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

<!-- Applications Management Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Application Management</h2>
            <p class="text-xl text-gray-700">View and manage submitted applications</p>
        </div>

        <!-- Search and Filter -->
        <div class="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                    <div class="relative">
                        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <input type="text" placeholder="Search applications..." class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    </div>
                </div>
                <div>
                    <select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                </div>
            </div>
            
            <!-- Applications Table -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <?php if (empty($filteredApplications)): ?>
                        <tr>
                            <td colspan="7" class="px-6 py-12 text-center text-gray-500">No applications found.</td>
                        </tr>
                        <?php else: ?>
                            <?php foreach ($filteredApplications as $app): ?>
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                                            <span class="text-sm font-medium text-teal-600"><?php echo strtoupper(substr($app['name'], 0, 2)); ?></span>
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900"><?php echo $app['name']; ?></div>
                                            <div class="text-sm text-gray-500"><?php echo $app['email']; ?></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="text-sm text-gray-900"><?php echo $app['course'] ?? 'Position not specified'; ?></span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900"><?php echo $app['graduationCourse'] ?? 'N/A'; ?></div>
                                    <div class="text-sm text-gray-500"><?php echo $app['graduationYear'] ?? ''; ?></div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex space-x-2">
                                        <?php if (!empty($app['resume'])): ?>
                                        <a href="#" class="text-teal-600 hover:text-teal-800 text-sm">Resume</a>
                                        <?php endif; ?>
                                        <?php if (!empty($app['documents'])): ?>
                                        <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">Documents</a>
                                        <?php endif; ?>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <?php
                                    $statusColors = [
                                        'pending' => 'bg-yellow-100 text-yellow-800',
                                        'shortlisted' => 'bg-green-100 text-green-800',
                                        'rejected' => 'bg-red-100 text-red-800'
                                    ];
                                    $statusColor = $statusColors[$app['status']] ?? 'bg-gray-100 text-gray-800';
                                    ?>
                                    <span class="px-2 py-1 text-xs font-semibold rounded-full <?php echo $statusColor; ?>">
                                        <?php echo ucfirst($app['status']); ?>
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <?php echo $app['appliedDate'] ?? 'N/A'; ?>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div class="flex space-x-2">
                                        <button class="text-teal-600 hover:text-teal-800">
                                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                            </button>
                                        <button class="text-green-600 hover:text-green-800">
                                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            </button>
                                        <button class="text-red-600 hover:text-red-800">
                                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Career Journey?</h2>
        <p class="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Join our walk-in interview program and take the first step towards your dream career. Our experts are here to guide you every step of the way.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#application-form" class="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
            </a>
            <a href="contact.php" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                Contact Us
            </a>
                </div>
            </div>
</section>

<?php include 'includes/footer.php'; ?>
