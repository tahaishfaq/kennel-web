import React, { useEffect, useState } from "react";
import PuppySummary from "../../components/PuppySummery";
import CustomerStep1 from "../../components/CustomerStep1";
import CustomerStep2 from "../../components/CustomerStep2";
import { useParams } from "react-router-dom";
import { useAdoption } from "../../context/AdoptionContext";
import axios from "axios";
import IdentityVerification from "../../components/IdentityVerification";
import AdoptionTicket from "../../components/AdoptionTicket";
import PaymentOptions from "../../components/PaymentOptions";
import Chat from "../../components/Chat";
import { BiMessageDetail } from "react-icons/bi";
import PaymentSelection from "../../components/PaymentSelection";

const PuppySummaryPage = () => {
  const [showChat, setShowChat] = useState(false);
  const handleChatToggle = () => setShowChat(true);
  const closeChat = () => setShowChat(false);




  // const [step, setStep] = useState(1);
  const [adoptionTicket, setAdoptionTicket] = useState(null);
  const { hashId } = useParams();
  const {
    puppyDetails,
    setPuppyDetails,
    setCustomerOfAdoption,
    setTicketId,
    ticketId,
    customerDetails,
    setIdentityVerification,
    identityVerification,
    setBusinessProfile,
    businessProfile,
    step
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
  }, [
    hashId,
    setPuppyDetails,
    setCustomerOfAdoption,
    setTicketId,
    setIdentityVerification,
    setBusinessProfile,
  ]);

  return (
    <div className="pb-20">
      {/* <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[#000000] text-[22px] sm:text-[24px] lg:text-[28px] font-medium mt-6 mb-6 text-center sm:text-left font-semibold">
            Adoption Ticket
          </h2>
          <span className="text-xs font-medium text-[#1877F2] bg-[#1877F214] px-3 py-1 rounded-full sm:px-4 sm:py-2">
            {adoptionTicket?.status}
          </span>
        </div>
      </div> */}
      <PuppySummary puppyDetails={puppyDetails} />

      {step === 1 &&
        <PaymentOptions />
      }

      {step === 2 && <CustomerStep1 />}
      {step === 3 && <PaymentSelection />}
      {step === 4 && (
        <CustomerStep2
          puppyDetails={puppyDetails}
          ticketId={ticketId}
          customer={customerDetails}
        />
      )}
      <div>
        <AdoptionTicket
          adoptionTicket={adoptionTicket}
          onStatusChange={fetchAdoptionTicket}
        />
      </div>


      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="flex items-center bg-[#3056D3] text-white p-4 rounded-full"
          onClick={handleChatToggle}
        >
          <BiMessageDetail className="" />

        </button>
      </div>

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

export default PuppySummaryPage;
