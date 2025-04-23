import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import logo from "../assets/logo.png";
import trust from "../assets/trust-pilot.png";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          `${window.$BackEndURL}/api/method/add-newsletter`,
          {
            email: values.email,
          }
        );

        console.log("Newsletter subscription successful:", response.data);
        toast.success("Successfully subscribed to newsletter!");
        resetForm();
      } catch (error) {
        console.error("Newsletter subscription error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="px-4 bg-[#0000000A] lg:py-12 md:py-12 pt-8 pb-10 border-t font-satoshi">
      <div className="flex flex-col lg:px-16 mx-auto max-w-[1440px] gap-y-8">
        <div className="flex flex-col md:flex-row justify-evenly gap-y-6">
          <div className="sm:max-w-[250px] space-y-2">
            <img
              src={logo}
              className="w-[80px] h-[80px] rounded-lg transparent-logo"
              alt="logo"
            />
            <p className="text-[14px]">
              Your go-to source for premium pet care essentials and expert
              advice for happy, healthy pets.
            </p>
            <div className="max-w-[120px]">
              <img
                src={trust}
                alt="Trustpilot Rating"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6">
            <div className="space-y-4">
              <h4 className="font-medium text-[18px]">Pick Me Pets</h4>
              <ul className="space-y-3 text-[16px] font-normal">
                <li>
                  <Link to="/mission">Our Mission</Link>
                </li>
                <li>
                  <Link to="/adoption-ticket">Adoption Ticket</Link>
                </li>
                <li>
                  <Link to="/available-puppy">Available Puppy</Link>
                </li>
                <li>
                  <Link to="/search-request">Search Request</Link>
                </li>
                <li>
                  <Link to="/vet-check-icon">Vet Check Icon</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-[18px]">Explore</h4>
              <ul className="space-y-3 text-[16px] font-normal">
                <li>
                  <Link to="/pet-financing">Pet Financing</Link>
                </li>
                <li>
                  <Link to="/vet-checked-pet">Find Your Vet Checked Pet</Link>
                </li>
                <li>
                  <Link to="/pet-transport">Pet Transport</Link>
                </li>
                <li>
                  <Link to="/health-gurantee">Health Guarantee</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Buyer Protection</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-[18px]">Help?</h4>
              <ul className="space-y-3 text-[16px] font-normal">
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms & Condition</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:max-w-[250px] space-y-4">
            <h4 className="font-medium text-[18px]">Join</h4>
            <p className="text-[16px] font-normal">
              Join our newsletter for exclusive offers and expert pet care tips.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full overflow-hidden p-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className={`px-4 py-2 w-full bg-transparent focus:outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-white text-gray-700 p-3 rounded-full hover:bg-gray-200 transition disabled:opacity-50"
                >
                  <IoArrowForwardOutline className="w-5 h-5" />
                </button>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </form>

            <div className="items-center flex space-x-4 pl-1">
              <FaFacebook className="text-blue-600 w-7 h-7" />
              <FaXTwitter className="text-black w-7 h-7" />
              <FaInstagram className="text-pink-600 w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
