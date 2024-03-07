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
    homeInsights: { insights: { phrases: string[] } }[];
    livingAreaUnitsShort: string;
    livingAreaUnits: string;
    favoriteCount: number;
    pageViewCount: number;
    datePostedString: string;
    monthlyHoaFee: number;
    propertyTypeDimension: string;
    lotSize: number;
    virtualTourUrl: string;
    nearbyCities: {
      name: string;
    };
    resoFacts: {
      pricePerSquareFoot: number;
      yearBuilt: number;
      mainLevelBathrooms: number;
      mainLevelBedrooms: number;
      levels: string;
      stories: number;
      storiesTotal: number;
      bathroomsFloat: number;
      bathroomsFull: number;
      bathroomsHalf: number;
      bathroomsOneQuarter: number;
      bathroomsPartial: number;
      bathroomsThreeQuarter: number;
      appliances: string;
      entryLocation: string;
      poolFeatures: string[];
      spaFeatures: string[];
      patioAndPorchFeatures: string[];
      fencing: string[];
      view: string[];
      lotSize: string;
      lotFeatures: string[];
      specialListingConditions: string;
      parcelNumber: string;
      communityFeatures: string[];
      propertyCondition: string;
      propertySubType: string[];
      parkingCapacity: number;
      association: {
        feeFrequency: string;
        name: string;
        phone: string;
      };
      associationAmenities: string[];
      associationFee: string[];
      associationName: string;
      garageParkingCapacity: number;
      coveredParkingCapacity: number;
      cityRegion: string;
      parkingFeatures: string[];
      laundryFeatures: string[];
      interiorFeatures: string[];
      heating: string[];
      commonWalls: string;
      sewer: string[];
      waterSource: string[];
      utilities: string[];
      homeType: string;
      hoaFee: string;
      hoaFeeTotal: string;
      isNewConstruction: boolean;
      fireplaceFeatures: string[];
      livingArea: string;
      cooling: string[];
      flooring: string[];
      hasAssociation: boolean;
      buyerAgencyCompensation: string;
      buyerAgencyCompensationType: string;
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
