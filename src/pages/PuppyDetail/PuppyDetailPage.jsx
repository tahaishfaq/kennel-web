import React from "react";

import PuppyDetail from "../../components/PuppyDetail";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import CityFilter from "../../components/CityFilter";
import StateFilter from "../../components/StateFilter";
import Siblings from "../../components/Siblings";
import Parents from "../../components/Parents";

const PuppyDetailPage = () => {
  return (
    <>
      <div className="font-poppins max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-y-16">
          <NavBar />

          <div className="max-w-7xl mx-auto">
            <PuppyDetail />
            <Siblings />
            <Parents />
          </div>

          <div>
            <CityFilter />
          </div>
          <div>
            <StateFilter />
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
};

export default PuppyDetailPage;
