import React from 'react';
import { Handshake, Building, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Partners = () => {
  const partnershipOptions = [
    {
      icon: Building,
      title: "College Partnerships",
      description: "Enhance your institution's placement success with our comprehensive programs",
      features: [
        "Placement-Ready Career Programs",
        "Free and Sponsored Internship Opportunities",
        "Final Year Employability Enhancement Training",
        "Customized Workshops (Soft Skills, Interview Prep, Aptitude)",
        "Annual Implant Training & Industrial Visits"
      ],
      benefits: [
        "Improve student employability",
        "Achieve higher placement rates",
        "Build reputation as a career-ready institution"
      ],
      color: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Corporate Partnerships",
      description: "Access trained, pre-screened candidates and reduce your hiring costs",
      features: [
        "Direct Access to Trained, Pre-Screened Candidates",
        "Tailored Recruitment Campaigns",
        "Internship-to-Placement Pipeline Programs",
        "Sponsored Skilling Events for Brand Promotion",
        "CSR-Driven Training Initiatives"
      ],
      benefits: [
        "Reduce hiring time and costs",
        "Hire candidates with right skillset",
        "Strengthen social responsibility footprint"
      ],
      color: "bg-teal-600"
    },
    {
      icon: Award,
      title: "Sponsorship Opportunities",
      description: "Create larger impact by sponsoring skill development initiatives",
      features: [
        "Skill Development Programs",
        "Rural Youth Career Guidance Camps",
        "Women's Career Readiness Workshops",
        "Specialized Certification Courses"
      ],
      benefits: [
        "Promote brand to thousands of students",
        "Get recognized as a change-maker",
        "Contribute to building sustainable talent pools"
      ],
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="h-8 w-8 text-teal-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Partner With Us</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Build Careers. Build Futures. Build Success.
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            We invite colleges, corporates, and institutions to join hands with us to transform education and employment opportunities across rural and urban regions.
          </p>
        </div>

        {/* Why Partner Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Partner with Iyanthiran?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-lg mb-4">
                <Users className="h-8 w-8 text-teal-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">12,000+</h4>
              <p className="text-sm text-gray-600">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-lg mb-4">
                <Award className="h-8 w-8 text-teal-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3,500+</h4>
              <p className="text-sm text-gray-600">Successful Placements</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-lg mb-4">
                <Target className="h-8 w-8 text-teal-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Career-Focused</h4>
              <p className="text-sm text-gray-600">Skill-Building Programs</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-lg mb-4">
                <Building className="h-8 w-8 text-teal-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Strong</h4>
              <p className="text-sm text-gray-600">Employer Networks</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-lg mb-4">
                <CheckCircle className="h-8 w-8 text-teal-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven</h4>
              <p className="text-sm text-gray-600">Track Record</p>
            </div>
          </div>
        </div>

        {/* Partnership Options */}
        <div className="space-y-8">
          {partnershipOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${option.color} text-white p-8`}>
                <div className="flex items-center mb-4">
                  <option.icon className="h-8 w-8 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{option.title}</h3>
                    <p className="text-lg opacity-90 mt-2">{option.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h4>
                    <div className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Benefits for You</h4>
                    <div className="space-y-3 mb-6">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <Target className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center group">
                      Become a Partner
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Promise */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Partner Promise</h3>
            <p className="text-xl text-gray-300">When you partner with Iyanthiran, you get:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Transparent Collaboration</h4>
              <p className="text-sm text-gray-300">Outcome-driven partnerships</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
                <Award className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">High-Quality Training</h4>
              <p className="text-sm text-gray-300">Expert career guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
                <Target className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Strategic Support</h4>
              <p className="text-sm text-gray-300">Industry-ready professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
                <Users className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">End-to-End HR Services</h4>
              <p className="text-sm text-gray-300">Hiring success guaranteed</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h3>
          <p className="text-xl text-gray-600 mb-8">Ready to make a lasting impact?</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Become a Partner Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
            >
              Schedule a Discussion
            </a>
          </div>
          
          <p className="text-lg text-gray-600 mt-8 font-medium">
            Together, let's build a better, brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;