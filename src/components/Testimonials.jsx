import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";

const testimonials = [
  {
    name: "Susan D.",
    location: "Cheyenne, WY",
    review:
      "Very patient with me and various online transactions. And as for the new member of our family, she is a delight.",
    profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
    pet: "Winter Chihuahua puppy",
  },
  {
    name: "Erin M.",
    location: "Jacksonville, FL",
    review:
      "We absolutely love our new pup! The process was easy, and she is an absolute angel with a clean bill of health. Thank you Pawrade.",
    profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
    pet: "Winter Chihuahua puppy",
  },
  {
    name: "Alex J.",
    location: "Los Angeles, CA",
    review: "Best decision ever! Smooth process and amazing customer support.",
    profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
    pet: "Golden Retriever",
  },
  {
    name: "Jessica R.",
    location: "New York, NY",
    review:
      "Wonderful experience! Everything went smoothly and I’m so happy with my puppy.",
    profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
    pet: "French Bulldog",
  },
  {
    name: "Michael T.",
    location: "Austin, TX",
    review:
      "Our family loves our new dog! Highly recommend for anyone looking for a pet.",
    profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
    pet: "Labrador Retriever",
  },
];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl py-10 font-satoshi sm:px-0 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-[28px] font-medium text-[#2E2E2E]">
          Users Testimonials
        </h2>
        <p className="text-[#000000CC] text-[16px]">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="sm:py-12 pt-6 pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex h-auto">
            <div className="bg-white rounded-[12px] border p-7 flex flex-col items-start space-y-2.5 flex-1 testimonial-shadow">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <MdOutlineStar key={i} className="text-[#FBB040]" size={18} />
                ))}
              </div>
              <p className="text-[20px] flex-1">{testimonial.review}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.profileImg}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">
                    {testimonial.name} -{" "}
                    <span className="">{testimonial.location}</span>
                  </p>
                  <p className="text-xs text-[#000000A3]">{testimonial.pet}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
