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
  const [businessProfile, setBusinessProfile] = useState(null);
  const [step, setStep] = useState(1);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [clientSecret, setClientSecret] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [refreshTicket, setRefreshTicket] = useState(false)
  const [totalAmountCharged, setTotalAmountCharged] = useState(0)

  // Step management
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  // Submit customer details to the backend and handle Stripe customer creation
  const submitCustomerDetails = async (values) => {
    try {
      const response = await axios.put(
        `${window.$BackEndURL}/api/resource/Website Customer/${customerofAdoption?.name}`,
        values
      );

      console.log("customer", response?.data?.data);
      setCustomerDetails(response?.data?.data);

      const stripeResult = await handleStripeCustomer(response?.data?.data?.name);

      if (stripeResult.success) {
        return {
          success: true,
          data: stripeResult,
        };
      } else {
        return {
          success: false,
          data: stripeResult.error,
        };
      }
    } catch (error) {
      console.error("Error submitting customer details", error);
      return {
        success: false,
        data: error,
      };
    }
  };

  // Handle Stripe customer creation
  const handleStripeCustomer = async (name) => {
    const json = { website_customer: name };
    try {
      const res = await axios.post(
        `https://primary.kennelboss.app/api/method/kennelboss.stcustomer.create_stcustomer`,
        json
      );
      console.log("Stripe Customer", res?.data?.message);
      localStorage.setItem("customerDetails", JSON.stringify(res?.data?.message));
      setCustomerDetails(res?.data?.message);

      return {
        success: true,
        message: "Stripe customer created successfully",
        data: res,
      };
    } catch (error) {
      console.error("Error creating Stripe customer", error);
      return {
        success: false,
        message: "Failed to create Stripe customer",
        data: error,
      };
    }
  };

  // Handle payment creation (moved from component to context)
  // const handlePayment = async (ticketId, amount) => {
  //   setIsLoading(true);
  //   const json = {
  //     adoption_ticket: ticketId,
  //     amount: amount,
  //   };

  //   try {
  //     const res = await axios.post(
  //       "https://primary.kennelboss.app/api/method/kennelboss.stpayments.create_payment_intent",
  //       json
  //     );
  //     console.log("Stripe payment intent response", res);
  //     setClientSecret(res?.data?.message?.client_secret);
  //     nextStep()
  //   } catch (error) {
  //     console.error("Error creating payment intent", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // Load customer details from localStorage when component mounts
  useEffect(() => {
    const storedCustomerDetails = localStorage.getItem("customerDetails");
    if (storedCustomerDetails) {
      setCustomerDetails(JSON.parse(storedCustomerDetails));
    }
  }, []);

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
        businessProfile,
        selectedPaymentOption,
        setSelectedPaymentOption,
        clientSecret,
        isLoading,
        refreshTicket, 
        setRefreshTicket,
        totalAmountCharged, 
        setTotalAmountCharged
      }}
    >
      {children}
    </AdoptionContext.Provider>
  );
};
