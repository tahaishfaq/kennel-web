import React, { useRef } from "react";
import Slider from "react-slick";

const PuppyDetailCarousel = ({ puppyDetail }) => {
  const sliderRef = useRef(null);

  // Only proceed with slider if there are multiple media items
  const hasMultipleMedia =
    puppyDetail?.images?.length > 1 ||
    (puppyDetail?.images?.length > 0 && puppyDetail?.puppy_video);

  const settings = {
    dots: true,
    infinite: hasMultipleMedia,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  // Count total media items (video + images)
  const totalMediaItems =
    (puppyDetail?.puppy_video ? 1 : 0) + (puppyDetail?.images?.length || 0);

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full">
        {/* Only use slider if there are multiple media items */}
        {hasMultipleMedia ? (
          <Slider {...settings} ref={sliderRef} className="rounded-lg">
            {puppyDetail?.puppy_video && (
              <div className="aspect-[16/9] rounded-lg bg-[#E8E7E5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="rounded-lg w-full h-full object-contain bg-gray-200"
                >
                  <source
                    src={`${window.$BackEndURL}${puppyDetail.puppy_video}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {puppyDetail?.images?.map((image, index) => (
              <div
                key={index}
                className="aspect-[16/9] rounded-lg bg-[#E8E7E5]"
              >
                <img
                  src={`${window.$BackEndURL}${image.image}`}
                  alt={`Puppy ${index + 1}`}
                  className="rounded-lg w-full h-full object-contain bg-gray-200"
                />
              </div>
            ))}
          </Slider>
        ) : (
          // If only one media item, display it directly without the slider
          <>
            {puppyDetail?.puppy_video ? (
              <div className="aspect-[16/9] rounded-lg bg-[#E8E7E5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="rounded-lg w-full h-full object-contain bg-gray-200"
                >
                  <source
                    src={`${window.$BackEndURL}${puppyDetail.puppy_video}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : puppyDetail?.images?.[0] ? (
              <div className="aspect-[16/9] rounded-lg bg-[#E8E7E5]">
                <img
                  src={`${window.$BackEndURL}${puppyDetail.images[0].image}`}
                  alt="Puppy"
                  className="rounded-lg w-full h-full object-contain bg-gray-200"
                />
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* Only show thumbnails if there are multiple media items */}
      {hasMultipleMedia && (
        <div className="w-full flex gap-2.5">
          {puppyDetail?.images?.map((image, index) => (
            <div
              key={index}
              className="sm:w-[120px] w-[80px] sm:h-[80px] h-[50px] rounded-lg cursor-pointer"
              onClick={() =>
                sliderRef.current?.slickGoTo(
                  index + (puppyDetail?.puppy_video ? 1 : 0)
                )
              }
            >
              <img
                src={`${window.$BackEndURL}${image.image}`}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-lg w-full h-full object-contain bg-gray-200 hover:opacity-80 "
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PuppyDetailCarousel;
