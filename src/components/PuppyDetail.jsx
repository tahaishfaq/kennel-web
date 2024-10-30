import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbClockRecord, TbWeight, TbDog, TbHomeShare } from "react-icons/tb";
import { IoColorPaletteOutline, IoPawOutline } from "react-icons/io5";
import { BiRuler, BiInjection } from "react-icons/bi";
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

  return (
    <div className="lg:p-6 p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {puppyDetail?.images?.slice(0, 3)?.map((imageData, index) => (
          <img
            key={index}
            src={`${window.$BackEndURL}${imageData.image}`}
            alt={`puppy-${index}`}
            className="rounded-md w-full h-60 object-cover object-center"
          />
        ))}
      </div>

      <div className="mt-6 bg-white p-4 lg:p-6 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-[70%]">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl lg:text-4xl font-medium text-[#000000] mb-1">
                  {puppyDetail?.puppy_name}
                </h1>
                <h2 className="text-[#000000CC] font-normal text-base lg:text-lg">
                  {puppyDetail?.size}
                </h2>
              </div>
              <div className="text-right mt-4 lg:mt-0">
                <p className="text-2xl lg:text-4xl font-medium text-[#000000]">
                  USD ${puppyDetail?.price}
                </p>
                <p className="text-[#000000CC] font-medium text-sm lg:text-base">
                  Initial deposit amount will be ${puppyDetail?.deposit_amount}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center bg-[#E8E7E5] rounded-lg p-4 mb-5">
                <FaLocationArrow className="text-2xl lg:text-4xl bg-black text-white mr-4 border p-2 border-black rounded-lg" />
                <div>
                  <p className="font-medium text-sm text-[#000000CC]">
                    Location
                  </p>
                  <p className="text-[#000000CC] font-medium text-sm">
                    {puppyDetail?.location ? puppyDetail?.location : "--"}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-[#0000001F] border rounded-md p-4 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                <div className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4 lg:pr-6">
                  <p className="flex items-center">
                    <TbClockRecord className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Age:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {moment(puppyDetail?.creation).format("ll")}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <TbWeight className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Weight:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {puppyDetail?.weight}
                      {puppyDetail?.weight_unit}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <TbDog className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Gender:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {puppyDetail?.gender}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4 lg:pr-6">
                  <p className="flex items-center">
                    <TbHomeShare className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Bring Home:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {moment(puppyDetail?.go_home_date).format("ll")}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <IoColorPaletteOutline className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Color:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {puppyDetail?.coat_color}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BiRuler className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Size:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {puppyDetail?.size}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="flex items-center">
                    <IoPawOutline className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Breed:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {puppyDetail?.litter_breed_name
                        ? puppyDetail?.litter_breed_name
                        : "--"}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FaRegAddressCard className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Puppy ID:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      {puppyDetail?.name}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BiInjection className="text-xl lg:text-2xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Vaccinated:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      Yes
                    </span>
                  </p>
                </div>
              </div>

              {/* <div className="mt-6">
                <h2 className="text-[#000000CC] font-medium text-lg lg:text-xl">
                  About Puppy
                </h2>
                <p className="mt-2 text-[#000000A3] font-normal text-sm lg:text-base leading-relaxed">
                  Hi! My name is Champ. I am a very gorgeous and unique puppy. I
                  am now taking applications for my new family. I want to live
                  with them forever, so I must make sure that I choose the right
                  one! I am told that I am very smart, sweet, and playful. I
                  love to watch what you do very attentively. Spending time with
                  you will make me the happiest puppy ever! Sometimes I feel the
                  need to give you puppy kisses! I prefer to kiss your nose, as
                  there is something so funny about human noses; they make me
                  giggle. I also really enjoy chasing my tail. I don't know what
                  that thing does back there, but it intrigues me. I have yet to
                  catch it, but I'll keep trying. I am looking for a family that
                  will love and spoil me, as long as you let me spoil you with
                  my love too. I think you could be the one for me!
                </p>
              </div> */}

              {/* Guarantee Section */}
              <div className="mt-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 bg-[#0000000A] p-2 lg:p-4 rounded-md">
                  <div className="flex items-center">
                    <img src={frame1} alt="" className="h-6 lg:h-8" />
                    <p className="ml-2 text-[#000000] font-normal text-sm lg:text-base">
                      100% health guarantee for pets
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={frame2} alt="" className="h-6 lg:h-8" />
                    <p className="ml-2 text-[#000000] font-normal text-sm lg:text-base">
                      100% guarantee of pet identification
                    </p>
                  </div>
                </div>

                {/* Logos Section */}
                <div className="mt-4 flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div className="flex justify-between gap-4">
                    {puppyDetail?.embark_file == null ||
                    puppyDetail?.embark_registration == null ||
                    puppyDetail?.embark_url == "" ? (
                      ""
                    ) : (
                      <div className="border rounded-lg p-2">
                        <img
                          src={embarck}
                          alt="Embark"
                          className="h-8 lg:h-10"
                        />
                      </div>
                    )}
                    <div className="border rounded-lg p-2">
                      {puppyDetail?.genetically_clear == null ||
                      puppyDetail?.genetic_testation == null ? (
                        ""
                      ) : (
                        <img
                          src={genetics}
                          alt="genetics"
                          className="h-8 lg:h-10"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Excellence and Features Section */}
              <div className="mt-6 flex flex-col lg:flex-row gap-4 lg:gap-8 bg-[#0000000A] p-2 lg:p-4 rounded-md">
                <div className="flex flex-col items-start w-full lg:w-1/2 border-r-2 border-dotted pr-4">
                  <div className="flex items-start gap-2">
                    <img
                      src={excellence}
                      alt="Excellence"
                      className="h-6 lg:h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-[#000000] font-medium text-lg lg:text-xl">
                        Champions of Excellence
                      </p>
                      <span className="text-[#000000A3] font-normal text-xs lg:text-sm">
                        This puppy meets the highest quality standards.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-around w-full lg:w-1/2">
                  <div className="flex flex-col items-center">
                    <img
                      src={medal}
                      alt="AKC Register"
                      className="h-6 lg:h-8"
                    />
                    <span className="text-[#000000] font-normal text-xs lg:text-sm">
                      AKC Register
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={vector}
                      alt="Potty Trained"
                      className="h-6 lg:h-8"
                    />
                    <span className="text-[#000000] font-normal text-xs lg:text-sm">
                      Potty Trained
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={vector1}
                      alt="Champion Bloodline"
                      className="h-6 lg:h-8"
                    />
                    <span className="text-[#000000] font-normal text-xs lg:text-sm text-center">
                      Champion Bloodline
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="lg:w-[28%] lg:ml-8 mt-6 lg:mt-1 flex flex-col gap-4">
            <div className="">
              <button
                className="w-full flex items-end font-medium justify-center bg-black text-white px-4 py-2.5 rounded-md"
                onClick={handleButtonClick}
              >
                <MdOutlineMessage className="mr-2 w-5 h-5" />{" "}
                <span>Talk to Breeder</span>
              </button>
              {isPopoverOpen && (
                <TalkToBreederPopover
                  puppyDetail={puppyDetail}
                  isOpen={isPopoverOpen}
                  setIsOpen={setIsPopoverOpen}
                />
              )}

              {/* <button className="w-full flex items-center text-[#000000] font-medium text-base lg:text-lg justify-center border border-black px-4 py-2 rounded-md">
                Take me home
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyDetail;
