import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Category", href: "#" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

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
      className={`fixed top-0 w-full z-30 bg-white transition-shadow duration-300 font-poppins ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between sm:px-0 px-4 py-2">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[56px] h-[56px] rounded-lg transparent-logo"
          />
        </Link>
        <div className="flex justify-end items-center w-full ">
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation?.map((item) => (
              <Link
                to={item.href}
                key={item?.name}
                className="text-sm font-normal leading-6 text-black cursor-pointer"
              >
                {item?.name}
              </Link>
            ))}
          </div>
        </div>

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
      </div>
    </nav>
  );
};

export default NavBar;
