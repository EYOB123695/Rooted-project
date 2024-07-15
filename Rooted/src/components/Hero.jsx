import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { discount, robot, Imagefour } from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col justify-between items-start w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Invest, Hire, Grow <br />And Trade
        </h1>
        <p className="mt-4 text-white">
          Empowering the Ethiopian startup ecosystem: Invest,<br /> Hire, Grow, and Trade. Connecting investors with<br />startups, facilitating job opportunities, and driving <br />innovation through buying and selling stocks.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link to="/login">
            <button
              className="text-[#ABD9D9] py-3 px-6 rounded-full border-2 border-[#ABD9D9] bg-transparent hover:bg-[#ABD9D9] hover:text-[#13124F] transition duration-300 ease-in-out"
              style={{ borderRadius: '83px' }}
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              className="text-[#ABD9D9] py-3 px-6 rounded-full border-2 border-[#ABD9D9] bg-transparent hover:bg-[#ABD9D9] hover:text-[#13124F] transition duration-300 ease-in-out"
              style={{ borderRadius: '83px' }}
            >
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div>
      <img src={Imagefour} className="w-[100%] h-[100%] relative z-[5]" />
    </div>
  </section>
);

export default Hero;
