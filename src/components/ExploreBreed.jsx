import React, { useEffect, useState } from "react";
import axios from "axios";
import BreedCards from "./BreedCards";
import SkeletonPuppyCard from "./SkeletonPuppyCard";

const ExploreBreed = () => {
  const skeletonCount = 6;
  const [loading, setLoading] = useState(true);
  const [breed, setBreed] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get(
          `${window.$BackEndURL}/api/resource/Breeds?fields=["*"]&filters=[["top_breed","=","1"]]`
        );
        console.log("Breed", response?.data?.data);
        setBreed(response?.data?.data);
      } catch (error) {
        console.log("Error fetching breeds:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div className="lg:py-6 md:py-5 py-4 lg:pb-20 lg:space-y-6 space-y-4 mx-auto max-w-7xl sm:px-0 md:px-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl text-xl font-medium">Explore Breed</h1>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-start sm:gap-5 gap-4">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonPuppyCard key={index} />
            ))
          : breed?.map((single, index) => (
              <BreedCards key={index} data={single} />
            ))}
      </div>
    </div>
  );
};

export default ExploreBreed;
