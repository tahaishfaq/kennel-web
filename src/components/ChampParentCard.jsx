import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineColorLens } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { TbRuler3 } from "react-icons/tb";

const ChampParentCard = ({
  name,
  image,
  dob,
  color,
  breed,
  weight,
  size,
  gender,
}) => {
  return (
    <div className="flex items-start">
      <div className="min-w-[200px]">
        <img
          src={window.$BackEndURL+image}
          alt={name}
          className="w-[200px] h-[150px] object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 px-6">
        <h3 className="text-2xl font-medium text-[#000000] mb-2">{name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm text-gray-600 bg-[#0000000A] p-3 rounded-lg">
          <div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CiCalendarDate className="mr-2  w-5 h-5" />
                <div className="flex items-center justify-between w-full">
                  <strong className="font-normal text-sm text-[#000000CC]">
                    Date of Birth:{" "}
                  </strong>
                  <span className="font-semibold">{dob}</span>
                </div>
              </li>
              <li className="flex items-center">
                <MdOutlineColorLens className="mr-2  w-5 h-5" />
                <div className="flex items-center justify-between w-full">
                  <strong className="font-normal text-sm text-[#000000CC]">
                    Color:{" "}
                  </strong>
                  <span className="font-semibold">{color}</span>
                </div>
              </li>
              <li className="flex items-center">
                <IoPawOutline className="mr-2  w-5 h-5" />
                <div className="flex items-center justify-between w-full">
                  <strong className="font-normal text-sm text-[#000000CC]">
                    Breed:{" "}
                  </strong>
                  <span className="font-semibold">{breed}</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <RiWeightLine className="mr-2  w-5 h-5" />
                <div className="flex items-center justify-between w-full">
                  <strong className="font-normal text-sm text-[#000000CC]">
                    Estimated weight:{" "}
                  </strong>

                  <span className="font-semibold">{weight}</span>
                </div>
              </li>
              <li className="flex items-center">
                <TbRuler3 className="mr-2  w-5 h-5" />
                <div className="flex items-center justify-between w-full">
                  <strong className="font-normal text-sm text-[#000000CC]">
                    Size:{" "}
                  </strong>

                  <span className="font-semibold"> {size}</span>
                </div>
              </li>
              <li className="flex items-center">
                <IoPawOutline className="mr-2  w-5 h-5" />
                <div className="flex items-center justify-between w-full">
                  <strong className="font-normal text-sm text-[#000000CC]">
                    Gender:{" "}
                  </strong>
                  <span className="font-semibold"> {gender}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampParentCard;
