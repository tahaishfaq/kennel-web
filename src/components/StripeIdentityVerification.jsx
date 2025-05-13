import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { useAdoption } from "../context/AdoptionContext";

const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

const StripeIdentityVerification = ({ adoptionTicket }) => {
  const [loader, setLoader] = useState(false);

  const { refreshTicket, setRefreshTicket } = useAdoption();

  const handleVerifyBusinessProfile = async () => {
    setLoader(true);
    const stripe = await stripePromise;
    if (!stripe) return;

    const json = {
      business_profile: adoptionTicket?.kennel?.name,
      verification_type: "Customer",
      adoption_ticket: adoptionTicket?.name,
      website_customer: adoptionTicket?.customer?.name,
    };

    try {
      const response = await axios.post(
        `https://kennelbossv2.frappe.cloud/api/method/kennelboss.verification.create_verification_session`,
        json
      );

      const session = response.data;
      const { error } = await stripe.verifyIdentity(
        session.data.session.client_secret
      );

      if (error) {
        console.error("[Verification Error]", error);
      } else {
        setRefreshTicket(!refreshTicket);
      }
    } catch (error) {
      console.error("Error during Stripe verification:", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleVerifyBusinessProfile}
        className="bg-[#3056D3] font-medium text-white py-[12px] px-[22px] w-full rounded-lg"
        disabled={loader}
      >
        {loader ? <PulseLoader size={8} color="#ffffff" /> : "Verify Identity"}
      </button>
    </div>
  );
};

const PaymentOptionsWrapper = (props) => (
  <Elements stripe={stripePromise}>
    <StripeIdentityVerification {...props} />
  </Elements>
);

export default PaymentOptionsWrapper;
