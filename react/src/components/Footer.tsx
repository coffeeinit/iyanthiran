import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src="/assets/logo.png"
                alt="Iyanthiran Edge" 
                className="h-12 w-auto brightness-0 invert hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
            Skill and Business Development for Rural Youth
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iyanthiranedge" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l
                -1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/></svg>
              </a>
       
              </div>
           </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <a href="/EventsAdmin" className="hover:text-teal-600 transition-colors">Events Admin</a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses#it" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/courses#it" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link to="/courses#it" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses#business" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Digital Marketing & SEO
                </Link>
              </li>
              <li>
                <Link to="/courses#business" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Business Management
                </Link>
              </li>
              <li>
                <Link to="/courses#business" className="text-gray-300 hover:text-teal-400 transition-colors">
                  LinkedIn & Personal Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Vaazhai Incubator, Tenkasi, Tamil Nadu, India<br />
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300">+91 9363923506</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300">info@iyanthiran.com</p>
              </div>
              
            
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Iyanthiran Edge Pvt Ltd. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
             
              <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              <span className="text-teal-400 font-medium">Iyanthiran Edge:</span> Your future is not just a dream. With Iyanthiran, it's your destination.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;