import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import background from "../assets/headerbg.png";
import video from "../assets/video.mov";
import logo from "../assets/logo.png";
import HeroSectionCard from "./HeroSectionCard";
import { PiPawPrintFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Category", href: "#" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative bg-gray-900 min-h-screen max-w-screen">
        <div className="mx-auto max-w-7xl">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              aria-label="Global"
              className="mx-auto max-w-7xl flex items-center  sm:px-0 px-4"
            >
              <img src={logo} alt="logo" className="w-28" />
              <div className="flex justify-end items-center w-full ">
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                  {navigation?.map((item) => (
                    <Link
                      to={item.href}
                      key={item?.name}
                      className="text-sm font-normal leading-6 text-white cursor-pointer"
                    >
                      {item?.name}
                    </Link>
                  ))}
                  {/* <button
                    onClick={() => setOpen(!open)}
                    className="bg-white text-black px-4 py-2 rounded lg:block md:block hidden"
                  >
                    Request sent
                  </button> */}
                </div>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </nav>
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                <div className="flex items-center justify-between">
                <img src={logo} alt="logo" className="w-16" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-white"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/25">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    {/* <div className="py-6">
                      <button
                        onClick={() => setOpen(!open)}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        Request Send
                      </button>
                    </div> */}
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>
        </div>

        <div className="relative isolate overflow-hidden h-screen flex justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          >
            <source src={video} type="video/mp4" />
            {/* Fallback content for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center lg:pt-0 pt-16 lg:px-0 px-4">
            <div className="mx-auto max-w-7xl ">
              <div className="flex flex-col sm:flex-row items-center gap-y-4 justify-between">
                <div className="flex flex-col sm:items-start items-center gap-y-1 sm:max-w-2xl sm:px-0 pl-1">
                  <PiPawPrintFill className="text-white w-10 h-10 mb-2 lg:block md:block hidden" />
                  <h1 className="text-white sm:text-[70px] leading-[1] uppercase text-4xl font-abel text-start font-medium sm:mb-4 mb-1">
                    Your New Puppy Is Looking Forward To Meeting You!
                  </h1>
                  <p className="text-white text-sm font-light sm:text-base sm:mb-4 font-abel max-w-lg text-justify">
                    Your new puppy is bursting with excitement to meet their new
                    family! With a wagging tail and bright eyes, they’re ready
                    to shower you with affection and become your loyal
                    companion.
                  </p>
                </div>
                <div className="flex-1 sm:w-[30rem] w-full">
                  <HeroSectionCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
