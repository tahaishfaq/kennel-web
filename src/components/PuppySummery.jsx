import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbClockRecord, TbWeight, TbDog, TbHomeShare } from "react-icons/tb";
import { IoColorPaletteOutline, IoPawOutline } from "react-icons/io5";
import { BiRuler, BiInjection } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";
import image1 from "../assets/Frame 1000004326.png";

const PuppySummary = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className=" text-[#000000] text-[28px] font-medium mt-14 mb-4">
        Puppy Summary
      </h2>

      <div className=" bg-[#0000000A] rounded-lg  ">
        <div className="flex gap-4 my-6 mx-[121px] pt-6">
          <img src={image1} alt="Puppy" className="w-1/3 rounded-lg" />
          <img src={image1} alt="Puppy" className="w-1/3 rounded-lg" />
          <img src={image1} alt="Puppy" className="w-1/3 rounded-lg" />
        </div>

        <div className="flex justify-center items-center rounded-md p-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4 lg:pr-6">
              <p className="flex items-center">
                <TbClockRecord className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Age:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  May 14, 2023
                </span>
              </p>
              <p className="flex items-center">
                <TbWeight className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Weight:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  15- 8 lbs
                </span>
              </p>
              <p className="flex items-center">
                <TbDog className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Gender:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  Male
                </span>
              </p>
            </div>

            <div className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4 lg:pr-6">
              <p className="flex items-center">
                <TbHomeShare className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Bring Home on:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  July 9, 2024
                </span>
              </p>
              <p className="flex items-center">
                <IoColorPaletteOutline className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Color:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  Black
                </span>
              </p>
              <p className="flex items-center">
                <BiRuler className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Size:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  Toy
                </span>
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="flex items-center">
                <IoPawOutline className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Breed:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  Golden
                </span>
              </p>
              <p className="flex items-center">
                <FaRegAddressCard className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Puppy ID:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  25424
                </span>
              </p>
              <p className="flex items-center">
                <BiInjection className="text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Vaccinated:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  Yes
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className=" text-[#000000CC] text-lg font-semibold mb-2 mt-7">
            About Puppy
          </h3>
          <p className="text-[#000000A3] text-base font-normal">
            Hi! My name is Champ. I am a very gorgeous and unique puppy. I am
            now taking applications for my new family. I want to live with them
            forever, so I must make sure that I choose the right one! I am told
            that I am very smart, sweet, and playful. I love to watch.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#1877F20A] mt-8 rounded-lg">
        <div className="flex flex-col justify-center items-center my-8">
          <h3 className="text-[#000000] text-[28px] font-normal mb-2 text-center">
            Please Verify your Identity First
          </h3>
          <button className="bg-[#3056D3] text-white font-medium text-base py-2 px-4 rounded mt-4">
            Verify Identity
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuppySummary;
