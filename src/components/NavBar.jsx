import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
      className={`fixed top-0 w-full z-30 px-4 sm:px-8 py-4 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl flex justify-between items-center ">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to="/" className="text-2xl font-bold">
            Pick Me Pets
          </Link>
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
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:gap-x-12 text-base font-medium cursor-pointer sm:static absolute left-0 right-0 top-16 bg-white sm:bg-transparent z-20 transition-all duration-300 ease-in-out p-4 sm:p-0`}
        >
          <Link
            to="/"
            className="block sm:inline py-2 sm:py-0 hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            to="/category"
            className="block sm:inline py-2 sm:py-0 hover:text-gray-600"
          >
            Category
          </Link>
          <Link
            to="/about"
            className="block sm:inline py-2 sm:py-0 hover:text-gray-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block sm:inline py-2 sm:py-0 hover:text-gray-600"
          >
            Contact
          </Link>
        </div>

        <div className="hidden sm:block">
          <button className="bg-black text-white px-6 py-2.5 rounded-md  hover:bg-gray-800 transition-colors duration-200">
            Request sent
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
