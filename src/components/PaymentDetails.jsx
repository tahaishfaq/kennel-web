import React from 'react'

const PaymentDetails = () => {
    return (
        <div>
            <h2 className="text-2xl font-normal mb-3 lg:mb-5">Payment Summary</h2>
            <div className="space-y-2 bg-[#0000000A] p-5 rounded-lg">
                <div className="flex justify-between">
                    <span>Seller Price</span>
                    <span>USD 300.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Camilist Protection</span>
                    <span>USD 100.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Marketplace Fee</span>
                    <span>USD 105.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>USD 372.00</span>
                </div>
            </div>
            <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>USD 372.00</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails