import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import aboutbg from "../../assets/health-protection.jpeg";

const HealthGurantee = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 sm:py-[72px] py-[50px] font-satoshi">
        <div className="sm:space-y-20 space-y-6">
          <div className="relative text-center">
            <img
              src={aboutbg}
              alt="Background"
              className="w-full h-[290px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="mx-auto sm:max-w-5xl max-w-xs space-y-2.5">
                <h2 className="sm:text-[32px] text-2xl font-semibold text-white">
                  Guide to Proper Health Testing for Dogs
                </h2>
                <p className="text-gray-200 sm:text-base text-xs">
                  Get in touch with a member of our team and and let us know how
                  we can help.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl space-y-4 sm:px-0 px-4">
            <p className="text-[18px]">
              Good Dog uses three levels of recognition to distinguish breeding
              programs based on the number of recommended health tests
              performed. Programs are recognized as having Good, Great, or
              Excellent health testing practices.
            </p>
            <p className="text-[18px]">
              We want to emphasize that this guide is just the beginning of our
              work toward improving canine health and well-being. We consider
              this to be a “living document” subject to change as scientific
              advances are made, new heritable diseases and their causative
              mutations are identified, new or improved screening tests become
              available, and as we continue to receive feedback from the breeder
              community. Our mission with these levels is directly linked to our
              overall mission, and it is to encourage, support and help all
              breeders on their journey from Good to Great to Excellent.
            </p>
          </div>

          <div className="mx-auto max-w-5xl sm:space-y-20 space-y-6 sm:px-0 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start ">
              <div className="">
                <img
                  src="https://s3-alpha-sig.figma.com/img/57ba/3519/778ceba010c14b3d0b8eb6e19f21ca66?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KpW03-rC5Fu2ghuNy-ozA3ANlPH6sZpW48JIyVQmP-gsRKLbecaiU1vvnBRfbB5jM4lp4Xh9rKcx63swqhDHqybKsoezdvzUnfkPMebzlE3yO1tokKfytAESLV5fAPxGT8ErTGReBfEwpuPSJyQiTwAwkWRzAEUF3RKdW8p55eYhhj-sesQ7FAum9bF4kgRkAL-8MkkfeqE98hJk62f8IqpiwiONTS0ZJR~ncB~uNjuYDCw4zDGwQ9MDumcFinDFWDaMoJTeCjYBGufIMykZ-qH7IsE2NImHcEqpLHFZeX6XpqUbD2qQRDq6KlH0WNap4-UGr80nujDqr3DkPQ1UXw__"
                  alt="About Us"
                  className="rounded-lg shadow-md object-cover aspect-[9/10]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="space-y-1">
                  <h3 className="text-[24px] font-medium">
                    What is health testing
                  </h3>
                  <div className="text-[16px] space-y-2">
                    <p>
                      As discussed in our Community Standards, one of the key
                      areas we evaluate when screening breeding programs is
                      their care for the physical health of their breeding dogs
                      and puppies. One critical element of physical health is
                      prevention of heritable diseases or conditions, meaning
                      those that are inherited or passed down from one
                      generation to the next. 
                    </p>
                    <p>
                      There are certain health tests that can be performed on
                      breeding dogs to identify the presence of, or risk of
                      developing, heritable diseases or conditions. For each
                      breed, there are recommended health tests based on the
                      diseases or conditions common in that breed. By performing
                      the recommended health tests on their breeding dogs,
                      responsible breeders can take steps to decrease the
                      likelihood of producing puppies with heritable
                      conditions. 
                    </p>
                    <p>
                      Comprehensive health testing programs will often
                      incorporate both genetic and phenotypic screening tests.
                      The number and type of tests recommended will vary by
                      breed due to the overall number of hereditary conditions
                      that have been identified. A discussion of common health
                      conditions and recommended tests to screen for them can be
                      found on the search results pages of each breed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl sm:space-y-6 space-y-3">
              <h2 className="text-[24px] font-medium">
                What is health testing
              </h2>
              <p className="text-[16px]">
                Research into canine health testing is continuing to add
                powerful new insights into how to breed healthier dogs. Our
                understanding of canine veterinary medicine, preventative care,
                and genetics are changing and evolving as advancements in
                scientific research are made. The reliability of tests, the
                methods used to test dogs, as well as the best way to implement
                the results within a breeding program are always improving. New
                diseases and conditions are being discovered each year and new
                tests developed to screen for them. 
              </p>
              <p className="text-[16px]">
                Many outstanding questions regarding things such as incidence
                rates and prevalence of diseases, both within individual breeds
                as well as the dog population as a whole, remain. However, there
                are health tests known to decrease the likelihood of producing
                puppies with heritable conditions, based on current scientific
                evidence. This means that, by utilizing recommended health
                testing in breeding programs, we can improve the health of a
                litter of puppies as well as generations of dogs to come.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start ">
              <div className="sm:order-last">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a7c5/6dcb/5e9c0d4695b2a35882d228fd20812c57?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xo~P61AVj-zAKVPzzP42mVC1GrI4qRVU-4BML~71q~f62FVWtwKuLEmfNf5RSnyZKAnV-Qitfr0oTz0m1qLDcJjFHB-NnM3HNjr3EssVTLDhQy1Q2Zu-rvKAzRMTLrjZwzMFpMusoe2mTbXVm-LuhQaUl5XZl8apcUPmoPSuSlk1IVzNB0-7v~LdDi0jZIUGQdd1PJGKfc2Ngxw4XlEZdaL07FScTrSDhB-PJbaVigNYIDsHlKjQdVGVO3r3wydIw3AndRZVAhkgE0s9TI44bWzjq4mXx-C~0q9w453D8PEssA1umxkLoB9eLFSQuv-mf6vCHf~ka89AiXfPRx463g__"
                  alt="About Us"
                  className="rounded-lg shadow-md object-cover aspect-[9/10]"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="sm:space-y-1 space-y-1.5">
                  <h3 className="text-[24px] font-medium">
                    What is Good Dog’s approach to health testing?
                  </h3>
                  <div className="text-[16px]">
                    <p>
                      Good Dog has developed a three level system to distinguish
                      breeding programs based on their health testing practices
                      in our Guide to Health Testing Levels. In addition, we
                      award health testing recognition at the individual
                      breeding dog level (i.e., sires and dams) for breeding
                      dogs who meet the criteria outlined below by providing
                      verifiable health testing information. T
                    </p>
                  </div>
                </div>
                <div className="bg-[#0000000A] p-[20px] rounded-lg space-y-3">
                  <div>
                    <span className="font-bold">Good: </span>
                    <span className="text-gray-700 mb-4">
                      programs that meet our entry-level health testing
                      requirements for their breed are identified as “Good”
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">Great: </span>
                    <span className="text-gray-700 mb-4">
                      programs that exceed our health testing requirements for
                      their breed are identified as “Great”
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">Excellent: </span>
                    <span className="text-gray-700">
                      programs that significantly exceed our health testing
                      requirements for their breed are identified as “Excellent”
                    </span>
                  </div>
                </div>
              </div>
            </div>

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
                <button className="mt-4 bg-black text-white px-[22px] py-[10px] rounded-lg">
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

export default HealthGurantee;
