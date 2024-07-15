import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { close, logo, menu } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks
          .filter(nav => nav.title !== 'Login' && nav.title !== 'Signup')  // Exclude Login and Signup
          .map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } text-white transition duration-300 ease-in-out hover:text-[#ABD9D9]`}
            >
              <Link to={nav.path} className="hover:text-[#ABD9D9]">
                {nav.title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks
              .filter(nav => nav.title !== 'Login' && nav.title !== 'Signup')  // Exclude Login and Signup
              .map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  } text-white transition duration-300 ease-in-out hover:text-[#ABD9D9]`}
                >
                  <Link to={nav.path} className="hover:text-[#ABD9D9]">
                    {nav.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
