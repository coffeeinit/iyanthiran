import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Mail, Phone, Users, BookOpen, CreditCard } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Data Protection
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              At Iyanthiran Edge, we are committed to protecting your privacy and ensuring the security of your personal information while providing career guidance and educational services.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Your Privacy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Iyanthiran Edge Pvt Ltd ("we," "our," or "us") operates the career guidance platform at iyanthiran.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our Learning Management System (LMS), career guidance programs, and placement services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-teal-600" />
                Information We Collect
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Name, email address, phone number, and contact details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Educational background, career goals, and skill assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Resume, portfolio, and professional documents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Payment information for course enrollments and services</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Data</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Course progress, completion rates, and assessment scores</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Learning preferences and skill development tracking</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Interaction data with our LMS platform</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-teal-600" />
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Services</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Provide personalized career guidance</li>
                    <li>• Match you with relevant job opportunities</li>
                    <li>• Conduct skill assessments and recommendations</li>
                    <li>• Facilitate interview preparation and coaching</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Services</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Deliver course content through our LMS</li>
                    <li>• Track learning progress and provide feedback</li>
                    <li>• Issue certificates and credentials</li>
                    <li>• Provide technical support and assistance</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Processing</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Process course payments and transactions</li>
                    <li>• Manage subscription renewals</li>
                    <li>• Provide payment confirmations and receipts</li>
                    <li>• Handle refunds and billing inquiries</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Send course updates and notifications</li>
                    <li>• Provide customer support</li>
                    <li>• Share career opportunities and events</li>
                    <li>• Send marketing communications (with consent)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-teal-600" />
                Data Security & Protection
              </h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SSL encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Secure payment processing with PCI DSS compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular security audits and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access controls and authentication protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data backup and disaster recovery procedures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="h-6 w-6 mr-3 text-teal-600" />
                Payment Information & Billing
              </h2>
              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Processing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We use secure third-party payment processors (Razorpay, PayPal)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Payment information is encrypted and not stored on our servers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All transactions are processed in compliance with PCI DSS standards</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                <p className="text-gray-700 mb-3">
                  We offer refunds for course cancellations within 7 days of enrollment, subject to our terms and conditions. Refund processing may take 5-10 business days.
                </p>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do NOT Sell Your Data</h3>
                <p className="text-gray-700 mb-3">
                  Iyanthiran Edge does not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>With your explicit consent for placement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>With partner companies for job placements (anonymized when possible)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>When required by law or legal process</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>To protect our rights, property, or safety</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights & Choices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Access your personal data</li>
                    <li>• Update or correct information</li>
                    <li>• Download your data</li>
                    <li>• Delete your account</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Opt-out of marketing emails</li>
                    <li>• Manage notification settings</li>
                    <li>• Control data sharing preferences</li>
                    <li>• Request data portability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8">
                <p className="text-gray-700 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-700">privacy@iyanthiran.com</p>
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

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
