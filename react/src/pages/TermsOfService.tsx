import React from 'react';
import { FileText, Scale, CreditCard, BookOpen, Users, AlertTriangle, CheckCircle, Mail, Phone, Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Terms & Conditions
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Please read these Terms of Service carefully before using Iyanthiran Edge's career guidance platform, educational services, and Learning Management System (LMS).
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By accessing and using Iyanthiran Edge Pvt Ltd's services, including our website, Learning Management System (LMS), career guidance programs, and placement services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-teal-600" />
                Our Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Guidance & Training</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Personalized career counseling and guidance</li>
                    <li>• Skill assessment and development programs</li>
                    <li>• Interview preparation and coaching</li>
                    <li>• Resume building and LinkedIn optimization</li>
                    <li>• Placement assistance and job referrals</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Services</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Online courses and training programs</li>
                    <li>• Learning Management System (LMS) access</li>
                    <li>• Live and recorded training sessions</li>
                    <li>• Certification and credential programs</li>
                    <li>• Internship and project opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-teal-600" />
                User Accounts & Registration
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You must be at least 16 years old to create an account</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate and complete information during registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Maintain the security of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notify us immediately of any unauthorized use of your account</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Restrictions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>One account per person - multiple accounts are prohibited</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sharing account credentials with others is not allowed</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Creating accounts with false information will result in termination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="h-6 w-6 mr-3 text-teal-600" />
                Payment Terms & Billing
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Methods</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>We accept major credit cards, debit cards, and UPI payments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All payments are processed securely through Razorpay and PayPal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Payment information is encrypted and PCI DSS compliant</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing & Fees</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Course fees are displayed in Indian Rupees (INR) and are inclusive of taxes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prices may change with 30 days' notice to existing students</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Additional fees may apply for certification and placement services</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full refund available within 7 days of course enrollment</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Partial refund (50%) available within 14 days if less than 25% of course completed</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No refunds after 14 days or if more than 25% of course is completed</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Refund processing takes 5-10 business days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Course Access & LMS */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Access & Learning Management System</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">LMS Access Rights</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Access granted upon successful payment</li>
                    <li>• Course materials available for 12 months from enrollment</li>
                    <li>• Downloadable resources for offline study</li>
                    <li>• Progress tracking and assessment tools</li>
                    <li>• Certificate generation upon completion</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Restrictions</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• No sharing of course materials with non-enrolled users</li>
                    <li>• No reverse engineering or copying of content</li>
                    <li>• No commercial use of course materials</li>
                    <li>• Compliance with academic integrity policies</li>
                    <li>• Regular attendance and participation required</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Placement Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Placement Services & Job Referrals</h2>
              <div className="bg-teal-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Commitment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We provide placement assistance but cannot guarantee job placement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Job referrals are based on your skills, qualifications, and performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We maintain relationships with various employers and recruiters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Placement support is available for 6 months after course completion</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Student Responsibilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Maintain professional conduct during interviews and interactions</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate information in resumes and applications</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Respond promptly to placement opportunities and communications</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inform us of any job offers or employment status changes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-teal-600" />
                Intellectual Property Rights
              </h2>
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Content</h3>
                <p className="text-gray-700 mb-3">
                  All course materials, videos, documents, software, and other content provided through our platform are the intellectual property of Iyanthiran Edge Pvt Ltd and are protected by copyright and other intellectual property laws.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You may not copy, distribute, or modify our content without permission</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unauthorized use may result in legal action and account termination</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Content</h3>
                <p className="text-gray-700">
                  You retain ownership of content you submit to our platform. By submitting content, you grant us a non-exclusive license to use, display, and distribute your content for educational and promotional purposes.
                </p>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Uses</h2>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">You may not use our services for any unlawful or prohibited purpose, including:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Violating any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transmitting harmful, threatening, or offensive content</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Attempting to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Interfering with the proper functioning of our services</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Using our platform for commercial purposes without permission</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, Iyanthiran Edge shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Loss of profits, data, or business opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Service interruptions or technical difficulties</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Failure to secure employment or career advancement</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Third-party actions or content</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">We May Terminate</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• For violation of these terms</li>
                    <li>• For fraudulent or illegal activity</li>
                    <li>• For non-payment of fees</li>
                    <li>• At our sole discretion with notice</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">You May Terminate</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• At any time by contacting us</li>
                    <li>• Account deletion within 30 days</li>
                    <li>• Data export available upon request</li>
                    <li>• Refund eligibility per our policy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8">
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">legal@iyanthiran.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-700">+91 97870 30811</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 mb-2">Address</p>
                  <p className="text-gray-700">
                    Iyanthiran Edge Pvt Ltd<br />
                    Vaazhai Incubator, Tenkasi<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
