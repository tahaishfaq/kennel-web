import React from "react";

import { ChromePicker } from "react-color";
import { AiOutlineClose } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { useFilter } from "../context/FilterContext";

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
  } = useFilter();

  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

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
      {/* Filter Bar for Larger Screens */}
      <div className="hidden md:flex items-center justify-between py-4 px-4 bg-white drop-shadow-md rounded-lg">
        <div className="flex items-center gap-x-2 max-w-5xl w-full">
          <div className="relative w-full">
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
          <div className="relative w-full">
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="form-select block w-full p-3 rounded-[12px] text-gray-500 focus:outline-none ring-0 bg-[#0000000A]"
            >
              <option value="">Breed</option>
              <option value="Labrador">Labrador</option>
              <option value="German Shepherd">German Shepherd</option>
            </select>
          </div>
          <div className="relative w-full">
            <div>
              <button
                onClick={toggleColorPicker}
                className="w-full p-3 rounded-[12px] focus:outline-none text-gray-500 ring-0 bg-[#0000000A] text-left"
              >
                {color || "Choose Color"}
              </button>
              {displayColorPicker && (
                <div className="absolute z-10">
                  <div
                    className="fixed top-0 right-0 bottom-0 left-0"
                    onClick={toggleColorPicker}
                  />
                  <ChromePicker
                    color={color}
                    onChange={handleColorChange}
                    disableAlpha
                  />
                </div>
              )}
            </div>
          </div>
          <div className="relative w-full">
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="form-select block w-full p-3 rounded-[12px] text-gray-500 focus:outline-none ring-0 bg-[#0000000A]"
            >
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="relative w-full">
            <input
              value={goHomeDate}
              onChange={(e) => setGoHomeDate(e.target.value)}
              placeholder="Go Home Date"
              type="date"
              className="form-input block w-full p-3 rounded-[12px] text-gray-400 focus:outline-none ring-0 bg-[#0000000A]"
            />
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={applyFilters}
            className="bg-black text-white px-4 py-3 rounded-lg"
          >
            Apply
          </button>
          <button
            onClick={() => {
              clearFilters();
              setQuery("");
            }}
            type="button"
            className="bg-black text-white px-4 py-3 rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Filter Button for Smaller Screens */}
      <div className="md:hidden flex items-center gap-x-4  p-4 bg-white shadow-md rounded-lg">
        <div className="relative flex items-center w-full">
          <input
            type="text"
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
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button onClick={toggleFilterOpen}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="mt-4">
            <div className="relative w-full mb-4">
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A]"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="relative w-full mb-4">
              <select
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A]"
              >
                <option value="">Breed</option>
                <option value="Labrador">Labrador</option>
                <option value="German Shepherd">German Shepherd</option>
              </select>
            </div>
            <div className="relative w-full mb-4">
              <div>
                <button
                  onClick={toggleColorPicker}
                  className="w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A] text-left"
                >
                  {color || "Choose Color"}
                </button>
                {displayColorPicker && (
                  <div className="absolute z-10">
                    <div
                      className="fixed top-0 right-0 bottom-0 left-0"
                      onClick={toggleColorPicker}
                    />
                    <ChromePicker
                      color={color}
                      onChange={handleColorChange}
                      disableAlpha
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="relative w-full mb-4">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="form-select block w-full p-3 rounded-[12px] focus:outline-none focus:ring focus:border-blue-300 bg-[#0000000A]"
              >
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
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
                setQuery("");
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
    </>
  );
};

export default FilterBar;
