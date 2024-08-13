import React from "react";
import Image from '../assets/SeeAllFrame.png'
import { GrShareOption } from "react-icons/gr";

const Collection = () => {
  const dogs = [
    {
      id: 1,
      name: "Breed | Dog",
      imageUrl: Image,
      age: "2 years old",
      breed: "Golden Retriever",
      location: "California",
    },
    {
      id: 2,
      name: "Breed | Dog",
      imageUrl: Image,
      age: "3 years old",
      breed: "Labrador Retriever",
      location: "New York",
    },
    {
      id: 3,
      name: "Breed | Dog",
      imageUrl: Image,
      age: "4 years old",
      breed: "Beagle",
      location: "Texas",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Dogs</h1>
      <div className="flex flex-wrap justify-center">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className=" bg-gray-700 max-w-md rounded  shadow-lg m-2"
          >
            <img className="w-[397]  mt-2" src={dog.imageUrl} alt={dog.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{dog.name}</div>
              <p className="text-gray-700 text-base">{dog.age}</p>
              <p className="text-gray-700 text-base">{dog.breed}</p>
              <p className="text-gray-700 text-base">{dog.location}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Details
              </button>
              <button className=" text-black font-bold py-2 px-4 rounded flex items-center justify-center">
      <GrShareOption className="text-xl" />
    </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
