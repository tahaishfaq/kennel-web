import React from "react";
import { useNavigate } from "react-router-dom";

const BreedCards = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    if (name) {
      navigate(`/breed-based-puppy/${encodeURIComponent(name)}`);
    }
  };
  return (
    <div
      className="flex flex-col items-center gap-y-2.5 cursor-pointer"
      onClick={() => handleClick(data.name)}
    >
      {/* Circular Image */}
      <div className="sm:w-[196px] sm:h-[196px] w-[150px] h-[150px] rounded-full overflow-hidden border border-gray-300 shadow-md">
        <img
          src={
            data?.breed_image
              ? data?.breed_image
              : "https://via.placeholder.com/150"
          }
          alt="puppy"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Breed Name */}
      <p className="text-center text-[16px] font-medium capitalize">
        {data?.breed_name || "Unknown Breed"}
      </p>
    </div>
  );
};

export default BreedCards;
