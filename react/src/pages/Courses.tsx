import React from 'react';
import { Code, Briefcase, BookOpen, ArrowRight, CheckCircle, Star, Clock, Users } from 'lucide-react';

const Courses = () => {
  const courseCategories = [
    {
      id: 'it',
      icon: Code,
      title: "IT and Computer Science Programs",
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      courses: [
        {
          name: "Python Programming Course",
          description: "Master Python for software development, AI, data analysis, and automation.",
          duration: "3-4 months",
          level: "Beginner to Advanced",
          features: ["Hands-on coding practice", "Real-world projects", "Interview preparation", "Placement support"],
          highlights: ["AI & Machine Learning", "Data Analysis", "Web Development", "Automation Scripts"]
        },
        {
          name: "Java Programming Course",
          description: "Build strong foundations in Core and Advanced Java.",
          duration: "4-5 months",
          level: "Beginner to Advanced",
          features: ["Industry-grade projects", "App development", "Backend systems", "Mock interviews"],
          highlights: ["Spring Framework", "Microservices", "Database Integration", "Enterprise Applications"]
        },
        {
          name: "Full Stack Development Course",
          description: "Complete web development with modern technologies.",
          duration: "6 months",
          level: "Intermediate to Advanced",
          features: ["Frontend: HTML, CSS, JavaScript, React", "Backend: Node.js, Express, MongoDB", "Complete web app projects", "100% Placement assistance"],
          highlights: ["MERN Stack", "RESTful APIs", "Database Design", "Deployment & DevOps"]
        }
      ]
    },
    {
      id: 'business',
      icon: Briefcase,
      title: "Business and Marketing Programs",
      color: "bg-teal-600",
      gradient: "from-teal-600 to-teal-700",
      courses: [
        {
          name: "Business Management Essentials",
          description: "Comprehensive business strategy and management training.",
          duration: "3 months",
          level: "Beginner to Intermediate",
          features: ["Business Strategy & CRM", "Financial Basics", "Entrepreneurial Skills", "Corporate readiness training"],
          highlights: ["Strategic Planning", "Team Leadership", "Financial Management", "Market Analysis"]
        },
        {
          name: "Digital Marketing and SEO Course",
          description: "Master digital marketing across all platforms.",
          duration: "2-3 months",
          level: "Beginner to Advanced",
          features: ["SEO, SEM, Google Ads", "Social Media Marketing", "Content Strategy & Analytics", "Live campaigns & certification"],
          highlights: ["Google Ads Certified", "Social Media Strategy", "Content Marketing", "Analytics & ROI"]
        },
        {
          name: "Branding & Marketing Strategy",
          description: "Learn branding principles and positioning strategies.",
          duration: "2 months",
          level: "Intermediate",
          features: ["Brand positioning & storytelling", "Result-driven marketing strategies", "Real-world campaigns", "Brand identity development"],
          highlights: ["Brand Identity", "Market Positioning", "Campaign Strategy", "Creative Development"]
        },
        {
          name: "LinkedIn & Personal Branding (100-Day Program)",
          description: "Build your professional brand and online presence.",
          duration: "100 days",
          level: "All Levels",
          features: ["LinkedIn profile optimization", "Personal brand development", "SEO for personal branding", "100-day action plan"],
          highlights: ["Profile Optimization", "Content Strategy", "Network Building", "Personal SEO"]
        }
      ]
    },
    {
      id: 'science',
      icon: BookOpen,
      title: "Science and Literature Career Pathways",
      color: "bg-purple-600",
      gradient: "from-purple-600 to-purple-700",
      courses: [
        {
          name: "Physics, Chemistry, Mathematics Core Program",
          description: "Advanced concept mastery for academic and research excellence.",
          duration: "4-6 months",
          level: "Intermediate to Advanced",
          features: ["Concept mastery", "Research excellence", "Scientific communication", "Academic preparation"],
          highlights: ["Research Methods", "Scientific Writing", "Lab Techniques", "Academic Publishing"]
        },
        {
          name: "Literature and Scientific Writing with SEO",
          description: "Professional writing and content creation skills.",
          duration: "3 months",
          level: "Intermediate",
          features: ["Content writing & editing", "Research articles", "SEO for publishing", "Portfolio building"],
          highlights: ["Technical Writing", "Content Strategy", "SEO Optimization", "Publishing Skills"]
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Industry-Leading Courses with 100% Placement Support
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Top Career Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Industry-leading courses designed for 100% placement support. Choose your path to success with expert-led training, real-time projects, and guaranteed career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {courseCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={category.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${category.gradient} text-white p-10`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-2xl mr-6">
                      <category.icon className="h-10 w-10" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold">{category.title}</h2>
                      <p className="text-xl opacity-90 mt-2">Professional training for industry success</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                            {course.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{course.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {course.level}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold text-gray-900">Course Features:</h4>
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.highlights.map((highlight, highlightIndex) => (
                              <span key={highlightIndex} className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Iyanthiran Edge?</h2>
            <p className="text-xl text-teal-100">Your success is our commitment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <CheckCircle className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Domain-Expert Trainers</h3>
              <p className="text-teal-100 text-sm">Industry professionals with real experience</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <CheckCircle className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Real-Time Internships</h3>
              <p className="text-teal-100 text-sm">Hands-on projects with live companies</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <CheckCircle className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Resume Building</h3>
              <p className="text-teal-100 text-sm">Professional profile development</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <CheckCircle className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">80%+ Success Rate</h3>
              <p className="text-teal-100 text-sm">Proven track record of placements</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <CheckCircle className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Affordable Pricing</h3>
              <p className="text-teal-100 text-sm">Quality education at accessible costs</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ready to Build Your Career? Enroll Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;