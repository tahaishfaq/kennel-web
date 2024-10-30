import React, { useEffect, useState } from "react";

import PuppyDetail from "../../components/PuppyDetail";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import CityFilter from "../../components/CityFilter";
import StateFilter from "../../components/StateFilter";
import Siblings from "../../components/Siblings";
import Parents from "../../components/Parents";
import { useParams } from "react-router-dom";
import axios from "axios";

const PuppyDetailPage = () => {
  const { id } = useParams();
  const [puppyDetail, setPuppyDetail] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(
          `${window.$BackEndURL}/api/method/get-pups?filters=[["name","=","${id}"]]`
        )
        .then((res) => {
          console.log("singlePuppy", res?.data?.data[0]);
          setPuppyDetail(res?.data?.data[0]);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <div className="font-satoshi bg-white">
          <NavBar />
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20">
          <PuppyDetail puppyDetail={puppyDetail} />

          <div className="">
            {/* <Siblings /> */}
            {/* <Parents /> */}
          </div>

          {/* <div>
            <CityFilter />
          </div>
          <div>
            <StateFilter />
          </div> */}
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
};

export default PuppyDetailPage;
