import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <img 
              src="/images/finallogotcs.png" 
              alt="The Concrete Story" 
              className="h-32 w-auto mb-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building your dreams with quality and precision. From initial structure to stunning finishing touches, we are your trusted partner in construction excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/veeoure_engineers?igsh=YjU5eDJ4Y2xxYWVq"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-amber-600 inline-block pb-1">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="group flex items-center text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-amber-600 inline-block pb-1">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">General Construction</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">House Renovation</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Architecture Design</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Interior Finishing</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-amber-600 inline-block pb-1">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-700 p-2 rounded shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-white text-sm font-semibold">Address:</span>
                  <p className="text-gray-400 text-sm">
                    HN-1, opposite to Goa luxury rental, Guirim, Bardez-Goa
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-700 p-2 rounded shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-white text-sm font-semibold">Phone:</span>
                  <p className="text-gray-400 text-sm">+917720011155</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-700 p-2 rounded shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="block text-white text-sm font-semibold">Email:</span>
                  <p className="text-gray-400 text-sm">info@theconcretestory.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-amber-600">The Concrete Story</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;