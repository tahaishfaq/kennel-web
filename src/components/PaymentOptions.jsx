import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import visalogo from '../assets/visa.png';
import stripelogo from '../assets/stripe.png';
import klarnalogo from '../assets/klarna.png';
import { useAdoption } from '../context/AdoptionContext';
import PaymentDetails from "./PaymentDetails";

const PaymentOptions = ({adoptionTicket}) => {
  const { selectedPaymentOption, setSelectedPaymentOption, nextStep } = useAdoption(); // Use adoption context

  // Handle payment option change
  const handlePaymentChange = (event) => {
    setSelectedPaymentOption(event.target.value); // Set selected payment option globally
  };

  return (
    <div className="flex lg:flex-row gap-y-4 flex-col justify-between max-w-7xl mx-auto gap-x-6 p-4 sm:p-6">
      <div className="flex flex-col w-full lg:w-2/3">
        <h2 className="text-2xl font-medium mb-3 lg:mb-5">Payment Option</h2>
        <div className="border border-[#0000001F] rounded-lg p-3 lg:p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-3 lg:p-4">
              <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selectedPaymentOption === "card"}
                  onChange={handlePaymentChange}
                  className="form-radio h-5 w-5"
                />
                <span>Pay with debit or credit card</span>
              </label>
              <img src={visalogo} alt="Visa" className="lg:w-10 w-6 object-contain" />
            </div>

            <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-3 lg:p-4">
              <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
                <input
                  type="radio"
                  name="payment"
                  value="cashapp"
                  checked={selectedPaymentOption === "cashapp"}
                  onChange={handlePaymentChange}
                  className="form-radio h-5 w-5"
                />
                <span>Pay with Cash App</span>
              </label>
              <img src={stripelogo} alt="Cash App" className="lg:w-10 w-6 object-contain" />
            </div>

            <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-3 lg:p-4">
              <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
                <input
                  type="radio"
                  name="payment"
                  value="klarna"
                  checked={selectedPaymentOption === "klarna"}
                  onChange={handlePaymentChange}
                  className="form-radio h-5 w-5"
                />
                <span>Pay in instalments</span>
              </label>
              <img src={klarnalogo} alt="Klarna" className="lg:w-10 w-6 object-contain" />
            </div>

             {/* <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay in instalments</span>
            </label>
            <img src={credovalogo} alt="Credova" className="w-10" />
          </div> */}

            {/* <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay in instalments</span>
            </label>
            <img src={paypallogo} alt="PayPal" className="w-10" />
          </div> */}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
       <PaymentDetails adoptionTicket={adoptionTicket}/>
        <button onClick={nextStep} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
          Continue to billing
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
