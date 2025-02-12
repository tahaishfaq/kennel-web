import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";
import moment from "moment";

const PuppyCard = ({ data }) => {
  const navigate = useNavigate();
  console.log("puppy", data);

  const handleCardClick = () => {
    navigate(`/puppy/${data?.name}`);
  };

  function calculateGoHomeDate(weeks) {
    return moment().add(weeks, "weeks").format("ll");
  }

  const tags = [
    { icon: null, text: data?.litter?.litter_name },
    { icon: "collar", text: data?.size },
    { icon: "palette", text: data?.coat_color },
    { icon: "id", text: data?.gender },
    { icon: "dog", text: data?.litter_breed_name },
    { icon: "weight", text: data?.weight + " " + data?.weight_unit },
  ];

  const iconMapping = {
    collar: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.0012 9.3356V8.2414M8.0012 9.3356C6.8904 9.3356 5.77959 9.214 4.6688 8.971M8.0012 9.3356C9.11227 9.3356 10.2234 9.21413 11.3345 8.971M4.6688 8.971C3.81887 8.78507 2.96895 8.52787 2.11903 8.19967C1.77932 8.0684 1.60947 8.0028 1.49292 7.85253C1.29955 7.60327 1.33449 7.25607 1.33449 6.95913C1.33449 6.13715 1.33449 5.05869 1.53503 4.84406C1.91467 4.43774 2.63939 4.81174 3.06091 4.94848C6.35441 6.01686 9.64794 6.01686 12.9415 4.94848C13.3629 4.81174 14.0877 4.43774 14.4673 4.84406C14.6679 5.05869 14.6679 6.13715 14.6679 6.95913C14.6679 7.3714 14.6679 7.57753 14.5772 7.7478C14.4379 8.0094 14.1436 8.09913 13.8833 8.19967C13.0337 8.52773 12.1841 8.78507 11.3345 8.971M4.6688 8.971L4.66783 7.8766M11.3345 8.971V7.8766"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.6693 12.6719C9.55817 13.5627 6.44705 13.5627 3.33594 12.6719"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.7927 2C12.4081 2.87422 12.0546 4.37289 12.0546 5.05978M3.20899 2C3.59361 2.87422 3.94705 4.37289 3.94705 5.05978M3.59812 10.3418C3.30556 11.2623 2.53237 13.0825 2.6682 14.003M12.4082 10.3418C12.7008 11.2623 13.474 13.0825 13.3381 14.003"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    palette: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_5791_11537)">
          <path
            d="M14.6654 7.9987C14.6654 4.3168 11.6806 1.33203 7.9987 1.33203C4.3168 1.33203 1.33203 4.3168 1.33203 7.9987C1.33203 11.6806 4.3168 14.6654 7.9987 14.6654C8.55983 14.6654 9.33203 14.7429 9.33203 13.9987C9.33203 13.5927 9.12083 13.2795 8.9111 12.9683C8.60416 12.513 8.30023 12.0622 8.66536 11.332C9.10983 10.4432 9.85057 10.4432 10.9864 10.4432C11.5543 10.4432 12.221 10.4432 12.9987 10.332C14.3994 10.132 14.6654 9.27096 14.6654 7.9987Z"
            stroke="black"
          />
          <path
            d="M4.66797 10.0016L4.67376 10"
            stroke="black"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.33203 6.66797C6.88432 6.66797 7.33203 6.22025 7.33203 5.66797C7.33203 5.11568 6.88432 4.66797 6.33203 4.66797C5.77975 4.66797 5.33203 5.11568 5.33203 5.66797C5.33203 6.22025 5.77975 6.66797 6.33203 6.66797Z"
            stroke="black"
          />
          <path
            d="M11 7.33203C11.5523 7.33203 12 6.88432 12 6.33203C12 5.77975 11.5523 5.33203 11 5.33203C10.4477 5.33203 10 5.77975 10 6.33203C10 6.88432 10.4477 7.33203 11 7.33203Z"
            stroke="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_5791_11537">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    id: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33203 8C1.33203 5.17157 1.33203 3.75736 2.30834 2.87868C3.28465 2 4.856 2 7.9987 2C11.1414 2 12.7128 2 13.689 2.87868C14.6654 3.75736 14.6654 5.17157 14.6654 8C14.6654 10.8284 14.6654 12.2427 13.689 13.1213C12.7128 14 11.1414 14 7.9987 14C4.856 14 3.28465 14 2.30834 13.1213C1.33203 12.2427 1.33203 10.8284 1.33203 8Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.6 5.33203H5.06667C4.56383 5.33203 4.31242 5.33203 4.15621 5.48824C4 5.64445 4 5.89586 4 6.3987V6.93203C4 7.43483 4 7.6863 4.15621 7.8425C4.31242 7.9987 4.56383 7.9987 5.06667 7.9987H5.6C6.10283 7.9987 6.35425 7.9987 6.51046 7.8425C6.66667 7.6863 6.66667 7.43483 6.66667 6.93203V6.3987C6.66667 5.89587 6.66667 5.64445 6.51046 5.48824C6.35425 5.33203 6.10283 5.33203 5.6 5.33203Z"
          stroke="black"
          stroke-linejoin="round"
        />
        <path
          d="M4 10.668H6.66667"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33203 5.33203H11.9987"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33203 8H11.9987"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33203 10.668H11.9987"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    dog: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33203 3.33203H8.66536"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.6654 8C12.2207 11.5553 11.11 13.3333 9.33203 13.3333H6.66536C4.88736 13.3333 3.7767 11.5553 3.33203 8"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.33203 10.668C7.33203 11.1126 7.55403 11.3346 7.9987 11.3346C8.44336 11.3346 8.66536 11.1126 8.66536 10.668H7.33203Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 12V13.3333"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66797 7.33203V7.3387"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33203 7.33203V7.3387"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33301 2.66797L7.33301 3.31464L3.17435 7.7733C3.05753 7.90461 2.89444 7.98563 2.71924 7.99943C2.54403 8.01322 2.37028 7.95871 2.23435 7.8473C2.14216 7.77229 2.07286 7.67293 2.03433 7.5605C1.99579 7.44807 1.98956 7.32709 2.01635 7.2113L3.33301 2.66797Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.668 2.66797L8.66797 3.31464L12.8266 7.7733C13.0653 8.0453 13.486 8.07864 13.7666 7.8473C13.8588 7.77229 13.9281 7.67293 13.9667 7.5605C14.0052 7.44807 14.0114 7.32709 13.9846 7.2113L12.668 2.66797Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    weight: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6654 9.9987V12.5913C12.6654 14.0746 12.175 14.6654 10.5913 14.6654H5.4061C3.92281 14.6654 3.33203 14.175 3.33203 12.5913V9.9987C3.33203 7.42136 5.42137 5.33203 7.9987 5.33203C10.576 5.33203 12.6654 7.42136 12.6654 9.9987Z"
          stroke="black"
          stroke-linecap="round"
        />
        <path
          d="M10.6654 9.9987C10.6654 8.52596 9.47143 7.33203 7.9987 7.33203C6.52594 7.33203 5.33203 8.52596 5.33203 9.9987"
          stroke="black"
          stroke-linecap="round"
        />
        <path d="M8 11.3333L8.66667 10" stroke="black" stroke-linecap="round" />
        <path
          d="M10.8762 3.33203H5.12634C4.53728 3.33203 4.24274 3.33203 3.98358 3.23067C3.89749 3.197 3.81514 3.15536 3.73774 3.10635C3.50472 2.95882 3.34135 2.72726 3.0146 2.26413C2.75994 1.9032 2.63261 1.72272 2.6765 1.57516C2.6904 1.52848 2.7149 1.48521 2.7483 1.4484C2.8539 1.33203 3.08344 1.33203 3.54253 1.33203H12.4601C12.9192 1.33203 13.1487 1.33203 13.2543 1.4484C13.2877 1.48521 13.3122 1.52848 13.3261 1.57516C13.37 1.72272 13.2426 1.9032 12.988 2.26413C12.6612 2.72725 12.4979 2.95882 12.2648 3.10635C12.1874 3.15536 12.1051 3.197 12.019 3.23067C11.7598 3.33203 11.4653 3.33203 10.8762 3.33203Z"
          stroke="black"
          stroke-linecap="round"
        />
        <path
          d="M9.33464 5.33203V3.33203M6.66797 5.33203V3.33203"
          stroke="black"
          stroke-linecap="round"
        />
      </svg>
    ),
  };

  return (
    <div className="border border-[rgba(0,0,0,0.12)] p-[10px] h-full rounded-lg cursor-pointer puppy-card-shadow transition-shadow duration-200">
      <div className="relative">
        <img
          src={
            data?.profile_picture
              ? window.$BackEndURL + data?.profile_picture
              : "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          onClick={handleCardClick}
          alt="puppy"
          className="rounded-[4px] h-[206px] w-full object-cover object-center"
        />
        {/* <span className="absolute text-[12px] flex items-center gap-x-1 right-2 bottom-2 bg-white py-[6px] px-[4px] rounded-[4px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5815_26646)">
              <path
                d="M5.25 12.2487V8.7487C5.25 8.43928 5.37292 8.14253 5.59171 7.92374C5.8105 7.70495 6.10725 7.58203 6.41667 7.58203H7.58333C7.72742 7.58203 7.86567 7.60828 7.99283 7.65611"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.0833 7H12.25L7 1.75L1.75 7H2.91667V11.0833C2.91667 11.3928 3.03958 11.6895 3.25838 11.9083C3.47717 12.1271 3.77391 12.25 4.08333 12.25H7"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.33594 12.8346L12.2526 9.91797"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.25 12.543V9.91797H9.625"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_5815_26646">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {calculateGoHomeDate(data?.go_home_date_duration)}
        </span> */}
      </div>
      <div className="flex flex-col gap-y-[14px] py-2 px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1.5">
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9412 6.66896C12.9418 5.40399 12.593 4.16495 11.9355 3.09658C11.278 2.02821 10.339 1.17464 9.22807 0.635563C8.11718 0.0964884 6.88031 -0.105825 5.66196 0.0522574C4.44361 0.21034 3.29409 0.72229 2.34766 1.5283C1.40124 2.33432 0.69701 3.40111 0.317231 4.60406C-0.0625483 5.80702 -0.102192 7.09646 0.202933 8.32176C0.508057 9.54706 1.14535 10.6576 2.04036 11.5237C2.93538 12.3898 4.05115 12.9757 5.25735 13.2128V15.0009H4.04412C3.72235 15.0009 3.41376 15.1325 3.18623 15.3669C2.9587 15.6013 2.83088 15.9192 2.83088 16.2506C2.83088 16.5821 2.9587 16.9 3.18623 17.1344C3.41376 17.3688 3.72235 17.5004 4.04412 17.5004H5.25735V18.7502C5.25735 19.0817 5.38517 19.3996 5.6127 19.6339C5.84023 19.8683 6.14882 20 6.47059 20C6.79236 20 7.10095 19.8683 7.32847 19.6339C7.556 19.3996 7.68382 19.0817 7.68382 18.7502V17.5004H8.89706C9.21883 17.5004 9.52742 17.3688 9.75494 17.1344C9.98247 16.9 10.1103 16.5821 10.1103 16.2506C10.1103 15.9192 9.98247 15.6013 9.75494 15.3669C9.52742 15.1325 9.21883 15.0009 8.89706 15.0009H7.68382V13.2128C9.16146 12.9206 10.4943 12.1078 11.4536 10.9137C12.4129 9.71967 12.9388 8.21889 12.9412 6.66896ZM2.42647 6.66896C2.42647 5.84501 2.66365 5.03956 3.10803 4.35448C3.5524 3.66939 4.184 3.13543 4.92297 2.82012C5.66194 2.50481 6.47507 2.42231 7.25956 2.58305C8.04404 2.7438 8.76463 3.14056 9.33021 3.72318C9.89579 4.3058 10.281 5.0481 10.437 5.85622C10.593 6.66433 10.513 7.50197 10.2069 8.2632C9.90077 9.02442 9.38243 9.67506 8.71738 10.1328C8.05233 10.5906 7.27044 10.8349 6.47059 10.8349C5.39842 10.8336 4.37052 10.3942 3.61238 9.61327C2.85424 8.83229 2.42775 7.77343 2.42647 6.66896Z"
                fill="#EC49A7"
              />
            </svg>

            <span className="text-[18px] capitalize font-medium">
              {data?.puppy_name}
            </span>
            {/* {data?.gender === "Male" ? "Boy" : "Girl"} */}
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[12px] flex items-center gap-x-1 text-[#71C900]  bg-[#71C90014] py-[6px] px-[4px] rounded-[4px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6117_6965)">
                  <path
                    d="M5.25 12.2487V8.7487C5.25 8.43928 5.37292 8.14253 5.59171 7.92374C5.8105 7.70495 6.10725 7.58203 6.41667 7.58203H7.58333C7.72742 7.58203 7.86567 7.60828 7.99283 7.65611"
                    stroke="#71C900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.0833 7H12.25L7 1.75L1.75 7H2.91667V11.0833C2.91667 11.3928 3.03958 11.6895 3.25838 11.9083C3.47717 12.1271 3.77391 12.25 4.08333 12.25H7"
                    stroke="#71C900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.33594 12.8346L12.2526 9.91797"
                    stroke="#71C900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.25 12.543V9.91797H9.625"
                    stroke="#71C900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6117_6965">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {calculateGoHomeDate(data?.go_home_date_duration)}
            </span>
            {/* <p className="font-medium text-[18px] ">{"$" + data?.price}</p> */}
            {/* <span className="text-xs underline">Financing options available</span> */}
          </div>
        </div>
        {/* <div>
          <span className="text-[#000000A3] text-sm">
            {data?.size + " - "}
            {data?.litter_breed_name}
          </span>
        </div> */}
        {/* <div className="flex items-center justify-between">
          <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
            {data?.weight + " " + data?.weight_unit}
          </span>
          <div className="flex items-center gap-x-1.5">
            <span>
              <FaRegCircle className="w-3 h-3" />
            </span>
            <span className="text-sm ">{data?.ready_to_go_home}</span>
          </div>
        </div> */}
        {/* <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-x-2">
            <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
              {data?.coat_color ? data?.coat_color : "-"}
            </span>
            <span className="bg-black text-white px-3 py-1 text-xs rounded-md">
              Learn More
            </span>
            <span className="bg-black text-white px-3 py-1 text-xs rounded-md">
              Video Chat
            </span>
          </div>
          <RiShareLine />
        </div> */}

        <div className="flex flex-wrap gap-[6px]">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-[8px] py-1 bg-[#0000000A] rounded-lg shadow-sm"
            >
              {tag.icon && iconMapping[tag.icon]}
              <span className="text-[#000000CC] capitalize text-[10px] font-medium">
                {tag.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PuppyCard;
