const API_KEY = "5a22a615f8msh685d41198dad2cdp11a23djsn5829e392c9e2";

export async function searchProperties(searchQuery) {
  const url = `https://zillow-working-api.p.rapidapi.com/search/byaddress?query=${encodeURIComponent(
    searchQuery
  )}&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "zillow-working-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.Results);
    return data.Results; // Adjust the return value based on the response format of the new API
  } catch (error) {
    console.error("Error searching properties:", error);
    throw error;
  }
}

export async function getPropertyDetails(zpid) {
  const url = `https://zillow-working-api.p.rapidapi.com/pro/byzpid?zpid=${zpid}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5a22a615f8msh685d41198dad2cdp11a23djsn5829e392c9e2",
      "X-RapidAPI-Host": "zillow-working-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}
