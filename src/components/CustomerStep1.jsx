import React, { useContext, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup"; // For form validation
import Chat from "./Chat";
import { useAdoption } from "../context/AdoptionContext";
import PaymentDetails from "./PaymentDetails";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Elements, useStripe } from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_MUCRGDLls3HZurHWRkECm1RE");

// Validation schema using Yup
const validationSchema = Yup.object({
  full_name: Yup.string().required("Full name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  billing_address: Yup.string().required("Billing address is required"),
  billing_zip_code: Yup.string().required("Billing ZIP Code is required"),
  billing_state: Yup.string().required("Billing State is required"),
  shipping_address: Yup.string().required("Shipping address is required"),
  shipping_zip_code: Yup.string().required("Shipping ZIP Code is required"),
  shipping_state: Yup.string().required("Shipping State is required"),
});

const CustomerStep1 = ({ onContinue }) => {
  const { submitCustomerDetails, ticketId, businessProfile, customerDetails, identityVerification, nextStep } = useAdoption();

  const [loader, setLoader] = useState(false);
  const stripe = useStripe();


  // Initialize formik for customer details
  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
      billing_address: "",
      billing_zip_code: "",
      billing_state: "",
      shipping_address: "",
      shipping_zip_code: "",
      shipping_state: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const response = await submitCustomerDetails(values);
      console.log(response);
  
      if (response.success) {
        nextStep();
      } else {
        console.error("Error:", response.data);
      }
    },
  });
  



  // Handle Stripe Verification
  const handleVerifyBusinessProfile = async () => {
    setLoader(true);

    if (!stripe) {
      return;
    }

    const json = {
      business_profile: businessProfile?.name,
      verification_type: "Customer",
      adoption_ticket: ticketId,
      website_customer: customerDetails?.name,
    };

    try {
      // Call your backend to create the VerificationSession.
      const response = await axios.post(
        `https://primary.kennelboss.app/api/method/kennelboss.verification.create_verification_session`,
        json
      );
      console.log("Stripe Response", response);
      const session = response.data;

      setTimeout(() => {
        setLoader(false);
      }, 2000);

      // Show the verification modal.
      const { error } = await stripe.verifyIdentity(session.data.session.client_secret);

      if (error) {
        console.error("[Verification Error]", error);
      } else {
        console.log("Verification Completed!");
        setTimeout(() => {
          onContinue(); // Continue to the next step once verification is completed
        }, 1000);
      }
    } catch (error) {
      console.error("Error creating VerificationSession:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <form onSubmit={formik.handleSubmit}
        className="flex lg:flex-row flex-col items-start gap-x-6 gap-y-4"
      >
        <div className="lg:w-2/3 w-full border border-[#0000001F] px-5 py-6 rounded-md ">
          <h2 className="text-[28px] font-normal mb-4">Customer Info</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Full name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter full name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
                value={formik.values.full_name}
                onChange={formik.handleChange}
              />
              {formik.touched.full_name && formik.errors.full_name && (
                <div className="text-red-500 text-sm">
                  {formik.errors.full_name}
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>
          </div>

          {/* Billing Address */}
          <div className="mt-7">
            <label className="block text-base font-medium text-[#212B36]">
              Billing Address
            </label>
            <input
              type="text"
              name="billing_address"
              placeholder="Enter billing address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
              value={formik.values.billing_address}
              onChange={formik.handleChange}
            />
            {formik.touched.billing_address && formik.errors.billing_address && (
              <div className="text-red-500 text-sm">
                {formik.errors.billing_address}
              </div>
            )}
          </div>

          {/* Billing ZIP and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Billing ZIP Code
              </label>
              <input
                type="text"
                name="billing_zip_code"
                placeholder="Enter billing ZIP code"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
                value={formik.values.billing_zip_code}
                onChange={formik.handleChange}
              />
              {formik.touched.billing_zip_code &&
                formik.errors.billing_zip_code && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.billing_zip_code}
                  </div>
                )}
            </div>

            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Billing State
              </label>
              <input
                type="text"
                name="billing_state"
                placeholder="Enter billing state"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
                value={formik.values.billing_state}
                onChange={formik.handleChange}
              />
              {formik.touched.billing_state && formik.errors.billing_state && (
                <div className="text-red-500 text-sm">
                  {formik.errors.billing_state}
                </div>
              )}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mt-7">
            <label className="block text-base font-medium text-[#212B36]">
              Shipping Address
            </label>
            <input
              type="text"
              name="shipping_address"
              placeholder="Enter shipping address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
              value={formik.values.shipping_address}
              onChange={formik.handleChange}
            />
            {formik.touched.shipping_address &&
              formik.errors.shipping_address && (
                <div className="text-red-500 text-sm">
                  {formik.errors.shipping_address}
                </div>
              )}
          </div>

          {/* Shipping ZIP and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Shipping ZIP Code
              </label>
              <input
                type="text"
                name="shipping_zip_code"
                placeholder="Enter shipping ZIP code"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-[#637381] font-normal text-base"
                value={formik.values.shipping_zip_code}
                onChange={formik.handleChange}
              />
              {formik.touched.shipping_zip_code &&
                formik.errors.shipping_zip_code && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.shipping_zip_code}
                  </div>
                )}
            </div>

            <div>
              <label className="block text-base font-medium text-[#212B36]">
                Shipping State
              </label>
              <input
                type="text"
                name="shipping_state"
                placeholder="Enter shipping state"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={formik.values.shipping_state}
                onChange={formik.handleChange}
              />
              {formik.touched.shipping_state && formik.errors.shipping_state && (
                <div className="text-red-500 text-sm">
                  {formik.errors.shipping_state}
                </div>
              )}
            </div>
          </div>

        </div>

        <div className="lg:w-1/3 w-full">
          <PaymentDetails />
          {identityVerification == "verified" ? <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-normal"
          >
            Continue
          </button> :
            <button
              type="button"
              onClick={handleVerifyBusinessProfile}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-normal"
            >
              Stripe Verification
            </button>
          }
        </div>

      </form>
    </div >
  );
};

// Wrap the component in the Elements provider
const CustomerStep1Wrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CustomerStep1 {...props} />
    </Elements>
  );
};

export default CustomerStep1Wrapper;
