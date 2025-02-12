import React, { useEffect, useState } from "react";
import PuppyDetail from "../../components/PuppyDetail";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Siblings from "../../components/Siblings";
import Parents from "../../components/Parents";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsLaptop } from "react-icons/bs";
import TalkToBreederPopover from "../../components/TalkToBreederPopover";
import StickyBottomBar from "./StickyBottomBar";

const PuppyDetailPage = () => {
  const { id } = useParams();
  const [puppyDetail, setPuppyDetail] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(
          `${window.$BackEndURL}/api/method/get-puppies?filters=[["name","=","${id}"]]`
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
      <div className="font-satoshi bg-gray-50">
        <NavBar />
        <div className="mx-auto max-w-[960px] pt-20 sm:pt-24 pb-40">
          <PuppyDetail puppyDetail={puppyDetail} />
          <div>
            <Siblings puppyDetail={puppyDetail} />
            <Parents puppyDetail={puppyDetail} />
          </div>
        </div>
      </div>

      <StickyBottomBar  puppyDetail={puppyDetail}/>
      {/* <Footer /> */}
    </>
  );
};

export default PuppyDetailPage;
