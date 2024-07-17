import React from 'react';
import styles from '../style';
import { Navbar } from './';

const LoginPage = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /> {/* Add Navbar here */}
      </div>
    </div>

    <h1 className="text-white text-4xl font-bold text-center mt-10">
      Create Account!
    </h1>

    {/* Login Form */}
    <div className="flex flex-col items-center mt-8 max-w-md mx-auto w-full bg-white p-6 rounded-lg shadow-md">
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full py-2 px-4 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full py-2 px-4 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full py-2 px-4 rounded border border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-[#9091DC] text-white py-2 px-4 rounded-lg font-semibold w-full mt-9 mb-4"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="text-[#9091DC] py-2 px-4 rounded-lg font-semibold w-full mb-2 hover:text-[#5A5AA7] transition duration-300"
        >
         
        </button>
      </form>
    </div>
  </div>
);

export default LoginPage;
