import React, { useEffect, useState } from "react";
import { useAdoption } from "../context/AdoptionContext";
import { PaymentElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

const CustomerStep2 = ({ ticketId, puppyDetails }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { selectedPaymentOption, nextStep, totalAmountCharged } = useAdoption();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlePayment = async () => {
      setLoading(true);
      const json = {
        adoption_ticket: ticketId,
        amount:
          selectedPaymentOption === "deposit"
            ? puppyDetails?.deposit_amount
            : puppyDetails?.price,
      };

      try {
        const res = await axios.post(
          "https://primary.kennelboss.app/api/method/kennelboss.stpayments.create_payment_intent",
          json
        );
        console.log("Stripe payment intent response", res);
        setClientSecret(res?.data?.message?.client_secret);
      } catch (error) {
        console.error("Error creating payment intent", error);
      } finally {
        setLoading(false);
      }
    };

    handlePayment();
  }, [ticketId, puppyDetails, selectedPaymentOption]);

  

  const appearance = {
    theme: "stripe",
  };

  return (
    <div className="mx-auto max-w-7xl p-4">
      {loading && <p>Loading payment options...</p>}
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <CheckoutForm/>
        </Elements>
      )}
    </div>
  );
};

export default CustomerStep2;
