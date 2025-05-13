import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import check from "../assets/check (1) 1.png";

const PaymentStatus = () => {
  const [status, setStatus] = useState("Verifying payment...");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = new URLSearchParams(location.search).get("session_id");

    if (sessionId) {
      verifyPayment(sessionId);
    } else {
      setStatus("No session ID found. Unable to verify payment.");
    }
  }, [location]);

  const verifyPayment = async (sessionId) => {
    try {
      const response = await axios.post(
        "https://kennelbossv2.frappe.cloud/api/method/kennelboss.stpayments.verify_checkout_session",
        { session_id: sessionId }
      );

      console.log(response);

      if (response?.data?.message === "success") {
        setStatus(
          "Payment verified successfully! Your adoption ticket is updated."
        );
        setTimeout(() => navigate("/"), 3000); // Redirect to home page after 3 seconds
      } else {
        setStatus("Failed to verify payment. Please contact support.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      setStatus(
        "Error verifying payment. Please try again or contact support."
      );
    }
  };

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
      </div>
    </div>
  );
};

export default PaymentStatus;
