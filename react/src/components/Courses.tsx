import React from 'react';
import { Code, Briefcase, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courseCategories = [
    {
      icon: Code,
      title: "IT and Computer Science Programs",
      color: "bg-blue-600",
      courses: [
        {
          name: "Python Programming Course",
          description: "Master Python for software development, AI, data analysis, and automation.",
          features: ["Hands-on coding practice", "Real-world projects", "Interview preparation", "Placement support"]
        },
        {
          name: "Java Programming Course",
          description: "Build strong foundations in Core and Advanced Java.",
          features: ["Industry-grade projects", "App development", "Backend systems", "Mock interviews"]
        },
        {
          name: "Full Stack Development Course",
          description: "Complete web development with modern technologies.",
          features: ["Frontend: HTML, CSS, JavaScript, React", "Backend: Node.js, Express, MongoDB", "Complete web app projects", "100% Placement assistance"]
        }
      ]
    },
    {
      icon: Briefcase,
      title: "Business and Marketing Programs",
      color: "bg-teal-600",
      courses: [
        {
          name: "Business Management Essentials",
          description: "Comprehensive business strategy and management training.",
          features: ["Business Strategy & CRM", "Financial Basics", "Entrepreneurial Skills", "Corporate readiness training"]
        },
        {
          name: "Digital Marketing and SEO Course",
          description: "Master digital marketing across all platforms.",
          features: ["SEO, SEM, Google Ads", "Social Media Marketing", "Content Strategy & Analytics", "Live campaigns & certification"]
        },
        {
          name: "Branding & Marketing Strategy",
          description: "Learn branding principles and positioning strategies.",
          features: ["Brand positioning & storytelling", "Result-driven marketing strategies", "Real-world campaigns", "Brand identity development"]
        },
        {
          name: "LinkedIn & Personal Branding (100-Day Program)",
          description: "Build your professional brand and online presence.",
          features: ["LinkedIn profile optimization", "Personal brand development", "SEO for personal branding", "100-day action plan"]
        }
      ]
    },
    {
      icon: BookOpen,
      title: "Science and Literature Career Pathways",
      color: "bg-purple-600",
      courses: [
        {
          name: "Physics, Chemistry, Mathematics Core Program",
          description: "Advanced concept mastery for academic and research excellence.",
          features: ["Concept mastery", "Research excellence", "Scientific communication", "Academic preparation"]
        },
        {
          name: "Literature and Scientific Writing with SEO",
          description: "Professional writing and content creation skills.",
          features: ["Content writing & editing", "Research articles", "SEO for publishing", "Portfolio building"]
        }
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Career Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading courses designed for 100% placement support. Choose your path to success.
          </p>
        </div>

        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${category.color} text-white p-8`}>
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h4>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Choose Iyanthiran Edge?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Domain-Expert Trainers</h4>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Real-Time Internships</h4>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Resume Building</h4>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">80%+ Success Rate</h4>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Affordable Pricing</h4>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ready to Build Your Career? Enroll Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;