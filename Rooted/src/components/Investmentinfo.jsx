import React from 'react';
import styles from '../style';
import { Navbar, Footer } from './';
import { FaArrowDown } from 'react-icons/fa';  // Correct import for FaArrowDown

const Investmentinfo = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /> 
      </div>
    </div>

  
    <div className={`${styles.paddingX} ${styles.flexCenter} flex-1`}>
      <div className={`${styles.boxWidth} p-8`}>
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-white mb-6 text-left mx-4 lg:mx-0">
          Stay Updated With Real Time Data and Updates
        </h1>

        {/* Legal Framework Text */}
        <p className="text-lg text-white mb-6 text-left mx-4 lg:mx-0">
          Legal Framework
        </p>

        {/* Investment Proclamation Text with Download Icon */}
        <div className="flex flex-col text-white mx-4 lg:mx-0 pl-6">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-md mr-2">
              Investment Proclamation 1180/2020 (PDF, 1.2 MB)
            </p>
            <a href="/path-to/Investment-Proclamation-1180-2020.pdf" download className="text-[#ABD9D9] hover:text-[#D9D9D9] transition duration-300 ease-in-out">
              <FaArrowDown size={24} />
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-md mr-2">
              Investment Regulation No. 474/2020 (PDF, 3.1 MB)
            </p>
            <a href="/path-to/Investment-Regulation-No-474-2020.pdf" download className="text-[#ABD9D9] hover:text-[#D9D9D9] transition duration-300 ease-in-out">
              <FaArrowDown size={24} />
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-md mr-2">
              Federal Income Tax Regulation No. 410/2017
            </p>
            <a href="/path-to/Federal-Income-Tax-Regulation-No-410-2017.pdf" download className="text-[#ABD9D9] hover:text-[#D9D9D9] transition duration-300 ease-in-out">
              <FaArrowDown size={24} />
            </a>
          </div>
        </div>

        {/* New Section: Where To Invest */}
        <div className="text-center pt-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-left mx-4 lg:mx-0">
            Where To Invest
          </h1>
          

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 mx-4 lg:mx-0">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-4 items-start">
              <p className="text-md ml-5 text-white">
                Investment Opportunities
              </p>
              <p className="text-md ml-5 text-white">
                Investment Strategies
              </p>
              <p className="text-md ml-5 text-white">
                Market Analysis
              </p>
              <p className="text-md ml-5 text-white">
                Investment Trends
              </p>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4 items-start">
              <p className="text-md text-white">
                Investment Opportunities
              </p>
              <p className="text-md text-white">
                Investment Strategies
              </p>
              <p className="text-md text-white">
                Market Analysis
              </p>
            </div>
          </div>
        </div>

        {/* New Section: How It Works */}
        <div className="text-center pt-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-left mx-4 lg:mx-0">
            How It Works
          </h1>

          {/* Steps */}
          <div className="flex flex-col items-start gap-6 mx-4 lg:mx-0">
            <div className="text-lg text-white">
              <p className="mb-4">
                <strong>Step 1:</strong> Register Your Business
              </p>
              <p className="mb-4 ml-8">
                <strong>Step 2:</strong> Obtain Necessary Licenses
              </p>
              <p className="mb-4 ml-8">
                <strong>Step 3:</strong> Comply With Regulations
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-8">
          <h1 className="text-3xl font-bold text-white mb-6 text-left mx-4 lg:mx-0">
          Tools and resources 
          </h1>
          <p className='text-white mb-4 ml-8  text-left'>
          Investment Guide: Learn Basics of Investing 
          </p>
          <p className='text-white mb-4 ml-8  text-left'>
          Market Analysis: Get the latest market trends and insights
          </p>
          <p className='text-white mb-4 ml-8  text-left' >
          Estimate your potential returns: 
          </p>
          
         

         

        </div>
       
      </div>
    </div>

    <Footer />  
  </div>
);

export default Investmentinfo;
