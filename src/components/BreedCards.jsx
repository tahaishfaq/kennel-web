import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";

const BreedCards = ({ data }) => {
  return (
    <div className="border border-[#0000000D] p-2.5 rounded-[12px] cursor-pointer puppy-card-shadow transition-shadow duration-200">
      <div className="">
        <img
          src={
            data?.breed_image
              ? window.$BackEndURL + data?.breed_image
              : "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="puppy"
          className="rounded-[10px] h-[283px] w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-1.5 py-2 px-2">
        <div className="flex items-center justify-between">
          <p className="lg:text-xl text-lg capitalize w-60 truncate">{data?.breed_name}</p>
          {/* <p className="font-medium">Price</p> */}
        </div>
        {/* <div>
          <span className="text-[#000000A3] text-sm">Information</span>
        </div> */}
      </div>
    </div>
  );
};

export default BreedCards;
