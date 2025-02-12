import React, { useEffect, useState } from "react";
import { useAdoption } from "../context/AdoptionContext";
import axios from "axios";

const CustomerStep2 = ({ ticketId, puppyDetails }) => {
  const { selectedPaymentOption, totalAmountCharged } = useAdoption();
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
        console.log("json", json);
        const res = await axios.post(
          "https://primary.kennelboss.app/api/method/kennelboss.stpayments.create_checkout_session",
          json
        );
        console.log(res)
        const checkoutUrl = res?.data?.message;

        if (checkoutUrl) {
          // Redirect the user to the Stripe Checkout page
          window.location.href = checkoutUrl;
        }
      } catch (error) {
        console.error("Error creating checkout session", error);
      } finally {
        setLoading(false);
      }
    };

    handlePayment();
  }, [ticketId, puppyDetails, selectedPaymentOption]);

  return (
    <div className="mx-auto max-w-7xl p-4">
      {loading ? (
        <p>Loading payment options...</p>
      ) : (
        <p>Redirecting to checkout...</p>
      )}
    </div>
  );
};

export default CustomerStep2;
