import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import Imageforinvestpage from '../assets/Imageforinvestpage.png';
import Imageforiptwo from '../assets/Imageforiptwo.png';
import Imageforipthree from '../assets/Imageforipthree.png';
import { Navbar, Footer } from './';

const InvestPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Move this section to be first */}
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 mb-12">
      <div className="flex-1 text-white p-6 text-center md:text-left">
        <h1 className="text-4xl font-semibold mb-4">Secure Your Future with Smart Investments</h1>
        <p className="text-lg mb-6">
          Be a part of our mission to drive economic growth and prosperity through innovative investment opportunities.
        </p>
        <Link to="/searchforstartup">  {/* Link to Searchforstartup page */}
          <button
            className="text-[#ABD9D9] py-3 px-6 rounded-full border-2 border-[#ABD9D9] bg-transparent hover:bg-[#ABD9D9] hover:text-[#13124F] transition duration-300 ease-in-out"
            style={{ borderRadius: '83px' }}
          >
            SEARCH FOR STARTUPS
          </button>
        </Link>
      </div>
      <div className="flex-1 p-6 text-center">
        <img src={Imageforiptwo} alt="Invest" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>

    {/* Move this section to be second */}
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 mb-12">
      <div className="flex-1 text-white p-6 text-center md:text-left">
        <h1 className="text-4xl font-semibold mb-4">Path To Prosperity, Invest Smartly</h1>
        <p className="text-lg mb-6">
          Join us on a transformative journey as we pioneer cutting-edge solutions designed to shape the future.
        </p>
        <Link to="/investmentinfo">  {/* Link to Investmentinfo page */}
          <button
            className="text-[#ABD9D9] py-3 px-6 rounded-full border-2 border-[#ABD9D9] bg-transparent hover:bg-[#ABD9D9] hover:text-[#13124F] transition duration-300 ease-in-out"
            style={{ borderRadius: '83px' }}
          >
            MORE INFO
          </button>
        </Link>
      </div>
      <div className="flex-1 p-6 text-center">
        <img src={Imageforinvestpage} alt="Invest" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 mb-12 text-center md:text-left">
      <div className="flex-1 text-white p-6 md:pr-12">
        <h1 className="text-4xl font-semibold mb-4">Innovate and Grow</h1>
        <p className="text-lg mb-6">
          Discover the potential of your investments with our state-of-the-art platform designed to help you innovate and grow.
        </p>
        <button
          className="text-[#ABD9D9] py-3 px-6 rounded-full border-2 border-[#ABD9D9] bg-transparent hover:bg-[#ABD9D9] hover:text-[#13124F] transition duration-300 ease-in-out"
          style={{ borderRadius: '83px' }}
        >
          BUY STOCK
        </button>
      </div>
      <div className="flex-1 p-6 text-center">
        <img src={Imageforipthree} alt="Invest" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>

    <div className={`${styles.boxWidth}`}>
      <div className="bg-[#9091DC] rounded-lg p-8 mx-auto mt-10" style={{ width: '1063px', height: '402px' }}>
        <h3 className="text-black text-[20px] font-roboto font-bold mb-2 text-center">Are you ready?</h3>
        <p className="text-white text-[50px] font-roboto font-bold mt-4 text-center">
          Be part of the <br />next big thing.
        </p>
      </div>
      <Footer />
    </div>
  </div>
);

export default InvestPage;
