import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import PaymentSummary from './PaymentSummary';
import visalogo from '../assets/visa.png';
import stripelogo from '../assets/stripe.png';
import klarnalogo from '../assets/klarna.png';
import credovalogo from '../assets/credova.png';
import paypallogo from '../assets/paypal 1.png';
import Chat from '../components/Chat';

const PaymentOptions = () => {
  const [showChat, setShowChat] = useState(false);
  const handleChatToggle = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  return (
    <div className="flex justify-between max-w-7xl mx-auto p-4 sm:p-6">
      {/* Payment Options */}
      <div className="w-2/3 border border-[#0000001F] rounded-lg p-6">
        <h2 className="text-2xl font-medium mb-5">Payment Option</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay with debit or credit card</span>
            </label>
            <img src={visalogo} alt="Visa" className="w-10" />
          </div>

          <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay with Cash App</span>
            </label>
            <img src={stripelogo} alt="Cash App" className="w-10" />
          </div>

          <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay in instalments</span>
            </label>
            <img src={klarnalogo} alt="Klarna" className="w-10" />
          </div>

          <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay in instalments</span>
            </label>
            <img src={credovalogo} alt="Credova" className="w-10" />
          </div>

          <div className="flex justify-between items-center border border-[#0000001F] rounded-lg p-4">
            <label className="flex items-center space-x-2 text-[#212B36] text-base font-normal">
              <input type="radio" name="payment" className="form-radio h-5 w-5" />
              <span>Pay in instalments</span>
            </label>
            <img src={paypallogo} alt="PayPal" className="w-10" />
          </div>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="w-1/3 p-6">
        <PaymentSummary />
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="flex items-center bg-[#3056D3] text-white p-4 rounded-full"
          onClick={handleChatToggle}
        >
          <BiMessageDetail className="" />
          
        </button>
      </div>

      {showChat && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeChat}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Chat closeChat={closeChat} />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentOptions;