import axios from "axios"

// Fetch all countries with specific fields (mandatory for API)
export const fetchAllCountries = async () => {
  const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca2"
  const response = await axios.get(url)
  return response.data
}

// Search countries by name
export const searchCountriesByName = async (name) => {
  if (!name) return []
  try {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
      name
    )}?fields=name,capital,region,flags,population,cca2`
    const response = await axios.get(url)
    return response.data
  } catch (err) {
    // Gracefully handle not-found searches
    if (err.response && err.response.status === 404) return []
    console.error("Search error:", err.message)
    return []
  }
}

export default { fetchAllCountries, searchCountriesByName }
