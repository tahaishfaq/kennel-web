import React from "react";
import Collection from "../../components/Collection";
import Header from "../../components/Header";
import CityFilter from "../../components/CityFilter";
import StateFilter from "../../components/StateFilter";
import Footer from "../../components/Footer";
import { FilterProvider } from "../../context/FilterContext";
import Puppy from "../../components/Puppy";
import HeroSectionCollections from "../../components/HeroSectionCollection";
import NavBar from "../../components/NavBar";
import FilterBar from "../../components/FilterBar";

const PuppyCollection = () => {
  return (
    <FilterProvider>
      <div className="font-satoshi">
        <NavBar />
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20">
          <HeroSectionCollections />
          <FilterBar />
          <Puppy />

          {/* <div className="lg:px-0 md:px-0 px-2">
          </div>
          <div className="max-w-7xl mx-auto lg:px-0 md:px-0 px-2">
          </div> */}

          {/* <div className="flex flex-col items-start gap-y-10 pt-16 font-light">
            <CityFilter />
            <StateFilter />
          </div> */}
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </FilterProvider>
  );
};

export default PuppyCollection;
