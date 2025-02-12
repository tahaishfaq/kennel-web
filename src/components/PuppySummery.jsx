import React from "react";
import {
  TbWeight,
  TbDog,
  TbHomeShare,
  TbArrowsShuffle,
  TbClockRecord,
} from "react-icons/tb";
import { IoColorPaletteOutline, IoPawOutline } from "react-icons/io5";
import { BiRuler, BiInjection } from "react-icons/bi";
import { FaRegAddressCard, FaLocationArrow } from "react-icons/fa6";
import moment from "moment";
import { GrLocation } from "react-icons/gr";

const PuppySummary = ({ puppyDetails, adoptionTicket }) => {
  function calculateGoHomeDate(weeks) {
    return moment().add(weeks, "weeks").format("ll");
  }

  return (
    <div className="bg-white shadow-md rounded-[12px] px-4 py-3">
      <div className="flex flex-col items-start gap-y-4">
        <div className="flex items-start gap-x-4 w-full">
          <img
            src={
              puppyDetails?.profile_picture
                ? `${window.$BackEndURL}${puppyDetails.profile_picture}`
                : "https://via.placeholder.com/150"
            }
            alt={puppyDetails?.puppy_name || "Puppy"}
            className="w-[105px] h-[105px] object-cover rounded-md"
          />

          <div className="flex flex-col justify-between flex-1 ">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-semibold text-gray-800">
                {puppyDetails?.puppy_name || "N/A"}
              </h1>

              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5294 8.00275C15.5302 6.48478 15.1116 4.99793 14.3226 3.7159C13.5336 2.43386 12.4067 1.40956 11.0737 0.762676C9.74061 0.115786 8.25638 -0.12699 6.79436 0.0627089C5.33234 0.252408 3.9529 0.866748 2.8172 1.83396C1.68149 2.80118 0.836412 4.08133 0.380677 5.52488C-0.075058 6.96842 -0.12263 8.51575 0.243519 9.98611C0.609668 11.4565 1.37442 12.7891 2.44844 13.8284C3.52245 14.8678 4.86138 15.5708 6.30882 15.8554V18.001H4.85294C4.46682 18.001 4.09651 18.159 3.82348 18.4403C3.55044 18.7216 3.39706 19.103 3.39706 19.5008C3.39706 19.8985 3.55044 20.28 3.82348 20.5613C4.09651 20.8425 4.46682 21.0005 4.85294 21.0005H6.30882V22.5003C6.30882 22.898 6.46221 23.2795 6.73524 23.5607C7.00827 23.842 7.37858 24 7.7647 24C8.15083 24 8.52114 23.842 8.79417 23.5607C9.0672 23.2795 9.22059 22.898 9.22059 22.5003V21.0005H10.6765C11.0626 21.0005 11.4329 20.8425 11.7059 20.5613C11.979 20.28 12.1323 19.8985 12.1323 19.5008C12.1323 19.103 11.979 18.7216 11.7059 18.4403C11.4329 18.159 11.0626 18.001 10.6765 18.001H9.22059V15.8554C10.9937 15.5048 12.5932 14.5293 13.7443 13.0965C14.8955 11.6636 15.5266 9.86267 15.5294 8.00275ZM2.91176 8.00275C2.91176 7.01401 3.19638 6.04748 3.72963 5.22537C4.26288 4.40327 5.02081 3.76252 5.90756 3.38414C6.79432 3.00577 7.77009 2.90677 8.71147 3.09966C9.65284 3.29256 10.5176 3.76868 11.1963 4.46782C11.8749 5.16696 12.3371 6.05772 12.5244 7.02746C12.7116 7.9972 12.6155 9.00236 12.2482 9.91584C11.8809 10.8293 11.2589 11.6101 10.4609 12.1594C9.66279 12.7087 8.72453 13.0019 7.7647 13.0019C6.4781 13.0003 5.24463 12.4731 4.33486 11.5359C3.42509 10.5987 2.9133 9.32811 2.91176 8.00275Z"
                  fill="#EC49A7"
                />
              </svg>
            </div>

            <div className="flex items-start gap-x-2 text-[14px] text-gray-600 pt-1">
              <GrLocation className="text-gray-500 mt-1" />
              <p className="line-clamp-2 flex-1">
                {adoptionTicket?.location?.length > 0
                  ? adoptionTicket?.location[0]?.location_name
                  : "Location unavailable"}
              </p>
            </div>

            <div className="flex items-center justify-between w-full mt-3">
              <div className="flex items-center gap-x-1 bg-[#71C90014] py-2 px-1.5 rounded-md">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#71C900]"
                >
                  <g clipPath="url(#clip0_5682_63035)">
                    <path
                      d="M5.25 12.2507V8.75065C5.25 8.44123 5.37292 8.14449 5.59171 7.92569C5.8105 7.7069 6.10725 7.58398 6.41667 7.58398H7.58333C7.72742 7.58398 7.86567 7.61023 7.99283 7.65807"
                      stroke="#71C900"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.0833 7H12.25L7 1.75L1.75 7H2.91667V11.0833C2.91667 11.3928 3.03958 11.6895 3.25838 11.9083C3.47717 12.1271 3.77391 12.25 4.08333 12.25H7"
                      stroke="#71C900"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33594 12.8327L12.2526 9.91602"
                      stroke="#71C900"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.25 12.541V9.91602H9.625"
                      stroke="#71C900"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5682_63035">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="sm:text-[14px] text-[12px] text-[#71C900]">
                  {calculateGoHomeDate(puppyDetails?.go_home_date_duration)}
                </span>
              </div>

              {/* Price */}
              <p className="sm:text-[20px] text-[16px] font-semibold text-gray-800">
                ${puppyDetails?.price || "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-[8px]">
          <p className="text-[16px] text-[#000000CC]">
            {puppyDetails?.description}
          </p>
          <div className="flex items-center gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5682_63060)">
                <path
                  d="M24 8.94717C24.0004 9.3536 23.9783 9.75974 23.9338 10.1637C23.4 15.212 19.531 20.521 12 22.9665C4.48139 20.5334 0.600009 15.241 0.0662161 10.1637C0.0215847 9.75975 -0.000518473 9.3536 9.2288e-06 8.94717C9.2288e-06 4.93338 2.44966 1.44924 6.00001 1.44924C7.15631 1.447 8.29902 1.69842 9.3476 2.18579L15.2979 1.92096C16.1641 1.60692 17.0787 1.44726 18 1.44924C21.5504 1.44924 24 4.93338 24 8.94717Z"
                  fill="#DF4D60"
                />
                <path
                  d="M24 8.94717C24.0004 9.3536 23.9783 9.75974 23.9338 10.1637C22.4524 13.9706 17.669 16.7596 12 16.7596C6.33104 16.7596 1.5476 13.9706 0.0662161 10.1637C0.0215847 9.75975 -0.000518473 9.3536 9.2288e-06 8.94717C9.2288e-06 4.93338 2.44966 1.44924 6.00001 1.44924C7.15631 1.447 8.29902 1.69842 9.3476 2.18579L15.2979 1.92096C16.1641 1.60692 17.0787 1.44726 18 1.44924C21.5504 1.44924 24 4.93338 24 8.94717Z"
                  fill="#FF5364"
                />
                <path
                  d="M21.2088 16.7841C19.4744 18.9922 17.2331 20.7494 14.675 21.9069C14.4267 22.0269 14.1743 22.1427 13.9178 22.2462C13.3095 22.511 12.6681 22.751 12.0019 22.9662C11.7205 22.8752 11.4433 22.78 11.1743 22.6807V18.4145C10.1393 17.2814 9.55112 15.8109 9.51916 14.2765C9.54179 12.8145 9.91651 11.3795 10.6116 10.0931C10.6584 9.99147 10.661 9.87497 10.6186 9.7714C10.5762 9.66784 10.4928 9.58652 10.3881 9.54688C9.18427 9.13059 7.92115 8.91122 6.64743 8.89722C4.66536 8.23516 4.52881 6.25309 4.55778 5.48343C4.56358 5.30021 4.69029 5.14309 4.86812 5.0986L7.26812 4.50274C7.66799 4.40129 8.01597 4.15505 8.24467 3.81171L9.21709 2.35516C9.25761 2.29587 9.30183 2.23921 9.3495 2.1855C9.55492 1.94686 9.82515 1.77294 10.1274 1.68481C11.2807 1.32157 12.4747 1.10333 13.6819 1.03516C14.3274 1.07051 14.9222 1.39605 15.2998 1.92067C16.1615 3.10387 16.6108 4.53732 16.5785 6.00067C16.5785 7.05998 16.1233 7.66826 15.4985 7.95378V7.96205L15.6185 8.79378L15.7095 9.43102C15.732 9.59495 15.8513 9.72903 16.0116 9.77033C16.7069 10.0072 17.3297 10.419 17.8198 10.9662C18.5854 11.7276 20.1288 14.2145 21.2088 16.7841Z"
                  fill="#35495E"
                />
                <path
                  d="M15.6166 8.79398C15.2892 8.91997 14.9411 8.98314 14.5903 8.98019C14.1383 8.97717 13.6907 8.89018 13.2703 8.72363C12.7996 8.53309 12.4906 8.077 12.4883 7.56915V4.7595C12.4883 4.53096 12.6735 4.3457 12.9021 4.3457C13.1306 4.3457 13.3159 4.53096 13.3159 4.7595V7.56915C13.3157 7.73873 13.419 7.89124 13.5766 7.95398C14.1554 8.20321 14.8087 8.21657 15.3972 7.99122C15.4289 7.97724 15.4623 7.9675 15.4966 7.96225L15.6166 8.79398Z"
                  fill="#2C3E50"
                />
                <path
                  d="M18.6015 17.7199C18.5268 17.9356 18.293 18.0516 18.076 17.9806C17.2979 17.6766 16.4195 17.7806 15.7339 18.2578C14.9264 18.8931 14.4637 19.8705 14.4843 20.8978C14.4778 21.2438 14.5426 21.5875 14.6746 21.9075C14.4264 22.0275 14.1739 22.1433 13.9174 22.2468C13.7401 21.8194 13.6514 21.3605 13.6567 20.8978C13.6376 19.6052 14.2277 18.379 15.2498 17.5875C16.1526 16.9554 17.3086 16.8084 18.3408 17.1943C18.5566 17.269 18.6726 17.5029 18.6015 17.7199Z"
                  fill="#2C3E50"
                />
                <path
                  d="M6.20513 4.76758V6.00068C6.20513 6.22921 6.01987 6.41447 5.79134 6.41447H4.61203C4.56177 6.10683 4.54237 5.79494 4.5541 5.48344C4.5599 5.30022 4.68661 5.1431 4.86444 5.09861L6.20513 4.76758Z"
                  fill="#3F5C6C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5682_63060">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#71C900] text-[14px]">
              100% health guarantee for pets
            </span>
          </div>
        </div>
        <div className="pt-6 w-full grid grid-cols-1 gap-[20px] border-t border-dashed">
          <DetailItem
            label="Weight"
            value={
              `${puppyDetails?.weight}${puppyDetails?.weight_unit}` || "N/A"
            }
            icon={<TbWeight />}
          />
          <DetailItem
            label="Litter"
            value={puppyDetails?.litter_breed_name || "N/A"}
            icon={<IoPawOutline />}
          />
          <DetailItem
            label="Gender"
            value={puppyDetails?.gender || "N/A"}
            icon={<TbDog />}
          />
          <DetailItem
            label="Bring home date"
            value={
              calculateGoHomeDate(puppyDetails?.go_home_date_duration) || "N/A"
            }
            icon={<TbHomeShare />}
          />
          <DetailItem
            label="Color"
            value={puppyDetails?.coat_color || "N/A"}
            icon={<IoColorPaletteOutline />}
          />
          <DetailItem
            label="Size"
            value={puppyDetails?.size || "N/A"}
            icon={<BiRuler />}
          />
          <DetailItem
            label="Generation"
            value={puppyDetails?.generation_breed || "N/A"}
            icon={<TbArrowsShuffle />}
          />
          <DetailItem
            label="Breed"
            value={puppyDetails?.litter_breed_name || "N/A"}
            icon={<IoPawOutline />}
          />
          <DetailItem
            label="Puppy ID"
            value={puppyDetails?.name || "N/A"}
            icon={<FaRegAddressCard />}
          />
          <DetailItem
            label="Vaccination"
            value={puppyDetails?.vaccinated || "No"}
            icon={<BiInjection />}
          />
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, icon }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-x-2.5">
      <span className="text-lg">{icon}</span>
      <p className="text-[16px] text-[#000000CC]">{label}</p>
    </div>

    <p className="text-[14px] font-semibold text-[#000000CC]">{value}</p>
  </div>
);

export default PuppySummary;
