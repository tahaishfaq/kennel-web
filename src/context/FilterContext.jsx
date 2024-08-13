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
  const [puppies, setPuppies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("")
  // Function to apply filters and fetch data

  const applyFilters = () => {
    const filters = [];

    if (selectedGender) {
      filters.push(["gender", "=", selectedGender]);
    }
    if (selectedBreed) {
      filters.push(["breed", "=", selectedBreed]);
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

    const filterQuery =
      filters.length > 0
        ? `?filters=${encodeURIComponent(JSON.stringify(filters))}`
        : "";

    setQuery(filterQuery)    
    
  };

 

  // Fetch data initially
  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(`${window.$BackEndURL}/api/method/get-pups${query}`)
        .then((res) => {
          setPuppies(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch (error) {}
  }, [query]);

  // Function to clear filters
  const clearFilters = () => {
    setSelectedGender("");
    setSelectedBreed("");
    setColor("");
    setSelectedSize("");
    setGoHomeDate("");
    setQuery("")
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
        puppies,
        loading,
        applyFilters,
        clearFilters,
        setQuery
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};