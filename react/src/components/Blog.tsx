import React from 'react';
import { BookOpen, TrendingUp, Users, Award, Target, Lightbulb } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      icon: Target,
      title: "Career Guidance: Your Roadmap to Success",
      excerpt: "Choosing the right career path is one of the most important decisions you will make. Learn how to identify your strengths and explore industry trends.",
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
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-teal-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Blog & Insights</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Guide to Career Success: Tips, Strategies, and Real Stories
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-4xl mx-auto">
            At Iyanthiran Edge, we are committed to shaping complete career journeys. Find valuable insights on building your skillset, mastering interviews, and achieving placement success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <post.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{post.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
              
              <div className="space-y-3 mb-6">
                {post.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r-lg">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="text-teal-800 font-medium">{post.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HR Services Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">HR Services for Students and Colleges</h3>
            <p className="text-xl text-teal-100">
              Bridging the gap between employers and job seekers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <BookOpen className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Custom Training Modules</h4>
              <p className="text-sm text-teal-100">Tailored programs for colleges</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <Users className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Campus Recruitment</h4>
              <p className="text-sm text-teal-100">Partnership programs</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <Target className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">HR Consulting</h4>
              <p className="text-sm text-teal-100">Skill development initiatives</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                <Award className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Placement Support</h4>
              <p className="text-sm text-teal-100">Ready-to-hire skills</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Career Journey Starts Here</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're starting from scratch or looking to elevate your career, Iyanthiran Edge is your partner for every step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-teal-600">
              <Award className="h-5 w-5" />
              <span className="font-medium">Build your future with confidence</span>
            </div>
            <div className="flex items-center space-x-2 text-teal-600">
              <Target className="h-5 w-5" />
              <span className="font-medium">Prepare smartly for interview clearance</span>
            </div>
            <div className="flex items-center space-x-2 text-teal-600">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">Walk a clear career path to success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;