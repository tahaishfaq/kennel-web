import { useState } from "react";
import { FaLocationArrow, FaMicrochip } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import {
  TbClockRecord,
  TbWeight,
  TbDog,
  TbHomeShare,
  TbArrowsShuffle,
  TbCalendar,
  TbCheck,
  TbDna,
  TbScissors,
  TbId,
} from "react-icons/tb";
import { IoColorPaletteOutline, IoPawOutline } from "react-icons/io5";
import { BiRuler, BiInjection, BiDollar } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";
import embarck from "../assets/embark_logo.png";
import genetics from "../assets/Animal-Genetics-logo-Blue.png";
import frame1 from "../assets/Frame 110.png";
import frame2 from "../assets/Frame 110 (1).png";
import excellence from "../assets/excellence.png";
import medal from "../assets/medal 1.png";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector (1).png";
import TalkToBreederPopover from "./TalkToBreederPopover";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiMapPin } from "react-icons/fi";
import veterian from "../assets/veterinarian (1) 1.png";
import { BsLaptop } from "react-icons/bs";
import gender from "../assets/gender.png";

const PuppyDetail = ({ puppyDetail }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  if (!puppyDetail) {
    return (
      <div className="lg:p-6 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="rounded-md w-full h-60" />
            ))}
        </div>

        <div className="mt-6 bg-white p-4 lg:p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-[70%]">
              <div className="flex justify-between items-center">
                <div>
                  <Skeleton height={40} width={200} />
                  <Skeleton height={20} width={150} />
                </div>
                <div className="text-right mt-4 lg:mt-0">
                  <Skeleton height={40} width={100} />
                  <Skeleton height={20} width={150} />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center bg-[#E8E7E5] rounded-lg p-4 mb-5">
                  <Skeleton circle width={40} height={40} className="mr-4" />
                  <div>
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={150} />
                  </div>
                </div>
              </div>

              <div className="border-[#0000001F] border rounded-md p-4 lg:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4 lg:pr-6"
                      >
                        {Array(3)
                          .fill(0)
                          .map((_, idx) => (
                            <Skeleton key={idx} height={20} width={150} />
                          ))}
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 bg-[#0000000A] p-2 lg:p-4 rounded-md">
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} height={40} width={200} />
                    ))}
                </div>

                <div className="mt-4 flex flex-col lg:flex-row gap-4 lg:gap-8">
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} height={40} width={100} />
                    ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col lg:flex-row gap-4 lg:gap-8 bg-[#0000000A] p-2 lg:p-4 rounded-md">
                <Skeleton height={60} width={250} />
                <div className="flex justify-around w-full lg:w-1/2">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} height={40} width={80} />
                    ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[28%] lg:ml-8 mt-6 lg:mt-0 flex flex-col gap-4">
              <Skeleton height={50} width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function calculateGoHomeDate(weeks) {
    return moment().add(weeks, "weeks").format("ll");
  }

  return (
    <div className="sm:px-0 px-4 lg:px-0 md:px-4 ">
      <div className="flex sm:flex-row flex-col gap-3">
        <div className="sm:w-2/3">
          <img
            src={`${window.$BackEndURL}${puppyDetail?.images
              ?.slice(0, 1)
              ?.map((image) => image.image)}`}
            alt="Primary Puppy"
            className="rounded-lg w-full sm:h-[412px] h-[272px]  object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 sm:w-1/3 ">
          {puppyDetail?.images?.slice(1, 3)?.map((image, index) => (
            <img
              key={index}
              src={`${window.$BackEndURL}${image?.image}`}
              alt={`Puppy ${index + 1}`}
              className="rounded-lg w-full sm:h-[198px] h-[272px] object-center object-cover"
            />
          ))}
        </div>
      </div>

      {/* <div className="flex sm:flex-row flex-col gap-3">
  <div className="sm:w-2/3">
    <img
      src={`${window.$BackEndURL}${puppyDetail?.images
        ?.slice(0, 1)
        ?.map((image) => image.image)}`}
      alt="Primary Puppy"
      className="rounded-lg w-full aspect-[4/3.1] object-cover"
    />
  </div>

  <div className="flex flex-col gap-3 sm:w-1/3">
    {puppyDetail?.images?.slice(1, 3)?.map((image, index) => (
      <img
        key={index}
        src={`${window.$BackEndURL}${image?.image}`}
        alt={`Puppy ${index + 1}`}
        className="rounded-lg w-full aspect-[4/3] object-cover"
      />
    ))}
  </div>
</div> */}

      <div className="py-4">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start gap-4">
          <div className="flex flex-col gap-y-[8px]">
            <div className="flex items-center justify-between sm:gap-x-4">
              <div className="flex items-center gap-x-2 sm:gap-x-1.5">
                <img
                  src={gender}
                  alt="icon"
                  className="sm:w-6 sm:h-6 w-5 h-5 object-contain"
                />
                <h1 className="sm:text-[26px] text-[18px] font-medium text-[#000000]">
                  {puppyDetail?.puppy_name}
                </h1>
              </div>

              <span className="sm:px-1.5 px-1 py-1 sm:text-sm text-xs bg-[#71C900] text-white rounded-[4px] flex items-center gap-x-1">
                Bring Home Date:{" "}
                {calculateGoHomeDate(puppyDetail?.go_home_date_duration)}
              </span>
            </div>
            <div className="flex items-center gap-x-3 sm:gap-x-4 pl-0.5">
              <FiMapPin className="sm:w-5 sm:h-5 h-4 w-4 text-[#000000]" />
              <h2 className="text-[16px] text-[#000000]">
                {puppyDetail?.location}
              </h2>
            </div>
            <div className="">
              <div className="flex flex-row sm:items-center sm:gap-x-3 justify-evenly bg-white border  py-[9px] px-2 sm:px-[12px] rounded-[10px] ">
                <div className="flex items-center gap-x-1 sm:gap-x-3 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5745_11740)">
                      <path
                        d="M27 11.9472C27.0004 12.3536 26.9783 12.7597 26.9338 13.1637C26.4 18.212 22.531 23.521 15 25.9665C7.48139 23.5334 3.60001 18.241 3.06622 13.1637C3.02158 12.7597 2.99948 12.3536 3.00001 11.9472C3.00001 7.93338 5.44966 4.44924 9.00001 4.44924C10.1563 4.447 11.299 4.69842 12.3476 5.18579L18.2979 4.92096C19.1641 4.60692 20.0787 4.44726 21 4.44924C24.5504 4.44924 27 7.93338 27 11.9472Z"
                        fill="#DF4D60"
                      />
                      <path
                        d="M27 11.9472C27.0004 12.3536 26.9783 12.7597 26.9338 13.1637C25.4524 16.9706 20.669 19.7596 15 19.7596C9.33104 19.7596 4.5476 16.9706 3.06622 13.1637C3.02158 12.7597 2.99948 12.3536 3.00001 11.9472C3.00001 7.93338 5.44966 4.44924 9.00001 4.44924C10.1563 4.447 11.299 4.69842 12.3476 5.18579L18.2979 4.92096C19.1641 4.60692 20.0787 4.44726 21 4.44924C24.5504 4.44924 27 7.93338 27 11.9472Z"
                        fill="#FF5364"
                      />
                      <path
                        d="M24.2088 19.7841C22.4744 21.9922 20.2331 23.7494 17.675 24.9069C17.4267 25.0269 17.1743 25.1427 16.9178 25.2462C16.3095 25.511 15.6681 25.751 15.0019 25.9662C14.7205 25.8752 14.4433 25.78 14.1743 25.6807V21.4145C13.1393 20.2814 12.5511 18.8109 12.5192 17.2765C12.5418 15.8145 12.9165 14.3795 13.6116 13.0931C13.6584 12.9915 13.661 12.875 13.6186 12.7714C13.5762 12.6678 13.4928 12.5865 13.3881 12.5469C12.1843 12.1306 10.9212 11.9112 9.64743 11.8972C7.66536 11.2352 7.52881 9.25309 7.55778 8.48343C7.56358 8.30021 7.69029 8.14309 7.86812 8.0986L10.2681 7.50274C10.668 7.40129 11.016 7.15505 11.2447 6.81171L12.2171 5.35516C12.2576 5.29587 12.3018 5.23921 12.3495 5.1855C12.5549 4.94686 12.8251 4.77294 13.1274 4.68481C14.2807 4.32157 15.4747 4.10333 16.6819 4.03516C17.3274 4.07051 17.9222 4.39605 18.2998 4.92067C19.1615 6.10387 19.6108 7.53732 19.5785 9.00067C19.5785 10.06 19.1233 10.6683 18.4985 10.9538V10.9621L18.6185 11.7938L18.7095 12.431C18.732 12.595 18.8513 12.729 19.0116 12.7703C19.7069 13.0072 20.3297 13.419 20.8198 13.9662C21.5854 14.7276 23.1288 17.2145 24.2088 19.7841Z"
                        fill="#35495E"
                      />
                      <path
                        d="M18.6166 11.794C18.2892 11.92 17.9411 11.9831 17.5903 11.9802C17.1383 11.9772 16.6907 11.8902 16.2703 11.7236C15.7996 11.5331 15.4906 11.077 15.4883 10.5692V7.7595C15.4883 7.53096 15.6735 7.3457 15.9021 7.3457C16.1306 7.3457 16.3159 7.53096 16.3159 7.7595V10.5692C16.3157 10.7387 16.419 10.8912 16.5766 10.954C17.1554 11.2032 17.8087 11.2166 18.3972 10.9912C18.4289 10.9772 18.4623 10.9675 18.4966 10.9623L18.6166 11.794Z"
                        fill="#2C3E50"
                      />
                      <path
                        d="M21.6015 20.7199C21.5268 20.9356 21.293 21.0516 21.076 20.9806C20.2979 20.6766 19.4195 20.7806 18.7339 21.2578C17.9264 21.8931 17.4637 22.8705 17.4843 23.8978C17.4778 24.2438 17.5426 24.5875 17.6746 24.9075C17.4264 25.0275 17.1739 25.1433 16.9174 25.2468C16.7401 24.8194 16.6514 24.3605 16.6567 23.8978C16.6376 22.6052 17.2277 21.379 18.2498 20.5875C19.1526 19.9554 20.3086 19.8084 21.3408 20.1943C21.5566 20.269 21.6726 20.5029 21.6015 20.7199Z"
                        fill="#2C3E50"
                      />
                      <path
                        d="M9.20513 7.76758V9.00068C9.20513 9.22921 9.01987 9.41447 8.79134 9.41447H7.61203C7.56177 9.10683 7.54237 8.79494 7.5541 8.48344C7.5599 8.30022 7.68661 8.1431 7.86444 8.09861L9.20513 7.76758Z"
                        fill="#3F5C6C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5745_11740">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(3 3)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="sm:text-[14px] text-xs font-medium">
                    Adopt Now Pay Latter
                  </span>
                </div>
                {puppyDetail?.sync_vet_checked == 1 && (
                  <div className="flex items-center gap-x-1 sm:gap-x-3 ">
                    <img
                      src={veterian}
                      alt="icon"
                      className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
                    />

                    <span className="sm:text-[14px] text-xs font-medium">
                      100% Vet Check
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sm:flex hidden sm:items-end  flex-col">
            <p className="text-[20px] sm:text-[28px] font-medium">
              USD ${puppyDetail?.price}
            </p>
            <p className="text-[#000000CC] sm:text-[16px] text-[14px]">
              Initial deposit amount will be{" "}
              <span className="text-[#000] font-semibold">
                ${puppyDetail?.deposit_amount}
              </span>
            </p>
            <div className="flex gap-x-2 items-center pt-3">
              <button
                onClick={handleButtonClick}
                className="border-[1.5px] border-black flex items-center gap-x-2 sm:px-6 px-4  py-2 rounded-[6px]"
              >
                <BsLaptop className="w-5 h-5" />

                <span className="text-[16px] font-medium">Video Chat</span>
              </button>
              <button
                onClick={handleButtonClick}
                className=" bg-black flex text-white items-center gap-x-2 sm:px-6 px-4  py-2 rounded-[6px]"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5745_11624)">
                    <path
                      d="M8 9H16"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 13H14"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H15L12 21L9 18Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5745_11624">
                      <rect width="27" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-[16px] font-medium">Talk to Breeder</span>
              </button>
              {isPopoverOpen && (
                <TalkToBreederPopover
                  puppyDetail={puppyDetail}
                  isOpen={isPopoverOpen}
                  setIsOpen={setIsPopoverOpen}
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-full pt-4">
          <div className="bg-white sm:p-6 p-4 border border-[#0000001F] rounded-[10px] space-y-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-0 gap-4 sm:divide-x-[0.85px] divide-gray-500">
              <div className="flex flex-col space-y-4 sm:pr-6">
                {/* <DetailItem
                  icon={<TbClockRecord />}
                  label="Go Home Date:"
                  value={
                    calculateGoHomeDate(puppyDetail?.go_home_date) || "N/A"
                  }
                /> */}
                <DetailItem
                  icon={<TbWeight />}
                  label="Weight:"
                  value={
                    puppyDetail?.weight
                      ? `${puppyDetail.weight} ${puppyDetail.weight_unit}`
                      : "N/A"
                  }
                />
                <DetailItem
                  icon={<TbDog />}
                  label="Gender:"
                  value={puppyDetail?.gender || "N/A"}
                />
                <DetailItem
                  icon={<TbArrowsShuffle />}
                  label="Generation:"
                  value={puppyDetail?.generation_breed || "N/A"}
                />
                <DetailItem
                  icon={<TbCalendar />}
                  label="Date of Birth:"
                  value={puppyDetail?.litter?.date_of_birth || "N/A"}
                />
                <DetailItem
                  icon={<TbCheck />}
                  label="Vet Checked:"
                  value={puppyDetail?.sync_vet_checked ? "Yes" : "No"}
                />
              </div>

              <div className="flex flex-col space-y-4 sm:px-6">
                <DetailItem
                  icon={<TbHomeShare />}
                  label="Go Home Date:"
                  value={
                    calculateGoHomeDate(puppyDetail?.go_home_date) || "N/A"
                  }
                />
                <DetailItem
                  icon={<IoColorPaletteOutline />}
                  label="Color:"
                  value={puppyDetail?.coat_color || "N/A"}
                />
                <DetailItem
                  icon={<BiRuler />}
                  label="Size:"
                  value={puppyDetail?.size || "N/A"}
                />
                <DetailItem
                  icon={<FaMicrochip />}
                  label="Microchipped:"
                  value={puppyDetail?.sync_microchipped ? "Yes" : "No"}
                />
                <DetailItem
                  icon={<TbDna />}
                  label="Dewormed:"
                  value={puppyDetail?.sync_dewormed ? "Yes" : "No"}
                />
              </div>

              <div className="flex flex-col space-y-4 sm:pl-6">
                <DetailItem
                  icon={<IoPawOutline />}
                  label="Breed:"
                  value={puppyDetail?.litter?.breed || "N/A"}
                />
                <DetailItem
                  icon={<FaRegAddressCard />}
                  label="Puppy ID:"
                  value={puppyDetail?.name || "N/A"}
                />
                <DetailItem
                  icon={<BiInjection />}
                  label="Vaccinated:"
                  value={puppyDetail?.sync_vaccinated ? "Yes" : "No"}
                />
                <DetailItem
                  icon={<TbScissors />}
                  label="Neutered:"
                  value={puppyDetail?.sync_neutered ? "Yes" : "No"}
                />
                <DetailItem
                  icon={<TbId />}
                  label="Registered:"
                  value={puppyDetail?.sync_registered ? "Yes" : "No"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-[4px]">
              <h2 className="text-[#000000CC] text-[18px]">About Puppy</h2>
              <p className="text-[#000000A3] font-normal text-[16px] leading-relaxed">
                {puppyDetail?.description}
              </p>
            </div>

            <div className="">
              <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8">
                {puppyDetail?.embark_file || puppyDetail?.embark_url ? (
                  <div className="border border-[#0000001F] rounded-[16px] p-2.5 flex items-center justify-center">
                    <img
                      src={embarck}
                      alt="Embark"
                      className="h-8 lg:h-10 object-contain"
                    />
                  </div>
                ) : (
                  ""
                )}

                {puppyDetail?.genetically_clear ||
                puppyDetail?.genetic_testation ? (
                  <div className="border border-[#0000001F] rounded-[16px] p-2.5 flex items-center justify-center">
                    <img
                      src={genetics}
                      alt="Genetics"
                      className="h-8 lg:h-10 object-contain"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 bg-gray-100 p-4 rounded-md">
              {/* Left Section */}
              <div className="flex flex-col items-start w-full sm:w-1/2 sm:border-r border-gray-300 sm:pr-4">
                <div className="flex items-start gap-2">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6611 13.6496L19.6555 19.6551C19.057 20.2536 18.2622 20.583 17.4167 20.583C16.5712 20.583 15.7763 20.2536 15.1778 19.6551L11.5473 16.0246L13.7861 13.7857L17.4167 17.4163L23.4223 11.4107L25.6611 13.6496ZM38 30.14H30.0833V38.0566L23.2766 31.2499C22.8412 31.7249 22.3583 32.154 21.7708 32.4801C20.9111 32.9567 19.9468 33.1958 18.9826 33.1958C18.0183 33.1958 17.0541 32.9583 16.1943 32.4801C15.6133 32.1587 15.1335 31.736 14.7028 31.2689L7.91667 38.0551V30.1384H0L5.55592 24.5825C5.51475 24.0109 5.54958 23.4425 5.67625 22.882C5.79183 22.3706 5.548 21.8211 5.06983 21.5108C4.2465 20.9788 3.5815 20.26 3.09067 19.3717C2.622 18.5278 2.37658 17.5541 2.38133 16.5597C2.37658 15.5781 2.622 14.6043 3.09225 13.7588C3.58308 12.8737 4.24808 12.1549 5.07142 11.6229C5.55117 11.3126 5.795 10.7631 5.67942 10.2517C5.45775 9.2764 5.491 8.27731 5.77758 7.27823C6.31908 5.38931 7.82959 3.87881 9.72009 3.33573C10.7208 3.05073 11.7183 3.01748 12.6904 3.23915C13.2018 3.35948 13.7528 3.1109 14.0616 2.63273C14.5904 1.81098 15.3093 1.14598 16.1975 0.653563C17.917 -0.301187 20.0545 -0.301187 21.7724 0.653563C22.6607 1.14598 23.3779 1.81098 23.9083 2.63273C24.2187 3.11248 24.7728 3.35948 25.2795 3.24073C26.2548 3.01748 27.2523 3.05073 28.2498 3.33731C30.1403 3.87881 31.6508 5.38931 32.1939 7.27823C32.4805 8.2789 32.5138 9.27956 32.2921 10.2533C32.1765 10.7616 32.4203 11.3126 32.9001 11.6229C33.7218 12.1533 34.3868 12.8721 34.8793 13.7604C35.3479 14.6075 35.5933 15.5796 35.5886 16.574C35.5933 17.5541 35.3479 18.5262 34.8793 19.3733C34.3868 20.2631 33.7218 20.982 32.9001 21.5108C32.4203 21.8211 32.1765 22.3721 32.2921 22.882C32.4172 23.4314 32.452 23.9887 32.4156 24.5492L38.0048 30.1384L38 30.14ZM25.9778 26.8071C26.4258 26.91 26.8977 26.8926 27.3743 26.7532C28.2103 26.5141 28.9069 25.8191 29.1476 24.9831C29.2838 24.5033 29.3028 24.0331 29.1998 23.5866C28.7913 21.7816 29.5862 19.88 31.179 18.8524C31.5558 18.6086 31.8693 18.2681 32.1053 17.8406C32.3111 17.467 32.4203 17.0284 32.4188 16.5756C32.4203 16.1085 32.3127 15.6715 32.1053 15.2962C31.8693 14.8687 31.5558 14.5299 31.179 14.2845C29.5878 13.2585 28.7913 11.3553 29.1998 9.55348C29.3012 9.10381 29.2838 8.63356 29.146 8.15381C28.9069 7.3194 28.2103 6.62431 27.3743 6.38365C26.8945 6.24748 26.4258 6.22848 25.9762 6.32981C24.1775 6.73673 22.2728 5.94506 21.2436 4.35065C20.9998 3.97381 20.6593 3.66031 20.2318 3.4244C19.4734 3.00165 18.4886 3.00165 17.727 3.4244C17.2995 3.66031 16.9607 3.97223 16.7168 4.35065C15.6877 5.94348 13.7861 6.73673 11.9843 6.32981C11.5362 6.2269 11.0675 6.2459 10.5846 6.38365C9.75017 6.62273 9.05509 7.31781 8.816 8.15381C8.67825 8.63356 8.66084 9.1054 8.76217 9.55348C9.17225 11.3553 8.37742 13.2569 6.783 14.2861C6.40458 14.5299 6.09267 14.8703 5.85834 15.2962C5.65092 15.6699 5.54167 16.1085 5.54484 16.5629C5.54325 17.0316 5.65092 17.4686 5.85834 17.8422C6.09425 18.2697 6.40617 18.6086 6.78458 18.854C8.37742 19.8816 9.17225 21.7831 8.76217 23.5866C8.66084 24.0346 8.67825 24.5049 8.816 24.9846C9.05509 25.8191 9.75017 26.5141 10.5862 26.7548C11.0675 26.8926 11.5378 26.91 11.9843 26.8086C12.2993 26.7374 12.6192 26.7026 12.9358 26.7026C14.4258 26.7026 15.8682 27.4736 16.7168 28.7878C16.9607 29.1662 17.3011 29.4781 17.727 29.7141C18.487 30.1368 19.4718 30.1368 20.2318 29.7141C20.6578 29.4781 20.9982 29.1646 21.2436 28.7862C22.2712 27.1934 24.1743 26.4001 25.9762 26.8086L25.9778 26.8071Z"
                      fill="#71C900"
                    />
                  </svg>

                  <p className="text-black font-medium text-lg lg:text-xl">
                    Vet-Checked Pets Delivered to Your Doorstep
                  </p>
                </div>
              </div>

              {/* Right Section - Puppy Details */}
              <div className="flex items-center justify-center lg:justify-end gap-6 w-full lg:w-1/2">
                {puppyDetail?.akc_register === 1 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={medal}
                      alt="AKC Register Icon"
                      className="h-8 w-8"
                    />
                    <span className="text-black font-normal text-sm lg:text-base text-center">
                      AKC Register
                    </span>
                  </div>
                )}

                {puppyDetail?.potty_trained === 1 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={vector}
                      alt="Potty Trained Icon"
                      className="h-8 w-8"
                    />
                    <span className="text-black font-normal text-sm lg:text-base text-center">
                      Potty Trained
                    </span>
                  </div>
                )}

                {puppyDetail?.champion_bloodline === 1 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={vector1}
                      alt="Champion Bloodline Icon"
                      className="h-8 w-8"
                    />
                    <span className="text-black font-normal text-sm lg:text-base text-center">
                      Champion Bloodline
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyDetail;

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="text-xl text-gray-700">{icon}</div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
    <span className="ml-2 text-gray-800 font-medium text-sm">{value}</span>
  </div>
);
