import React, { useEffect, useState } from "react";
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
    priceRange,
    setPriceRange,
  } = useFilter();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [breed, setBreed] = useState([]);
  // const [priceRange, setPriceRange] = useState({ min: "", max: "" });

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
        .get(
          `${window.$BackEndURL}/api/resource/Breeds?fields=["*"]&limit_page_length=2000&limit_start=0`
        )
        .then((res) => {
          setBreed(res?.data?.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto max-w-7xl lg:py-6 md:py-4 py-4 sm:px-0 md:px-4 px-4">
      {/* Main Filter Bar */}
      <div className="mx-auto max-w-7xl py-4 px-0 sm:px-0 lg:px-0">
        <div className="bg-white filter-bar-shadow rounded-lg p-4 hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-3">
          {/* Gender */}
          <div className="relative">
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full p-3 rounded-[12px] appearance-none font-normal text-[14px] text-[#000000A3] focus:outline-none bg-[#0000000A]"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <IoIosArrowDown className="w-4 h-4 text-[#000000]" />
            </span>
          </div>

          {/* Breed */}
          <div className="relative">
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="w-full p-3 pr-10 truncate rounded-[12px] appearance-none text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
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

          {/* Color */}
          <div className="relative">
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-3 rounded-[12px] appearance-none text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
            >
              <option value="">Pick Color</option>
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

          {/* Size */}
          <div className="relative">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-3 rounded-[12px] appearance-none text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
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

          {/* Price Range Min */}
          <div className="relative">
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              placeholder="Min Price"
              className="w-full p-3 rounded-[12px] text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
            />
          </div>

          {/* Price Range Max */}
          <div className="relative">
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
              placeholder="Max Price"
              className="w-full p-3 rounded-[12px] text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-x-2 items-center">
            <button
              onClick={applyFilters}
              className="bg-black text-white w-full py-2.5 px-4 rounded-[8px]"
            >
              Apply
            </button>
            <button
              onClick={() => {
                clearFilters();
                setQuery(
                  `[["publishing_status", "=", "Approved"] , ["sync_to_website", "=", "1"]]`
                );
                setPriceRange({ min: "", max: "" });
              }}
              type="button"
              className="bg-black text-white w-full py-2.5 px-4 rounded-lg"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Below Filter Bar */}
      <div className="gap-x-2 flex items-center justify-end">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-3 rounded-[12px] text-[#000000A3] font-normal text-[14px] placeholder:text-[#000000A3] focus:outline-none bg-[#0000000A]"
            placeholder="Search puppies..."
          />
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <FiSearch className="w-5 h-5 text-[#000000]" />
          </span>
        </div>

        <button
          onClick={toggleFilterOpen}
          className="bg-black text-white px-3 py-2.5 rounded-lg sm:hidden flex items-center gap-x-2"
        >
          <CiFilter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>
      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto py-6 px-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#0000000D]">
            <h2 className="text-xl font-semibold">Filter</h2>
            <button onClick={toggleFilterOpen}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="mt-4 space-y-4">
            <div className="relative w-full">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] text-[#000000A3] focus:outline-none bg-[#0000000A]"
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
            <div className="relative w-full">
              <select
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] text-[#000000A3] focus:outline-none bg-[#0000000A]"
              >
                <option value="">Select Breed</option>
                {breed?.map((item) => (
                  <option key={item?.name} value={item?.breed_name}>
                    {item?.breed_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-full">
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] text-[#000000A3] focus:outline-none bg-[#0000000A]"
              >
                <option value="">Choose Color</option>
                {colors.map((colorOption) => (
                  <option key={colorOption} value={colorOption}>
                    {colorOption}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-full">
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] text-[#000000A3] focus:outline-none bg-[#0000000A]"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                placeholder="Min Price"
                className="w-full p-3 rounded-[12px] text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
              />
              <span className="text-black">-</span>
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                placeholder="Max Price"
                className="w-full p-3 rounded-[12px] text-[#000000A3] font-normal text-[14px] focus:outline-none bg-[#0000000A]"
              />
            </div>
            <div className="relative w-full">
              <input
                value={goHomeDate}
                onChange={(e) => setGoHomeDate(e.target.value)}
                type="date"
                className="form-input block w-full p-3 rounded-[12px] text-[#000000A3] focus:outline-none bg-[#0000000A]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => {
                clearFilters();
                setQuery(
                  `[["publishing_status", "=", "Approved"] , ["sync_to_website", "=", "1"]]`
                );
                setPriceRange({ min: "", max: "" });
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
  );
};

export default FilterBar;
