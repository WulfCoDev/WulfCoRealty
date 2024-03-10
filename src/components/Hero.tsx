// Hero.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchResults } from "../utils/SearchResultsContext";
import { searchProperties } from "../utils/api";

const Hero = () => {
  const { setSearchResults } = useSearchResults();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const searchResults = await searchProperties(searchQuery);
      setSearchResults(searchResults);
      navigate("/searchresult");
    } catch (error) {
      console.error("Error performing search:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="bg-white h-[50vh] w-full flex justify-center items-center">
      <div className="bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-center h-full w-full">
        <div className="mx-auto rounded-lg w-fit">
          <h1 className="font-fifth text-white text-3xl outline-2 outline-black text-center">
            Don't find a house. Find a home.
          </h1>
          <div className="md:flex">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="w-[50vw] flex space-x-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Enter a city and state, or address"
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  type="submit"
                  className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
