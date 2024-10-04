import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbClockRecord, TbWeight, TbDog, TbHomeShare } from "react-icons/tb";
import { IoColorPaletteOutline, IoPawOutline } from "react-icons/io5";
import { BiRuler, BiInjection } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";

const PuppySummary = ({ puppyDetails }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-medium mb-4">Puppy Summary</h2>

      <div className="bg-[#0000000A] rounded-lg">
        <div className="flex flex-row gap-x-8 mr-8 ">
        {/* Puppy Images */}
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 p-4 justify-center">
          {puppyDetails?.images?.map((image, index) => (
            <img
              key={index}
              src={window.$BackEndURL + image?.image}
              alt={`Puppy ${index + 1}`}
              className="w-[227px] sm:w-40 h-[219px] object-cover object-center rounded-md"
            />
          ))}
        </div>

        {/* Puppy Details */}
        <div className="flex flex-col justify-center rounded-md p-4">
          <div className=" mb-3 ">
          <span className="text-[#000000] text-2xl font-medium">Puppy Name</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-[910px]">
            
            <div className="flex flex-col  space-y-2 border-dotted sm:border-r border-[#000000A3] pr-0 sm:pr-4 lg:pr-6">
              <p className="flex items-center">
                <TbClockRecord className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Go Home Date:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.go_home_date}
                </span>
              </p>
              <p className="flex items-center">
                <TbWeight className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Weight:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.weight} {puppyDetails?.weight_unit}
                </span>
              </p>
              <p className="flex items-center">
                <TbDog className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Gender:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.gender}
                </span>
              </p>
            </div>

            <div className="flex flex-col space-y-2 border-dotted sm:border-r border-[#000000A3] pr-0 sm:pr-4 lg:pr-6">
              <p className="flex items-center">
                <TbHomeShare className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Ready to Go Home:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.ready_to_go_home}
                </span>
              </p>
              <p className="flex items-center">
                <IoColorPaletteOutline className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Coat Color:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.coat_color}
                </span>
              </p>
              <p className="flex items-center">
                <BiRuler className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Size:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.size}
                </span>
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="flex items-center">
                <IoPawOutline className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Breed:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.litter_breed_name}
                </span>
              </p>
              <p className="flex items-center">
                <FaRegAddressCard className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Puppy ID:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.name}
                </span>
              </p>
              <p className="flex items-center">
                <BiInjection className="text-lg sm:text-xl lg:text-2xl text-[#000000] mr-2" />
                <span className="font-normal text-sm text-[#000000CC]">
                  Vaccinated:
                </span>
                <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                  {puppyDetails?.vaccinations_table?.length > 0 ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        </div>

        </div>

        {/* About Puppy */}
        {/* <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-[#000000CC] text-lg font-semibold mb-2 mt-7 text-center sm:text-left">
            About Puppy
          </h3>
          <p className="text-[#000000A3] text-base text-justify font-normal">
            Hi! My name is {puppyDetails?.puppy_name}. I am a very gorgeous and
            unique puppy. I am now taking applications for my new family. I want
            to live with them forever, so I must make sure that I choose the
            right one! I am told that I am very smart, sweet, and playful.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PuppySummary;
