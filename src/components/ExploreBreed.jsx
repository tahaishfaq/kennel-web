import React, { useEffect, useState } from "react";

import axios from "axios";

import BreedCards from "./BreedCards";
import SkeletonPuppyCard from "./SkeletonPuppyCard";

const ExploreBreed = () => {
  const skeletonCount = 6;
  const [breed, setBreed] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="py-6 space-y-6 ">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl text-2xl font-medium">Explore Breed</h1>
        <span className="lg:pr-10 hover:underline cursor-pointer">See all</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
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
