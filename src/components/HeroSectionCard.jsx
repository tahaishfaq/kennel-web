import React, { useEffect, useState } from "react";
import { IoIosMale } from "react-icons/io";
import { MdFemale } from "react-icons/md";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from "axios";
import { useFilter } from "../context/FilterContext";

const HeroSectionCard = () => {
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [price, setPrice] = useState(0);
  // const [query, setQuery] = useState("");
  const [puppies, setPuppies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const {setQuery} = useFilter()

  // useEffect(() => {
  //   setLoading(true);
  //   try {
  //     axios
  //       .get(`${window.$BackEndURL}/api/method/get-pups${query}`)
  //       .then((res) => {
  //         console.log("formFilter", res.data.data);
  //         setPuppies(res.data.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // }, [query]);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const applyFromFilters = () => {
    const filters = [];

    if (gender) {
      filters.push(["gender", "=", gender]);
    }
    if (selectedSize) {
      filters.push(["size", "=", selectedSize]);
    }
    if (breed) {
      filters.push(["breed", "=", breed]);
    }
    if (price) {
      filters.push(["price", "<=", price]);
    }

    const filterQuery =
      filters?.length > 0
        ? `?filters=${encodeURIComponent(JSON.stringify(filters))}`
        : "";

    setQuery(filterQuery);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-start gap-y-6">
      <h2 className=" text-2xl sm:text-xl mb-4">
        Lorem ipsum dolor sit amet consectetur.
      </h2>
      <div className="relative flex items-center mb-4 ">
        <div className="flex w-full ">
          {[1, 2, 3, 4]?.map((step) => (
            <div key={step} className="flex items-center w-full">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {step}
              </div>
              {step !== 4 && (
                <div
                  className={`flex-grow h-3 lg:w-24 w-16 rounded-full mx-2 ${
                    currentStep >= step + 1 ? "bg-black" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {currentStep === 1 && (
        <div className="flex flex-col gap-y-3 w-full">
          <div>
            <p className="text-2xl">Gender?</p>
            <p className="text-gray-700 text-base font-normal">
              Please select which gender are you interested.
            </p>
          </div>
          <div className="flex space-x-2 sm:space-x-4  items-center justify-between  ">
            <button
              onClick={() => setGender("male")}
              className={`px-3 py-3  border rounded-md w-full text-sm  ${
                gender === "male"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              <span className="flex items-center gap-x-3">
                <IoIosMale className="text-sky-500 h-5 w-5" />
                Male
              </span>
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-3 py-3  border w-full rounded-md text-sm ${
                gender === "female"
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              <span className="flex items-center gap-x-3">
                <MdFemale className="text-pink-500 w-5 h-5" />
                Female
              </span>
            </button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex flex-col gap-y-3 w-full">
          <div>
            <p className="text-2xl">Breed?</p>
            <p className="text-gray-700 text-base font-normal">
              Please select which breed are you interested.
            </p>
          </div>
          <div className="flex space-x-2 sm:space-x-4   items-center justify-between  ">
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-3 rounded-[8px] w-full"
            />
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="flex flex-col gap-y-3 w-full">
          <div>
            <p className="text-2xl">Size?</p>
            <p className="text-gray-700 text-base font-normal">
              Please select which size are you interested.
            </p>
          </div>
          <div className="flex space-x-2 sm:space-x-4  items-center">
            {["Toy", "Small", "Medium", "Large"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-4 py-2 rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-[#0000000A] text-gray-700"
                } focus:outline-none hover:bg-black hover:text-white transition`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="flex flex-col gap-y-3 w-full">
          <div>
            <p className="text-2xl">Price Range?</p>
            <p className="text-gray-700 mb-4 text-base font-normal">
              Please select which price range are you interested.
            </p>
          </div>
          <div className="flex items-center">
            <Slider
              min={0}
              max={1000}
              value={price}
              onChange={(value) => setPrice(value)}
              railStyle={{ backgroundColor: "#e0e0e0", height: 14 }}
              handleStyle={{
                borderColor: "#000",
                height: 24,
                width: 24,
                // marginLeft: -10,
                marginTop: -5,
                backgroundColor: "#000",
              }}
              trackStyle={{ backgroundColor: "#000", height: 14 }}
              className="mr-4 ml-2"
            />
            <span className="text-gray-500">${price}</span>
          </div>
        </div>
      )}
      {/* Add content for steps 2, 3, and 4 here */}
      <div className="flex items-center justify-end w-full ">
        {/* {currentStep > 1 && (
          <button
            onClick={handlePrevStep}
            className="bg-gray-500 text-white px-4 sm:px-6 py-2 rounded-md"
          >
            Previous Step
          </button>
        )} */}
        {currentStep === 4 ? (
          <button
            onClick={applyFromFilters}
            className="bg-black text-white px-4 sm:px-6 py-3 rounded-[8px]"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNextStep}
            className="bg-black text-white px-4 sm:px-6 py-3 rounded-[8px]"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSectionCard;
