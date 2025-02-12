import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="font-satoshi bg-white">
        <NavBar />
        <div className="py-24 px-4 sm:px-4">
          <div className="max-w-4xl mx-auto bg-white">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              Privacy Policy for Payment Information
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              This Privacy Policy outlines how [PickMePets.com] (“we,” “our,” or
              “us”) collects, uses, and protects payment-related information
              when processing payments through Stripe on our platform. By using
              our services, you agree to the terms of this Privacy Policy.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  1. Information We Collect
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Personal Information: Name, email address, billing address,
                    and phone number.
                  </li>
                  <li>
                    Payment Information: Credit card or debit card details,
                    including card number, expiration date, and CVV (handled
                    directly by Stripe, not stored on our servers).
                  </li>
                  <li>
                    Transaction Details: Payment amount, date, and associated
                    transaction details.
                  </li>
                  <li>
                    Verification Information: Identity verification data (e.g.,
                    government-issued ID, photo verification) for compliance and
                    fraud prevention, collected via Stripe Identity if
                    applicable.
                  </li>
                </ul>
                <p className="mt-2 text-gray-700">
                  We rely on Stripe’s secure infrastructure to process all
                  payment-related data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  2. How We Use the Information
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To process payments securely via Stripe.</li>
                  <li>
                    To verify the identity of buyers or sellers using Stripe
                    Identity.
                  </li>
                  <li>
                    To maintain accurate transaction records for accounting and
                    compliance purposes.
                  </li>
                  <li>To detect and prevent fraudulent activity.</li>
                  <li>
                    To facilitate refunds, disputes, or chargebacks if
                    necessary.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  3. How Stripe Uses Your Information
                </h2>
                <p className="text-gray-700">
                  Stripe processes payment information in accordance with its
                  Privacy Policy. Stripe may collect, use, and share your
                  information as needed to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process payments securely.</li>
                  <li>Comply with legal and regulatory requirements.</li>
                  <li>Detect and prevent fraud and abuse.</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  Stripe ensures the highest level of data security by adhering
                  to PCI-DSS (Payment Card Industry Data Security Standard)
                  compliance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700">
                  We prioritize protecting your payment information by
                  partnering with Stripe, a secure and PCI-compliant payment
                  processor. Sensitive payment data, such as credit card
                  information, is handled exclusively by Stripe and is never
                  stored on our servers.
                </p>
                <p className="mt-2 text-gray-700">
                  Additionally, we implement industry-standard measures to
                  protect other personal information shared with us, such as
                  encryption and secure server storage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  5. Sharing of Information
                </h2>
                <p className="text-gray-700">
                  We only share your payment-related information with Stripe as
                  necessary to process payments, verify identities, and prevent
                  fraud. Your data will not be sold, rented, or shared with
                  third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-700">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access the personal information we store about you.</li>
                  <li>
                    Request corrections or deletions of your personal data.
                  </li>
                  <li>
                    Withdraw your consent to data collection where applicable.
                  </li>
                </ul>
                <p className="mt-2 text-gray-700">
                  To exercise these rights, please contact us at{" "}
                  <strong>[Your Contact Email]</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  7. Updates to This Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal obligations. We encourage
                  you to review this policy periodically for any updates.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  8. Contact Us
                </h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy or how
                  your payment-related information is handled, please contact
                  us:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:info@PickMePets.com"
                      className="text-blue-600"
                    >
                      info@PickMePets.com
                    </a>
                  </li>
                  <li>
                    Phone: <span className="text-blue-600">888-405-1887</span>
                  </li>
                </ul>
              </section>

              <p className="mt-6 text-center text-gray-700">
                Effective Date: <strong>[1/1/2024]</strong>
              </p>

              <p className="mt-2 text-center text-gray-700">
                By using our services, you acknowledge that you have read and
                understood this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default PrivacyPolicy;
