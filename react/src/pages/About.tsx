import React from 'react';
import { Target, Eye, CheckCircle, Users, Award, TrendingUp, Heart, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "What is Iyanthiran Edge and how can it help my career?",
      answer: "Iyanthiran is a career development organization that offers specialized career guidance, training programs, internships, and placement support. We help students and professionals identify the right career path, build necessary skills, clear interviews, and succeed in the corporate world."
    },
    {
      question: "What types of courses do you offer?",
      answer: "We offer a wide range of career-focused courses including Soft Skills & Communication Training, Interview Preparation and Interview Clearance Programs, Final-Year Placement Training, Domain-Specific Programs (IT, Science, Arts, Business), and Skill Development Workshops for Job Seekers and Graduates. Each course is designed to match real industry needs and support faster placement."
    },
    {
      question: "Who can enroll in your programs?",
      answer: "Our programs are open to College students, Fresh graduates, Job seekers, Working professionals seeking a career change, and Institutions looking for bulk training and HR services. Whether you're at the start of your career path or looking to upskill, we have a program tailored for you."
    },
    {
      question: "How do your internship programs work?",
      answer: "Our internships offer Real-time projects and hands-on learning, Free and Sponsored Internship Opportunities, Industry Exposure through Implant Training, and Certification upon successful completion. Internships are a stepping stone to build a strong skillset and enhance your placement opportunities."
    },
    {
      question: "What is the fee structure for your courses and services?",
      answer: "Fees vary depending on the program selected. We offer Free internships for selected students, Affordable career training programs, and Customized corporate packages for colleges and businesses. Please contact us directly for detailed fee structures and scholarship options."
    },
    {
      question: "How do you assist with interview preparation?",
      answer: "We provide complete interview clearance support through Resume and LinkedIn Profile Optimization, Mock Interviews with Industry Experts, Behavioral and Technical Interview Coaching, and Post-Interview Feedback for Continuous Improvement. Our focus is not just helping you attend interviews — it's about helping you clear them confidently."
    },
    {
      question: "What kind of placement support does Iyanthiran offer?",
      answer: "Placement support includes Employer tie-ups and corporate referrals, Aptitude and technical training, Campus-to-Corporate transition programs, and Placement readiness workshops. We are proud to have achieved an 80%+ placement success rate across our programs."
    },
    {
      question: "How can colleges and corporates collaborate with Iyanthiran?",
      answer: "We offer specialized HR services and partnership programs for colleges and companies including Placement training packages for students, Recruitment drives and talent acquisition support, Sponsored skill development events, and Customized learning and skilling initiatives. Visit our Partner With Us section to learn more or contact us directly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Empowering Dreams Since Our Inception
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Iyanthiran Edge</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Career Guidance for Every Dream. Career Success for Every Future. Born with a mission to empower rural talents, we specialize in career guidance, helping students and graduates create a clear career path toward their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Career Focused Training. Real Placement Results.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through specialized courses, real-time internships, and employer partnerships, we ensure that every learner becomes a professional ready to take on the corporate world. Our training is not just about learning — it's about launching a career.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <p className="text-gray-700">Find the right career path based on your strengths</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <p className="text-gray-700">Build a strong skillset with industry-relevant training</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <p className="text-gray-700">Prepare for interviews with confidence through practical coaching</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <p className="text-gray-700">Secure your dream job through focused placement support</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  At Iyanthiran Edge, we don't just teach — we guide, we prepare, and we place.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-teal-600 mb-2">12K+</div>
                  <div className="text-sm text-gray-600">Students Empowered</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-teal-600 mb-2">3.5K+</div>
                  <div className="text-sm text-gray-600">Career Placements</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-teal-600 mb-2">80%+</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Placement Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-xl leading-relaxed">
                To become the trusted platform for career guidance and career success for rural India.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 rounded-3xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Empower students with industry-needed skills
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Provide practical exposure for faster placements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Support interview clearance and career goals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Make quality education accessible for all
                </li>
              </ul>
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <p className="text-xl text-gray-600">
                Expert-led courses that build critical skills and sharpen your skillset for today's competitive world
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Expert-Led Training</h4>
                <p className="text-gray-600">Domain experts with industry experience guide you through practical learning</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Projects</h4>
                <p className="text-gray-600">Hands-on experience with industry-relevant projects and internships</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Placement Support</h4>
                <p className="text-gray-600">100% placement assistance with interview coaching and career guidance</p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-20">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Your future is not just a dream.
            </h3>
            <p className="text-2xl text-teal-600 font-medium">
              With Iyanthiran, it's your destination.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-teal-100 p-3 rounded-2xl mr-4">
                <HelpCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-gray-600">
              Your Questions. Our Answers.
            </p>
            <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
              We know that choosing the right partner for your career guidance, skill development, and career path planning is important. Here are answers to help you make informed decisions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-6 w-6 text-teal-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions section */}
          <div className="mt-16 text-center">
            <div className="bg-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg text-teal-100 mb-6">
                Our team is here to help you with any additional questions about our programs, partnerships, or services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us Today
                </a>
                <a
                  href="tel:+919787030811"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;