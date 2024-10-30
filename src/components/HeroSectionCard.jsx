import React, { useEffect, useState } from "react";
import { IoIosMale } from "react-icons/io";
import { MdFemale } from "react-icons/md";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFilter } from "../context/FilterContext";
import { CheckIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const HeroSectionCard = () => {
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [price, setPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const { setQuery } = useFilter();

  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${window.$BackEndURL}/api/resource/Breeds?fields=["*"]`)
        .then((res) => {
          console.log("Breed", res?.data?.data);
          setBreeds(res?.data?.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const steps = [
    { name: "Step 1", status: currentStep >= 1 ? "complete" : "upcoming" },
    { name: "Step 2", status: currentStep >= 2 ? "complete" : "upcoming" },
    { name: "Step 3", status: currentStep >= 3 ? "complete" : "upcoming" },
    { name: "Step 4", status: currentStep === 4 ? "complete" : "upcoming" },
  ];

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
      filters.push(["litter_breed_name", "=", breed]);
    }
    if (price) {
      filters.push(["price", ">=", price]);
    }

    const publishFilter = [["publishing_status", "=", "Approved"]];

    const combinedFilters =
      filters.length > 0 ? publishFilter.concat(filters) : query;

    console.log(combinedFilters);
    const filterQuery = `${encodeURIComponent(
      JSON.stringify(combinedFilters)
    )}`;
    setQuery(filterQuery);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-start space-y-4 border border-[#0000000D]">
      <h2 className="text-lg lg:text-2xl lg:pb-2 pb-0">
        Find the best puppy for you.
      </h2>
      <nav aria-label="Progress" className="w-full">
        <ol role="list" className="flex items-start">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
                "relative"
              )}
            >
              {step.status === "complete" ? (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-black" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black hover:bg-gray-900"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                    />
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    />
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="pt-1">
        {currentStep === 1 && (
          <div className="flex flex-col gap-y-3 w-full ">
            <div>
              <p className="lg:text-2xl text-xl font-medium">Gender?</p>
              <p className="text-gray-700 lg:text-base text-sm font-normal">
                Please select which gender are you interested.
              </p>
            </div>
            <div className="flex space-x-2 sm:space-x-4 items-center w-full">
              <button
                onClick={() => setGender("Male")}
                className={`px-3 py-3 border rounded-md w-full text-sm ${
                  gender === "Male"
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
                onClick={() => setGender("Female")}
                className={`px-3 py-3 border rounded-md w-full text-sm ${
                  gender === "Female"
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
              <p className="lg:text-2xl text-xl font-medium">Breed?</p>
              <p className="text-gray-700 lg:text-base text-sm font-normal">
                Please select which breed are you interested.
              </p>
            </div>
            <div className="w-full">
              <select
                className="border px-3 lg:py-3 py-2 lg:text-base text-sm rounded-md w-full"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                <option value="">Select a breed</option>
                {breeds?.map((b) => (
                  <option key={b.name} value={b.breed_name}>
                    {b.breed_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="flex flex-col gap-y-3 w-full">
            <div>
              <p className="lg:text-2xl text-xl font-medium">Size?</p>
              <p className="text-gray-700 lg:text-base text-sm font-normal">
                Please select which size are you interested.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {[
                "Micro",
                "Extra Small",
                "Mini",
                "Toy",
                "Teacup",
                "Medium",
                "Standard",
                "Large",
                "Extra Large",
              ].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-4 py-2 lg:text-base text-sm rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700"
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
              <p className="lg:text-2xl text-xl font-medium">Price Range?</p>
              <p className="text-gray-700 lg:text-base text-sm font-normal">
                Please select which price range are you interested.
              </p>
            </div>
            <div className="flex items-center w-full px-2">
              <Slider
                min={0}
                max={1000}
                value={price}
                onChange={(value) => setPrice(value)}
                railStyle={{ backgroundColor: "#e0e0e0", height: 10 }}
                handleStyle={{
                  borderColor: "#000",
                  height: 24,
                  width: 24,
                  marginTop: -7,
                  backgroundColor: "#000",
                }}
                trackStyle={{ backgroundColor: "#000", height: 10 }}
                className="w-full"
              />
              <span className="text-gray-500 ml-4">${price}</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end w-full">
        {currentStep === 4 ? (
          <button
            onClick={applyFromFilters}
            className="bg-black text-white px-4 lg:py-3 py-2 rounded-md  lg:text-base text-sm"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNextStep}
            className="bg-black text-white px-4 lg:py-3 py-2 rounded-md lg:text-base text-sm"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSectionCard;
