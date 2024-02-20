// PropertyDetailsPage.tsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPropertyDetails } from "../utils/api"; // Import the function to fetch property details

const PropertyDetailsPage = () => {
  const { zpid } = useParams(); // Get the zpid from URL params
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const propertyDetails = await getPropertyDetails(zpid); // Fetch property details using zpid
        console.log(propertyDetails); // Log property details
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };
    fetchPropertyDetails(); // Call the function to fetch property details
  }, [zpid]); // useEffect will re-run whenever zpid changes

  return (
    <div>
      <h2>Property Details</h2>
      {/* Render property details here */}
    </div>
  );
};

export default PropertyDetailsPage;
