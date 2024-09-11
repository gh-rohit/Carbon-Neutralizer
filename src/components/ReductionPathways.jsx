import React, { useState } from 'react';

const pathwaysData = {
  'Renewable Energy': {
    description: 'Transitioning to renewable energy sources like wind, solar, and hydro can significantly reduce carbon emissions.',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  'Energy Efficiency': {
    description: 'Enhancing energy efficiency in buildings and industrial processes can lower energy consumption and emissions.',
    image: 'https://images.unsplash.com/photo-1725714871742-bfb5a4817d71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  'Carbon Capture': {
    description: 'Implementing carbon capture technologies can capture CO2 emissions from sources like power plants.',
    image: 'https://images.unsplash.com/photo-1725714871742-bfb5a4817d71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  'Sustainable Agriculture': {
    description: 'Adopting sustainable agricultural practices can reduce emissions from farming activities.',
    image: 'https://images.unsplash.com/photo-1709141425206-f5cdeab3e718?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
};

const ReductionDropdown = () => {
  const [selectedPathway, setSelectedPathway] = useState('');

  return (
    
    <div className="p-6 w-full h-screen">
        <h1 className='text-center text-5xl'>Reduction Pathways</h1>
      <div className="relative inline-block text-left">
        <div>
          <select
            onChange={(e) => setSelectedPathway(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Reduction Pathway</option>
            {Object.keys(pathwaysData).map((pathway) => (
              <option key={pathway} value={pathway}>
                {pathway}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        {selectedPathway && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{selectedPathway}</h2>
            <img 
              src={pathwaysData[selectedPathway].image} 
              alt={selectedPathway} 
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">{pathwaysData[selectedPathway].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReductionDropdown;
