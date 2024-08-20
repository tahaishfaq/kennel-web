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
      <div className="font-poppins max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-y-16">
          <NavBar />

          <HeroSectionCollections />

          <FilterBar />

          <div className="max-w-7xl mx-auto">
            <Puppy />
          </div>

          <div className="flex flex-col items-start gap-y-10 pt-16 font-light">
            <CityFilter />
            <StateFilter />
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </FilterProvider>
  );
};

export default PuppyCollection;
