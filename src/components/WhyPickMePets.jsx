import React from "react";
import logo from "../assets/favicon.jpg";
const WhyPickMyPets = () => {
  return (
    <div className="bg-[#E1F7F3] p-[20px] rounded-[12px] shadow-md space-y-3">
      <div className="flex items-center gap-x-3">
        <img src={logo} alt="icon" className="w-[32px] h-[32px] rounded-lg" />
        <h2 className="text-[20px] font-semibold">Why Choose PickMyPets?</h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-[16px] mr-2">•</span>
          Your payments are secure until you're satisfied
        </li>
        <li className="flex items-start">
          <span className="text-[16px] mr-2">•</span>
          Pay in full with your debit/credit card or enjoy 0% interest installments.
        </li>
        <li className="flex items-start">
          <span className="text-[16px] mr-2">•</span>
          Get free, lifetime access to our platform.
        </li>
        <li className="flex items-start">
          <span className="text-[16px] mr-2">•</span>
          Enjoy up to 6 months of free pet food for your furry friend.
        </li>
      </ul>
    </div>
  );
};

export default WhyPickMyPets;
