import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'campaigns', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Campaigns', href: '#campaigns', id: 'campaigns' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setActiveLink(id);
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white shadow-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO with gradient */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home', 'home')}
              className="group flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-amber-700 bg-clip-text text-transparent">
                DNC Foundation
              </h1>
            </a>

            {/* DESKTOP NAV LINKS */}
            <ul className="hidden md:flex gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeLink === link.id
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50/50'
                    }`}
                  >
                    {link.name}
                    {activeLink === link.id && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* DESKTOP CTA BUTTON */}
            <div className="hidden md:block">
              <button 
                onClick={() => {
                  const donateSection = document.querySelector('#donate');
                  if (donateSection) {
                    donateSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative group bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Donate Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* MOBILE MENU PANEL */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 transform md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">DNC Foundation</h2>
            </div>
          </div>

          {/* Mobile nav links */}
          <ul className="flex-1 p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    activeLink === link.id
                      ? 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA button */}
          <div className="p-6 border-t border-gray-100">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                const donateSection = document.querySelector('#donate');
                if (donateSection) {
                  donateSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Donate Now
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">Every donation counts. Thank you for your support!</p>
          </div>
        </div>
      </div>
    </>
  );
}