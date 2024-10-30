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
    <div className="lg:py-6 md:py-5 py-4 lg:space-y-6 space-y-4 mx-auto max-w-7xl lg:px-0 md:px-2 px-4">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl text-xl font-medium">Our Available Puppy</h1>
        <span
          className="hover:underline cursor-pointer"
          onClick={handleSeeAllClick}
        >
          See all
        </span>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-6">
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonPuppyCard key={index} />
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

