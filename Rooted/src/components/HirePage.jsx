import React, { useState } from 'react';
import styles from '../style';
import { Navbar } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Imageforhire, Imageforhiretwo } from '../assets';

const HirePage = () => {
  const [query, setQuery] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [environment, setEnvironment] = useState('');

  const handleSearch = () => {
    // Add search functionality here
    console.log("Search query:", query);
    console.log("Job Type:", jobType);
    console.log("Experience Level:", experienceLevel);
    console.log("Environment:", environment);
  };

  return (
    <div className="w-full overflow-hidden bg-primary min-h-screen">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar /> {/* Add Navbar here */}
        </div>
      </div>

      {/* Search Box Section */}
      <div className="flex flex-col items-center mt-10 space-y-6">
        <div className="relative w-full max-w-4xl mb-6">
          <input
            type="text"
            placeholder="Search for Professionals"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-2 px-4 rounded bg-[#9091DC] text-white placeholder-[#FFFFFF80]"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#6D6E8F] text-white p-2 rounded"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Dropdown Elements */}
        <div className="w-full max-w-4xl flex flex-wrap gap-4">
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full md:w-1/4 py-2 px-4 rounded bg-[#9091DC] text-white"
          >
            <option value="" disabled>Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
            <option value="contract">Contract</option>
          </select>

          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="w-full md:w-1/4 py-2 px-4 rounded bg-[#9091DC] text-white"
          >
            <option value="" disabled>Select Experience Level</option>
            <option value="entry-level">Entry-Level</option>
            <option value="mid-level">Mid-Level</option>
            <option value="senior-level">Senior-Level</option>
            <option value="manager">Manager</option>
          </select>

          <select
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            className="w-full md:w-1/4 py-2 px-4 rounded bg-[#9091DC] text-white"
          >
            <option value="" disabled>Select Working Environment</option>
            <option value="remote">Remote</option>
            <option value="on-site">On-Site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* First Box with Imageforhire */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-9 mb-9 bg-[#9091DC] p-4 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={Imageforhire} alt="Professional 1" className="w-3/4 h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left md:pl-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold mb-2">Abrham Endale</h2>
          <p className="text-base mb-2">
             Full stack developer<br></br>
             Mobile App  developer
          </p>
          <button className="bg-white text-[#9091DC] py-1 px-3 rounded-lg font-semibold text-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Box with Imageforhiretwo */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-9 mb-9 bg-[#9091DC] p-4 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={Imageforhiretwo} alt="Professional 2" className="w-3/4 h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left md:pl-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold mb-2">Helen solomon</h2>
          <p className="text-base mb-2">
          Graphics Designer <br></br>
          Experianced in UI/UX 
          </p>
          <button className="bg-white text-[#9091DC] py-1 px-3 rounded-lg font-semibold text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HirePage;
