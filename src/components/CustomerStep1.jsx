import React, { useContext, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup"; // For form validation
import Chat from "./Chat";
import { useAdoption } from "../context/AdoptionContext";

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
  const { submitCustomerDetails } = useAdoption();
  const [showChat, setShowChat] = useState(false);

  // Initialize formik
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
    onSubmit: (values) => {
      submitCustomerDetails(values);
      onContinue();
    },
  });

  const handleChatToggle = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[28px] font-normal mb-4">Customer Info</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-[#0000001F] px-5 py-6 rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        {/* Buttons */}
        <div className="flex flex-col items-end justify-end gap-y-3 mt-6">
          <button
            type="submit"
            className="bg-[#3056D3] text-white px-4 py-2 rounded-md"
          >
            Continue
          </button>

          <button
            type="button"
            className="flex items-center bg-[#3056D3] text-white px-4 py-2 rounded-md"
            onClick={handleChatToggle}
          >
            <BiMessageDetail className="mr-2" />
            Chat with Seller
          </button>
        </div>
      </form>

      {/* Chat Modal */}
      {showChat && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeChat}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Chat closeChat={closeChat} />
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerStep1;
 