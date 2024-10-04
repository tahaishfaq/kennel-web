import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import axios
import picture from "../assets/Frame 1000004378.png";
import { LuPenSquare } from "react-icons/lu";

const TalkToBreederPopover = ({ puppyDetail }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      country: "",
      state: "",
      message: "",
      puppy_owner: false,
      puppy: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone_number: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {
        const json = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          country: values.country,
          state: values.state,
          message: values.message,
          puppy_owner: puppyDetail?.business_profile,
          puppy: puppyDetail?.name,
        };
        const response = await axios.post(`${window.$BackEndURL}/api/resource/Breeder Queries`, json);
        console.log("Form submitted successfully:", response.data);

        setTimeout(() => {
          setIsOpen(false);
        }, 500);
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      }
    },
  });

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      } bg-gray-900 bg-opacity-60 z-50`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-start">
          <h2 className=" text-[#000000] text-2xl font-medium mb-4">
            Talk to Breeder
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#000000] hover:text-gray-600"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Image and Info */}
          <div className=" bg-[#0000000A] h-[410px] p-4 rounded-md flex flex-col w-full md:w-1/3">
            <img
              src={picture}
              alt="Dog"
              className="rounded-lg w-[283px] h-[303px] mb-3"
            />
            <div className="justify-start items-start text-start ">
              <h3 className="text-xl font-medium text-[#000000] mb-2">
                Female Princes
              </h3>
              <p className="text-[#000000] text-sm font-normal">Information</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-2/3">
            <h3 className=" text-[#000000] text-2xl font-medium mb-1">
              Ask about Female Princes
            </h3>
            <p className="text-[#000000] text-sm font-normal mt-2 mb-6">
              Lorem ipsum dolor sit amet consectetur. Vulputate porta lorem ut
              justo sed. Vitae consequat quis magnis accumsan. Nec venenatis
              massa odio pharetra sed purus purus aliquam sed.
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-y-1 w-full">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.first_name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.first_name}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-y-1 w-full">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.last_name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.last_name}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-y-1 w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-y-1 w-full">
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone_number ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.phone_number}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Country and State */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-y-1 w-full">
                  <select
                    name="country"
                    className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                  >
                    <option disabled value="">
                      Country
                    </option>
                    <option>USA</option>
                    <option>Canada</option>
                  </select>
                  {formik.errors.country ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.country}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-y-1 w-full">
                  <select
                    name="state"
                    className="w-full p-3 border border-gray-300 rounded-lg text-[#99A2A5]"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                  >
                    <option disabled value="">
                      State
                    </option>
                    <option>New York</option>
                    <option>California</option>
                  </select>
                  {formik.errors.state ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.state}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-y-1">
                <div className="relative w-full flex justify-center items-center">
                  <LuPenSquare className="absolute left-4 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Type your message"
                    className="w-full pl-10 p-3 border border-[#E0E0E0] text-[#929DA7] text-sm font-normal rounded-lg"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>
                {formik.errors.message ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>

              {/* Puppy Owner */}
              {/* <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="puppy_owner"
                  className="form-radio h-5 w-5 text-black border-black focus:ring-black checked:bg-black"
                  checked={formik.values.puppy_owner}
                  onChange={() =>
                    formik.setFieldValue(
                      "puppy_owner",
                      !formik.values.puppy_owner
                    )
                  }
                />
                <p className="text-[#212B36] text-xs font-normal">
                  Puppy Owner
                </p>
              </div> */}

              <p className="text-base font-normal text-[#000000] mb-6">
                Accept our Terms & Conditions
              </p>

              <button
                type="submit"
                className="py-3 px-16 bg-black text-white  rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToBreederPopover;
