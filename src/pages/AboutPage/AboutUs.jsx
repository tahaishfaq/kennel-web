import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import aboutbg from "../../assets/aboutus-bg.jpeg";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 sm:py-[72px] pt-[60px] pb-[30px] font-satoshi">
        <div className="sm:space-y-20 space-y-6 ">
          <div className="relative text-center">
            <img
              src={aboutbg}
              alt="Background"
              className="w-full h-[290px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="mx-auto max-w-5xl space-y-2.5">
                <h2 className="text-3xl font-semibold text-white">
                  About PickMePets
                </h2>
                <p className="text-gray-200">
                  Get in touch with a member of our team and let us know how we
                  can help.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl sm:space-y-20 space-y-10 sm:px-0 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-6 items-start ">
              <div className="sm:order-1 order-last">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0ef1/135d/dbe64f0a39218bfe2e3029a5c863d8c8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B6SypbjqOFPTDvjD1EgyRtTqMgeeHep9xYCe0AD~2LDw66SYEcyr5FcToK2SITFRZWeZgy9cZU~ba~q-BFWtUkYc~qREZSrxbiuc~KaPiWrpe~dHw3C1cN1DBGTgFceQb0eh76JhZfnxrM8jahrZs91LvDgkIohPJcJL3RSSKs8zLAk~x1AbAvJhGiUg3iMsnBbZCAnEl~6zUtBEfOU-HKRMshN3apJChyNYTutTjZEVUS8eyN7pmmBYzb0ExhxJ20FsLumIFHQ0H3wMBGvDwJh~Zv7ltb2PnTZE5oyR~H~G-oH1vaj0jINIc804dSXn0FT9fTtnGrIDVb0c5w-MRQ__"
                  alt="About Us"
                  className="rounded-lg shadow-md object-cover aspect-[9/10]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="space-y-1">
                  <h3 className="text-[24px] font-medium">About us</h3>
                  <div className="text-[16px]">
                    <p>
                      PickMePets Pets was founded in 2021 with a simple vision
                      in mind: to create a future where every home has a pet,
                      and every pet has a home. We observed that the world is
                      (finally) embracing pets and animals, and we want to
                      accelerate and enable that.
                    </p>
                    <p>
                      Yes, the journey to find a forever companion is often
                      fraught with uncertainty and misinformation, littered with
                      untrustworthy breeders and scammers. So, we decided to
                      bring clarity and trust into the equation, building a
                      website that connects you with ethical breeders you can
                      trust.This way, you can not only find the perfect furry
                      match, but also be confident your new family member came
                      from a safe, loving background.
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[24px] font-medium">Our Mission</h3>
                  <div className="text-[16px]">
                    <p>
                      Yes, the journey to find a forever companion is often
                      fraught with uncertainty and misinformation, littered with
                      untrustworthy breeders and scammers. So, we decided to
                      bring clarity and trust into the equation, building a
                      website that connects you with ethical breeders you can
                      trust.
                    </p>
                    <p>
                      This way, you can not only find the perfect furry match,
                      but also be confident your new family member came from a
                      safe, loving background.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start ">
              <div className="sm:order-first order-last">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a7c5/6dcb/5e9c0d4695b2a35882d228fd20812c57?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xo~P61AVj-zAKVPzzP42mVC1GrI4qRVU-4BML~71q~f62FVWtwKuLEmfNf5RSnyZKAnV-Qitfr0oTz0m1qLDcJjFHB-NnM3HNjr3EssVTLDhQy1Q2Zu-rvKAzRMTLrjZwzMFpMusoe2mTbXVm-LuhQaUl5XZl8apcUPmoPSuSlk1IVzNB0-7v~LdDi0jZIUGQdd1PJGKfc2Ngxw4XlEZdaL07FScTrSDhB-PJbaVigNYIDsHlKjQdVGVO3r3wydIw3AndRZVAhkgE0s9TI44bWzjq4mXx-C~0q9w453D8PEssA1umxkLoB9eLFSQuv-mf6vCHf~ka89AiXfPRx463g__"
                  alt="About Us"
                  className="rounded-lg shadow-md object-cover aspect-[9/10]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="space-y-1">
                  <h3 className="text-[24px] font-medium">
                    Thousand of Conection
                  </h3>
                  <div className="text-[16px]">
                    <p>
                      Today, we have grown significantly, placing thousands of
                      puppies in loving homes. Our customers come from varied
                      backgrounds and have diverse needs.
                    </p>
                    <p>
                      Whether you are a young couple looking for your first pet,
                      or a family wanting to bring home a kid-friendly puppy, or
                      a senior in search of a loyal companion, our team is here
                      to help you find and bring home the perfect match.
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[24px] font-medium">
                    The Utmost Standards and Integrity
                  </h3>
                  <div className="text-[16px]">
                    <p>
                      Every breeder in our network adheres to excellent health,
                      safety, and socialization practices. So you can be sure
                      that your puppy comes from a loving background, that his
                      or her parents have been ethically treated, and that you
                      are contributing to creating a caring world for animals.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-black text-white px-[20px] py-[10px] rounded-lg">
                    Browse Puppy
                  </button>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto">
              <p className="text-[28px] font-normal">
                Our mission statement, "Creating a future where every home has a
                pet, and every pet has a home" is not just a tagline. It is the
                vision that fuels our innovation and dedication, pushing us to
                consistently find new solutions for challenges that pets and
                their owners face."
              </p>
            </div>

            {/* Join Section */}
            <div className="bg-[#9EF6DE] p-6 rounded-[12px] text-center">
              <div className="mx-auto max-w-2xl space-y-4">
                <h3 className="text-[32px] font-medium">
                  Join PickMePets and tell your tail
                </h3>
                <p className="text-gray-700">
                  Join our community of pet lovers and responsible breeders. Be
                  part of the future-proof support network that ensures pets
                  find their forever homes.
                </p>
                <button onClick={()=>navigate("/contact-us")} className="mt-4 bg-black text-white px-[22px] py-[10px] rounded-lg">
                  Join PickMePets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
