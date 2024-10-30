import React, { useEffect, useState } from "react";
import { useAdoption } from "../context/AdoptionContext";

const PaymentDetails = ({ adoptionTicket }) => {
  const { totalAmountCharged, setTotalAmountCharged } = useAdoption();
//   const [total, setTotal] = useState(0)
  const protectionFee = 25.0;
  const marketplaceFee = 0.0;

  const sellerPrice = adoptionTicket?.puppy?.price || 0;
  const total = sellerPrice + protectionFee + marketplaceFee;

  useEffect(() => {
    setTotalAmountCharged(total)
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-medium mb-3 lg:mb-5">Payment Summary</h2>
      <div className="space-y-2 bg-[#0000000A] p-5 rounded-lg">
        <div className="flex justify-between">
          <span>Seller Price</span>
          <span>USD {sellerPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Deposit Price</span>
          <span>USD {adoptionTicket?.puppy?.deposit_amount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>PickMePets Protection</span>
          <span>USD {protectionFee.toFixed(2)}</span>
        </div>
        {/* <div className="flex justify-between">
          <span>Marketplace Fee</span>
          <span>USD {marketplaceFee.toFixed(2)}</span>
        </div> */}
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>USD {total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 bg-blue-100 p-4 rounded-lg">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>USD {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
