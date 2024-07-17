import React from 'react';

const RegisterPage = () => (
  <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
    <h1 className='text-white text-center font-bold mt-20' style={{ fontSize: '60px' }}>
      Showcase your skills<br />
      Find Your Career Fit!
    </h1>
    
    <form className="bg-slate-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg mt-10">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fullName"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
          Date of Birth
        </label>
        <input
          className="shadow appearance-none border rounded-full w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="dob"
          type="date"
          placeholder="Date of Birth"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="tel"
          placeholder="Phone Number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="Address"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
          Your CV
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cv"
          type="file"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  </div>
);

export default RegisterPage;
