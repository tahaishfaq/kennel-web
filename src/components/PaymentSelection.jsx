import React, { useState } from "react";
import { useAdoption } from "../context/AdoptionContext";
import { FaRegCircleCheck } from "react-icons/fa6";


const PaymentOptions = () => {
  const {
    puppyDetails,
    selectedPaymentOption,
    setSelectedPaymentOption,
    nextStep
  } = useAdoption();

  const handleSelection = (option) => {
    setSelectedPaymentOption(option);
  };


  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 flex lg:flex-row flex-col items-start gap-y-6 gap-x-6">
      <div className="lg:w-2/3 w-full bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-2xl font-normal mb-5">Select Payment Option</h2>
        <div className="flex flex-col gap-y-4">
          {/* Deposit Option */}
          <label className="flex items-center p-4 border rounded-md cursor-pointer">
            <input
              type="radio"
              name="paymentOption"
              value="deposit"
              checked={selectedPaymentOption === "deposit"}
              onChange={() => handleSelection("deposit")}
              className="mr-4"
            />
            <div className="flex items-center">
              {selectedPaymentOption === "deposit" && (
                <FaRegCircleCheck className="text-green-500 mr-2 w-6 h-6" />
              )}
              <span>Deposit ${puppyDetails?.deposit_amount}</span>
            </div>
          </label>

          {/* Full Payment Option */}
          <label className="flex items-center p-4 border rounded-md cursor-pointer">
            <input
              type="radio"
              name="paymentOption"
              value="full"
              checked={selectedPaymentOption === "full"}
              onChange={() => handleSelection("full")}
              className="mr-4"
            />
            <div className="flex items-center">
              {selectedPaymentOption === "full" && (
                <FaRegCircleCheck className="text-green-500 mr-2 w-6 h-6" />
              )}
              <span>Full Payment ${puppyDetails?.price}</span>
            </div>
          </label>
        </div>

        {/* Pay Now Button */}
        <div className="flex justify-end mt-6">
          <button
            className="bg-[#3056D3] text-white px-4 py-2 rounded-md"
          onClick={nextStep}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
