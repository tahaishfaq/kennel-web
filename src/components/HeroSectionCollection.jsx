import { useState } from "react";
import bg from "../assets/BgHerosection.png";
import paw from "../assets/fontisto_paw1.png";

export default function HeroSectionCollections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row ">
      <img
        alt="Background"
        src={bg}
        className="object-cover w-full h-64 md:h-auto md:w-full rounded-lg"
      />

      <div className="bg-black bg-opacity-40 absolute inset-0 flex justify-start items-end text-left text-white px-4 md:px-16 rounded-lg">
        <div className="p-4 rounded w-full ">
          <h1 className="font-medium text-2xl md:text-4xl mb-4 md:w-1/2 lg:w-2/5">
            Pets Are Not Just Animals, They Are A Part Of Your Family
          </h1>
          <p className="font-normal text-xs md:text-sm md:w-1/2 lg:w-2/4">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <img
            alt="Paw"
            src={paw}
            className="mt-4 md:mt-6 w-6 h-6 md:w-auto md:h-auto"
          />
        </div>

        <div className="absolute right-6 top-8 md:right-10 md:top-16 flex items-center pr-6 md:pr-8">
          <img alt="paw" src={paw} className="w-6 h-6 md:w-auto md:h-auto" />
        </div>
      </div>
    </div>
  );
}
