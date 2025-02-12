import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const faqs = [
  {
    question: "How does PickMePets work?",
    answer:
      "Finding a puppy on PickMePets is simple. You can browse puppies by breed, location, or type of dog, and view our available puppies across the US and Canada. Once you find a puppy you like, you can review his or her profile, read about the puppy’s parents, registrations, paperwork, and any health guarantees offered by the breeder. You can then complete a reservation request for the puppy and make a deposit payment to secure the puppy for your home.",
  },
  {
    question: "Can I meet the dog?",
    answer:
      "Yes! You can schedule a site visit with the breeder to meet the puppy and see their Kennel. If an in-person visit is difficult, you can also schedule an online call to meet both the puppy and the kennel. We understand that it’s very important for you to meet your future dog, and want to make sure you 'feel that connection' before making a selection.",
  },
  {
    question: "What breeders do you work with?",
    answer:
      "We work with family and registered kennels across the US & Canada. Every breeder on our website has been vetted by our strict protocols on the health, safety, and socialization of puppies. We ensure that the puppy and its parents have received the right health checks, deworming, and veterinary care. Further, we ensure that parents are nurtured and housed with care and safety – a healthy mom means a healthy puppy!",
  },
  {
    question: "Do you work with shelters or rescues?",
    answer:
      "We do not at this time. However, we are eagerly looking to expand to these centers, as we believe tremendously in the role they play for dogs. We hope to broaden our scope to include not only puppies, but dogs of any ages and from any source, to achieve our mission of helping dogs find caring families.",
  },
  {
    question: "How do I purchase a dog on your platform?",
    answer:
      "This process is simple. First, you submit a reservation request for the puppy that you are interested in. You can then submit a deposit payment to secure the puppy for your home. Our team will coordinate on travel or pickup of your puppy within 24 hours of your reservation submission.",
  },
];

const FAQ = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto py-24 font-satoshi space-y-8 sm:px-0 px-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-8">
          {faqs?.map((faq, index) => (
            <div key={index} className="space-y-1.5">
              <h3 className="text-[22px] font-medium ">{faq.question}</h3>
              <p className="text-[16px]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
