import React from "react";

const SkeletonPuppyCard = () => {
  return (
    <div className="flex flex-col items-center gap-y-2 animate-pulse">
      {/* Circular Skeleton for Image */}
      <div className="w-[196px] h-[196px] rounded-full bg-gray-200"></div>
      {/* Skeleton for Breed Name */}
      <div className="h-4 bg-gray-200 rounded w-20"></div>
    </div>
  );
};

export default SkeletonPuppyCard;
