import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-8 border-b">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link to="/" className="text-2xl font-bold font-robotoSlab">
          KENNELBOSS
        </Link>
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
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
        } sm:flex sm:items-center sm:gap-x-[48px] text-[16px] font-[500] font-roboto cursor-pointer sm:static absolute left-0 right-0 top-16 bg-white sm:bg-transparent z-10 sm:z-auto p-4 sm:p-0`}
      >
        <span className="block sm:inline">Home</span>
        <span className="block sm:inline">Category</span>
        <span className="block sm:inline">About</span>
        <span className="block sm:inline">Contact</span>
      </div>

      <div className="hidden sm:block">
        <button className="bg-black text-white px-[28px] py-[12px] rounded-[6px] font-roboto">
          Request sent
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
