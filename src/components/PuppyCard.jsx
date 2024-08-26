import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";

const PuppyCard = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/puppy/${data?.name}`);
  };

  return (
    <div
      className="bg-white p-2 border border-gray-200 rounded-md lg:max-w-[397px] w-full cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={handleCardClick}
    >
      <div>
        <img
          src={
            data?.profile_picture
              ? window.$BackEndURL + data?.profile_picture
              : "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="puppy"
          className="rounded-md h-[283px] w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-1.5 py-2 px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl capitalize">
            {data?.puppy_name + " | "}
            {data?.gender === "Male" ? "Boy" : "Girl"}
          </h2>
          <p className="font-medium">{"$" + data?.price}</p>
        </div>
        <div>
          <span className="text-[#000000A3] text-sm">
            {data?.size + " - "}
            {data?.litter_breed != null ? data?.litter_breed : "Goldendoodle"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
            {data?.weight + " " + data?.weight_unit}
          </span>
          <div className="flex items-center gap-x-1.5">
            <span>
              <FaRegCircle className="w-3 h-3" />
            </span>
            <span className="text-sm ">{data?.ready_to_go_home}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-x-2">
            <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
              {data?.coat_color ? data?.coat_color : "-"}
            </span>
            <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
              Learn More
            </span>
            <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
              Video Chat
            </span>
          </div>
          <RiShareLine />
        </div>
      </div>
    </div>
  );
};

export default PuppyCard;

// import moment from "moment";
// import React from "react";
// import { FaRegCircle } from "react-icons/fa";
// import { RiShareLine } from "react-icons/ri";

// const PuppyCard = ({ data }) => {
//   return (
//     <div className="bg-white p-2 border border-gray-200 rounded-md lg:max-w-[397px] w-full">
//       <div className="">
//         <img
//           src={
//             data?.profile_picture
//               ? window.$BackEndURL + data?.profile_picture
//               : "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           }
//           alt="puppy"
//           className="rounded-md h-[283px] w-full object-cover object-center"
//         />
//       </div>
//       <div className="flex flex-col gap-y-1.5 py-2 px-2">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl capitalize">
//             {data?.puppy_name + " | "}
//             {data?.gender === "Male" ? "Boy" : "Girl"}
//           </h2>
//           <p className="font-medium">{"$" + data?.price}</p>
//         </div>
//         <div>
//           <span className="text-[#000000A3] text-sm">{data?.size + " - "}{data?.litter_breed != null ? data?.litter_breed : "Goldendoodle"}</span>
//         </div>
//         <div className="flex items-center justify-between">
//           <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
//             {data?.weight + " " + data?.weight_unit}
//           </span>
//           <div className="flex items-center gap-x-1.5">
//             <span>
//               <FaRegCircle className="w-3 h-3" />
//             </span>
//             <span className="text-sm ">{data?.ready_to_go_home}</span>
//           </div>
//         </div>
//         <div className="flex items-center justify-between pt-2">
//           <div className="flex items-center gap-x-2">
//             <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
//               {data?.coat_color ? data?.coat_color : "-"}
//             </span>
//             <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
//               Learn More
//             </span>
//             <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
//               Video Chat
//             </span>
//           </div>
//           <RiShareLine />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PuppyCard;
