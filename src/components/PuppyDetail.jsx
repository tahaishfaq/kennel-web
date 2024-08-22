import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { TbClockRecord } from "react-icons/tb";
import { TbWeight } from "react-icons/tb";
import { TbDog } from "react-icons/tb";
import { TbHomeShare } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiRuler } from "react-icons/bi";
import { IoPawOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { BiInjection } from "react-icons/bi";
import embarck from "../assets/embark_logo.png";
import genetics from "../assets/Animal-Genetics-logo-Blue.png";
import frame1 from "../assets/Frame 110.png";
import frame2 from "../assets/Frame 110 (1).png";
import excellence from "../assets/excellence.png";
import medal from "../assets/medal 1.png";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector (1).png";

const PuppyDetail = () => {
  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <img
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop"
          alt="puppy"
          className="rounded-md w-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop"
          alt="puppy"
          className="rounded-md w-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop"
          alt="puppy"
          className="rounded-md w-full object-cover object-center"
        />
      </div>

      <div className="mt-6 bg-white p-2">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-[80%]">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-medium text-[#000000] mb-1">
                  Champ
                </h1>
                <h2 className="text-[#000000CC] font-normal text-base">
                  Information
                </h2>
              </div>
              <div className="text-right">
                <p className="text-4xl font-medium text-[#000000]">USD $250</p>
                <p className="text-[#000000CC] font-medium text-base">
                  Initial deposit amount will be $50
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center bg-[#E8E7E5] rounded-lg p-4 mb-5 w-3/5">
                <FaLocationArrow className="text-4xl bg-black text-white mr-4 border p-2 border-black rounded-lg" />
                <div>
                  <p className="font-medium text-sm text-[#000000CC]">
                    Location
                  </p>
                  <p className="text-[#000000CC] font-medium text-sm">
                    Akshay Nagar 1st Block 1st Cross, Rammurthy Nagar,
                    Bangalore, 560016
                  </p>
                </div>
              </div>
            </div>

            <div className="border-[#0000001F] border rounded-md p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4">
                  <p className="flex items-center">
                    <TbClockRecord className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Age:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      May 14, 2023
                    </span>
                  </p>
                  <p className="flex items-center">
                    <TbWeight className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Weight:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      8-15 lbs
                    </span>
                  </p>
                  <p className="flex items-center">
                    <TbDog className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Gender:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      Male
                    </span>
                  </p>
                </div>

                <div className="flex flex-col space-y-2 border-dotted border-r border-[#000000A3] pr-4">
                  <p className="flex items-center">
                    <TbHomeShare className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Bring Home on:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      July 9, 2024
                    </span>
                  </p>
                  <p className="flex items-center">
                    <IoColorPaletteOutline className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Color:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      Black
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BiRuler className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Size:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      Toy
                    </span>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="flex items-center">
                    <IoPawOutline className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Breed:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      Golden
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FaRegAddressCard className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Puppy ID:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      26424
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BiInjection className="text-xl text-[#000000] mr-2" />
                    <span className="font-normal text-sm text-[#000000CC]">
                      Vaccinated:
                    </span>
                    <span className="ml-2 text-[#000000CC] font-semibold text-sm">
                      Yes
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-[#000000CC] font-medium text-lg">
                  About Puppy
                </h2>
                <p className="mt-2 text-[#000000A3] font-normal text-base">
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
              </div>

              <div className="mt-6">
                <div className="flex flex-row">
                  <div className="flex flex-row md:grid-cols-2 gap-4 bg-[#0000000A] p-2 rounded-md">
                    <div className="flex items-center">
                      <img src={frame1} alt="" className="h-8" />
                      <p className="text-[#000000] font-normal text-sm">
                        100% health guarantee for pets
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src={frame2} alt="" className="h-8" />
                      <p className="text-[#000000] font-normal text-sm">
                        100% guarantee of pet identification
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-x-4 ml-14">
                    <div className="border rounded-lg">
                      <img src={embarck} alt="Embark" className="p-2" />
                    </div>
                    <div className="border rounded-lg border-[#0000001F]">
                      <img src={genetics} alt="genetics" className="p-2" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex  gap-2 bg-[#0000000A] ">
                  <div className="flex w-full items-start flex-col border-r-2 border-dotted p-2 rounded-md">
                    <div className="flex flex-row items-start gap-x-1">
                      <img src={excellence} alt="" className="h-6" />
                      <div className="flex flex-col">
                        <p className="text-[#000000] font-medium text-lg">
                          Champions of Excellence
                        </p>
                        
                      </div>
                    </div>
                    <span className="text-[#000000A3] font-normal text-xs">
                          This puppy meets the highest quality standards.
                        </span>
                  </div>

                  <div className="flex items-center w-full justify-center p-2 gap-x-2 rounded-md">
                    <div className="flex flex-col w-full items-center justify-center gap-y-1">
                      <img src={medal} alt="" className="h-6" />
                      <span className="text-[#000000] font-normal text-xs">
                        AKC Register
                      </span>
                    </div>{" "}
                    <div className="flex flex-col w-full items-center justify-center gap-y-1">
                      <img src={vector} alt="" className="h-6" />
                      <span className="text-[#000000] font-normal text-xs">
                        Potty Trained
                      </span>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center gap-y-1">
                      <img src={vector1} alt="" className="h-6" />
                      <span className="text-[#000000] flex items-center justify-center text-center font-normal text-xs">
                        Champion Bloodline
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="  lg:w-[28%] lg:ml-8 mt-6 lg:mt-0 flex flex-col gap-4">
            <div className="bg-[#E8E7E5] py-4 px-4 border rounded-md">
              <button className=" w-full flex items-center font-medium text-base justify-center text-center bg-black text-white px-4 py-2 rounded-md mb-4">
                <MdOutlineMessage className="mr-2" /> Talk to Breeder
              </button>
              <button className=" w-full flex items-center text-[#000000] font-medium text-base justify-center text-center bg-white border border-black px-4 py-2 rounded-md">
                Take me home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyDetail;
