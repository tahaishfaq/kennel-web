import React, { useEffect, useState } from "react";

import { ChromePicker } from "react-color";
import { AiOutlineClose } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { useFilter } from "../context/FilterContext";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const FilterBar = () => {
  const {
    selectedGender,
    setSelectedGender,
    selectedBreed,
    setSelectedBreed,
    color,
    setColor,
    selectedSize,
    setSelectedSize,
    goHomeDate,
    setGoHomeDate,
    applyFilters,
    clearFilters,
    setQuery,
    searchQuery,
    setSearchQuery,
  } = useFilter();

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [breed, setBreed] = useState([]);

  const colors = [
    "White",
    "Black",
    "Brown",
    "Gold",
    "Yellow",
    "Parti",
    "Merle",
    "Apricot",
    "Fawn",
    "Red",
    "Brindle",
    "Chocolate",
    "Phantom",
    "Grey",
    "Blue",
    "Cream",
  ];

  useEffect(() => {
    try {
      axios
        .get(`${window.$BackEndURL}/api/resource/Breeds?fields=["*"]&limit_page_length=2000&limit_start=0`)
        .then((res) => {
          console.log("Breed", res?.data?.data);
          setBreed(res?.data?.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const toggleColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl lg:py-6 md:py-4 py-4 sm:px-0 md:px-4 px-4">
        <div className="hidden md:flex items-center justify-between py-4 px-4 bg-white filter-bar-shadow rounded-lg">
          <div className="flex items-center gap-x-3 lg:max-w-5xl md:max-w-3xl  w-full">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-3 rounded-[12px] text-[#000000A3] font-normal text-[14px]  placeholder:text-[#000000A3] focus:outline-none outline-none bg-[#0000000A]"
                placeholder="Search"
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <FiSearch className="w-5 h-5 text-[#000000]" />
              </span>
            </div>
            <div className="relative">
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="form-select block w-36 p-3  rounded-[12px] appearance-none font-normal text-[14px]  text-[#000000A3] focus:outline-none ring-0 bg-[#0000000A]"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <IoIosArrowDown className="w-4 h-4 text-[#000000]" />
              </span>
            </div>
            <div className="relative ">
              <select
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                className="form-select block w-40 p-3 pr-10 truncate  rounded-[12px] appearance-none  text-[#000000A3] font-normal text-[14px]  focus:outline-none ring-0 bg-[#0000000A]"
              >
                <option value="">Select Breed</option>
                {breed?.map((item) => (
                  <option key={item?.name} value={item?.breed_name}>
                    {item?.breed_name}
                  </option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <IoIosArrowDown className="w-4 h-4 text-[#000000]" />
              </span>
            </div>
            <div className="relative">
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="form-select block w-48 p-3  rounded-[12px] appearance-none  text-[#000000A3] font-normal text-[14px]  focus:outline-none ring-0 bg-[#0000000A]"
              >
                <option value="">Choose Color</option>
                {colors.map((colorOption) => (
                  <option key={colorOption} value={colorOption}>
                    {colorOption}
                  </option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <IoIosArrowDown className="w-4 h-4 text-[#000000]" />
              </span>
            </div>
            <div className="relative">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="form-select block w-36 p-3  rounded-[12px] appearance-none  text-[#000000A3] font-normal text-[14px]  focus:outline-none ring-0 bg-[#0000000A]"
              >
                <option value="">Select Size</option>
                <option value="Micro">Micro</option>
                <option value="Extra Small">Extra Small</option>
                <option value="Mini">Mini</option>
                <option value="Toy">Toy</option>
                <option value="Teacup">Teacup</option>
                <option value="Medium">Medium</option>
                <option value="Standard">Standard</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <IoIosArrowDown className="w-4 h-4 text-[#000000]" />
              </span>
            </div>
            {/* <div className="relative w-full">
              <input
                value={goHomeDate}
                onChange={(e) => setGoHomeDate(e.target.value)}
                placeholder="Go Home Date"
                type="date"
                className="form-input block w-full p-3 rounded-[12px] text-gray-400 focus:outline-none ring-0 bg-[#0000000A]"
              />
            </div> */}
          </div>
          <div className="pl-3 flex flex-1 gap-x-2 items-center">
            <button
              onClick={applyFilters}
              className="bg-black text-white w-full py-3 rounded-[8px]"
            >
              Apply
            </button>
            <button
              onClick={() => {
                clearFilters();
                setQuery(
                  `[["publishing_status", "=", "Approved"] , ["sync_to_website", "=", "1"]]`
                );
              }}
              type="button"
              className="bg-black text-white w-full py-3 rounded-lg"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Filter Button for Smaller Screens */}
        <div className="md:hidden flex items-center gap-x-4  border border-[#0000000D] p-2 bg-white shadow-sm rounded-lg">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-3 rounded-[12px] focus:outline-none outline-none bg-[#0000000A]"
              placeholder="Search"
            />
          </div>
          <button
            onClick={toggleFilterOpen}
            className="bg-black text-white px-4 py-3 rounded-lg"
          >
            <CiFilter className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Filter Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-white overflow-y-auto py-6 px-4 ">
            <div className="flex items-center justify-between pb-4 border-b border-[#0000000D]">
              <h2 className="text-xl font-semibold">Filter</h2>
              <button onClick={toggleFilterOpen}>
                <AiOutlineClose size={24} />
              </button>
            </div>
            <div className="mt-4">
              <div className="relative w-full mb-4">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="form-select block w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A]"
                >
                  <option value="">Select Size</option>
                  <option value="Micro">Micro</option>
                  <option value="Extra Small">Extra Small</option>
                  <option value="Mini">Mini</option>
                  <option value="Toy">Toy</option>
                  <option value="Teacup">Teacup</option>
                  <option value="Medium">Medium</option>
                  <option value="Standard">Standard</option>
                  <option value="Large">Large</option>
                  <option value="Extra Large">Extra Large</option>
                </select>
              </div>
              <div className="relative w-full mb-4">
                <select
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  className="form-select block w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A]"
                >
                  <option value="">Select Breed</option>
                  {breed?.map((item) => (
                    <option key={item?.name} value={item?.breed_name}>
                      {item?.breed_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative w-full mb-4">
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="form-select block w-full p-3 rounded-[12px] text-gray-500 focus:outline-none ring-0 bg-[#0000000A]"
                >
                  <option value="">Choose Color</option>
                  {colors.map((colorOption) => (
                    <option key={colorOption} value={colorOption}>
                      {colorOption}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative w-full mb-4">
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="form-select block w-full p-3 rounded-[12px] text-gray-500 focus:outline-none ring-0 bg-[#0000000A]"
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="relative w-full mb-4">
                <input
                  value={goHomeDate}
                  onChange={(e) => setGoHomeDate(e.target.value)}
                  type="date"
                  className="form-input block w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => {
                  clearFilters();
                  setQuery(
                    `[["publishing_status", "=", "Approved"] , ["sync_to_website", "=", "1"]]`
                  );
                }}
                className="bg-gray-200 text-black px-4 py-2 rounded-lg"
              >
                Clear Filter
              </button>
              <button
                onClick={applyFilters}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Apply Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterBar;
