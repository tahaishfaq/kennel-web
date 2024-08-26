import React, { useEffect } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => <FaFacebook {...props} />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => <FaTwitter {...props} />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props) => <FaYoutube {...props} />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (props) => <FaLinkedin {...props} />,
  },
];

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 bg-[#A1ADAB] lg:py-12 md:py-12 pt-5 pb-10">
      <div className="flex flex-col lg:px-16  gap-y-8 mx-auto max-w-[1440px]">
        <div className="flex flex-col lg:flex-row lg:px-6 bg-[#A1ADAB] py-12 ">
          <div className="w-full">
            <div className="w-full h-auto px-6 lg:pb-0 md:pb-0 pb-8 flex flex-col md:flex-row justify-center items-center gap-y-3 text-[#000000] bg-white rounded-[8px]">
              <h1 className="font-normal text-[28px] p-8 text-center md:text-left">
                Register now so you don't miss our programs
              </h1>

              <div className="w-full flex flex-col md:flex-row gap-x-4 items-center">
                <form className="w-full md:w-auto flex-grow">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-lg p-3 h-12 border border-[#99A2A5] placeholder:text-[#99A2A5] text-[#000000]"
                    />
                  </div>
                </form>

                <button
                  type="submit"
                  className="bg-black text-white font-medium text-base w-full md:w-auto h-12 px-8 mt-3 md:mt-0 rounded-md"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-3">
          <div className="text-[#000000CC]">
            <ul className="font-medium text-base flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-6 items-center">
              <li>Home</li>
              <li>Category</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex flex-row space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#00171F] text-2xl"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mt-10"></div>

        <div className="w-full px-6 flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-3">
          <div className="text-[#000000CC]">
            <div className="font-medium text-sm flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-6 items-center">
              <span> &copy; 2022 brand. All rights reserved. </span>
            </div>
          </div>

          <div className="text-[#000000CC]">
            <div className="font-medium text-sm flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-6 items-center">
              <span> Terms of Service</span>
              <span> Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
