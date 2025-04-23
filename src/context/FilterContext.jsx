// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// // Create a context
// const FilterContext = createContext();

// // Custom hook to use the FilterContext
// export const useFilter = () => {
//   return useContext(FilterContext);
// };

// // Provider component
// export const FilterProvider = ({ children }) => {
//   const [selectedGender, setSelectedGender] = useState("");
//   const [selectedBreed, setSelectedBreed] = useState("");
//   const [color, setColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [goHomeDate, setGoHomeDate] = useState("");
//   const [puppies, setPuppies] = useState([]);
//   const [filteredPuppies, setFilteredPuppies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [query, setQuery] = useState(
//     `[["publishing_status", "=", "Approved"] , ["sync_to_website", "=", "1"]]`
//   );

//   // Function to apply filters and fetch data
//   const applyFilters = () => {
//     const filters = [];

//     if (selectedGender) {
//       filters.push(["gender", "=", selectedGender]);
//     }
//     if (selectedBreed) {
//       filters.push(["litter_breed_name", "=", selectedBreed]);
//     }
//     if (color) {
//       filters.push(["coat_color", "=", color]);
//     }
//     if (selectedSize) {
//       filters.push(["size", "=", selectedSize]);
//     }
//     if (goHomeDate) {
//       filters.push(["go_home_date", "=", goHomeDate]);
//     }

//     const publishFilter = [["publishing_status", "=", "Approved"], ["sync_to_website", "=", "1"]];

//     const combinedFilters =
//       filters.length > 0
//         ? publishFilter.concat(filters)
//         : query;

//     console.log(combinedFilters);
//     // Generate query
//     const filterQuery = `${encodeURIComponent(JSON.stringify(combinedFilters))}`;
//     setQuery(filterQuery);
//   };

//   // Function to filter puppies by puppy_name
//   const filterPuppiesBySearchQuery = (puppies, searchQuery) => {
//     if (!searchQuery.trim()) {
//       setFilteredPuppies(puppies); // If no query, show all puppies
//       return;
//     }
//     const lowercasedQuery = searchQuery.toLowerCase();
//     const filtered = puppies.filter((puppy) =>
//       puppy?.puppy_name?.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredPuppies(filtered);
//   };

//   // Fetch data initially
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${window.$BackEndURL}/api/method/get-pups?filters=${query}`)
//       .then((res) => {
//         const fetchedPuppies = res?.data?.data || [];
//         setPuppies(fetchedPuppies);
//         filterPuppiesBySearchQuery(fetchedPuppies, searchQuery);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, [query, searchQuery]);

//   // Function to clear filters
//   const clearFilters = () => {
//     setSelectedGender("");
//     setSelectedBreed("");
//     setColor("");
//     setSelectedSize("");
//     setGoHomeDate("");
//     applyFilters();
//   };

//   return (
//     <FilterContext.Provider
//       value={{
//         selectedGender,
//         setSelectedGender,
//         selectedBreed,
//         setSelectedBreed,
//         color,
//         setColor,
//         selectedSize,
//         setSelectedSize,
//         goHomeDate,
//         setGoHomeDate,
//         puppies: filteredPuppies,
//         loading,
//         applyFilters,
//         clearFilters,
//         setQuery,
//         searchQuery,
//         setSearchQuery,
//       }}
//     >
//       {children}
//     </FilterContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context
const FilterContext = createContext();

// Custom hook to use the FilterContext
export const useFilter = () => {
  return useContext(FilterContext);
};

// Provider component
export const FilterProvider = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [color, setColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [goHomeDate, setGoHomeDate] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [puppies, setPuppies] = useState([]);
  const [filteredPuppies, setFilteredPuppies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState(
    `[["publishing_status", "=", "Approved"] , ["sync_to_website", "=", "1"]]`
  );

  // Function to apply filters and fetch data
  const applyFilters = () => {
    const filters = [];

    if (selectedGender) {
      filters.push(["gender", "=", selectedGender]);
    }
    if (selectedBreed) {
      filters.push(["litter_breed_name", "=", selectedBreed]);
    }
    if (color) {
      filters.push(["coat_color", "=", color]);
    }
    if (selectedSize) {
      filters.push(["size", "=", selectedSize]);
    }
    if (goHomeDate) {
      filters.push(["go_home_date", "=", goHomeDate]);
    }
    if (priceRange.min) {
      filters.push(["price", ">=", parseFloat(priceRange.min)]);
    }
    if (priceRange.max) {
      filters.push(["price", "<=", parseFloat(priceRange.max)]);
    }

    const publishFilter = [
      ["publishing_status", "=", "Approved"],
      ["sync_to_website", "=", "1"],
    ];

    const combinedFilters =
      filters.length > 0 ? publishFilter.concat(filters) : publishFilter;

    console.log(combinedFilters);
    // Generate query
    const filterQuery = `${encodeURIComponent(JSON.stringify(combinedFilters))}`;
    setQuery(filterQuery);
  };

  // Function to filter puppies by puppy_name
  const filterPuppiesBySearchQuery = (puppies, searchQuery) => {
    if (!searchQuery.trim()) {
      setFilteredPuppies(puppies); // If no query, show all puppies
      return;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = puppies.filter((puppy) =>
      puppy?.puppy_name?.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPuppies(filtered);
  };

  // Fetch data initially
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${window.$BackEndURL}/api/method/get-pups?filters=${query}`)
      .then((res) => {
        const fetchedPuppies = res?.data?.data || [];
        setPuppies(fetchedPuppies);
        filterPuppiesBySearchQuery(fetchedPuppies, searchQuery);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [query, searchQuery]);

  // Function to clear filters
  const clearFilters = () => {
    setSelectedGender("");
    setSelectedBreed("");
    setColor("");
    setSelectedSize("");
    setGoHomeDate("");
    setPriceRange({ min: "", max: "" });
    applyFilters();
  };

  return (
    <FilterContext.Provider
      value={{
        selectedGender,
        setSelectedGender,
        selectedBreed,
        setSelectedBreed,
        color,
        setColor,
        selectedSize,
        setSelectedSize,
        goHomeDate,
        setGoHomeDate,
        priceRange,
        setPriceRange,
        puppies: filteredPuppies,
        loading,
        applyFilters,
        clearFilters,
        setQuery,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};