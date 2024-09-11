import React, { useState } from 'react';

const CoalInputForm = () => {
  const [activityType, setActivityType] = useState('');
  const [coalAmount, setCoalAmount] = useState('');
  const [output, setOutput] = useState(null);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to calculate the result based on the input
    const result = `Activity: ${activityType}, Coal Amount: ${coalAmount} tons`;
    setOutput(result);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gray-300">
        <h1 className='text-4xl mb-5 '>Emission Calculator</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-xl font-bold mb-4">Coal Mining Input</h2>
        
        {/* Activity Type Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityType">
            Activity Type
          </label>
          <input
            type="text"
            id="activityType"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g. Mining"
            required
          />
        </div>

        {/* Coal Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coalAmount">
            Coal Amount (tons)
          </label>
          <input
            type="number"
            id="coalAmount"
            value={coalAmount}
            onChange={(e) => setCoalAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter tons"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Output
          </button>
        </div>
      </form>

      {/* Output Display */}
      {output && (
        <div className="mt-4 p-4 bg-green-200 rounded shadow-lg">
          <p>{output}</p>
        </div>
      )}
    </div>
  );
};

export default CoalInputForm;
