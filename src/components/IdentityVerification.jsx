import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Elements, useStripe } from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

const IdentityVerification = ({
  identityVerification,
  businessProfile,
  ticketId,
  customer,
  onContinue,
}) => {
  const [loader, setLoader] = useState(false);
  const stripe = useStripe();

  const handleVerifyBusinessProfile = async () => {
    setLoader(true);

    if (!stripe) {
      return;
    }

    const json = {
      business_profile: businessProfile?.name,
      verification_type: "Customer",
      adoption_ticket: ticketId,
      website_customer: customer?.name,
    };

    try {
      // Call your backend to create the VerificationSession.
      const response = await axios.post(
        `https://kennelbossv2.frappe.cloud/api/method/kennelboss.verification.create_verification_session`,
        json
      );
      console.log("stripeResponse", response);
      const session = await response;

      setTimeout(() => {
        setLoader(false);
      }, 2000);

      // Show the verification modal.
      const { error } = await stripe.verifyIdentity(
        session.data.data.session.client_secret
      );

      if (error) {
        console.error("[error]", error);
      } else {
        console.log("Verification Completed!");
        setTimeout(() => {
          onContinue();
        }, 1000);
      }
    } catch (error) {
      console.error("Error creating VerificationSession:", error);
    }
  };

  return (
    <>
      {identityVerification == "verified" ? (
        ""
      ) : (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col justify-center items-center bg-[#1877F20A] mt-10 rounded-lg">
            <div className="flex flex-col justify-center items-center my-8">
              <h3 className="text-[#000000] text-[28px] font-normal mb-2 text-center">
                Please Verify your Identity First
              </h3>
              <button
                onClick={handleVerifyBusinessProfile}
                className="bg-[#3056D3] text-white font-medium text-base py-2 px-4 rounded mt-4"
              >
                Verify Identity
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Wrap the IdentityVerification component in the Elements provider
const IdentityVerificationWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <IdentityVerification {...props} />
    </Elements>
  );
};

export default IdentityVerificationWrapper;
