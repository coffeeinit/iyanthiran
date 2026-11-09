import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Iyanthiran Edge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born with a mission to empower rural talents, we specialize in career guidance, helping students and graduates create a clear career path toward their dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Career Focused Training. Real Placement Results.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through specialized courses, real-time internships, and employer partnerships, we ensure that every learner becomes a professional ready to take on the corporate world. Our training is not just about learning — it's about launching a career.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Find the right career path based on your strengths</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Build a strong skillset with industry-relevant training</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Prepare for interviews with confidence through practical coaching</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Secure your dream job through focused placement support</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h4>
              <p className="text-gray-600">
                At Iyanthiran Edge, we don't just teach — we guide, we prepare, and we place.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">12K+</div>
                <div className="text-sm text-gray-600">Students Empowered</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">3.5K+</div>
                <div className="text-sm text-gray-600">Career Placements</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">80%+</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Placement Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-teal-600 text-white p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To become the trusted platform for career guidance and career success for rural India.
            </p>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Empower students with industry-needed skills
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Provide practical exposure for faster placements
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Support interview clearance and career goals
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Make quality education accessible for all
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            Your future is not just a dream.
          </p>
          <p className="text-xl text-teal-600 font-medium">
            With Iyanthiran, it's your destination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;