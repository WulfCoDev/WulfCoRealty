import { useEffect, useState } from "react";
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
    return (
      <div className="h-screen w-screen text-2xl text-white animate-bounce flex justify-center items-center">
        Loading...
      </div>
    );
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
    <div className="mx-auto container flex items-center flex-col bg-slate-800 h-fit w-[100vw]">
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
      <div className="bg-slate-800 w-full h-fit p-4">
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
      <div className="bg-slate-800 h-full w-full p-4 flex  flex-col">
        <h2 className="font-primary font-bold text-4xl mb-4 text-white">
          What's special
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          {propertyDetails.propertyDetails.homeInsights[0]?.insights[0].phrases.map(
            (phrase: string, index: number | string) => (
              <div
                key={index}
                className="bg-blue-400 w-fit p-2 m-2 rounded-md font-primary text-xl text-white"
              >
                {phrase}
              </div>
            )
          )}
        </div>
        <div className=" flex justify-center items-center m-4 border-b-white border-b-2 p-2">
          <p className="font-primary text-white">
            <span className="font-bold font-secondary">Description:</span>{" "}
            {propertyDetails.propertyDetails.description}
          </p>
        </div>
        {/* Facts Features Container */}
        <div>
          <h3 className="font-primary font-bold text-4xl mb-4 text-white">
            Facts & Features
          </h3>
          <h4 className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            Interior
          </h4>
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/*left Side */}
            <div className="flex flex-col space-y-4">
              <div className="">
                <p className="font-bold text-white font-secondary text-xl">
                  Bedrooms & Bathrooms
                </p>
                <ul>
                  <li className=" text-white font-secondary text-lg">
                    Bedrooms: {propertyDetails.propertyDetails.bedrooms}
                  </li>
                  <li className=" text-white font-secondary text-lg">
                    Bathrooms: {propertyDetails.propertyDetails.bathrooms}
                  </li>
                  {propertyDetails.propertyDetails.resoFacts.bathroomsFull !==
                    null &&
                    propertyDetails.propertyDetails.resoFacts.bathroomsFull !==
                      0 && (
                      <li className="text-white font-secondary text-lg">
                        Full Bathrooms:{" "}
                        {
                          propertyDetails.propertyDetails.resoFacts
                            .bathroomsFull
                        }
                      </li>
                    )}
                  {propertyDetails.propertyDetails.resoFacts
                    .bathroomsThreeQuarter !== null &&
                    propertyDetails.propertyDetails.resoFacts
                      .bathroomsThreeQuarter !== 0 && (
                      <li className="text-white font-secondary text-lg">
                        3/4 Bathrooms:{" "}
                        {
                          propertyDetails.propertyDetails.resoFacts
                            .bathroomsThreeQuarter
                        }
                      </li>
                    )}

                  {propertyDetails.propertyDetails.resoFacts.bathroomsHalf !==
                    null &&
                    propertyDetails.propertyDetails.resoFacts.bathroomsHalf !==
                      0 && (
                      <li className="text-white font-secondary text-lg">
                        Half Bathrooms:{" "}
                        {
                          propertyDetails.propertyDetails.resoFacts
                            .bathroomsHalf
                        }
                      </li>
                    )}
                  {propertyDetails.propertyDetails.resoFacts
                    .bathroomsOneQuarter !== null &&
                    propertyDetails.propertyDetails.resoFacts
                      .bathroomsOneQuarter !== 0 && (
                      <li className="text-white font-secondary text-lg">
                        Quarter Bathrooms:{" "}
                        {
                          propertyDetails.propertyDetails.resoFacts
                            .bathroomsOneQuarter
                        }
                      </li>
                    )}
                  {propertyDetails.propertyDetails.resoFacts
                    .mainLevelBedrooms !== null &&
                    propertyDetails.propertyDetails.resoFacts
                      .mainLevelBedrooms !== 0 && (
                      <li className="text-white font-secondary text-lg">
                        Main level bedrooms:{" "}
                        {
                          propertyDetails.propertyDetails.resoFacts
                            .mainLevelBedrooms
                        }
                      </li>
                    )}
                  {propertyDetails.propertyDetails.resoFacts
                    .mainLevelBathrooms !== null &&
                    propertyDetails.propertyDetails.resoFacts
                      .mainLevelBathrooms !== 0 && (
                      <li className="text-white font-secondary text-lg">
                        Main level bathrooms:{" "}
                        {
                          propertyDetails.propertyDetails.resoFacts
                            .mainLevelBathrooms
                        }
                      </li>
                    )}
                </ul>
              </div>
              {propertyDetails.propertyDetails.resoFacts.flooring !== null && (
                <div>
                  <p className="font-bold text-white font-secondary text-xl">
                    Flooring
                  </p>
                  <ul>
                    {propertyDetails.propertyDetails.resoFacts.flooring !==
                      null && (
                      <li className="text-white font-secondary text-lg">
                        Heating:{" "}
                        {propertyDetails.propertyDetails.resoFacts.flooring}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Heating
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.heating !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Heating:{" "}
                      {propertyDetails.propertyDetails.resoFacts.heating}
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Cooling
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.cooling !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Cooling features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.cooling.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Appliances
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.laundryFeatures !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Laundry features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.laundryFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Interior Features
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts
                    .interiorFeatures !== null && (
                    <li className="text-white font-secondary text-lg">
                      Interior features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.interiorFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Other Interior Features
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.commonWalls !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Common walls with other units/homes:{" "}
                      {propertyDetails.propertyDetails.resoFacts.commonWalls}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.livingArea !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Total interior living space:{" "}
                      {propertyDetails.propertyDetails.resoFacts.livingArea}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .fireplaceFeatures !== null && (
                    <li className="text-white font-secondary text-lg">
                      Fireplace features:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .fireplaceFeatures
                      }
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.heating !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Virtual tour:{" "}
                      <a
                        className="hover:text-blue-300 cursor-pointer"
                        href={propertyDetails.propertyDetails.virtualTourUrl}
                        target="_blank"
                      >
                        View virtual tour
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <h5 className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            Property
          </h5>
          {/* Property Container */}
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/* Left Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Parking
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.parkingCapacity !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Total spaces:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .parkingCapacity
                      }
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.parkingFeatures !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Parking features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.parkingFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .garageParkingCapacity !== null && (
                    <li className="text-white font-secondary text-lg">
                      Garage spaces:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .garageParkingCapacity
                      }
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .coveredParkingCapacity !== null && (
                    <li className="text-white font-secondary text-lg">
                      Covered spaces:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .coveredParkingCapacity
                      }
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Property
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.levels !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Levels: {propertyDetails.propertyDetails.resoFacts.levels}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.stories !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Stories:{" "}
                      {propertyDetails.propertyDetails.resoFacts.stories}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.entryLocation !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Entry location:{" "}
                      {propertyDetails.propertyDetails.resoFacts.entryLocation}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.poolFeatures !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Pool features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.poolFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.spaFeatures !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Spa features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.spaFeatures}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .patioAndPorchFeatures !== null && (
                    <li className="text-white font-secondary text-lg">
                      Patio & porch details:{" "}
                      {propertyDetails.propertyDetails.resoFacts.patioAndPorchFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.fencing !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Fencing:{" "}
                      {propertyDetails.propertyDetails.resoFacts.fencing}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.view !== null && (
                    <li className="text-white font-secondary text-lg">
                      View description:{" "}
                      {propertyDetails.propertyDetails.resoFacts.view.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Lot
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.lotSize !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Lot size:{" "}
                      {propertyDetails.propertyDetails.resoFacts.lotSize}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.lotFeatures !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Lot features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.lotFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Other property information
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.parcelNumber !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Parcel number:{" "}
                      {propertyDetails.propertyDetails.resoFacts.parcelNumber}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .specialListingConditions !== null && (
                    <li className="text-white font-secondary text-lg">
                      Special conditions:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .specialListingConditions
                      }
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <h6 className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            Construction
          </h6>
          {/* Property Container */}
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/* Left Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Type & Style
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.homeType !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Home type:{" "}
                      {propertyDetails.propertyDetails.resoFacts.homeType}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.propertySubType !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Property subType:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .propertySubType
                      }
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Condition
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts
                    .propertyCondition !== null && (
                    <li className="text-white font-secondary text-lg">
                      Property condition:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .propertyCondition
                      }
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .isNewConstruction !== null && (
                    <li className="text-white font-secondary text-lg">
                      New construction:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .isNewConstruction
                      }
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.yearBuilt !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Year built:{" "}
                      {propertyDetails.propertyDetails.resoFacts.yearBuilt}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <p className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            Utilities & Green Energy
          </p>
          {/* Property Container */}
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/* Left Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Utility
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.sewer !== null && (
                    <li className="text-white font-secondary text-lg">
                      Sewer information:{" "}
                      {propertyDetails.propertyDetails.resoFacts.sewer}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.waterSource !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Water information:{" "}
                      {propertyDetails.propertyDetails.resoFacts.waterSource}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="flex flex-col space-y-4"></div>
          </div>
          {/* Property Title */}
          <p className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            Community & Neighborhood
          </p>
          {/* Property Container */}
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/* Left Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Community
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts
                    .communityFeatures !== null && (
                    <li className="text-white font-secondary text-lg">
                      Community features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.communityFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Location
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.cityRegion !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Region:{" "}
                      {propertyDetails.propertyDetails.resoFacts.cityRegion}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.nearbyCities !== null && (
                    <li className="text-white font-secondary text-lg">
                      Nearby cities:{" "}
                      {propertyDetails.propertyDetails.nearbyCities.map(
                        (city) => (
                          <span key={city.name}>{city.name}, </span>
                        )
                      )}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <p className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            HOA & Financial
          </p>
          {/* Property Container */}
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/* Left Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Community
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts
                    .communityFeatures !== null && (
                    <li className="text-white font-secondary text-lg">
                      Community features:{" "}
                      {propertyDetails.propertyDetails.resoFacts.communityFeatures.join(
                        ", "
                      )}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="flex flex-col space-y-4"></div>
          </div>
          <p className="font-primary font-bold text-2xl mb-4 text-white text-center bg-slate-400 w-full">
            Other
          </p>
          {/* Property Container */}
          <div className="flex flex-row justify-evenly *:h-fit *:w-[400px] *:p-2 *:mb-4">
            {/* Left Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  HOA
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts.hasAssociation !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Has HOA:{" "}
                      {propertyDetails.propertyDetails.resoFacts.hasAssociation}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.associationFee !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      HOA fee:{" "}
                      {propertyDetails.propertyDetails.resoFacts.associationFee}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts
                    .associationAmenities !== null && (
                    <li className="text-white font-secondary text-lg">
                      Amenities included:{" "}
                      {propertyDetails.propertyDetails.resoFacts.associationAmenities.join(
                        ", "
                      )}
                    </li>
                  )}
                  {propertyDetails.propertyDetails.resoFacts.associationName !==
                    null && (
                    <li className="text-white font-secondary text-lg">
                      Association name:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .associationName
                      }
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* Right Container */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold text-white font-secondary text-xl">
                  Other financial information
                </p>
                <ul>
                  {propertyDetails.propertyDetails.resoFacts
                    .buyerAgencyCompensation !== null && (
                    <li className="text-white font-secondary text-lg">
                      Buyer's agency fee:{" "}
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .buyerAgencyCompensation
                      }
                      {
                        propertyDetails.propertyDetails.resoFacts
                          .buyerAgencyCompensationType
                      }
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-400 h-[50px] w-full">
        <div className="flex justify-evenly items-center h-full">
          <p>* A WulfCoDev Site *</p>
          <p>* Work in Progress *</p>
          <p>
            * All data displayed on this site is from Zillow's open database *
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetailsPage;
