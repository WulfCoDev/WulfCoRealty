import React, { createContext, useContext, useState } from "react";

interface PropertyDetails {
  // Define the structure of the property details
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
