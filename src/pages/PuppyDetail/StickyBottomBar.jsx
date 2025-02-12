import { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import TalkToBreederPopover from "../../components/TalkToBreederPopover";

export default function StickyBottomBar({ puppyDetail }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
    const handleButtonClick = () => {
      setIsPopoverOpen(!isPopoverOpen);
    };
  
  return (
    <>
    <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t py-4 px-4">
      <div className="flex flex-col">
        {/* Price & Deposit Info */}
        <div className="flex flex-col">
          <p className="text-[20px] font-medium">USD ${puppyDetail?.price}</p>
          <p className="text-[#000000CC] text-[14px]">
            Initial deposit amount will be{" "}
            <span className="text-black font-semibold">
              ${puppyDetail?.deposit_amount}
            </span>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex gap-x-2 items-center pt-3">
          {/* Video Chat Button */}
          <button onClick={handleButtonClick} className="border-[1.5px] border-black flex items-center gap-x-2 px-4 py-2 rounded-[6px] transition-all hover:bg-gray-100">
            <BsLaptop className="w-5 h-5" />
            <span className="text-[16px] font-medium">Video Chat</span>
          </button>

          {/* Talk to Breeder Button */}
          <button onClick={handleButtonClick} className="bg-black text-white flex items-center gap-x-2 px-4 py-2 rounded-[6px] transition-all hover:bg-gray-800">
            <svg
              width="24"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M8 9H16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13H14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 18H6C5.2 18 4.44 17.68 3.88 17.12C3.32 16.56 3 15.8 3 15V7C3 6.2 3.32 5.44 3.88 4.88C4.44 4.32 5.2 4 6 4H18C18.8 4 19.56 4.32 20.12 4.88C20.68 5.44 21 6.2 21 7V15C21 15.8 20.68 16.56 20.12 17.12C19.56 17.68 18.8 18 18 18H15L12 21L9 18Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="27" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[16px] font-medium">Talk to Breeder</span>
          </button>
        </div>
      </div>
    </div>
     {isPopoverOpen && (
      <TalkToBreederPopover
        puppyDetail={puppyDetail}
        isOpen={isPopoverOpen}
        setIsOpen={setIsPopoverOpen}
      />
    )}
    </>
  );
}
