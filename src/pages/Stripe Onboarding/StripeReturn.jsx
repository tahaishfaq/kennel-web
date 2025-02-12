import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const StripeReturn = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [chargesEnabled, setChargesEnabled] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const stripeAccount = searchParams.get("stripe_account");

    if (!stripeAccount) {
      setError("Stripe account ID is missing in the return URL.");
      setLoading(false);
      return;
    }

    const checkStripeStatus = async () => {
      try {
        // Call the backend API with the stripe_account parameter
        const response = await axios.post(
          `${window.$BackEndURL}/api/method/kennelboss.onboarding.return_status_check`,
          { stripe_account: stripeAccount }
        );

        const { data } = response.data;
        console.log("res", data);
        setChargesEnabled(data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "An error occurred while checking the Stripe status."
        );
      } finally {
        setLoading(false);
      }
    };

    checkStripeStatus();
  }, [searchParams]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stripe Return Status</h1>
      {loading && <p>Checking Stripe account status... Please wait.</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {chargesEnabled !== null && (
        <p>
          Charges Enabled: <strong>{chargesEnabled ? "Yes" : "No"}</strong>
        </p>
      )}
    </div>
  );
};

export default StripeReturn;
