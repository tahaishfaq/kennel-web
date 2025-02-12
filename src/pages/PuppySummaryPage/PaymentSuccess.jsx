import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  const paymentIntent = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");

  useEffect(() => {
    const verify = async () => {
      if (paymentIntent && redirectStatus === "succeeded") {
        verifyPayment(paymentIntent);
      } else {
        setStatus("error");
        setError("Invalid payment parameters or payment not successful.");
      }
    };
    verify();
  }, [paymentIntent, redirectStatus]);

  const verifyPayment = async (paymentIntentId) => {
    try {
      const response = await axios.post(
        `${window.$BackEndURL}/api/method/kennelboss.payments.verify_payment_intent`,
        { payment_intent_id: paymentIntentId }
      );
      const message = response?.data?.message?.message;

      if (message === "Payment successful.") {
        setStatus("success");
      } else if (message === "Payment not completed for this session.") {
        setStatus("failed");
      } else {
        setStatus("unknown");
        setError("Unexpected response from server.");
      }
    } catch (err) {
      setStatus("error");
      setError("Failed to verify payment. Please contact support.");
    }
  };

  return (
    <div className="min-h-screen font-satoshi flex items-center justify-center bg-gray-100 sm:px-0 px-4">
      <div className="bg-white p-12 rounded-[12px] shadow-sm max-w-md w-full text-center">
        {status === "success" && (
          <div>
            <div className="flex justify-center">
              <div className="w-[96px] h-[96px] rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  width="113"
                  height="112"
                  viewBox="0 0 113 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="112"
                    height="112"
                    rx="56"
                    fill="#71C900"
                    fill-opacity="0.1"
                  />
                  <rect
                    x="8.5"
                    y="8"
                    width="96"
                    height="96"
                    rx="48"
                    fill="#71C900"
                  />
                  <path
                    d="M37.25 62.875C37.25 62.875 41.375 62.875 46.875 72.5C46.875 72.5 62.1617 47.2917 75.75 42.25"
                    stroke="white"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-1 pt-1">
              <h2 className="text-[34px] font-medium">Payment Successful</h2>
              <p className="text-[16px] text-center text-[#000000CC]">
                Thank you! Your payment has been successfully processed.
              </p>
              <div className="flex items-center justify-center pt-6">
                <button
                  className="bg-[#3056D3] text-white px-4 py-2 w-full rounded-lg text-[16px]"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "failed" && (
          <div>
            <div className="flex justify-center">
              <div className="w-[96px] h-[96px] rounded-full bg-red-100 flex items-center justify-center">
                <svg
                  width="113"
                  height="112"
                  viewBox="0 0 113 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="112"
                    height="112"
                    rx="56"
                    fill="#E53E3E"
                    fill-opacity="0.1"
                  />
                  <rect
                    x="8.5"
                    y="8"
                    width="96"
                    height="96"
                    rx="48"
                    fill="#E53E3E"
                  />
                  <path
                    d="M72 40L40 72M40 40L72 72"
                    stroke="white"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-1 pt-1">
              <h2 className="text-[34px] font-medium">Payment Failed</h2>
              <p className="text-[16px] text-center text-[#000000CC] ">
                We encountered an issue with your payment. Please try again or
                contact support.
              </p>
              <div className="flex items-center justify-center pt-6">
                <button
                  className="bg-[#3056D3] text-white px-4 py-2 w-full rounded-lg text-[16px]"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div>
            <div className="flex justify-center">
              <div className="w-[96px] h-[96px] rounded-full bg-yellow-100 flex items-center justify-center">
                <svg
                  width="113"
                  height="112"
                  viewBox="0 0 113 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="112"
                    height="112"
                    rx="56"
                    fill="#ECC94B"
                    fill-opacity="0.1"
                  />
                  <rect
                    x="8.5"
                    y="8"
                    width="96"
                    height="96"
                    rx="48"
                    fill="#ECC94B"
                  />
                  <path
                    d="M56 36V60M56 76H56.01"
                    stroke="white"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-1 pt-1">
              <h2 className="text-[34px] font-medium">Payment Error</h2>
              <p className="text-[16px] text-center text-[#000000CC]">
                {error}
              </p>
              <div className="flex items-center justify-center pt-6">
                <button
                  className="bg-[#3056D3] text-white px-4 py-2 w-full rounded-lg text-[16px]"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "loading" && (
          <div>
            <div className="flex justify-center">
              <div className="w-[96px] h-[96px] rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  width="113"
                  height="112"
                  viewBox="0 0 113 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="112"
                    height="112"
                    rx="56"
                    fill="#3182CE"
                    fill-opacity="0.1"
                  />
                  <rect
                    x="8.5"
                    y="8"
                    width="96"
                    height="96"
                    rx="48"
                    fill="#3182CE"
                  />
                  <path
                    d="M56 24V48M56 64H56.01"
                    stroke="white"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-1 pt-1">
              <h2 className="text-[34px] font-medium">Verifying Payment...</h2>
              <p className="text-[16px] text-center text-[#000000CC]">
                Please wait while we verify your payment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
