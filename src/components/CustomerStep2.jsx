import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe
import axios from "axios";
import Chat from "./Chat";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

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

const CustomerStep2 = ({ puppyDetails, customer, ticketId }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [clientSecretDone, setClientSecretDone] = useState(false);
  const [udpatedStatus, setUdpatedStatus] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChatToggle = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  // Formik configuration for handling payment submission
  const CreatePayment = useFormik({
    initialValues: { payment: "" },
    onSubmit: (values) => {
      const json = {
        adoption_ticket: ticketId,
        amount:
          values.payment === "deposit"
            ? puppyDetails.deposit_amount
            : puppyDetails.price,
      };

      try {
        axios
          .post(
            "https://primary.kennelboss.app/api/method/kennelboss.stpayments.create_payment_intent",
            json
          )
          .then((res) => {
            console.log("stripe payment intent", res);
            setClientSecret(res?.data?.message?.client_secret);

            setTimeout(() => {
              setUdpatedStatus(!udpatedStatus);
            }, 1000);

            if (res?.data?.message?.client_secret !== "") {
              setClientSecretDone(true);
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Function to handle the final payment step
  const handlePaymentDone = async () => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: customer.full_name,
            email: customer.email,
            address: {
              line1: customer.address,
            },
            phone: customer.phone,
          },
        },
      }
    );

    if (error) {
      console.error(error);
      navigate("/payment-failure");
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!");
      navigate("/payment-success");
      console.log(paymentIntent);
    }
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
            Deposit ${puppyDetails?.deposit_amount}
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
            Full Payment ${puppyDetails?.price}
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="bg-[#3056D3] text-white px-4 py-2 rounded-md"
            onClick={CreatePayment.handleSubmit} // Submitting the form to create payment intent
          >
            Pay Now
          </button>
        </div>

        {/* Render Stripe CardElement if clientSecret is ready */}
        {clientSecretDone && (
          <div className="mt-6">
            <CardElement />
            <button
              className="mt-4 bg-[#3056D3] text-white px-4 py-2 rounded-md"
              onClick={handlePaymentDone}
            >
              Complete Payment
            </button>
          </div>
        )}
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

// Wrap your CustomerStep2 component in Elements provider
const PaymentWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CustomerStep2 {...props} />
    </Elements>
  );
};

export default PaymentWrapper;
