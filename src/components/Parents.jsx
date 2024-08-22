import React from "react";
import knox from "../assets/knox.png";
import breeder from "../assets/breeder.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineColorLens } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { TbRuler3 } from "react-icons/tb";

export default function Parents() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Meet Caroline's parents
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-[#0000001F] overflow-hidden">
            <div className="overflow-hidden h-[400px] w-full">
            <img src={knox} alt="Knox" className="w-full object-fill h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-medium text-[#000000] mb-2">
                Knox | Dad
              </h3>
              <p className="text-base font-normal text-[#000000CC] mb-8">
                Lorem ipsum dolor sit amet consectetur.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <ul className="space-y-7">
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <CiCalendarDate className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Date of Birth:{" "}
                      </strong>
                      May 14, 2023
                    </li>
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <MdOutlineColorLens className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Color:{" "}
                      </strong>
                      Gold
                    </li>
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <IoPawOutline className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Breed:{" "}
                      </strong>
                      Golden Retriever
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-7">
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <RiWeightLine className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Estimated weight:{" "}
                      </strong>
                      15 - 18 lbs
                    </li>
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <TbRuler3 className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Size:{" "}
                      </strong>
                      15 - 18 lbs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[#0000001F] overflow-hidden">
            <div className="overflow-hidden h-[400px] w-full">
            <img
              src={knox}
              alt="Brownie"
              className="w-full object-fill h-full"
            />
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-medium text-[#000000] mb-2">
                Brownie | Mom
              </h3>
              <p className="text-base font-normal text-[#000000CC] mb-8">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="">
                  <ul className="space-y-7">
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <CiCalendarDate className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        {" "}
                        Date of Birth:{" "}
                      </strong>
                      May 14, 2023
                    </li>
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <MdOutlineColorLens className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Color:{" "}
                      </strong>
                      Gold
                    </li>
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <IoPawOutline className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Breed:{" "}
                      </strong>
                      Golden Retriever
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-7">
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <RiWeightLine className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Estimated weight:{" "}
                      </strong>
                      15 - 18 lbs
                    </li>
                    <li className="flex items-center font-semibold text-sm text-[#000000CC]">
                      <TbRuler3 className="mr-2 text-gray-500" />
                      <strong className="font-normal text-sm text-[#000000CC]">
                        Size:{" "}
                      </strong>
                      15 - 18 lbs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium text-[#000000CC]">
              Meet Champ's breeder
            </h2>
            <p className="mt-4 text-[#000000CC] text-base font-semibold">
              Hi, I’m Laura from
            </p>
            <p className="mt-2 text-base font-normal text-[#000000A3]">
              Located in Washington, Beautiful Doxies has been dedicated to
              breeding exceptional Dachshunds for over 13 years. Our pups and
              adult dogs are raised as beloved members of our family until they
              are ready to join yours. Each of our Dachshunds has brought
              immense joy to us and our extended families. We strive to produce
              high-quality Dachshunds that closely adhere to AKC standards,
              featuring wonderful personalities and excellent conformation. Our
              commitment to care includes:
            </p>

            <div className="mt-4 bg-[#0000000A] p-5 rounded-lg">
              <h1 className="text-[#000000CC] text-base font-semibold mb-2">
                Laura is a trusted Good Dog Breeder
              </h1>
              <p className="text-[#000000A3] text-base font-normal">
                Ski Ridge Golden Retrievers meets or exceeds our community
                standards in these areas:
              </p>
              <ul className="list-disc pl-5 text-base font-normal text-[#000000A3]">
                <li>Responsible breeding practices</li>
                <li>Health of breeding dogs and puppies</li>
                <li>Puppy environment and enrichment</li>
                <li>Buyer education and policies</li>
              </ul>
            </div>
            <button className="mt-6 inline-flex items-center justify-center px-5 py-3 text-[#000000] font-medium text-base bg-[#A1ADAB] rounded-md shadow hover:bg-gray-700">
              View Antoinette Profile
            </button>
          </div>
          <div>
            <img
              src={breeder}
              alt="Breeder"
              className="rounded-lg shadow-md object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
