import React from "react";
import Collection from "../../components/Collection";
import Header from "../../components/Header";
import CityFilter from "../../components/CityFilter";
import StateFilter from "../../components/StateFilter";
import Footer from "../../components/Footer";
import { FilterProvider } from "../../context/FilterContext";
import Puppy from "../../components/Puppy";
import HeroSectionCollections from "../../components/HeroSectionCollection";

const PuppyCollection = () => {
  return (
    <FilterProvider>
      <div className="font-poppins ">
        <div>
        <HeroSectionCollections />
        </div>
        <div className="flex flex-col gap-y-16 lg:items-start items-center py-10 lg:px-0 px-2 max-w-7xl mx-auto">
          <Puppy />

          <div className="flex flex-col items-start gap-y-10 pt-16 font-light">
            <CityFilter />
            <StateFilter />
          </div>
        </div>
        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </FilterProvider>
  );
};

export default PuppyCollection;
