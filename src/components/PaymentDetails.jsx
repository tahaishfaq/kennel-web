import React, { useEffect } from "react";
import { useAdoption } from "../context/AdoptionContext";

const PaymentDetails = ({ adoptionTicket }) => {
  const { totalAmountCharged, setTotalAmountCharged } = useAdoption();
  const total = adoptionTicket?.puppy?.price + adoptionTicket?.pickmepets_fee;

  useEffect(() => {
    setTotalAmountCharged(total);
  }, []);

  return (
    <div>
      <div className="bg-white shadow-md rounded-[12px] px-4 py-3">
        <div className="space-y-[16px]">
          <div className="flex justify-between">
            <span className="text-[16px]">Seller Price</span>
            <span className="text-[16px]">
              USD {adoptionTicket?.puppy?.price?.toFixed() || "0"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[16px]">Deposit Price</span>
            <span className="text-[16px]">
              USD {adoptionTicket?.puppy?.deposit_amount?.toFixed() || "0"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[16px]">PickMePets Protection</span>
            <span className="text-[16px]">
              USD {adoptionTicket?.pickmepets_fee?.toFixed() || "0"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[16px]">Subtotal</span>
            <span className="text-[16px]">USD {total.toFixed()}</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-dashed">
            <span className="text-[20px]">Total</span>
            <span className="text-[20px] font-semibold">USD {total.toFixed()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
