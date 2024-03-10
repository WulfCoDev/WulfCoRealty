import React, { createContext, useContext, useState } from "react";

interface Property {
  baths: number;
  beds: number;
  addressCity: string;
  addressStreet: string;
  addressState: string;
  country: string;
  currency: string;
  daysOnZillow: number;
  homeStatus: string;
  homeType: string;
  imgSrc: string;
  isFeatured: boolean;
  isNonOwnerOccupied: boolean;
  addressZipcode: number;
  price: number;
  streetAddress: string;
  zpid: number;
  // Add more properties as needed
}

interface SearchResultsContextType {
  searchResults: Property[];
  setSearchResults: React.Dispatch<React.SetStateAction<Property[]>>;
}

const SearchResultsContext = createContext<SearchResultsContextType>({
  searchResults: [],
  setSearchResults: () => {},
});

export const useSearchResults = () => useContext(SearchResultsContext);

export const SearchResultsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<Property[]>([]);

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};
