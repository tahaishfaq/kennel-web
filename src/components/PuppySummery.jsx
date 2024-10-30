import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbClockRecord, TbWeight, TbDog, TbHomeShare, TbArrowsShuffle } from "react-icons/tb";
import { IoColorPaletteOutline, IoPawOutline } from "react-icons/io5";
import { BiRuler, BiInjection, BiDollar } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";
import moment from "moment";
import animal_logo from "../assets/Animal-Genetics-logo-Blue.png";
import embark from "../assets/embark_logo.png";

const PuppySummary = ({ puppyDetails, customer, businessProfile }) => {
  const calculateDaysFromNow = (goHomeDate) => {
    if (!goHomeDate) return "N/A";

    const currentDate = moment();
    const targetDate = moment(goHomeDate);
    const diffDays = targetDate.diff(currentDate, "days");

    return diffDays > 0 ? `${diffDays} days` : "Already home";
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-4">Puppy Summary</h2>

      <div className="bg-[#0000000A] rounded-[6px] p-4 lg:p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium  text-gray-700  sm:hidden block">
            ({customer?.full_name}) ({puppyDetails?.puppy_name}) bring home in (
            {calculateDaysFromNow(puppyDetails?.go_home_date)}) days
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={
                puppyDetails?.images?.length > 0
                  ? `${window.$BackEndURL}${puppyDetails.images[0].image}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
              }
              alt="Puppy"
              className="w-full sm:w-[227px] h-[250px] sm:h-[219px] object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center gap-y-5 flex-1">
            <h3 className="text-2xl font-medium  text-gray-800  sm:block hidden">
              {puppyDetails?.puppy_name || "N/A"}
            </h3>
            {/* <h3 className="text-2xl font-normal  text-gray-800  text-end sm:hidden block">
              ${puppyDetails?.price || "N/A"}
            </h3> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start sm:gap-6 sm:divide-x-[0.85px] divide-gray-500">
              {/* Detail Group 1 */}
              <div className="flex flex-col space-y-4 sm:pr-4">
              <DetailItem
                  icon={<BiDollar />}
                  label="Price:"
                  value={"$"+puppyDetails?.price || "N/A"}
                />
                <DetailItem
                  icon={<TbClockRecord />}
                  label="Go Home Date:"
                  value={puppyDetails?.go_home_date || "N/A"}
                />
                <DetailItem
                  icon={<TbWeight />}
                  label="Weight:"
                  value={
                    puppyDetails?.weight
                      ? `${puppyDetails.weight} ${puppyDetails.weight_unit}`
                      : "N/A"
                  }
                />
                <DetailItem
                  icon={<TbDog />}
                  label="Gender:"
                  value={puppyDetails?.gender || "N/A"}
                />
              </div>

              {/* Detail Group 2 */}
              <div className="flex flex-col space-y-4 sm:px-6">
                <DetailItem
                  icon={<TbHomeShare />}
                  label="Ready to Go Home:"
                  value={puppyDetails?.ready_to_go_home || "N/A"}
                />
                <DetailItem
                  icon={<IoColorPaletteOutline />}
                  label="Color:"
                  value={puppyDetails?.coat_color || "N/A"}
                />
                <DetailItem
                  icon={<BiRuler />}
                  label="Size:"
                  value={puppyDetails?.size || "N/A"}
                />
                <DetailItem
                  icon={<TbArrowsShuffle />}
                  label="Generation:"
                  value={puppyDetails?.generation || "N/A"}
                />
              </div>

              {/* Detail Group 3 */}
              <div className="flex flex-col space-y-4 sm:px-6">
                <DetailItem
                  icon={<IoPawOutline />}
                  label="Breed:"
                  value={puppyDetails?.litter_breed_name || "N/A"}
                />
                <DetailItem
                  icon={<FaRegAddressCard />}
                  label="Puppy ID:"
                  value={puppyDetails?.name || "N/A"}
                />
                <DetailItem
                  icon={<BiInjection />}
                  label="Vaccinated:"
                  value={
                    puppyDetails?.vaccinations_table?.length > 0 ? "Yes" : "No"
                  }
                />
              </div>
            </div>

            <div className="space-y-3 sm:hidden block">
              <h3 className="text-xl font-semibold  text-gray-800  ">Health</h3>
              <div className="flex  items-center gap-x-2">
                <div className="border border-[#0000001F] bg-white rounded-[16px] px-4 py-3">
                  <img src={animal_logo} alt="animal_logo" className="w-48" />
                </div>
                <div className="border border-[#0000001F] bg-white rounded-[16px] px-4 py-2">
                  <img src={embark} alt="logo" className="w-48" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:hidden block">
            <h3 className="text-xl font-semibold  text-gray-800  ">
              Kennel Owner
            </h3>
            <div className="flex items-center gap-x-2">
              <img
                src={
                  businessProfile?.logo
                    ? `${window.$BackEndURL}${businessProfile?.logo}`
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                }
                alt="logo"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="font-medium">{businessProfile?.business_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Item Component
const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="text-xl text-gray-700">{icon}</div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
    <span className="ml-2 text-gray-800 font-medium text-sm">{value}</span>
  </div>
);

export default PuppySummary;
