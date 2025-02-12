import React, { useState, useEffect } from "react";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

const CheckoutPage = ({ adoptionTicket, puppyDetails, selectedPaymentOption }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    try {
      const { error: paymentError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
      });

      if (paymentError) {
        setError(paymentError.message || "Payment failed. Please try again.");
      }
    } catch (err) {
      console.error("Payment submission error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-4">Complete Your Payment</h3>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        <button
          type="submit"
          className="bg-[#3056D3] text-white py-2 px-4 rounded-lg w-full mt-6"
          disabled={!stripe || loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

const EmbeddedCheckout = ({ adoptionTicket, puppyDetails, selectedPaymentOption }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      const paymentAmount =
        selectedPaymentOption === "deposit"
          ? (puppyDetails?.deposit_amount + adoptionTicket?.pickmepets_fee)
          : (puppyDetails?.price + adoptionTicket?.pickmepets_fee)

      try {
        const response = await axios.post(
          `${window.$BackEndURL}/api/method/kennelboss.payments.create_payment_intent`,
          {
            adoption_ticket: adoptionTicket.name,
            amount: paymentAmount,
            payment_type: selectedPaymentOption,
          }
        );
        console.log("Payment intent response:", response);
        setClientSecret(response?.data?.message?.client_secret);
      } catch (err) {
        console.error("Error fetching client secret:", err);
        setError("Failed to load payment details. Please try again.");
      }
    };

    fetchPaymentIntent();
  }, [adoptionTicket, puppyDetails, selectedPaymentOption]);

  if (!clientSecret) {
    return <p>Loading payment details...</p>;
  }

  const options = {
    clientSecret: clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutPage
        adoptionTicket={adoptionTicket}
        puppyDetails={puppyDetails}
        selectedPaymentOption={selectedPaymentOption}
      />
    </Elements>
  );
};

export default EmbeddedCheckout;
