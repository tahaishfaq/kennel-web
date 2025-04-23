// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import picture from "../assets/Frame 1000004378.png";
// import { LuPenSquare } from "react-icons/lu";
// import { IoCloseSharp } from "react-icons/io5";
// import { ClipLoader } from "react-spinners";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// const ReservePuppyModal = ({ puppyDetail, isOpen, setIsOpen }) => {
//   const [states, setStates] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [ticketHash, setTicketHash] = useState("");
//   const navigate = useNavigate();

//   // Fetch U.S. states on component mount
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await axios.post(
//           "https://countriesnow.space/api/v0.1/countries/states",
//           {
//             country: "United States",
//           }
//         );
//         const stateList = response.data.data.states.map((state) => state.name);
//         setStates(stateList);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     };

//     fetchStates();
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       first_name: "",
//       last_name: "",
//       email: "",
//       phone_number: "",
//       state: "",
//       message: "",
//       address: "",
//       puppy_owner: false,
//       puppy: "",
//     },
//     validationSchema: Yup.object({
//       first_name: Yup.string().required("Required"),
//       last_name: Yup.string().required("Required"),
//       email: Yup.string().email("Invalid email address").required("Required"),
//       phone_number: Yup.string().required("Required"),
//       state: Yup.string().required("Required"),
//       message: Yup.string().required("Message is required"),
//       address: Yup.string().required("Address is required"),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);
//       try {
//         const json = {
//           first_name: values.first_name,
//           last_name: values.last_name,
//           email: values.email,
//           phone_number: values.phone_number,
//           country: "United States",
//           state: values.state,
//           address: values.address,
//           message: values.message,
//           puppy_owner: puppyDetail?.business_profile?.name,
//           puppy: puppyDetail?.name,
//         };
//         await axios
//           .post(`${window.$BackEndURL}/api/method/ticket-pickmepets`, json)
//           .then((res) => {
//             console.log(res?.data?.data);
//             if (res?.data?.data?.ticket_hash) {
//               setTimeout(() => {
//                 navigate(`/checkout/${res?.data?.data?.ticket_hash}`);
//               }, 500);
//             }
//           });
//       } catch (error) {
//         console.error("There was an error submitting the form:", error);
//       } finally {
//         setLoading(false);
//         formik.resetForm();
//       }
//     },
//   });

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(ticketHash);
//     toast.success("Reservation ID copied to clipboard!");
//   };

//   return (
//     <div
//       className={`fixed inset-0 flex justify-center items-center ${
//         isOpen ? "" : "hidden"
//       } bg-gray-900 bg-opacity-60 z-50`}
//     >
//       <div className="bg-white sm:p-6 p-4 sm:mx-0 mx-2 rounded-lg shadow-lg w-full max-w-4xl h-auto sm:h-auto overflow-y-auto">
//         <div className="flex justify-between items-start mb-4">
//           <h2 className="text-black text-2xl font-medium">
//             Reserve {puppyDetail?.puppy_name}
//           </h2>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-black hover:text-gray-600"
//           >
//             <IoCloseSharp className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-8">
//           <div className="bg-gray-100 p-4 rounded-md sm:flex hidden flex-col w-full sm:w-1/3">
//             <img
//               src={
//                 puppyDetail?.profile_picture
//                   ? window.$BackEndURL + puppyDetail?.profile_picture
//                   : picture
//               }
//               alt="Puppy"
//               className="rounded-lg w-full h-[250px] sm:h-[303px] mb-3 object-cover object-center"
//             />
//             <div className="text-start">
//               <h3 className="text-xl font-medium text-black mb-2">
//                 {puppyDetail?.puppy_name}
//               </h3>
//               <p className="text-black text-sm font-normal">
//                 {puppyDetail?.size}
//               </p>
//             </div>
//           </div>

//           <div className="w-full sm:w-2/3">
//             <h3 className="text-black text-2xl font-medium mb-4">
//               Submit Your Reservation for {puppyDetail?.puppy_name}
//             </h3>

//             <form
//               onSubmit={formik.handleSubmit}
//               className="sm:space-y-4 space-y-2 sm:max-h-none max-h-[500px] flex flex-col"
//             >
//               <div className="overflow-y-auto flex-grow sm:space-y-4 space-y-2">
//                 <div className="flex flex-col sm:flex-row sm:gap-4 gap-1.5">
//                   <div className="flex flex-col gap-y-1 w-full">
//                     <input
//                       type="text"
//                       name="first_name"
//                       placeholder="First Name"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                       value={formik.values.first_name}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.first_name && (
//                       <div className="text-red-500 text-sm">
//                         {formik.errors.first_name}
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex flex-col gap-y-1 w-full">
//                     <input
//                       type="text"
//                       name="last_name"
//                       placeholder="Last Name"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                       value={formik.values.last_name}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.last_name && (
//                       <div className="text-red-500 text-sm">
//                         {formik.errors.last_name}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row sm:gap-4 gap-1.5">
//                   <div className="flex flex-col gap-y-1 w-full">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                       value={formik.values.email}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.email && (
//                       <div className="text-red-500 text-sm">
//                         {formik.errors.email}
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex flex-col gap-y-1 w-full">
//                     <input
//                       type="tel"
//                       name="phone_number"
//                       placeholder="Phone Number"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                       value={formik.values.phone_number}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.phone_number && (
//                       <div className="text-red-500 text-sm">
//                         {formik.errors.phone_number}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-y-1 w-full">
//                   <select
//                     name="state"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     value={formik.values.state}
//                     onChange={formik.handleChange}
//                   >
//                     <option disabled value="">
//                       Select State
//                     </option>
//                     {states.map((state, index) => (
//                       <option key={index} value={state}>
//                         {state}
//                       </option>
//                     ))}
//                   </select>
//                   {formik.errors.state && (
//                     <div className="text-red-500 text-sm">
//                       {formik.errors.state}
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex flex-col gap-y-1 w-full">
//                   <textarea
//                     name="address"
//                     rows="1"
//                     placeholder="Enter your shipping address here"
//                     className="w-full px-3 py-2 border border-[#E0E0E0] text-[#929DA7] text-sm font-normal rounded-lg"
//                     value={formik.values.address}
//                     onChange={formik.handleChange}
//                   ></textarea>
//                   {formik.errors.address && (
//                     <div className="text-red-500 text-sm">
//                       {formik.errors.address}
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex flex-col gap-y-1 w-full">
//                   <textarea
//                     name="message"
//                     rows="4"
//                     placeholder="Add any additional details or questions about your reservation"
//                     className="w-full px-3 py-2 border border-[#E0E0E0] text-[#929DA7] text-sm font-normal rounded-lg"
//                     value={formik.values.message}
//                     onChange={formik.handleChange}
//                   ></textarea>
//                   {formik.errors.message && (
//                     <div className="text-red-500 text-sm">
//                       {formik.errors.message}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="">
//                 <button
//                   type="submit"
//                   className="bg-black text-white rounded-lg px-8 py-2"
//                 >
//                   {loading ? <ClipLoader color="white" size={20} /> : "Reserve Puppy"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReservePuppyModal;

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import picture from "../assets/Frame 1000004378.png";
import { IoCloseSharp } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ReservePuppyModal = ({ puppyDetail, isOpen, setIsOpen }) => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/states",
          { country: "United States" }
        );
        const stateList = response.data.data.states.map((state) => state.name);
        setStates(stateList);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      state: "",
      message: "",
      address: "",
      puppy_owner: false,
      puppy: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone_number: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      message: Yup.string().required("Message is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const json = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone_number: values.phone_number,
          country: "United States",
          state: values.state,
          address: values.address,
          message: values.message,
          puppy_owner: puppyDetail?.business_profile?.name,
          puppy: puppyDetail?.name,
        };
        await axios
          .post(`${window.$BackEndURL}/api/method/ticket-pickmepets`, json)
          .then((res) => {
            if (res?.data?.data?.ticket_hash) {
              setTimeout(() => {
                navigate(`/checkout/${res?.data?.data?.ticket_hash}`);
              }, 500);
            }
          });
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      } finally {
        setLoading(false);
        formik.resetForm();
      }
    },
  });

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-gray-900 bg-opacity-60 transition-opacity duration-300 z-50`}
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl mx-4 transform transition-all duration-300 scale-95  overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-100 p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-black text-2xl font-bold">
            Reserve {puppyDetail?.puppy_name}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-gray-600 transition-colors"
          >
            <IoCloseSharp className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Puppy Info */}
          <div className="space-y-3">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={
                  puppyDetail?.profile_picture
                    ? window.$BackEndURL + puppyDetail?.profile_picture
                    : picture
                }
                alt="Puppy"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                {puppyDetail?.puppy_name}
              </h3>
              <p className="text-gray-600">{puppyDetail?.size}</p>
            </div>
            {/* Additional Puppy Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Price:</span>
                <span className="text-black">${puppyDetail?.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Gender:</span>
                <span className="text-black">{puppyDetail?.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Size:</span>
                <span className="text-black">{puppyDetail?.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Status:</span>
                <span className="text-black">{puppyDetail?.availability_status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Go Home Date:</span>
                <span className="text-black">{puppyDetail?.go_home_date}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full p-3 bg-gray-100 rounded-lg placeholder-gray-500 text-black focus:outline-black focus:outline-1"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                />
                {formik.errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.first_name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full p-3 bg-gray-100 rounded-lg placeholder-gray-500 text-black focus:outline-black focus:outline-1"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                />
                {formik.errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.last_name}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder-gray-500 text-black focus:outline-black focus:outline-1"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder-gray-500 text-black focus:outline-black focus:outline-1"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
              />
              {formik.errors.phone_number && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.phone_number}</p>
              )}
            </div>

            <div>
              <select
                name="state"
                className="w-full p-3 bg-gray-100 rounded-lg text-black focus:outline-black focus:outline-1"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                <option value="" disabled className="text-gray-500">
                  Select State
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {formik.errors.state && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.state}</p>
              )}
            </div>

            <div>
              <textarea
                name="address"
                rows="2"
                placeholder="Enter your shipping address"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder-gray-500 text-black focus:outline-black focus:outline-1"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="3"
                placeholder="Additional details or questions"
                className="w-full p-3 bg-gray-100 rounded-lg placeholder-gray-500 text-black focus:outline-black focus:outline-1"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.errors.message && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              {loading ? (
                <ClipLoader color="white" size={20} />
              ) : (
                "Reserve Puppy Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservePuppyModal;