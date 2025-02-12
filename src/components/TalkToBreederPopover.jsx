import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import picture from "../assets/Frame 1000004378.png";
import { LuPenSquare } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { ClipLoader, PuffLoader } from "react-spinners";

const TalkToBreederPopover = ({ puppyDetail, isOpen, setIsOpen }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/states"
        );
        const countryList = response.data.data.map((country) => country.name);
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states based on selected country
  const fetchStates = async (country) => {
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: country,
        }
      );
      const stateList = response.data.data.states.map((state) => state.name);
      setStates(stateList);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

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
      setLoading(true);
      try {
        const json = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          country: values.country,
          state: values.state,
          message: values.message,
          puppy_owner: puppyDetail?.business_profile?.name,
          puppy: puppyDetail?.name,
        };
        const response = await axios.post(
          `${window.$BackEndURL}/api/resource/Breeder Queries`,
          json
        );
        console.log("Form submitted successfully:", response.data);

        setTimeout(() => {
          setIsOpen(false);
        }, 500);
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      } bg-gray-900 bg-opacity-60 z-50`}
    >
      <div className="bg-white sm:p-6 p-4 sm:mx-0 mx-2 rounded-lg shadow-lg w-full max-w-4xl h-auto sm:h-auto overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-black text-2xl font-medium">
            Talk to {puppyDetail?.business_profile?.business_name}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-gray-600"
          >
            <IoCloseSharp className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="bg-gray-100 p-4 rounded-md sm:flex hidden flex-col w-full sm:w-1/3">
            <img
              src={
                puppyDetail?.profile_picture
                  ? window.$BackEndURL + puppyDetail?.profile_picture
                  : picture
              }
              alt="Dog"
              className="rounded-lg w-full h-[250px] sm:h-[303px] mb-3 object-cover object-center"
            />
            <div className="text-start">
              <h3 className="text-xl font-medium text-black mb-2">
                {puppyDetail?.puppy_name}
              </h3>
              <p className="text-black text-sm font-normal">
                {puppyDetail?.size}
              </p>
            </div>
          </div>

          <div className="w-full sm:w-2/3">
            <h3 className="text-black text-2xl font-medium mb-4">
              Ask about {puppyDetail?.puppy_name}
            </h3>

            <form
              onSubmit={formik.handleSubmit}
              className="sm:space-y-4 space-y-2 sm:max-h-none max-h-[500px] flex flex-col"
            >
              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-grow sm:space-y-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-1.5">
                  <div className="flex flex-col gap-y-1 w-full">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.first_name && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.first_name}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-1 w-full">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.last_name && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.last_name}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email and Phone Number */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-1.5">
                  <div className="flex flex-col gap-y-1 w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-1 w-full">
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone_number && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.phone_number}
                      </div>
                    )}
                  </div>
                </div>

                {/* Country and State */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-1.5">
                  <div className="flex flex-col w-full">
                    <select
                      name="country"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formik.values.country}
                      onChange={(e) => {
                        formik.handleChange(e);
                        fetchStates(e.target.value);
                      }}
                    >
                      <option disabled value="">
                        Select Country
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {formik.errors.country && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.country}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-1 w-full">
                    <select
                      name="state"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      disabled={!formik.values.country}
                    >
                      <option disabled value="">
                        Select State
                      </option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {formik.errors.state && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.state}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-y-1 w-full">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="w-full p-3 border border-[#E0E0E0] text-[#929DA7] text-sm font-normal rounded-lg"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  ></textarea>
                  {formik.errors.message && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg px-12 py-3"
                >
                  {loading ? <ClipLoader color="white" size={20} /> : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToBreederPopover;
