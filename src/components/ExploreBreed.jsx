import React, { useEffect, useState } from "react";

import axios from "axios";

import BreedCards from "./BreedCards";
import SkeletonPuppyCard from "./SkeletonPuppyCard";

const ExploreBreed = () => {
  const skeletonCount = 6;
  const [loading, setLoading] = useState(true);
  const [breed, setBreed] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${window.$BackEndURL}/api/resource/Breeds?fields=["*"]`)
        .then((res) => {
          console.log("Breed", res?.data?.data);
          setBreed(res?.data?.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <div className="lg:py-6 md:py-5 py-4 lg:space-y-6 space-y-4 mx-auto max-w-7xl lg:px-0 md:px-2 px-4">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl text-xl font-medium">Explore Breed</h1>
        {/* <span className="hover:underline cursor-pointer">See all</span> */}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-6">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonPuppyCard key={index} />
            ))
          : breed
              .slice(0, 6)
              .map((single, index) => <BreedCards key={index} data={single} />)}
      </div>
    </div>
  );
};

export default ExploreBreed;
