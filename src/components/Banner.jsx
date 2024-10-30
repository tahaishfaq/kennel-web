import React from "react";
import banner from "../assets/puppyCard.png";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl lg:py-24 md:py-14 py-14 lg:px-0 px-4">
      <div className="bg-[#A1ADAB] lg:p-8 rounded-[12px] flex lg:flex-row flex-col items-center justify-between lg:h-[219px] pb-4 px-4 gap-y-4 ">
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <img
            src={banner}
            alt="Puppies"
            className="lg:max-w-[374px] h-auto lg:mt-0 -mt-16"
          />
          <div>
            <h1 className="lg:text-4xl text-[25px] font-medium  text-black ">
              Let our Wizard help you! 🪄
            </h1>
            <p className="text-sm text-gray-700 mt-0 lg:mt-3">
              Find your perfect puppy with our interactive Puppy.
            </p>
          </div>
        </div>
        <button className="bg-black text-white py-[12px] px-[28px] text-sm rounded-[6px] w-full sm:w-32">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
