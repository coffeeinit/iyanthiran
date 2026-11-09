import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, CheckCircle, Star, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  #1 Career Guidance Platform in Tamil Nadu
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Career Guidance for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
                    Every Dream
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Career Success for Every Future. At Iyanthiran Edge, we believe that career success should not depend on where you come from, but where you are determined to go.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl mx-auto mb-3">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12,000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl mx-auto mb-3">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3,500+</div>
                  <div className="text-sm text-gray-600">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl mx-auto mb-3">
                    <Target className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">80%+</div>
                  <div className="text-sm text-gray-600">Placement Success</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Why Choose Iyanthiran Edge?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                      <p>Domain-Expert Trainers with Industry Experience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                      <p>Real-Time Internships & Hands-on Projects</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                      <p>Resume Building & Interview Coaching</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                      <p>100% Placement Support & Career Guidance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Empowering Rural Talents with Industry-Ready Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born with a mission to empower rural talents, we specialize in career guidance, helping students and graduates create a clear career path toward their dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Path Discovery</h3>
              <p className="text-gray-600 mb-4">Find the right career path based on your strengths and interests with expert guidance.</p>
              <Link to="/about" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Development</h3>
              <p className="text-gray-600 mb-4">Build a strong skillset with industry-relevant training and practical exposure.</p>
              <Link to="/courses" className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center">
                View Courses <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Placement Success</h3>
              <p className="text-gray-600 mb-4">Secure your dream job through focused placement support and interview coaching.</p>
              <Link to="/partners" className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center">
                Partner With Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Future is Not Just a Dream
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            With Iyanthiran, it's your destination. Start your career journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;