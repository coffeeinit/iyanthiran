import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,  
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section 
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4 mr-2" />
              We're Here to Help You Succeed
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Let's Build Career Success Together
            </p>
            <p className="text-lg text-gray-500 max-w-5xl mx-auto">
              Whether you need expert career guidance, tailored HR services, or placement support — we are here for you.
            </p>
          </div>
        </div>
      </section>*/}

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-600">
                        Vaazhai Incubator, Tenkasi, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
                      <p className="text-gray-600">+91 97870 30811</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email Address</h3>
                      <p className="text-gray-600">info@iyanthiran.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday – Saturday: 10:00 AM to 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-3 text-xl">Visit Our Website</h3>
                <a 
                  href="https://www.iyanthiran.com" 
                  className="text-teal-600 hover:text-teal-700 font-medium text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.iyanthiran.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Contact Form</h2>
              <p className="text-gray-600 mb-8">
                Have a question or ready to get started? Fill out the form below and our team will get back to you within 24 hours!
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Thank you! We'll get back to you within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-700 mb-3">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="courses">Courses</option>
                    <option value="internships">Internships</option>
                    <option value="hr-services">HR Services</option>
                    <option value="college-partnership">College Partnership</option>
                    <option value="corporate-hiring">Corporate Hiring</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-8 rounded-xl font-bold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Find Us on the Map</h2>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-80 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <p className="text-gray-600 text-xl font-medium">Interactive map will be embedded here</p>
              <p className="text-gray-500 mt-2">Iyanthiran Edge Pvt Ltd, Rajapalayam, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Iyanthiran Edge?</h2>
            <p className="text-xl text-teal-100">Trusted by thousands of students and professionals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 mb-4">
                <Users className="h-12 w-12 mx-auto text-white mb-4" />
                <div className="text-4xl font-bold text-white mb-2">12,000+</div>
                <div className="text-teal-100">Students Empowered</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 mb-4">
                <Award className="h-12 w-12 mx-auto text-white mb-4" />
                <div className="text-4xl font-bold text-white mb-2">3,500+</div>
                <div className="text-teal-100">Career Placements</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-8 mb-4">
                <CheckCircle className="h-12 w-12 mx-auto text-white mb-4" />
                <div className="text-4xl font-bold text-white mb-2">80%+</div>
                <div className="text-teal-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Build Your Career Path Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether it's your first step towards a career or your next step towards success, Iyanthiran is ready to walk with you.
          </p>
          <p className="text-lg text-teal-600 font-medium">
            Contact us today and let's create success stories together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;