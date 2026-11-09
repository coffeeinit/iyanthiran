import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    },
    {
      question: "Where is Iyanthiran located?",
      answer: "Our headquarters are based in Rajapalayam, Tamil Nadu. We also conduct workshops, implant training, and career events across multiple regions. You can find our location on Google Maps on the Contact Us page."
    },
    {
      question: "How can I get started?",
      answer: "Simple! Call us at our phone number, Email us at info@iyanthiran.com, Fill out the quick form on our Contact Us page, or Visit our office directly. Our team will guide you through the best options based on your career goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-teal-600 mr-3" />
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
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
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
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+91"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;