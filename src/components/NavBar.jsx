import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/favicon.jpg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect scroll and add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 px-4 sm:px-8 py-2 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-x-10">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[56px] h-[56px] rounded-lg" />
          </Link>
          <div className="hidden sm:flex items-center gap-x-8 text-[16px] font-normal cursor-pointer">
            <Link
              to="/"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Home
            </Link>
            {/* <Link
              to="/category"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Category
            </Link> */}
            <Link
              to="/about-us"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-gray-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-black" />
            ) : (
              <FaBars className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:hidden absolute left-0 right-0 top-16 bg-white z-20 transition-all duration-300 ease-in-out p-4 shadow-md`}
        >
          <Link
            to="/"
            className="block py-2 hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>
          {/* <Link
            to="/category"
            className="block py-2 hover:text-gray-600 transition-colors duration-200"
          >
            Category
          </Link> */}
          <Link
            to="/about-us"
            className="block py-2 hover:text-gray-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="block py-2 hover:text-gray-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button */}
        {/* <div className="hidden sm:block">
          <button className="bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors duration-200">
            Request sent
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
