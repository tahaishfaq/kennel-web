import React from "react";
import delivery from "../assets/Frame 1000004471.png";

const AdoptionTicket = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-base font-normal sm:text-lg">Adoption ticket</h2>
          <span className="text-xs font-medium text-[#1877F2] bg-[#1877F214] px-3 py-1 rounded-full sm:px-4 sm:py-2">
            complete
          </span>
        </div>

        <div className="flex items-center mb-3 gap-x-2">
          <img
            src={delivery}
            alt="Delivery"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md mr-2 sm:mr-4"
          />
          <p className="text-sm font-normal sm:text-base">Delivery</p>
        </div>

        <button className="w-full bg-[#3056D3] text-[#F8FAFC] py-2 rounded-lg text-sm font-medium sm:text-base sm:py-3">
          Please Verify Delivery
        </button>
      </div>
    </div>
  );
};

export default AdoptionTicket;
