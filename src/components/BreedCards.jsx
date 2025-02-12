import React from "react";

const BreedCards = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-y-2.5 cursor-pointer">
      {/* Circular Image */}
      <div className="w-[196px] h-[196px] rounded-full overflow-hidden border border-gray-300 shadow-md">
        <img
          src={
            data?.breed_image
              ? window.$BackEndURL + data?.breed_image
              : "https://via.placeholder.com/150"
          }
          alt="puppy"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Breed Name */}
      <p className="text-center text-[16px] font-medium capitalize">{data?.breed_name || "Unknown Breed"}</p>
    </div>
  );
};

export default BreedCards;
