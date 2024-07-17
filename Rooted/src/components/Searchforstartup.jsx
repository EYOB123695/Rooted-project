import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style';
import { Navbar } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Startupone from '../assets/Startupone.png';  // Import your first image
import Startuptwo from '../assets/Startuptwo.png';  // Import your second image

const Searchforstartup = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/search/?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching startups:", error);
    }
  };

  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="flex">
        <div className="w-80 h-screen bg-[#13124F] text-white p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-2 px-4 rounded bg-white text-black"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#9091DC] text-white p-2 rounded"
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {/* Add more filters if needed */}
        </div>
        <div className="flex-1 p-4 space-y-6">
          <h1 className="text-white text-2xl">Search for Startups</h1>

          {/* Display the startup data */}
          {results.length > 0 ? (
            results.map((startup) => (
              <div key={startup.name} className="p-4 bg-[#9091DC] text-white rounded">
                <div className="flex items-center mb-4">
                  <img
                    src={Startupone}  // Replace with appropriate image if available
                    alt={startup.name}
                    className="w-40 h-40 object-cover rounded-full mr-9"
                  />
                  <p className="text-lg">{startup.name}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm bg-[#6D6E8F] p-3 rounded mb-2">
                    <div>Sector</div>
                    <div>{startup.industry}</div>
                  </div>
                  <div className="flex justify-between text-sm bg-[#6D6E8F] p-3 rounded mb-2">
                    <div>Location</div>
                    <div>{startup.location}</div>
                  </div>
                  <div className="flex justify-between text-sm bg-[#6D6E8F] p-3 rounded mb-2">
                    <div>Year Founded</div>
                    <div>{startup.year_founded}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No startups found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchforstartup;
