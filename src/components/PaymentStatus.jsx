import React from "react";
import check from "../assets/check (1) 1.png";
import { useNavigate } from "react-router-dom";

function PaymentStatus() {
  const navigate = useNavigate()
  return (
    <div className="flex  items-center justify-center h-screen bg-gray-50">
      <div className="bg-blue-50 rounded-lg p-8 shadow-lg flex flex-col items-center w-[630px]">
        <div className=" text-green-600 rounded-full p-4 mb-6">
          <img src={check} alt="Success" className="h-16 w-16" />
        </div>
        <h1 className="text-3xl font-medium text-[#000000] mb-1">Thank You!</h1>
        <p className="text-[#000000] text-base font-normal mb-5">
          Your payment was successfully processed.
        </p>
        <button
          className="bg-[#3056D3] text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/")}
        >
          Go To Home
        </button>
      </div>
    </div>
  );
}

export default PaymentStatus;
