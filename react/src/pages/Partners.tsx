import { Handshake, Building, Users, Award, Target, CheckCircle, ArrowRight, Star, TrendingUp } from 'lucide-react';

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
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700"
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
      color: "bg-teal-600",
      gradient: "from-teal-600 to-teal-700"
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
      color: "bg-purple-600",
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-teal-100 p-3 rounded-2xl mr-4">
                <Handshake className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900">Partner With Us</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Build Careers. Build Futures. Build Success.
            </p>
            <p className="text-lg text-gray-500 max-w-5xl mx-auto">
              We invite colleges, corporates, and institutions to join hands with us to transform education and employment opportunities across rural and urban regions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 mb-20 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Iyanthiran?</h2>
              <p className="text-xl text-gray-600">Your trusted partner in building career paths that lead to success</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">12,000+</h3>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">3,500+</h3>
                <p className="text-sm text-gray-600">Successful Placements</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Career-Focused</h3>
                <p className="text-sm text-gray-600">Skill-Building Programs</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Strong</h3>
                <p className="text-sm text-gray-600">Employer Networks</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Proven</h3>
                <p className="text-sm text-gray-600">Track Record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {partnershipOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${option.gradient} text-white p-10`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                      <option.icon className="h-10 w-10" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold">{option.title}</h2>
                      <p className="text-xl opacity-90 mt-2">{option.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                      <div className="space-y-4">
                        {option.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-4">
                            <div className="bg-teal-100 p-2 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-teal-600" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits for You</h3>
                      <div className="space-y-4 mb-8">
                        {option.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <Target className="h-5 w-5 text-blue-600" />
                            </div>
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-8 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                        Become a Partner
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Promise */}
      <section className="py-5 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partner Promise</h2>
            <p className="text-xl text-gray-300">When you partner with Iyanthiran, you get:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-4 hover:bg-opacity-20 transition-all">
                <CheckCircle className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Transparent Collaboration</h3>
              <p className="text-sm text-gray-300">Outcome-driven partnerships</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-4 hover:bg-opacity-20 transition-all">
                <Award className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">High-Quality Training</h3>
              <p className="text-sm text-gray-300">Expert career guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-4 hover:bg-opacity-20 transition-all">
                <Target className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Strategic Support</h3>
              <p className="text-sm text-gray-300">Industry-ready professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-4 hover:bg-opacity-20 transition-all">
                <Users className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">End-to-End HR Services</h3>
              <p className="text-sm text-gray-300">Hiring success guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Movement</h2>
          <p className="text-xl text-gray-600 mb-8">Ready to make a lasting impact?</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center space-x-3 text-teal-600">
              <Star className="h-6 w-6" />
              <span className="font-medium">Transform education outcomes</span>
            </div>
            <div className="flex items-center space-x-3 text-teal-600">
              <TrendingUp className="h-6 w-6" />
              <span className="font-medium">Build sustainable talent pools</span>
            </div>
            <div className="flex items-center space-x-3 text-teal-600">
              <Award className="h-6 w-6" />
              <span className="font-medium">Create lasting social impact</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become a Partner Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 border-2 border-teal-600 text-teal-600 font-bold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Schedule a Discussion
            </a>
          </div>
          
          <p className="text-xl text-gray-600 mt-8 font-medium">
            Together, let's build a better, brighter future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partners;