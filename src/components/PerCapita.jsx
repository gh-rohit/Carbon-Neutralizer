import React, { useState } from 'react';

const PerCapitaEmissionCalculator = () => {
  const [carbonEmission, setCarbonEmission] = useState('');
  const [population, setPopulation] = useState('');
  const [perCapitaEmission, setPerCapitaEmission] = useState(null);

  // Function to handle input and prevent leading zeros
  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    // Remove leading zero unless the value is exactly "0"
    if (value === "" || value === "0" || /^[1-9]\d*$/.test(value)) {
      setter(value); // Set only valid numbers (no leading zeros)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert inputs to numbers
    const carbonEmissionValue = parseFloat(carbonEmission);
    const populationValue = parseInt(population, 10);

    // Check if both inputs are provided and valid
    if (
      carbonEmissionValue > 0 &&
      populationValue > 0 &&
      !isNaN(carbonEmissionValue) &&
      !isNaN(populationValue)
    ) {
      const perCapita = (carbonEmissionValue / populationValue).toFixed(2); // Calculate per capita emission
      setPerCapitaEmission(perCapita); // Set the result
    } else {
      alert('Please enter valid inputs for carbon emission and population.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1580120656760-c652daad203c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Per Capita Emission Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carbonEmission">
              Total Carbon Emission (in tons/year)
            </label>
            <input
              type="number"
              id="carbonEmission"
              placeholder="Enter total carbon emission"
              value={carbonEmission}
              onChange={(e) => handleInputChange(e, setCarbonEmission)} // Use the custom handler
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="population">
              Population of the Area
            </label>
            <input
              type="number"
              id="population"
              placeholder="Enter population"
              value={population}
              onChange={(e) => handleInputChange(e, setPopulation)} // Use the custom handler
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calculate
            </button>
          </div>
        </form>

        {perCapitaEmission !== null && (
          <div className="mt-6 text-center">
            <p className="text-lg font-bold">Per Capita Emission: {perCapitaEmission} tons/person</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerCapitaEmissionCalculator;
