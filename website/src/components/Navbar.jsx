import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Download } from "lucide-react";

const PHONE_NUMBER = "+917720011155"; 

const Navbar = () => {

  const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:The Concrete Story
ORG:The Concrete Story
TEL;TYPE=WORK:+917720011155
EMAIL:info@theconcretestory.in
URL:https://theconcretestory.com
ADR:;;Goa, India;;;;
END:VCARD`;

const downloadVCard = () => {
  const blob = new Blob([VCARD], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "The_Concrete_Story.vcf";
  a.click();

  URL.revokeObjectURL(url);
};
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/finallogotcs.png" 
              alt="The Concrete Story Logo" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-5">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={cn(
        "text-sm font-semibold transition-colors relative group",
        location.pathname === link.path
          ? "text-blue-800"
          : "text-gray-700 hover:text-blue-800"
      )}
    >
      {link.label}

      {location.pathname === link.path && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  ))}

  {/* Download vCard */}
  <button
    onClick={downloadVCard}
    className="flex items-center gap-2 border border-amber-600 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition"
  >
    <Download size={18} />
    <span className="text-sm font-semibold">
      Save VCard
    </span>
  </button>

  {/* Call Button */}
  <a
    href={`tel:${PHONE_NUMBER}`}
    className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900 transition"
  >
    <Phone size={18} />
    <span className="text-sm font-semibold">
      {PHONE_NUMBER}
    </span>
  </a>
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block text-base font-semibold transition-colors',
                    location.pathname === link.path
                      ? 'text-blue-800'
                      : 'text-gray-700 hover:text-blue-800'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* 📞 Mobile Call Button */}
              <div className="flex items-center gap-3">

  {/* Download vCard */}
  <button
    onClick={downloadVCard}
    className="flex items-center gap-2 border border-amber-600 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition"
  >
    <Download size={18} />
    <span className="text-sm font-semibold">
      Save VCard
    </span>
  </button>

  

  {/* Call Button */}
  <a
    href={`tel:${PHONE_NUMBER}`}
    className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900 transition"
  >
    <Phone size={18} />
    <span className="text-sm font-semibold">
      {PHONE_NUMBER}
    </span>
  </a>

</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
