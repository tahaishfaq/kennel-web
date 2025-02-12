import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const RefundPolicy = () => {
  return (
    <div className="font-satoshi bg-white">
      <NavBar />
      <div className="min-h-screen pt-14">
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
          <h1 className="text-3xl font-bold text-start mb-6">
            Refund & Buyer Protection Policy
          </h1>
          <p className="text-lg text-start mb-6">
            At PickMePets.com, we are committed to providing a safe and secure
            marketplace for pet rehoming. To ensure you are protected under our
            Buyer Protection Program, please review the following policy
            carefully.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Payments Made Outside PickMePets.com
              </h2>
              <p>
                If your payment is not made through PickMePets.com, you will not
                be covered by our Buyer Protection Program.
              </p>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>
                  Payments via cash, bank transfer, PayPal, or other external
                  methods are not eligible for protection.
                </li>
                <li>We strongly recommend avoiding unsafe payment methods.</li>
                <li>
                  Disputes arising from payments outside our platform cannot be
                  resolved by us.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. Payments Made Through PickMePets.com
              </h2>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>
                  Payments are held until the buyer confirms pet delivery by
                  pressing the “Confirm Delivery” button.
                </li>
                <li>
                  Refund requests can be made before delivery confirmation.
                </li>
                <li>
                  Once delivery is confirmed, payments are released to the
                  seller and are non-refundable.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                3. No Liability After Confirmation
              </h2>
              <p>By proceeding with payment, you agree that:</p>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>
                  PickMePets.com is not liable for disputes after delivery.
                </li>
                <li>
                  Pet condition issues must be resolved directly with the
                  seller.
                </li>
                <li>Pets are accepted “AS IS” after confirmation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. Perform Necessary Health Checks Before Confirmation
              </h2>
              <p>
                Ensure your pet meets health and documentation standards before
                confirming delivery.
              </p>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>Verify health with a certified veterinarian.</li>
                <li>Review medical and vaccination records.</li>
                <li>Confirm the pet details match the seller’s information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                5. Acknowledgment and Responsibility
              </h2>
              <p>By proceeding with payment, you acknowledge that:</p>
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>
                  Ensuring pet quality is your responsibility before confirming
                  delivery.
                </li>
                <li>
                  After confirmation, all sales are final and non-refundable.
                </li>
                <li>
                  PickMePets.com is not responsible for post-sale disputes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
              <p>
                For any questions regarding our Buyer Protection Program, please
                contact:
              </p>
              <p className="font-medium">📧 Email: info@PickMePets.com</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
