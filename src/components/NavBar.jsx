import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <div className="flex items-center gap-x-14">
        <Link to="/" className="text-2xl font-bold font-robotoSlab">KENNELBOSS</Link>
        <div className="flex items-center gap-x-[48px] text-[16px] font-[500] font-roboto">
          <span className="">Home</span>
          <span className="">Category</span>
          <span className="">About</span>
          <span className="">Contact</span>
        </div>
      </div>
      <button className="bg-black text-white px-[28px] py-[12px] rounded-[6px] font-roboto">
        Request sent
      </button>
    </nav>
  );
};

export default NavBar;
