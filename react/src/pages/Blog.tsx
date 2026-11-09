import React from 'react';
import { BookOpen, TrendingUp, Users, Award, Target, Lightbulb, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      icon: Target,
      title: "Career Guidance: Your Roadmap to Success",
      excerpt: "Choosing the right career path is one of the most important decisions you will make. Learn how to identify your strengths and explore industry trends.",
      readTime: "5 min read",
      category: "Career Planning",
      tips: [
        "Identify your strengths and interests",
        "Explore industry trends and future opportunities",
        "Choose courses that boost your market value",
        "Get mentorship from industry experts"
      ],
      highlight: "Before choosing a course, research where the industry is heading. Technology, healthcare, and digital marketing are growing rapidly."
    },
    {
      icon: TrendingUp,
      title: "Skills Development: The Power of a Strong Skillset",
      excerpt: "In today's job market, your skillset defines your value. Whether it's technical skills or soft skills, developing the right abilities is crucial.",
      readTime: "7 min read",
      category: "Skill Building",
      tips: [
        "Soft skills like public speaking and leadership",
        "Domain-specific knowledge in IT, Science, Arts, Business",
        "Practical learning through workshops and internships",
        "Continuous skill enhancement and certification"
      ],
      highlight: "80% of job success depends on soft skills according to LinkedIn's Global Talent Trends report."
    },
    {
      icon: Users,
      title: "Interview Preparation: Clearing the Final Step",
      excerpt: "Facing an interview can be intimidating, but the right preparation leads to interview clearance. Master the art of professional presentation.",
      readTime: "6 min read",
      category: "Interview Success",
      tips: [
        "Resume building and LinkedIn profile optimization",
        "Mock interviews with industry experts",
        "Behavioral and technical question training",
        "Post-interview feedback and improvement"
      ],
      highlight: "Always research the company and practice common interview questions related to your field."
    },
    {
      icon: Award,
      title: "Placement Strategies: Turning Effort Into Offers",
      excerpt: "A strong placement strategy is not just about applying randomly — it's about being strategic and building the right professional network.",
      readTime: "8 min read",
      category: "Job Placement",
      tips: [
        "Aptitude training and skill assessment",
        "Campus-to-corporate transition sessions",
        "Employer tie-ups and direct referrals",
        "Building a winning profile for hiring"
      ],
      highlight: "Focus on building a professional network even before you graduate. Attend career fairs, workshops, and internships!"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-teal-100 p-3 rounded-2xl mr-4">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900">Blog & Insights</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Your Guide to Career Success: Tips, Strategies, and Real Stories
            </p>
            <p className="text-lg text-gray-500 max-w-5xl mx-auto">
              At Iyanthiran Edge, we are committed to shaping complete career journeys. Find valuable insights on building your skillset, mastering interviews, and achieving placement success.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                    <post.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-gray-900">Key Points:</h3>
                  {post.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-600 p-4 rounded-r-xl mb-6">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-teal-800 font-medium">{post.highlight}</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HR Services Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">HR Services for Students and Colleges</h2>
            <p className="text-xl text-teal-100">
              Bridging the gap between employers and job seekers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <BookOpen className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Custom Training Modules</h3>
              <p className="text-sm text-teal-100">Tailored programs for colleges</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <Users className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Campus Recruitment</h3>
              <p className="text-sm text-teal-100">Partnership programs</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <Target className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">HR Consulting</h3>
              <p className="text-sm text-teal-100">Skill development initiatives</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4 hover:bg-opacity-30 transition-all">
                <Award className="h-10 w-10 mx-auto text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Placement Support</h3>
              <p className="text-sm text-teal-100">Ready-to-hire skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Career Journey Starts Here</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're starting from scratch or looking to elevate your career, Iyanthiran Edge is your partner for every step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center space-x-3 text-teal-600">
              <Award className="h-6 w-6" />
              <span className="font-medium">Build your future with confidence</span>
            </div>
            <div className="flex items-center space-x-3 text-teal-600">
              <Target className="h-6 w-6" />
              <span className="font-medium">Prepare smartly for interview clearance</span>
            </div>
            <div className="flex items-center space-x-3 text-teal-600">
              <TrendingUp className="h-6 w-6" />
              <span className="font-medium">Walk a clear career path to success</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;