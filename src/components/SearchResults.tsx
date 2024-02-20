import React from "react";
import { useSearchResults } from "../utils/SearchResultsContext";
import { FaBed, FaToilet } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const { searchResults } = useSearchResults();

  return (
    <div className="mx-auto container bg-slate-800">
      <Navbar />
      <h2 className="font-primary font-bold m-4 text-white">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        {searchResults.map((property) => (
          <Link to={`/property/${property.zpid}`} key={property.zpid}>
            <div key={property.zpid} className="bg-white rounded-lg  shadow-md">
              <img
                src={property.imgSrc}
                alt="Property"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {property.streetAddress}
                </h3>
                <p className="text-gray-500">
                  {property.city}, {property.country} {property.zipcode}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 mt-2">${property.price}</p>
                  <div className="flex space-x-2">
                    <div className="flex space-x-2 items-center">
                      <FaBed />
                      <p>{property.bedrooms}</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaToilet />
                      <p>{property.bathrooms}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
