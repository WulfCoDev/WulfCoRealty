import React, { createContext, useContext, useState } from "react";

interface Photo {
  caption: string;
  mixedSources: {
    jpeg?: { url: string; width: number }[];
    webp?: { url: string; width: number }[];
    // Add more types as needed
  };
}
interface PropertyDetails {
  message: string;
  zillowURL: string;
  propertyDetails: {
    listingDataSource: string;
    zpid: number;
    city: string;
    state: string;
    homeStatus: string;
    address: {
      streetAddress: string;
      city: string;
      state: string;
      zipcode: string;
    };
    bedrooms: number;
    bathrooms: number;
    daysOnZillow: number;
    price: number;
    yearBuilt: number;
    latitude: number;
    longitude: number;
    livingArea: number;
    zestimate: number;
    rentZestimate: number;
    description: string;
    originalPhotos: Photo[];
    livingAreaUnitsShort: string;
    livingAreaUnits: string;
    favoriteCount: number;
    pageViewCount: number;
    datePostedString: string;
    monthlyHoaFee: number;
    propertyTypeDimension: string;
    lotSize: number;
    resoFacts: {
      pricePerSquareFoot: number;
      yearBuilt: number;
    };
    // Add more properties as needed
  };
  // Add more properties as needed
}

interface PropertyDetailsContextType {
  propertyDetails: PropertyDetails | null;
  setPropertyDetails: React.Dispatch<
    React.SetStateAction<PropertyDetails | null>
  >;
}

const PropertyDetailsContext = createContext<PropertyDetailsContextType>({
  propertyDetails: null,
  setPropertyDetails: () => {},
});

export const usePropertyDetails = () => useContext(PropertyDetailsContext);

export const PropertyDetailsProvider: React.FC = ({ children }) => {
  const [propertyDetails, setPropertyDetails] =
    useState<PropertyDetails | null>(null);

  return (
    <PropertyDetailsContext.Provider
      value={{ propertyDetails, setPropertyDetails }}
    >
      {children}
    </PropertyDetailsContext.Provider>
  );
};
