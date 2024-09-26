import React from "react";
import delivery from "../assets/Frame 1000004471.png";
import axios from "axios";

const AdoptionTicket = ({ adoptionTicket, onStatusChange }) => {
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
          onStatusChange(); // Trigger re-fetch after status change
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
          onStatusChange(); // Trigger re-fetch after status change
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {adoptionTicket?.delivery_proof !== null && (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
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
                    className="w-10 h-10 sm:w-16 sm:h-16 rounded-md"
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
    </>
  );
};

export default AdoptionTicket;
