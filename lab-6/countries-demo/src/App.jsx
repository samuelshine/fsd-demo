import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
        );
        setCountries(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load countries");
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Filter countries live as you type
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-20 pb-20">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {loading ? (
          <p className="text-center text-gray-400">Loading countries...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredCountries.map((country) => (
              <div
                key={country.name.common}
                className="bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-4 text-xl font-semibold">{country.name.common}</h2>
                <p className="text-gray-400">Capital: {country.capital?.[0] || "N/A"}</p>
                <p className="text-gray-400">Region: {country.region}</p>
                <p className="text-gray-400">
                  Population: {country.population.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
