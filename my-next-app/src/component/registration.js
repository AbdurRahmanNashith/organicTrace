// RegistrationPage.js

import React from 'react';
import Link from 'next/link';

const RegistrationPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl flex border border-gray-300 rounded-lg overflow-hidden">
        {/* Left side */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to our platform!</h1>
          <p className="text-lg">Chainning Farmers to end Consumers.</p>
          {/* Add animations here */}
        </div>

        {/* Right side */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center">
          <div className="p-8 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Metamask Registration</h2>
            <Link href="/Farmer">
              <button className="bg-blue-500 text-white py-2 px-4 rounded mb-2 hover:bg-blue-600 transition duration-300">Farmer</button>
            </Link>
            <Link href="/Consumer">
              <button className="bg-gray-500 text-white py-2 px-4 rounded mb-2 hover:bg-gray-600 transition duration-300">Consumer</button>
            </Link>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
