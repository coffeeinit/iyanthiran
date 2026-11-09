import React from 'react';
import { ArrowRight, Users, Award, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Career Guidance for{' '}
                <span className="text-teal-600">Every Dream</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Career Success for Every Future. At Iyanthiran Edge, we believe that career success should not depend on where you come from, but where you are determined to go.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">12,000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">3,500+</div>
                <div className="text-sm text-gray-600">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mx-auto mb-2">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">80%+</div>
                <div className="text-sm text-gray-600">Placement Success</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Iyanthiran Edge?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>Domain-Expert Trainers with Industry Experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>Real-Time Internships & Hands-on Projects</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>Resume Building & Interview Coaching</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>100% Placement Support & Career Guidance</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;