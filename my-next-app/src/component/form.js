import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Enter Farm Details</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-white">Grains:</label>
          <input type="text" className="border border-gray-300 p-2 w-full text-black" />
        </div>
        <div>
          <label className="block mb-1 text-white">Water Usage:</label>
          <input type="text" className="border border-gray-300 p-2 w-full text-black" />
        </div>
        <div>
          <label className="block mb-1 text-white">Cultivation Method:</label>
          <input type="text" className="border border-gray-300 p-2 w-full text-black" />
        </div>
        <div>
          <label className="block mb-1 text-white">Upload Image:</label>
          <input type="file" className="border border-gray-300 p-2 w-full text-black" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
