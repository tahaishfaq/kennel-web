import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Fixed missing import
import axios from "axios";
import NavBar from "./NavBar";
import HeroSectionCollections from "./HeroSectionCollection";
import Footer from "./Footer";
import moment from "moment";

const BreedBasedPuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const { name } = useParams(); // Get breed name from URL
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    axios
      .get(`${window.$BackEndURL}/api/method/get-pups?filters=[["litter_breed_name","=","${name}"]]`)
      .then((res) => {
        console.log("API Response:", res?.data);
        setPuppies(res?.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching puppies:", error);
      });
  }, [name]);

  function calculateGoHomeDate(weeks) {
    return moment().add(weeks, "weeks").format("ll");
  }

  return (
    <>
      <div className="font-satoshi">
        <NavBar />
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 min-h-screen">
          <HeroSectionCollections />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {puppies.length > 0 ? (
              puppies.map((puppy, index) => (
                <div
                  key={index}
                  className="border border-[rgba(0,0,0,0.12)] p-[10px] h-full rounded-lg cursor-pointer puppy-card-shadow transition-shadow duration-200"
                  onClick={() => navigate(`/puppy/${puppy.name}`)} // Click event to navigate
                >
                  <div className="relative">
                    <img
                      src={
                        puppy?.profile_picture
                          ? window.$BackEndURL + puppy?.profile_picture
                          : "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={puppy?.puppy_name || "Puppy"}
                      className="rounded-[4px] h-[206px] w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-y-[14px] py-2 px-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-1.5">
                        <span className="text-[18px] capitalize font-medium">
                          {puppy?.puppy_name || "Unnamed Puppy"}
                        </span>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[12px] flex items-center gap-x-1 text-[#71C900]  bg-[#71C90014] py-[6px] px-[4px] rounded-[4px]">
                          🏡 {calculateGoHomeDate(puppy?.go_home_date_duration)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-[6px]">
                      {[
                        { label: "Litter", value: puppy?.litter?.litter_name },
                        { label: "Size", value: puppy?.size },
                        { label: "Coat Color", value: puppy?.coat_color },
                        { label: "Gender", value: puppy?.gender },
                        { label: "Breed", value: puppy?.litter_breed_name },
                        { label: "Weight", value: `${puppy?.weight} ${puppy?.weight_unit}` },
                      ].map(
                        (tag, idx) =>
                          tag.value && (
                            <div
                              key={idx}
                              className="flex items-center gap-1 px-[8px] py-1 bg-[#0000000A] rounded-lg shadow-sm"
                            >
                              <span className="text-[#000000CC] capitalize text-[10px] font-medium">
                                {tag.label}: {tag.value}
                              </span>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-3 py-20">
                No puppies found for this breed.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
};

export default BreedBasedPuppies;
