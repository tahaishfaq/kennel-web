import React, { useState } from "react";
import picture from "../assets/Frame 1000004378.png";
import { LuPenSquare } from "react-icons/lu";

const TalkToBreederPopover = () => {
  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Popover state

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      } bg-gray-900 bg-opacity-60 z-50`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-start">
          <h2 className=" text-[#000000] text-2xl font-medium mb-4">
            Talk to Breeder
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#000000] hover:text-gray-600"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Image and Info */}
          <div className=" bg-[#0000000A] h-[410px] p-4 rounded-md flex flex-col w-full md:w-1/3">
            <img
              src={picture}
              alt="Dog"
              className="rounded-lg w-[283px] h-[303px] mb-3"
            />
            <div className="justify-start items-start text-start ">
              <h3 className="text-xl font-medium text-[#000000] mb-2">
                Female Princes
              </h3>
              <p className="text-[#000000] text-sm font-normal">Information</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-2/3">
            <h3 className=" text-[#000000] text-2xl font-medium mb-1">
              Ask about Female Princes
            </h3>
            <p className="text-[#000000] text-sm font-normal mt-2 mb-6">
              Lorem ipsum dolor sit amet consectetur. Vulputate porta lorem ut
              justo sed. Vitae consequat quis magnis accumsan. Nec venenatis
              massa odio pharetra sed purus purus aliquam sed.
            </p>

            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                />
              </div>
              <div className="flex gap-4">
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                  defaultValue="Country"
                >
                  <option disabled>Country</option>
                  <option>USA</option>
                  <option>Canada</option>
                </select>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                  defaultValue="States"
                >
                  <option disabled>States</option>
                  <option>New York</option>
                  <option>California</option>
                </select>
              </div>
              <div className="relative w-full flex justify-center items-center">
      {/* Icon */}
      <LuPenSquare className="absolute left-4  top-3 text-gray-400" />
      
      {/* Textarea */}
      <textarea
        rows="4"
        placeholder="Type your message"
        className="w-full pl-10 p-3 border border-[#E0E0E0] text-[#929DA7] text-sm font-normal rounded-lg"
      ></textarea>
    </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-black border-black focus:ring-black checked:bg-black"
                  checked={selected}
                  onChange={() => setSelected(!selected)}
                />
                <p className="text-[#212B36] text-xs font-normal">
                  Information
                </p>
              </div>

              <p className="text-base font-normal text-[#000000] mb-6">
                Lorem ipsum dolor sit amet consectetur. Vulputate porta.
              </p>

              <button
                type="submit"
                className="py-3 px-16 bg-[#CCD1D2] text-[#667479] rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToBreederPopover;
