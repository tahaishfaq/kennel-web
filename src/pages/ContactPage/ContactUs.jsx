import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FiPhoneCall } from "react-icons/fi";
import { toast, Toaster } from "sonner";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone_number: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(
          `${window.$BackEndURL}/api/resource/PickMePets Contact Us`,
          values
        );
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <>
      <Toaster richColors />
      <NavBar />
      <div className="bg-[#ebebeb] pt-28 pb-12  font-satoshi sm:px-0 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-1">
            <h2 className="text-center text-[28px] font-medium">
              How we can help you?
            </h2>
            <p className="text-center text-[16px] font-normal">
              Get in touch with a member of our team and let us know how we can
              help.
            </p>
          </div>

          <div className="bg-white border sm:px-6 px-4 py-4 rounded-[12px] shadow-lg grid md:grid-cols-2 gap-8">
            
            <div className="space-y-6">
              <div>
                <p className="text-[18px] mb-1.5">Get in touch</p>
                <h3 className="text-[24px] font-medium">
                  Let’s Reach out to us
                </h3>
                <p className="text-[14px]">
                  Have a question or feedback? We’re here to help. Send us a
                  message, and we’ll respond within 24 hours.
                </p>
              </div>
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`p-3 border rounded-[12px] w-full bg-[#0000000A] outline-none ${
                      formik.touched.first_name && formik.errors.first_name
                        ? "border-red-500"
                        : ""
                    }`}
                    {...formik.getFieldProps("first_name")}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`p-3 border rounded-[12px] w-full bg-[#0000000A] outline-none ${
                      formik.touched.last_name && formik.errors.last_name
                        ? "border-red-500"
                        : ""
                    }`}
                    {...formik.getFieldProps("last_name")}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className={`p-3 border rounded-[12px] w-full bg-[#0000000A] outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  {...formik.getFieldProps("email")}
                />
                <div
                  className={`flex overflow-hidden border ${
                    formik.touched.phone_number && formik.errors.phone_number
                      ? "border-red-500 rounded-[12px]"
                      : ""
                  }`}
                >
                  <select className="bg-[#0000000A] rounded-l-[12px] p-3 outline-none">
                    <option>US +1</option>
                    <option>UK +44</option>
                    <option>IN +91</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={`p-3 rounded-r-[12px] w-full bg-[#0000000A] flex-grow outline-none`}
                    {...formik.getFieldProps("phone_number")}
                  />
                </div>
                <textarea
                  placeholder="Write a message"
                  className={`p-3 border rounded-[12px] w-full bg-[#0000000A] h-40 outline-none ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : ""
                  }`}
                  {...formik.getFieldProps("message")}
                ></textarea>
                <div className="sm:pt-10">
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-[28px] py-[12px] rounded-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            
            <div className="text-center space-y-8">
              <h3 className="text-[24px] font-medium">Our Via Email</h3>
              <div className="space-y-4">
                <div className="max-w-xs mx-auto">
                  <h4 className="text-[20px] font-medium">Sales</h4>
                  <p className="text-[16px] text-[#000000A3]">
                    Do you have a question about a specific puppy or our Sales
                    process?
                  </p>
                  <a
                    href="mailto:hello@pickmepets.com"
                    className="text-[16px] underline"
                  >
                    hello@pickmepets.com
                  </a>
                </div>
                <div className="max-w-xs mx-auto">
                  <h4 className="text-[20px] font-medium">Support</h4>
                  <p className="text-[16px] text-[#000000A3]">
                    Submitted a deposit for a specific puppy and have questions
                    about getting your newest family member home?
                  </p>
                  <a
                    href="mailto:hello@pickmepets.com"
                    className="text-[16px] underline"
                  >
                    hello@pickmepets.com
                  </a>
                </div>
                <div className="max-w-xs mx-auto">
                  <h4 className="text-[20px] font-medium">Breeders</h4>
                  <p className="text-[16px] text-[#000000A3]">
                    Do you want to join <strong>PickMyPets</strong> network of
                    vetted breeders? Have any questions as an existing breeder?
                  </p>
                  <a
                    href="mailto:hello@pickmepets.com"
                    className="text-[16px] underline"
                  >
                    hello@pickmepets.com
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p className="font-medium">
                  Contact our team Mon-Sat 9am-9pm ET.
                </p>
                <div className="flex items-center justify-center gap-2 p-4 bg-gray-200 rounded mt-2">
                  <span className="bg-black text-white p-3 rounded-full">
                    <FiPhoneCall className="w-6 h-6" />
                  </span>
                  <div className="flex flex-col items-start">
                    <p>Call: 888-405-1887</p>
                    <p className="text-[#000000A3]">Mon-Sat 9am-9pm ET.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
