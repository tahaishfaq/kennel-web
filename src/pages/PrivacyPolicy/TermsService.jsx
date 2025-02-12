import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const TermsService = () => {
  return (
    <>
      <div className="font-satoshi bg-white">
        <NavBar />
        <div className="py-24 px-4 sm:px-4">
        <div className="max-w-4xl mx-auto space-y-6 bg-white">
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            Payment and Buyer Protection Policy
          </h1>
          <p className="text-lg text-gray-700">
            At PickMePets.com, we are committed to providing a safe and secure
            marketplace for pet rehoming. To ensure you are protected under our
            Buyer Protection Program, please review the following policy
            carefully.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              1. Payments Made Outside PickMePets.com
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              If your payment is not made through PickMePets.com, you will not
              be covered by our Buyer Protection Program. For example, payments
              made via cash, bank transfer, PayPal, or other external methods
              are not eligible for protection.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className=" text-gray-700">
                Unsafe Payment Methods: Paying by cash or direct bank transfer
                is inherently risky, and we strongly recommend avoiding such
                methods. If you choose to proceed with these options, you do so
                entirely at your own risk.
              </li>
              <li className=" text-gray-700">
                Dispute Resolution Limitation: In case of disputes arising from
                payments made outside the PickMePets.com platform, we will not
                be able to assist or resolve these issues.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              2. Payments Made Through PickMePets.com
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              For all payments processed through PickMePets.com, our Buyer
              Protection Program ensures the following:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className=" text-gray-700">
                Payment Holding Until Confirmation: We will not release your
                payment to the seller until you confirm receiving your pet by
                pressing the “Confirm Delivery” button as outlined in our Buyer
                Protection Program.
              </li>
              <li className=" text-gray-700">
                Cancellation Before Confirmation: If, for any reason, you decide
                to cancel the rehoming process before confirming delivery, you
                may request a refund from the Seller. This ensures your payment
                is secure until you are completely satisfied.
              </li>
              <li className=" text-gray-700">
                Final Payment Release: Once you press the “Confirm Delivery”
                button to confirm receipt of your pet, the full payment is
                immediately transferred to the seller. From that point forward:
              </li>
              <ul className="list-inside ml-4 mt-2">
                <li className=" text-gray-700">
                  You are no longer eligible for any refund through
                  PickMePets.com.
                </li>
                <li className=" text-gray-700">
                  Any further issues will need to be resolved directly with the
                  seller.
                </li>
              </ul>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              3. No Liability After Confirmation
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              By proceeding to pay through PickMePets.com (either in full or in
              installments), you agree that:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className=" text-gray-700">
                PickMePets.com and its affiliates are not liable for any
                disputes that may arise between you and the seller after
                delivery.
              </li>
              <li className=" text-gray-700">
                Any claims regarding the pet’s condition (health or otherwise)
                must be resolved directly with the seller.
              </li>
              <li className=" text-gray-700">
                You accept the pet AS IS once you confirm delivery by pressing
                the “Confirm Delivery” button.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              4. Perform Necessary Health Checks Before Confirmation
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              It is your sole responsibility to conduct all necessary health
              checks and request veterinary records or other documentation
              before confirming delivery.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className=" text-gray-700">
                If you believe the seller is withholding important information
                or failing to provide necessary documentation, we strongly
                recommend not proceeding with the rehoming process.
              </li>
              <li className=" text-gray-700">
                Please refer to our Rehoming Checklist [Link] for guidance on
                how to ensure your pet is healthy and the process is safe before
                completing the transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              5. Acknowledgment and Responsibility
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              By proceeding to pay on PickMePets.com, you acknowledge and agree
              to the following:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className=" text-gray-700">
                It is your responsibility to ensure the pet meets your
                expectations and is in good health before pressing the “Confirm
                Delivery” button.
              </li>
              <li className=" text-gray-700">
                Once you confirm delivery, you accept all risks and
                responsibilities associated with the pet.
              </li>
              <li className=" text-gray-700">
                Once you press the “Confirm Delivery” button, all sales are
                final, non-refundable, and not disputable.
              </li>
              <li className=" text-gray-700">
                PickMePets.com will not be liable for any issues or disputes
                that arise after confirmation of delivery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              For additional questions about our Buyer Protection Program or
              payment policies, please contact PickMePets.com Support:
            </p>
            <ul className="list-inside mt-2">
              <li className=" text-gray-700">
                Email:{" "}
                <a href="mailto:info@PickMePets.com" className="text-blue-600">
                  info@PickMePets.com
                </a>
              </li>
            </ul>
          </section>

          <p className="text-lg text-gray-700 mt-4">
            By using PickMePets.com, you agree to this policy and the associated
            terms. Your safety and the welfare of your new pet are our top
            priorities, and we encourage you to proceed with caution and
            diligence.
          </p>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default TermsService;
