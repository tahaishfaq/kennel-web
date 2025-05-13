import React, { useEffect, useState } from "react";
import PuppySummary from "../../components/PuppySummery";
import CustomerStep1 from "../../components/CustomerStep1";
import CustomerStep2 from "../../components/CustomerStep2";
import { useParams } from "react-router-dom";
import { useAdoption } from "../../context/AdoptionContext";
import axios from "axios";
import IdentityVerification from "../../components/IdentityVerification";
import AdoptionTicket from "../../components/AdoptionTicket";
import StripeIdentityVerification from "../../components/StripeIdentityVerification";
import Chat from "../../components/Chat";
import { BiMessageDetail } from "react-icons/bi";
import PaymentSelection from "../../components/PaymentSelection";
import NavBar from "../../components/NavBar";
import PaymentDetails from "../../components/PaymentDetails";
import { PulseLoader } from "react-spinners";
import { IoIosArrowForward } from "react-icons/io";
import WhyPickMyPets from "../../components/WhyPickMePets";
import { MdOutlineVerified } from "react-icons/md";
import moment from "moment";
import EmbeddedCheckout from "./EmbeddedCheckout";

const PuppySummaryPage = () => {
  const [showChat, setShowChat] = useState(false);
  const handleChatToggle = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  // const [step, setStep] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [adoptionTicket, setAdoptionTicket] = useState(null);
  const { hashId } = useParams();
  const [makePayment, setMakePayment] = useState(false);
  const {
    puppyDetails,
    setPuppyDetails,
    setCustomerOfAdoption,
    setTicketId,
    ticketId,
    customerDetails,
    setCustomerDetails,
    setIdentityVerification,
    identityVerification,
    setBusinessProfile,
    businessProfile,
    step,
    refreshTicket,
    setRefreshTicket,
    selectedPaymentOption,
  } = useAdoption();

  // Function to re-fetch the adoption ticket
  const fetchAdoptionTicket = () => {
    try {
      axios
        .get(`${window.$BackEndURL}/api/method/get-ticket?hash=${hashId}`)
        .then((response) => {
          const data = response?.data?.data;
          console.log(data);
          setAdoptionTicket(data);
          setPuppyDetails(data?.puppy);
          setCustomerDetails(data?.customer);
          setCustomerOfAdoption(data?.customer);
          setTicketId(data?.name);
          setIdentityVerification(
            data?.stripe_verification?.verification_status
          );
          setBusinessProfile(data?.kennel);

          // if (data?.stripe_verification?.verification_status === "verified") {
          //   setStep(2);
          // }
        });
    } catch (error) {
      console.error("Error fetching adoption ticket details:", error);
    }
  };

  // UseEffect to fetch ticket data on initial load
  useEffect(() => {
    fetchAdoptionTicket();
  }, [hashId, refreshTicket]);

  const handleVerifyAdoptionTicket = () => {
    setRefreshTicket(false);
    const json = {
    status: "Delivery Approved",
    };
    try {
      axios
        .put(
          `${window.$BackEndURL}/api/resource/Adoption Ticket/${adoptionTicket?.name}`,
          json
        )
        .then((res) => {
          console.log(res?.data);
          setRefreshTicket(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFailedAdoptionTicket = () => {
    setRefreshTicket(false);
    const json = {
      status: "Delivery Rejected",
    };
    try {
      axios
        .put(
          `${window.$BackEndURL}/api/resource/Adoption Ticket/${adoptionTicket?.name}`,
          json
        )
        .then((res) => {
          console.log(res?.data);
          setRefreshTicket(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  function calculateGoHomeDate(weeks) {
    return moment().add(weeks, "weeks").format("ll");
  }

  return (
    <div className="bg-[#ebebeb] min-h-screen font-satoshi">
      <NavBar />
      <style>
        {`
          .reamaze-widget {
            display: none !important;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto sm:pt-24 pt-20 pb-10 sm:px-0 px-4">
        <div className="flex sm:items-center items-start sm:flex-row flex-col-reverse justify-between">
          <h2 className="py-2 text-[20px]   font-medium">{`Hi ${
            adoptionTicket?.customer?.first_name +
            " " +
            adoptionTicket?.customer?.last_name
          }! Bring your ${
            puppyDetails?.puppy_name
          } home on ${calculateGoHomeDate(
            puppyDetails?.go_home_date_duration
          )}`}</h2>
          {adoptionTicket?.status == "Deposit Paid" && (
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Deposit Paid
            </span>
          )}
          {adoptionTicket?.status == "Fully Paid" && (
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Fully Paid
            </span>
          )}
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <PuppySummary
            puppyDetails={puppyDetails}
            adoptionTicket={adoptionTicket}
          />
          <div className="space-y-[20px]">
            <PaymentDetails adoptionTicket={adoptionTicket} />
            <div>
              {adoptionTicket?.stripe_verification?.verification_status ===
                "verified" && (
                <div className="bg-white p-4 rounded-[12px] shadow-md flex items-center justify-between max-w-md mx-auto">
                  <div className="flex items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s"
                      alt="stripe_logo"
                      className="rounded-full h-8 w-8"
                    />
                    <span className="ml-3 text-lg font-medium">
                      Identity Verified
                    </span>
                  </div>
                  <MdOutlineVerified className="text-[#71C900] w-6 h-6" />
                </div>
              )}
            </div>
            {!makePayment && adoptionTicket?.available == 1 && (
              <button
                type="button"
                onClick={() => setMakePayment(true)}
                className="bg-[#3056D3] font-medium text-white py-[12px] px-[22px] w-full rounded-lg"
              >
                Make A Payment
              </button>
            )}

            {/* {!makePayment &&
            adoptionTicket?.available === 1 &&
            adoptionTicket?.status === "Open" ? (
              <button
                type="button"
                onClick={() => setMakePayment(true)}
                className="bg-[#3056D3] font-medium text-white py-[12px] px-[22px] w-full rounded-lg"
              >
                Make A Payment
              </button>
            ) : adoptionTicket?.status === "Deposit Paid" ? (
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                Wait for delivery
              </span>
            ) : adoptionTicket?.status === "Fully Paid" ? (
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Wait for delivery
              </span>
            ) : (
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                Puppy Reserved
              </span>
            )} */}

            {makePayment && selectedPaymentOption === null && (
              <PaymentSelection adoptionTicket={adoptionTicket} />
            )}

            {/* {selectedPaymentOption &&
            adoptionTicket?.stripe_verification?.verification_status ===
              "verified" ? (
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="bg-[#3056D3] font-medium text-white py-[12px] px-[22px] w-full rounded-lg"
                >
                  Pay
                </button>
              </div>
            ) : (
              adoptionTicket?.stripe_verification?.verification_status !==
                "verified" && (
                <div className="flex items-center gap-x-2">
                  <StripeIdentityVerification adoptionTicket={adoptionTicket} />
                </div>
              )
            )} */}

            {selectedPaymentOption &&
            adoptionTicket?.stripe_verification?.verification_status ===
              "verified" ? (
              <EmbeddedCheckout
                adoptionTicket={adoptionTicket}
                puppyDetails={puppyDetails}
                selectedPaymentOption={selectedPaymentOption}
              />
            ) : (
              adoptionTicket?.stripe_verification?.verification_status !==
                "verified" &&
              makePayment && (
                <div className="flex items-center gap-x-2">
                  <StripeIdentityVerification adoptionTicket={adoptionTicket} />
                </div>
              )
            )}

            <WhyPickMyPets />
          </div>
        </div>
      </div>

      {adoptionTicket?.delivery_proof && (
        <div className="max-w-4xl mx-auto p-4 sm:px-0 sm:pb-4">
          <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h2 className="text-base font-normal sm:text-lg">
                Verify Delivery
              </h2>
              <span className="text-xs font-medium text-[#1877F2] bg-[#1877F214] px-3 py-1 rounded-full sm:px-4 sm:py-2">
                {adoptionTicket?.status}
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-start mb-3 gap-x-3">
                <a
                  href={window.$BackEndURL + adoptionTicket?.delivery_proof}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={window.$BackEndURL + adoptionTicket?.delivery_proof}
                    alt="Delivery"
                    className="w-10 h-10 sm:w-20 sm:h-20 rounded-md object-cover object-center"
                  />
                </a>
                <div className="flex flex-col items-start gap-y-1">
                  <p className="text-sm font-medium sm:text-base">
                    Delivery Proof
                  </p>
                  <a
                    className="text-xs font-medium bg-[#1877F2] text-white px-3 py-1 rounded-md "
                    href={window.$BackEndURL + adoptionTicket?.delivery_proof}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Proof
                  </a>
                  {/* {adoptionTicket.remaining_amount > 0 ? (
                    <div className="flex items-center gap-x-1">
                      <p>Remaining Amount:</p>
                      <span>$ {adoptionTicket.remaining_amount}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-x-1">
                      <span className="text-xs font-medium text-[#1877F2] bg-[#1877F214] px-3 py-0.5 rounded-md">
                        Fully Paid
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
              {adoptionTicket?.status == "Delivery Approved" ||
              adoptionTicket?.status == "Delivery Rejected" ? (
                ""
              ) : (
                <div className="flex items-center gap-x-2 justify-end">
                  <button
                    onClick={handleFailedAdoptionTicket}
                    className="bg-red-500 text-[#F8FAFC] py-1.5 px-4 rounded-md text-sm font-medium sm:text-base "
                  >
                    Failed
                  </button>
                  <button
                    onClick={handleVerifyAdoptionTicket}
                    className="bg-[#3056D3] text-[#F8FAFC] py-1.5 px-4 rounded-md text-sm font-medium sm:text-base "
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="flex items-center bg-[#000] text-white p-4 rounded-full"
          onClick={handleChatToggle}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3346 15.4236C29.3346 22.4678 23.3642 28.1792 16.0013 28.1792C15.1356 28.1804 14.2722 28.1002 13.4218 27.9406C12.8097 27.8256 12.5037 27.7681 12.29 27.8008C12.0763 27.8334 11.7735 27.9944 11.168 28.3165C9.45482 29.2276 7.45724 29.5493 5.53612 29.192C6.26629 28.2938 6.76497 27.2162 6.98501 26.061C7.11834 25.3544 6.78797 24.668 6.29316 24.1654C4.04574 21.8833 2.66797 18.8081 2.66797 15.4236C2.66797 8.3794 8.63834 2.66797 16.0013 2.66797C23.3642 2.66797 29.3346 8.3794 29.3346 15.4236Z"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M15.9953 16H16.0073M21.3226 16H21.3346M10.668 16H10.6799"
              stroke="white"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {showChat && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-20"
            onClick={closeChat}
          />
          <Chat closeChat={closeChat} businessProfile={businessProfile} />
          {/* <div className="fixed inset-0 z-50 flex items-center justify-center">
          </div> */}
        </>
      )}
    </div>
  );
};

export default PuppySummaryPage;
