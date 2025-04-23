import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Dialog,
  Transition,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

const PuppyDetailCarousel = ({ puppyDetail }) => {
  const sliderRef = useRef(null);
  const gallerySliderRef = useRef(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    initialSlide: currentSlide,
  };

  // Prepare media items for display (video + images)
  const mediaItems = [];
  if (puppyDetail?.puppy_video) {
    mediaItems.push({
      type: "video",
      src: `${window.$BackEndURL}${puppyDetail.puppy_video}`,
    });
  }
  if (puppyDetail?.images?.length > 0) {
    mediaItems.push(
      ...puppyDetail.images.map((image, index) => ({
        type: "image",
        src: `${window.$BackEndURL}${image.image}`,
        id: index + 1, // Adding an ID for the TabGroup
        name: `Puppy Image ${index + 1}`,
        alt: `Puppy ${index + 1}`,
      }))
    );
  }

  // Fallback if no media items are available
  if (mediaItems.length === 0) {
    mediaItems.push({
      type: "image",
      src: "https://via.placeholder.com/150",
      id: 1,
      name: "Placeholder Image",
      alt: "Placeholder",
    });
  }

  // Count total media items (video + images)
  const totalMediaItems =
    (puppyDetail?.puppy_video ? 1 : 0) + (puppyDetail?.images?.length || 0);

  // Handle media click to open gallery at the clicked index
  const handleMediaClick = (index) => {
    setCurrentSlide(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="flex flex-col gap-1">
      {!isGalleryOpen && (
        <TabGroup className="grid grid-cols-6 gap-4">
          <div className="col-span-5">
            <TabPanels>
              {mediaItems.map((media, index) => (
                <TabPanel key={media.id || index}>
                  <div className="relative">
                    {media.type === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="aspect-[10/7] w-full object-contain sm:rounded-lg bg-gray-200"
                      >
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="aspect-[10/7] w-full object-contain sm:rounded-lg bg-gray-200"
                      />
                    )}
                    {/* "View all photos" Button */}
                    {totalMediaItems > 0 && (
                      <div className="absolute bottom-2 right-2">
                        <button
                          onClick={() => setIsGalleryOpen(true)}
                          className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-1 text-sm font-medium shadow hover:bg-gray-100 transition"
                        >
                          View all photos
                        </button>
                      </div>
                    )}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </div>
          <div className="col-span-1">
            <TabList className="grid grid-cols-1 gap-4">
              {mediaItems?.slice(0, 5)?.map((media, index) => (
                <Tab
                  key={media.id || index}
                  className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
                >
                  <span className="sr-only">
                    {media.name || `Media ${index + 1}`}
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    {media.type === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="size-full object-cover bg-gray-200"
                      >
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="size-full object-cover"
                      />
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                  />
                </Tab>
              ))}
            </TabList>
          </div>
        </TabGroup>
      )}

      {/* Full-Screen Gallery Pop-Up with Existing Carousel */}
      <Transition appear show={isGalleryOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsGalleryOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-95" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <button
                className="absolute top-4 right-4 text-white text-3xl z-10"
                onClick={() => setIsGalleryOpen(false)}
              >
                <IoMdClose className="w-6 h-6" />
              </button>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg flex flex-col gap-1">
                  <div className="w-full">
                    {hasMultipleMedia ? (
                      <Slider
                        {...settings}
                        ref={gallerySliderRef}
                        className="rounded-lg"
                      >
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

                  {/* Thumbnails Inside Pop-Up */}
                  {hasMultipleMedia && (
                    <div className="w-full flex gap-2.5 justify-center">
                      {puppyDetail?.images?.map((image, index) => (
                        <div
                          key={index}
                          className="sm:w-[120px] w-[80px] sm:h-[80px] h-[50px] rounded-lg cursor-pointer"
                          onClick={() =>
                            gallerySliderRef.current?.slickGoTo(
                              index + (puppyDetail?.puppy_video ? 1 : 0)
                            )
                          }
                        >
                          <img
                            src={`${window.$BackEndURL}${image.image}`}
                            alt={`Thumbnail ${index + 1}`}
                            className="rounded-lg w-full h-full object-contain bg-gray-200 hover:opacity-80"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PuppyDetailCarousel;
