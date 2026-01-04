"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("portfolio");

  const navItems = [
    { id: "portfolio", label: "Portfolio", href: "#gallery" },
    { id: "about", label: "About Me", href: "#experience" },
    { id: "contact", label: "Contact", href: "#connect" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Navbar Background with blur and border */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm"></div>

      {/* Navbar Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("portfolio", "#gallery")}
              className="flex items-center group transition-all duration-300"
            >
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gray-900">Imad</span>
                <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                  Chikh
                </span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 ${
                    activeSection === item.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                  style={{ transformOrigin: "left" }}
                ></span>

                {/* Hover underline */}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gray-300 transition-all duration-300 ${
                    activeSection === item.id ? "opacity-0" : "opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left" }}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isOpen ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span
                  className={`h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 right-0 md:hidden bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.href)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              } ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-50 to-violet-50 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
