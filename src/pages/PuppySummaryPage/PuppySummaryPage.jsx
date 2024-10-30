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
  const [refresh, setRefresh] = useState(false);
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
    step,
    refreshTicket,
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
  }, [hashId, refresh, refreshTicket]);

  const handleVerifyAdoptionTicket = () => {
    const json = {
      status: "Closed",
    };
    try {
      axios
        .put(
          `${window.$BackEndURL}/api/resource/Adoption Ticket/${adoptionTicket?.name}`,
          json
        )
        .then((res) => {
          console.log(res?.data);
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFailedAdoptionTicket = () => {
    const json = {
      status: "Failed",
    };
    try {
      axios
        .put(
          `${window.$BackEndURL}/api/resource/Adoption Ticket/${adoptionTicket?.name}`,
          json
        )
        .then((res) => {
          console.log(res?.data);
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-20 font-satoshi">
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
      <PuppySummary puppyDetails={puppyDetails} customer={customerDetails} businessProfile={businessProfile} />

      {adoptionTicket?.delivery_proof == null ? (
        <div>
          {step === 1 && <PaymentOptions adoptionTicket={adoptionTicket} />}

          {step === 2 && <CustomerStep1 adoptionTicket={adoptionTicket} />}
          {step === 3 && <PaymentSelection adoptionTicket={adoptionTicket} />}
          {step === 4 && (
            <CustomerStep2
              puppyDetails={puppyDetails}
              ticketId={ticketId}
              customer={customerDetails}
            />
          )}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
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
                    className="w-10 h-10 sm:w-20 sm:h-20 rounded-md"
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
                  {adoptionTicket.remaining_amount > 0 ? 
                    <div className="flex items-center gap-x-1">
                      <p>Remaining Amount:</p>
                      <span>$ {adoptionTicket.remaining_amount}</span>
                    </div>:
                     <div className="flex items-center gap-x-1">
                     <span className="text-xs font-medium text-[#1877F2] bg-[#1877F214] px-3 py-0.5 rounded-md">Fully Paid</span>
                   </div>
                  }
                </div>
              </div>
              {adoptionTicket?.status == "Closed" ||
              adoptionTicket?.status == "Failed" ? (
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
            <Chat closeChat={closeChat} businessProfile={businessProfile} />
          </div>
        </>
      )}
    </div>
  );
};

export default PuppySummaryPage;
