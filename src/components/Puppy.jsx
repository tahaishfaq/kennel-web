import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PuppyCard from "./PuppyCard";


import axios from "axios";
import SkeletonPuppyCard from "./SkeletonPuppyCard";
import { useFilter } from "../context/FilterContext";

const Puppy = () => {
  const skeletonCount = 8;
  // const [puppies, setPuppies] = useState([]);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {puppies, loading} = useFilter()

  // useEffect(() => {
  //   try {
  //     axios.get(`${window.$BackEndURL}/api/method/get-pups`).then((res) => {
  //       console.log("Puppies", res?.data?.data);
  //       setPuppies(res?.data?.data);
  //       setLoading(false);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // }, []);


  const handleSeeAllClick = () => {
    // console.log("Navigating to /PuppyCollection");
    navigate("/collection");
  };

  return (
    <div className="py-6 space-y-6 ">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl text-2xl font-medium">Our Available Puppy</h1>
        
        <span
          className="lg:pr-10 hover:underline cursor-pointer"
          onClick={handleSeeAllClick}
        >
          See all
        </span>

      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonPuppyCard key={index} />
            ))
          : puppies?.map((puppy, index) => (
              <PuppyCard key={index} data={puppy} />
            ))}
      </div>
    </div>
  );
};

export default Puppy;
