import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";

const CheckCircleIcon = ({ className }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" fill="currentColor" />
  </svg>
);

const CustomerStep2 = () => {
  const [selectedOption, setSelectedOption] = useState("deposit");
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  const handleChatToggle = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const handlePayNow = () => {
    navigate("/payment-status");
  };

  return (
    <div className="max-w-4xl mx-auto m-6 bg-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-5">Customer Info</h2>
        <div className="flex mb-4 gap-x-5">
          <button
            className={`w-1/2 flex items-center px-4 py-2 rounded-md ${
              selectedOption === "deposit"
                ? "bg-[#1877F212] text-black"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedOption("deposit")}
          >
            {selectedOption === "deposit" && (
              <CheckCircleIcon className="text-green-500 mr-2" />
            )}
            Deposit $5
          </button>
          <button
            className={`w-1/2 flex items-center px-4 py-2 rounded-md ${
              selectedOption === "full"
                ? "bg-[#1877F212] text-black"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedOption("full")}
          >
            {selectedOption === "full" && (
              <CheckCircleIcon className="text-green-500 mr-2" />
            )}
            Full Payment
          </button>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-[#3056D3] text-white px-4 py-2 rounded-md"
            onClick={handlePayNow}
          >
            Pay Now
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-4 p-6">
        <button
          className="flex items-center bg-[#3056D3] text-white px-4 py-2 rounded-md"
          onClick={handleChatToggle}
        >
          <BiMessageDetail className="mr-2" />
          Chat with Seller
        </button>
      </div>

      {showChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Chat closeChat={closeChat} />
        </div>
      )}
    </div>
  );
};

export default CustomerStep2;
