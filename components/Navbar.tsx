"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Portfolio" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (page: string) => {
    setActive(page);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
       
            <span className="ml-3 text-xl font-bold tracking-tight text-gray-900">
              Imad <span className="text-primary">Chikh</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${active === item.id ? "text-gray-900 border-b-2 border-blue-500" : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500"}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <i className={`fas ${open ? "fa-x" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
