import React from "react";
import banner from "../assets/puppy-banner.png";
import banner2 from "../assets/banner-img.png";
import rect1 from "../assets/Rectangle 1.png";
import rect2 from "../assets/Rectangle 9.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl lg:py-24 md:py-14 py-14 sm:px-0 md:px-4 px-4">
      <div className="bg-[#D3F26A] lg:p-8 rounded-[12px] flex lg:flex-row flex-col items-center justify-between lg:h-[219px] pb-4 px-4 gap-y-4 ">
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <img
            src={banner}
            alt="Puppies"
            className="lg:max-w-[374px] h-auto lg:mt-0 -mt-16"
          />
          <div>
            <h1 className="lg:text-4xl text-[25px] font-semibold  text-black ">
              Let our Wizard help you! 🪄
            </h1>
            <p className="text-[16px] text-[#000000CC] mt-0 lg:mt-3">
              Find your perfect puppy with our interactive Puppy.
            </p>
          </div>
        </div>
        <button className="bg-black text-white py-[12px] px-[28px] text-sm rounded-[6px] w-full sm:w-32">
          Shop Now
        </button>
      </div>
    </div>
    // <div className="mx-auto max-w-7xl lg:py-24 md:py-14 py-8 lg:px-0 px-4">
    //   <div className="sm:bg-[#003459] bg-[#D4D0C9] rounded-[20px] sm:p-0 p-4">
    //     <div className="grid sm:grid-cols-2 grid-cols-1">
    //       <div className="flex items-end relative">
    //         <img src={rect1} alt="rect2" className="rounded-bl-[20px] sm:block hidden" />
    //         <img
    //           src={banner2}
    //           alt="Puppies"
    //           className="sm:max-w-[500px] absolute sm:block hidden z-[10] bottom-0"
    //         />
    //       </div>
    //       <div className="flex items-center relative">
    //         <img
    //           src={rect2}
    //           alt="rect2"
    //           className="rounded-tr-[20px] rounded-br-[20px] sm:block hidden"
    //         />
    //         <div className="sm:absolute inset-0 z-[10] flex flex-col sm:items-end items-start justify-center max-w-xl sm:gap-y-0 gap-y-1">
    //           <p className="text-[#003459] font-[900] sm:text-[50px] text-[40px] leading-[0.8] font-poppins">
    //             Video chat now
    //           </p>
    //           <p className="text-[#003459] capitalize font-[900] text-end text-[30px] sm:text-[36px]">
    //             With a Puppy!
    //           </p>
    //           <p className="text-[#242B33] text-xs font-medium sm:mt-8 max-w-sm sm:text-end">
    //             Having a pet means you have more joy, a new friend, a happy
    //             person who will always be with you to have fun. We have 200+
    //             different pets that can meet your needs!
    //           </p>
    //           <div className="flex items-center gap-x-2 mt-4">
    //             <button className="border border-[#003459] px-4 py-2.5 text-xs rounded-full flex items-center gap-x-1.5">
    //               Adoption info <FaRegCirclePlay />
    //             </button>
    //             <button className="text-[#D4D0C9] bg-[#003459] px-4 py-2.5 text-xs rounded-full">
    //               Book a Video call
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
