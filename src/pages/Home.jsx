import React from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";

import Puppy from "../components/Puppy";
import ExploreBreed from "../components/ExploreBreed";
import Banner from "../components/Banner";
import StateFilter from "../components/StateFilter";
import CityFilter from "../components/CityFilter";
import Footer from "../components/Footer";
import { FilterProvider } from "../context/FilterContext";
import Testimonials from "../components/Testimonials";

const Home = () => {
  
  return (
    <FilterProvider>
      <div className="font-satoshi">
        <Header />
        <div className="pt-8">
        <FilterBar />
        </div>
        <Puppy />
        <Banner />
        <ExploreBreed />
        <Testimonials />
        <Footer />
        {/* <div className="flex flex-col gap-y-16 lg:items-start items-center py-10 lg:px-0 px-2 max-w-7xl mx-auto">
          <div className="w-full">
          </div>
          

          <div className="w-full">
            
          </div>

          <div>
            
          </div>
          <div className="flex flex-col items-start gap-y-10 pt-16 font-light">
            <CityFilter />
            <StateFilter />
          </div>
        </div>
        <div className="pt-20">
          
        </div> */}
      </div>
    </FilterProvider>
  );
};

export default Home;
