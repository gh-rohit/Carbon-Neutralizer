import React, { useState, useRef, useEffect } from 'react';

const CoalInputForm = () => {
  const [activity, setActivity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [distance, setDistance] = useState('');
  const [emission, setEmission] = useState(0);
  const [oxygenRequired, setOxygenRequired] = useState(0);
  const [treesRequired, setTreesRequired] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Create a ref for the result section
  const resultRef = useRef(null);

  // Scroll into view after submission
  useEffect(() => {
    if (submitted && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [submitted]);

  // Handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const parsedQuantity = parseFloat(quantity) || 0;
    const parsedDistance = parseFloat(distance) || 0;

    let emissionValue = 0;

    if (activity === 'mining') {
      if (parsedQuantity <= 0) {
        alert("Please enter a positive quantity.");
        return;
      }

      if (fuelType === 'diesel') {
        emissionValue = parsedQuantity * 50 * 2.7;
      } else if (fuelType === 'gasoline') {
        emissionValue = parsedQuantity * 55 * 2.3;
      }
    } else if (activity === 'transportation') {
      if (parsedDistance <= 0) {
        alert("Please enter a positive distance.");
        return;
      }

      if (fuelType === 'diesel') {
        emissionValue = parsedDistance * 0.5 * 2.7;
      } else if (fuelType === 'gasoline') {
        emissionValue = parsedDistance * 0.4 * 2.3;
      } else if (fuelType === 'LPG') {
        emissionValue = parsedDistance * 0.3 * 1.9;
      } else if (fuelType === 'CNG') {
        emissionValue = parsedDistance * 0.2 * 1.5;
      }
    }

    setEmission(emissionValue);
    setOxygenRequired(emissionValue * 2.29);
    setTreesRequired(emissionValue / 0.022);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1663013631081-02a95d7147f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen py-10 bg-gray-100"
    >
      <section id="input-section" className="py-10 bg-opacity-80">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 mt-8 text-black">
            Input Mining and Transportation Activity Data
          </h2>
          <form
            id="emission-form"
            onSubmit={handleFormSubmit}
            className="max-w-lg mx-auto bg-gray-50 bg-opacity-60 p-8 rounded-lg shadow-lg"
          >
            {/* Activity Type */}
            <label htmlFor="activity" className="block text-lg font-medium mb-2">
              Activity Type:
            </label>
            <select
              id="activity"
              name="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="" disabled>
                Select an activity
              </option>
              <option value="mining">Mining</option>
              <option value="transportation">Transportation</option>
            </select>

            {/* Quantity for Mining */}
            {activity === 'mining' && (
              <div className="form-group mb-4">
                <label htmlFor="quantity" className="block text-lg font-medium mb-2">
                  Quantity (in tons):
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value.replace(/^0+/, ''))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}

            {/* Distance for Transportation */}
            {activity === 'transportation' && (
              <div className="form-group mb-4">
                <label htmlFor="distance" className="block text-lg font-medium mb-2">
                  Distance Traveled (in km):
                </label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value.replace(/^0+/, ''))}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}

            {/* Fuel Type */}
            <label htmlFor="fuelType" className="block text-lg font-medium mb-2">
              Fuel Type:
            </label>
            <select
              id="fuelType"
              name="fuelType"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="" disabled>
                Select a fuel type
              </option>
              {activity === 'mining' && (
                <>
                  <option value="diesel">Diesel</option>
                  <option value="gasoline">Gasoline</option>
                </>
              )}
              {activity === 'transportation' && (
                <>
                  <option value="diesel">Diesel</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="LPG">LPG</option>
                  <option value="CNG">CNG</option>
                </>
              )}
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
            >
              Calculate Emission
            </button>
          </form>
        </div>
      </section>

      {/* Results Section */}
      {submitted && (
        <section id="results-section" className="py-10 bg-opacity-90" ref={resultRef}>
          <div className="container mx-auto">
            <div className="results-container gap-8 flex  items-center  justify-center">
              {activity === 'mining' && (
                <div id="mining-results" className="results-box p-6 bg-white bg-opacity-50 rounded-lg shadow-lg w-fit ">
                  <h2 className="text-3xl font-extrabold mb-6 text-center text-black">
                    Mining Activity Results
                  </h2>
                  <p className="text-xl font-bold text-zinc-800 mb-4">
                    Emission: <span className="text-2xl font-extrabold">{emission.toFixed(2)}</span> kg CO₂
                  </p>
                  <p className="text-xl font-bold text-zinc-900 mb-4">
                    Oxygen Required: <span className="text-2xl font-extrabold">{oxygenRequired.toFixed(2)}</span> kg O₂
                  </p>
                  <p className="text-xl font-bold text-green-900">
                    Trees Required: <span className="text-2xl font-extrabold">{treesRequired.toFixed(2)}</span> trees
                  </p>
                </div>
              )}
              {activity === 'transportation' && (
                <div
                  id="transportation-results"
                  className="results-box p-6 bg-indigo-200 bg-opacity-20 rounded-lg shadow-lg"
                >
                  <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
                    Transportation Activity Results
                  </h2>
                  <p className="text-xl font-bold text-zinc-100 mb-4">
                    Emission: <span className="text-2xl font-extrabold">{emission.toFixed(2)}</span> kg CO₂
                  </p>
                  <p className="text-xl font-bold text-zinc-100 mb-4">
                    Oxygen Required: <span className="text-2xl font-extrabold">{oxygenRequired.toFixed(2)}</span> kg O₂
                  </p>
                  <p className="text-xl font-bold text-zinc-100">
                    Trees Required: <span className="text-2xl font-extrabold">{treesRequired.toFixed(2)}</span> trees
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CoalInputForm;
