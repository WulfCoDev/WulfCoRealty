const API_KEY = "5a22a615f8msh685d41198dad2cdp11a23djsn5829e392c9e2";
const API_HOST = "zillow56.p.rapidapi.com";

export async function searchProperties(searchQuery) {
  const url = `https://${API_HOST}/search?location=${encodeURIComponent(
    searchQuery
  )}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error searching properties:", error);
    throw error; // Re-throw the error to handle it in the component
  }
}

export async function getPropertyDetails(zpid: number) {
  const url = `https://zillow56.p.rapidapi.com/property?zpid=${zpid}`;
  const options = {
    method: "GET",
    header: {
      "X-RapidAPI-Key": "5a22a615f8msh685d41198dad2cdp11a23djsn5829e392c9e2",
      "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
