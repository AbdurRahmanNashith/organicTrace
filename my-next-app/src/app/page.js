import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enter Farm Details</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Grains:</label>
          <input type="text" className="border border-gray-300 p-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Water Usage:</label>
          <input type="text" className="border border-gray-300 p-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Cultivation Method:</label>
          <input type="text" className="border border-gray-300 p-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Upload Image:</label>
          <input type="file" className="border border-gray-300 p-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Nashith lavda:</label>
          <input type="file" className="border border-gray-300 p-2 w-full" />
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
