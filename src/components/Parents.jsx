import React from "react";
import breeder from "../assets/breeder.png";
import { MdOutlineVerified } from "react-icons/md";
import ChampParentCard from "./ChampParentCard";

export default function Parents({ puppyDetail }) {
  // const { dam, selected_sire } = puppyDetail?.litter;

  const dogs = [
    {
      name: puppyDetail?.litter?.selected_sire?.sire_name,
      image: puppyDetail?.litter?.selected_sire?.profile_picture,
      dob: puppyDetail?.litter?.selected_sire?.dob,
      color: puppyDetail?.litter?.selected_sire?.color,
      breed: puppyDetail?.litter?.selected_sire?.breed,
      weight: puppyDetail?.litter?.selected_sire?.weight,
      size: puppyDetail?.litter?.selected_sire?.size,
      gender: puppyDetail?.litter?.selected_sire?.gender,
    },
    {
      name: puppyDetail?.litter?.dam?.sire_name,
      image: puppyDetail?.litter?.dam?.profile_picture,
      dob: puppyDetail?.litter?.dam?.dob,
      color: puppyDetail?.litter?.dam?.color,
      breed: puppyDetail?.litter?.dam?.breed,
      weight: puppyDetail?.litter?.dam?.weight,
      size: puppyDetail?.litter?.dam?.size,
      gender: puppyDetail?.litter?.dam?.gender,
    },
  ];

  return (
    <div className="sm:pt-16 pt-4 font-satoshi">
      <div className="max-w-7xl mx-auto space-y-6 sm:px-0 px-4">
        <h2 className="sm:text-[28px] hidden font-medium">Meet Caroline's parents</h2>
        <div className="sm:grid hidden grid-cols-1 gap-10 border border-[#0000001F] p-4 rounded-[12px]">
          {dogs.map((dog, index) => (
            <ChampParentCard key={index} {...dog} />
          ))}
        </div>

        <div className="sm:pt-6 max-w-xl mx-auto space-y-2.5 sm:space-y-4">
          <h2 className="sm:text-[28px] text-[24px] font-medium text-start sm:text-center">
            Meet Champ's breeder
          </h2>
          <div>
            <div className="bg-[#9EF6DE1F] sm:p-5 p-2.5 rounded-lg space-y-2.5">
              <div className="flex gap-2 sm:gap-4">
                <img
                  src={window.$BackEndURL+puppyDetail?.business_profile?.logo}
                  className="w-[112px] h-[112px] rounded-lg object-cover"
                  alt="breeder"
                />
                <div className="space-y-2.5">
                  <div className="space-y-1">
                    <h2 className="sm:text-[24px] text-[20px] font-medium">
                      Welcome to my {puppyDetail?.business_profile?.business_name}
                    </h2>
                    <p className="text-[#000000CC] text-sm sm:text-[18px]">Member since 2024</p>
                  </div>
                  <p className="sm:text-[18px] text-xs text-[#000000CC] flex items-center gap-x-1 sm:gap-x-1.5">
                    <MdOutlineVerified className="w-5 h-5 text-[#71C900]" />
                    Certified Pick me pets Breeder
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-[20px] font-medium">About</h2>
                <p className="text-[16px] text-[#000000CC]">
                  {puppyDetail?.business_profile?.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
