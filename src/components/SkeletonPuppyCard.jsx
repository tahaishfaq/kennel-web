import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";

const SkeletonPuppyCard = () => {
  return (
    <div className="bg-white p-2 border border-gray-200 rounded-md max-w-[397px] w-full animate-pulse">
      <div className="h-[283px] w-full bg-gray-200 rounded-md"></div>
      <div className="flex flex-col gap-y-1.5 py-2 px-2">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="flex items-center gap-x-1.5">
          <FaRegCircle className="w-3 h-3 text-gray-300" />
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-x-2">
            <span className="bg-gray-200 px-3 py-1 text-xs rounded-full w-12 h-6"></span>
            <span className="bg-gray-200 px-3 py-1 text-xs rounded-full w-12 h-6"></span>
            <span className="bg-gray-200 px-3 py-1 text-xs rounded-full w-16 h-6"></span>
          </div>
          <RiShareLine className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonPuppyCard;
