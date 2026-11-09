import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    return `font-medium transition-colors ${
      isActive(path)
        ? 'text-teal-600 border-b-2 border-teal-600 pb-1'
        : 'text-gray-700 hover:text-teal-600'
    }`;
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="Iyanthiran Edge"
                className="h-12 w-auto hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              About Us
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className={`flex items-center ${navLinkClass('/courses')}`}
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                  <Link
                    to="/courses"
                    className="block px-6 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium border-b border-gray-100"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    All Courses
                  </Link>
                  <Link
                    to="/courses#it"
                    className="block px-6 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    IT & Computer Science
                  </Link>
                  <Link
                    to="/courses#business"
                    className="block px-6 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Business & Marketing
                  </Link>
                  <Link
                    to="/courses#science"
                    className="block px-6 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Science & Literature
                  </Link>
                </div>
              )}
            </div>
            <Link to="/events" className={navLinkClass('/events')}>
              Events
            </Link>
         
            <Link to="/partners" className={navLinkClass('/partners')}>
              Partner With Us
            </Link>
            <Link to="/contact" className={navLinkClass('/contact')}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/application"
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Enroll Today
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${navLinkClass('/')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${navLinkClass('/about')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`${navLinkClass('/courses')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/events"
                className={`${navLinkClass('/events')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            
              <Link
                to="/partners"
                className={`${navLinkClass('/partners')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className={`${navLinkClass('/contact')} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/application"
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-teal-800 transition-all text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Enroll Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
