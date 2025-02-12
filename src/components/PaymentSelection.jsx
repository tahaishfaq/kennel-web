import React, { useState } from "react";
import { useAdoption } from "../context/AdoptionContext";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";
import PaymentDetails from "./PaymentDetails";
import { PulseLoader } from "react-spinners";

const PaymentOptions = ({ adoptionTicket }) => {
  const { puppyDetails, selectedPaymentOption, setSelectedPaymentOption } =
    useAdoption();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSelection = (option) => {
    setSelectedPaymentOption(option);
  };

  const handlePayment = async () => {
    if (!selectedPaymentOption) {
      setError("Please select a payment option before proceeding.");
      return;
    }
    setError("");
    setLoading(true);

    // const json = {
    //   adoption_ticket: adoptionTicket.name,
    //   amount:
    //     selectedPaymentOption === "deposit"
    //       ? puppyDetails?.deposit_amount + adoptionTicket.pickmepets_fee
    //       : puppyDetails?.price + adoptionTicket.pickmepets_fee,
    // }
    const json = {
      adoption_ticket: adoptionTicket.name,
      amount:
        selectedPaymentOption === "deposit"
          ? puppyDetails?.deposit_amount
          : puppyDetails?.price,
    };
    console.log("json", json);

    try {
      const res = await axios.post(
        "https://primary.kennelboss.app/api/method/kennelboss.stpayments.create_checkout_session",
        json
      );
      console.log(res);
      const checkoutUrl = res?.data?.message;

      if (checkoutUrl) {
        // Redirect the user to the Stripe Checkout page
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
      setError("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-[12px] p-[20px] space-y-4">
        <h2 className="text-[16px]">Select Payment Option</h2>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer gap-x-2">
              <input
                type="radio"
                name="paymentOption"
                value="deposit"
                checked={selectedPaymentOption === "deposit"}
                onChange={() => handleSelection("deposit")}
                className="w-4 h-4"
              />
              <span className="text-[16px]">Deposit</span>
            </label>
            <span className="text-[16px] text-[#000000] font-medium">
              ${puppyDetails?.deposit_amount}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer gap-x-2">
              <input
                type="radio"
                name="paymentOption"
                value="full"
                checked={selectedPaymentOption === "full"}
                onChange={() => handleSelection("full")}
                className="w-4 h-4"
              />

              <span className="text-[16px]">Full Payment</span>
            </label>
            <span className="text-[16px] text-[#000000] font-medium">
              ${puppyDetails?.price}
            </span>
          </div>
        </div>

        {/* <div className="flex justify-end mt-6">
         
        </div> */}

        {/* {error && <p className="text-red-500 mt-4">{error}</p>} */}
      </div>
      {/* <div className="lg:w-1/3 w-full">
        <PaymentDetails adoptionTicket={adoptionTicket} />
        <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? <PulseLoader size={8} color="#ffffff" /> : "Continue"}
          </button>
      </div> */}
    </>
  );
};

export default PaymentOptions;
