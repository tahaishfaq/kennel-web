import React, { useEffect } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => <FaFacebook {...props} className="text-blue-600" />,
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
    
      <div className="flex lg:flex-row flex-col lg:px-16 px-4 bg-[#A1ADAB] py-12 gap-y-8">
        <div className="w-full md:w-1/4 px-6 flex flex-col items-start gap-y-3">
          <div className="flex items-center font-medium text-3xl">
            <span>LOGO</span>
          </div>
          <p className=" text-[#000000A3] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            lorem.
          </p>
          <div className="flex items-center gap-x-2">
            <div className="flex flex-col items-start">
              <div className="mt-10 flex justify-center space-x-10">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500 border bg-white p-2 rounded-full"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className=" " aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 px-6 flex flex-col items-start gap-y-3 text-[#000000CC]">
          <h3 className="text-base font-medium text-[#000000CC]">
            Useful Link
          </h3>
          <ul className="font-light">
            <li>Available Litters</li>
            <li>Upcoming Litter</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-6 flex flex-col items-start gap-y-3 text-[#000000CC]">
          <ul className="flex flex-col items-start font-medium text-base">
            <li className="mb-2">Dam</li>
            <li className="mb-2">Sire</li>
            <li className="mb-2">Puppies</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-6 flex flex-col items-start gap-y-3 text-[#000000]">
          <h1 className="font-light text-2xl">Subscribe Newsletter</h1>
          <span className="font-light">
            Enter your email to receive our valuable newsletters.
          </span>
          <form className="w-full">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-full mb-2 px-4 py-2 h-12 focus:outline-none border-none placeholder:text-[#000000] text-[#000000] outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="bg-white h-12 text-[#000000] px-4 py-2 absolute top-0 right-0"
              >
                <FaRegEnvelope />
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default Footer;