import React from "react";
import { BiMessageDetail } from "react-icons/bi";

const CustomerStep1 = ({ onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[28px] font-medium mb-4">Customer Info</h2>
      <div className="border border-[#0000001F] px-5 py-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Full name
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
        </div>

        
          <div className="mt-7">
            <label className="block text-base font-medium text-[#212B36]">
              Billing Address
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Billing ZIP Code
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Billing State
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
        </div>


        
        <div className="mt-7">
            <label className="block text-base font-medium text-[#212B36]">
              Shipping Address
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
        





        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
          
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Shipping ZIP Code
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-medium text-base"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-[#212B36]">
              Shipping State
            </label>
            <input
              type="text"
              placeholder="Default input text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-y-3 mt-6">
          <button 
          className="bg-[#3056D3] text-white px-4 py-2 rounded-md"
          onClick={onContinue}
          >
            
            Continue
          </button>

          <button className="flex items-center bg-[#3056D3] text-white px-4 py-2 rounded-md">
            <BiMessageDetail className="mr-2" /> {/* Add the icon here */}
            Chat with Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerStep1;
