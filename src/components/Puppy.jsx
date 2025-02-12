import React from "react";
import { useNavigate } from "react-router-dom";
import PuppyCard from "./PuppyCard";
import SkeletonPuppyCard from "./SkeletonPuppyCard";
import { useFilter } from "../context/FilterContext";

const Puppy = () => {
  const skeletonCount = 8;
  const navigate = useNavigate();
  const { puppies, loading } = useFilter();

  const handleSeeAllClick = () => {
    navigate("/collection");
  };

  const handleCardClick = (puppyId) => {
    navigate(`/puppy/${puppyId}`);
  };

  return (
    <div className="lg:py-6 md:py-5 py-4 lg:space-y-6 space-y-4 mx-auto max-w-7xl sm:px-0 md:px-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl text-xl font-medium">Our Puppy</h1>
        <span
          className="hover:underline cursor-pointer"
          onClick={handleSeeAllClick}
        >
          See all
        </span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-start gap-3">
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, index) => (
            <div
              key={index}
              className="border border-[rgba(0,0,0,0.12)] p-[10px] h-full rounded-lg puppy-card-shadow transition-shadow duration-200 animate-pulse"
            >
              <div className="relative">
                <div className="rounded-[4px] h-[206px] w-full bg-gray-200"></div>

                <div className="absolute text-[12px] flex items-center gap-x-1 right-2 bottom-2 bg-gray-200 py-[6px] px-[4px] rounded-[4px]"></div>
              </div>

              <div className="flex flex-col gap-y-[14px] py-2 px-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1.5">
                    <div className="w-[20px] h-[20px] bg-gray-200 rounded-full"></div>
                    <div className="w-[80px] h-[18px] bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-[60px] h-[18px] bg-gray-200 rounded"></div>
                </div>

                <div className="flex flex-wrap gap-[6px]">
                  {[1, 2, 3].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-[8px] py-1 bg-gray-200 rounded-lg w-[60px] h-[20px]"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : puppies.length > 0 ? (
          puppies.map((puppy, index) => (
            <PuppyCard
              key={index}
              data={puppy}
              onClick={() => handleCardClick(puppy.id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No puppies available
          </div>
        )}
      </div>
    </div>
  );
};

export default Puppy;
