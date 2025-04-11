import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logowhite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkBaseClasses = "hover:text-[#aabe39] transition-colors duration-200";
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center h-[70px]">
        
        {/* Logo */}
        <Link to="/" className="flex items-center max-h-[60px]">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-base font-medium text-white">
          <li>
            <Link to="/" className={`${linkBaseClasses} ${isActive("/") ? "text-[#aabe39]" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className={linkBaseClasses}>
              About
            </a>
          </li>
          <li>
            <Link to="/join-us" className={`${linkBaseClasses} ${isActive("/join-us") ? "text-blue-400" : ""}`}>
              Join our Community
            </Link>
          </li>
          <li>
            <Link to="/join-us" className={`${linkBaseClasses} ${isActive("/join-us") ? "text-blue-400" : ""}`}>
            Entrepreneurship
            </Link>
          </li>
          <li>
            <Link to="/join-us" className={`${linkBaseClasses} ${isActive("/join-us") ? "text-blue-400" : ""}`}>
              Outcomes
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${linkBaseClasses} ${isActive("/contact") ? "text-blue-400" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <motion.svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                variants={{
                  open: { d: "M6 18L18 6M6 6l12 12" },
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pt-2 pb-4 bg-white/10 backdrop-blur-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 text-white text-base font-medium">
              <Link to="/" onClick={() => setIsOpen(false)} className={linkBaseClasses}>
                Home
              </Link>
              <a href="#about" onClick={() => setIsOpen(false)} className={linkBaseClasses}>
                About
              </a>
              <Link to="/join-us" onClick={() => setIsOpen(false)} className={linkBaseClasses}>
                Join Us
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={linkBaseClasses}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
