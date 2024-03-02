import React, { useState } from "react";
import { useSearchResults } from "../utils/SearchResultsContext";
import { FaBed, FaToilet } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { getPropertyDetails } from "../utils/api";

const SearchResultsPage = () => {
  const { searchResults } = useSearchResults();
  const navigate = useNavigate();

  const handlePropertyClick = async (zpid) => {
    navigate(`/property/${zpid}`);
  };

  return (
    <div className="mx-auto container bg-slate-800">
      <Navbar />
      <h2 className="font-primary font-bold m-4 text-white">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        {searchResults.map((property) => (
          <div
            key={property.zpid}
            className="bg-white rounded-lg  shadow-md cursor-pointer"
            onClick={() => handlePropertyClick(property.zpid)}
          >
            <img
              src={property.imgSrc}
              alt="Property"
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {property.addressStreet}
              </h3>
              <p className="text-gray-500">
                {property.addressCity}, {property.country}{" "}
                {property.addressZipcode}
              </p>
              <p>{property.zpid}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-700 mt-2">{property.price}</p>
                <div className="flex space-x-2">
                  <div className="flex space-x-2 items-center">
                    <FaBed />
                    <p>{property.beds}</p>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <FaToilet />
                    <p>{property.baths}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
