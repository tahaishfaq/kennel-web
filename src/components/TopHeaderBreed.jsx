import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopHeaderBreed() {
  const navigate = useNavigate();
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get(
          `${window.$BackEndURL}/api/resource/Breeds?fields=["*"]&filters=[["top_breed","=","1"]]`
        );
        console.log("Breed", response?.data?.data);
        setBreeds(response?.data?.data?.slice(0, 3));
      } catch (error) {
        console.log("Error fetching breeds:", error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:py-12 py-8 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Text & Button */}
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">
          Meet Our Top Breeds
        </h2>
        <p className="text-gray-600 mt-3">
          Discover the most loved and sought-after puppy breeds. Whether you're
          looking for a loyal companion or a playful new friend, we've got the
          perfect pup for you.
        </p>
        <button
          onClick={() => navigate("/collection")}
          className="mt-5 px-6 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
        >
          Browse All Puppies
        </button>
      </div>

      {/* Right Side - Breed Images */}
      <div className="flex justify-center sm:gap-8 gap-4">
        {breeds.map((breed, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={breed.breed_image}
              alt={breed.name}
              className="sm:w-[220px] sm:h-[220px] h-24 w-24 object-cover rounded-full shadow-md"
            />
            <p className="mt-3 sm:text-lg text-sm font-semibold">
              {breed.breed_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
