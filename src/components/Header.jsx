import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import background from "../assets/headerbg.png";
import HeroSectionCard from "./HeroSectionCard";
import { PiPawPrintFill } from "react-icons/pi";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Category", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-900 min-h-screen max-w-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 md:p-8 lg:px-32"
        >
          <div className="flex items-center space-x-4 md:space-x-40 lg:flex-1">
            <span className="text-white font-bold text-2xl">LOGO</span>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <span
                  key={item.name}
                  className="text-sm font-normal leading-6 text-white cursor-pointer"
                >
                  {item.name}
                </span>
              ))}
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="bg-white text-black px-4 py-2 rounded">
              Request sent
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
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-white font-medium text-2xl">LOGO</span>
              </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Request Sent
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden h-screen flex  justify-center">
        <img
          alt="background"
          src={background}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col pt-24 md:pt-44 justify-center items-baseline px-4 sm:px-6 ">
          <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto">
            <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center gap-y-1 ">
              <PiPawPrintFill className="text-white w-10 h-10 mb-2 " />
              <h1 className="text-white lg:text-7xl text-4xl  lg:text-start text-center font-medium lg:mb-4 mb-2">
                Your New Puppy Is Looking Forward To Meeting You!
              </h1>
              <p className="text-white text-sm font-light sm:text-base md:text-lg mb-4 lg:text-start text-center">
                Your new puppy is bursting with excitement to meet their new
                family! With a wagging tail and bright eyes, they’re ready to
                shower you with affection and become your loyal companion.
              </p>
            </div>
            <div className="lg:w-2/5 md:w-2/5   w-full">
              <HeroSectionCard />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
