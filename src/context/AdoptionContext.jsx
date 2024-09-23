import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AdoptionContext = createContext();

export const useAdoption = () => useContext(AdoptionContext);

export const AdoptionProvider = ({ children }) => {
  const [puppyDetails, setPuppyDetails] = useState(null);
  const [customerofAdoption, setCustomerOfAdoption] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [ticketId, setTicketId] = useState(null);
  const [identityVerification, setIdentityVerification] = useState("");
  const [businessProfile, setBusinessProfile] = useState(null)
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const submitCustomerDetails = async (values) => {
    try {
      const response = await axios.put(
        `${window.$BackEndURL}/api/resource/Website Customer/${customerofAdoption?.name}`,
        values
      );
      console.log("customer", response?.data?.data);
      setCustomerDetails(response?.data?.data);
      await handleStripeCustomer(response?.data?.data?.name);
    } catch (error) {
      console.error("Error submitting customer details", error);
    }
  };

  const handleStripeCustomer = async (name) => {
    const json = {
      website_customer: name,
    };
    try {
      axios
        .post(
          `https://primary.kennelboss.app/api/method/kennelboss.stcustomer.create_stcustomer`,
          json
        )
        .then((res) => {
          console.log("Stripe Customer", res?.data?.message);
          console.log("Stripe Customer", res?.data?.message.stripe_customer);
          localStorage.setItem(
            "customerDetails",
            JSON.stringify(res?.data?.message)
          );
          setCustomerDetails(res?.data?.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedCustomerDetails = localStorage.getItem("customerDetails");
    if (storedCustomerDetails) {
      setCustomerDetails(JSON.parse(storedCustomerDetails));
    }
  }, [localStorage]);

  return (
    <AdoptionContext.Provider
      value={{
        puppyDetails,
        setPuppyDetails,
        customerDetails,
        step,
        setStep,
        nextStep,
        prevStep,
        submitCustomerDetails,
        setCustomerOfAdoption,
        setTicketId,
        ticketId,
        setIdentityVerification,
        identityVerification,
        setBusinessProfile,
        businessProfile
      }}
    >
      {children}
    </AdoptionContext.Provider>
  );
};
