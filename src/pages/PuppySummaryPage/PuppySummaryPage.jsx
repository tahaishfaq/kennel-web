import React, { useEffect, useState } from "react";
import PuppySummary from "../../components/PuppySummery";
import CustomerStep1 from "../../components/CustomerStep1";
import CustomerStep2 from "../../components/CustomerStep2";
import { useParams } from "react-router-dom";
import { useAdoption } from "../../context/AdoptionContext";
import axios from "axios";
import IdentityVerification from "../../components/IdentityVerification";

const PuppySummaryPage = () => {
  const [step, setStep] = useState(1); // Default to step 1
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
    businessProfile
  } = useAdoption();

  useEffect(() => {
    try {
      axios
        .get(`${window.$BackEndURL}/api/method/get-ticket?hash=${hashId}`)
        .then((response) => {
          const data = response?.data?.data;
          console.log(data);
          
          // Set the data in context
          setPuppyDetails(data?.puppy);
          setCustomerOfAdoption(data?.customer);
          setTicketId(data?.name);
          setIdentityVerification(data?.stripe_verification?.verification_status);
          setBusinessProfile(data?.kennel);

          // If identity is already verified, set initial step to 2
          if (data?.stripe_verification?.verification_status === "verified") {
            setStep(2); // Skip verification step
          }

        });
    } catch (error) {
      console.error("Error fetching adoption ticket details:", error);
    }
  }, [hashId, setPuppyDetails, setCustomerOfAdoption, setTicketId, setIdentityVerification, setBusinessProfile]);

  return (
    <div className="pb-20">
      <PuppySummary puppyDetails={puppyDetails} />
      
      {/* Render different steps based on state */}
      {step === 1 && (
        <IdentityVerification
          identityVerification={identityVerification}
          businessProfile={businessProfile}
          ticketId={ticketId}
          customer={customerDetails}
          onContinue={() => setStep(2)} // Move to step 2 once verification is done
        />
      )}
      {step === 2 && <CustomerStep1 onContinue={() => setStep(3)} />}
      {step === 3 && (
        <CustomerStep2
          puppyDetails={puppyDetails}
          ticketId={ticketId}
          customer={customerDetails}
        />
      )}
    </div>
  );
};

export default PuppySummaryPage;
