import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyDetails } from "../utils/api";
import { usePropertyDetails } from "../utils/PropertyDetailsContext";
import { FaArrowRight, FaArrowLeft, FaHouseUser } from "react-icons/fa";
import Navbar from "./Navbar";
import { GiFamilyHouse } from "react-icons/gi";
import { TbBuildingEstate, TbRulerMeasure, TbHammer } from "react-icons/tb";
import { SiZillow } from "react-icons/si";

const PropertyDetailsPage = () => {
  const { zpid } = useParams(); // Get the zpid from URL params
  const { propertyDetails, setPropertyDetails } = usePropertyDetails(); // Access property details from context
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        if (!propertyDetails) {
          // Check if details have not been fetched already
          const details = await getPropertyDetails(zpid);
          console.log(details);
          setPropertyDetails(details); // Update property details state in context
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchPropertyDetails(); // Call the function to fetch property details
  }, [zpid, propertyDetails, setPropertyDetails]);

  // Render loading state while fetching property details or if no details available
  if (!propertyDetails) {
    return <div>Loading...</div>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? propertyDetails.propertyDetails.originalPhotos.length - 1
        : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === propertyDetails.propertyDetails.originalPhotos.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto container flex items-center flex-col bg-slate-800 h-[100svh] w-[100vw]">
      <Navbar />
      {/* Render current photo */}
      <div className="relative w-full flex items-center justify-center p-2 m-2">
        <img
          src={
            propertyDetails.propertyDetails.originalPhotos[currentImageIndex]
              .mixedSources.jpeg[0].url
          }
          alt={`Photo ${currentImageIndex}`}
          className="object-cover border-white border-2 shadow-md shadow-white/30"
        />
        {/* Render navigation arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full *:text-2xl">
          <button
            onClick={handlePrevImage}
            className="focus:outline-none text-white ml-4"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="focus:outline-none text-white mr-4"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-fit p-4 border-b-2 border-b-gray-400">
        <div className="flex justify-between">
          {/* Top Left */}
          <div>
            <h2 className="text-4xl font-primary font-bold text-black">
              ${propertyDetails.propertyDetails.price}
            </h2>

            <p className="font-primary text-2xl">
              {propertyDetails.propertyDetails.address.streetAddress},{" "}
              {propertyDetails.propertyDetails.address.city},{" "}
              {propertyDetails.propertyDetails.address.state}{" "}
              {propertyDetails.propertyDetails.address.zipcode}
            </p>

            <p className="bg-blue-400/50 w-fit p-2 rounded-md font-primary">
              Days on Zillow: {propertyDetails.propertyDetails.daysOnZillow}
              {" | "}
              {propertyDetails.propertyDetails.pageViewCount} Views{" | "}
              {propertyDetails.propertyDetails.favoriteCount} Saves {" | "}{" "}
              Posted on {propertyDetails.propertyDetails.datePostedString}
            </p>
            <p></p>
          </div>
          {/* Top Right */}
          <div className="text-center flex space-x-4 *:bg-blue-400/50 *:h-fit *:p-4 *:font-primary *:rounded-md">
            <p>
              <span className="font-bold text-2xl">
                {propertyDetails.propertyDetails.bedrooms}
              </span>{" "}
              <br /> beds
            </p>
            <p>
              <span className="font-bold text-2xl">
                {propertyDetails.propertyDetails.bathrooms}
              </span>{" "}
              <br /> baths
            </p>
            <p>
              <span className="font-bold text-2xl">
                {propertyDetails.propertyDetails.livingArea}
              </span>
              <br /> {propertyDetails.propertyDetails.livingAreaUnitsShort}
            </p>
          </div>
        </div>
        <div className="">
          {/* Bottom Container */}
          <div className="grid grid-cols-2 mt-6 *:mb-4 *:w-[320px] w-[60vw]">
            {/* Bottom Left */}
            <div className="flex items-center bg-blue-300/50 w-fit p-4 rounded-md space-x-2 text-xl text-center">
              <GiFamilyHouse className="text-2xl" />
              <p className="font-primary">
                {propertyDetails.propertyDetails.propertyTypeDimension}{" "}
                Residence
              </p>
            </div>
            <div className="flex items-center bg-blue-300/50 w-fit p-4 rounded-md space-x-2 text-2xl text-center">
              <TbBuildingEstate />
              <p className="font-primary">
                {propertyDetails.propertyDetails.lotSize} sqft lot
              </p>
            </div>
            <div className="flex items-center bg-blue-300/50 w-fit p-4 rounded-md space-x-2 text-2xl text-center">
              <TbRulerMeasure />
              <p className="font-primary">
                ${propertyDetails.propertyDetails.resoFacts.pricePerSquareFoot}
                /sqft
              </p>
            </div>
            {/* Bottom Right */}
            <div className="flex items-center bg-blue-300/50 w-fit p-4 rounded-md space-x-2 text-2xl text-center">
              <TbHammer />
              <p className="font-primary">
                Built in {propertyDetails.propertyDetails.resoFacts.yearBuilt}
              </p>
            </div>
            <div className="flex items-center bg-blue-300/50 w-fit p-4 rounded-md space-x-2 text-2xl text-center">
              <SiZillow />
              <p className="font-primary">
                ${propertyDetails.propertyDetails.zestimate} Zestimate
              </p>
            </div>
            <div className="flex items-center bg-blue-300/50 w-fit p-4 rounded-md space-x-2 text-2xl text-center">
              <FaHouseUser />
              <p className="font-primary">
                ${propertyDetails.propertyDetails.monthlyHoaFee}/month HOA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-full w-full p-4">
        <h2 className="font-primary font-bold text-4xl">What's special</h2>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
