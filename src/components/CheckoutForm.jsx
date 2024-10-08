import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentDone = async () => {
    if (!stripe || !elements) {
      console.error("Stripe or elements not loaded properly");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/payment-success", // Correct return URL
      },
    });

    if (error) {
      console.error("Payment failed", error);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!", paymentIntent);
      nextStep(); // Move to the next step
    } else {
      console.log(
        "Payment processing or requires further action",
        paymentIntent
      );
    }
  };
  return (
    <div className="mx-auto max-w-7xl p-4 ">
      <div className="text-[24px] font-normal mb-4">CheckoutForm</div>
      <PaymentElement />
      <button className="px-8 bg-blue-600 text-white py-3 rounded-lg font-normal mt-10" onClick={handlePaymentDone} >
        Complete Payment
      </button>
    </div>
  );
};

export default CheckoutForm;
