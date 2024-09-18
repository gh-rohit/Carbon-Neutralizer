import React, { useState } from 'react';

const WasteMangement = () => {
    const [selectedWaste, setSelectedWaste] = useState('');

    const getWasteTitle = (wasteType) => {
        switch (wasteType) {
          case 'overburden': return 'Overburden and Spoil';
          case 'tailings': return 'Coal Rejects/Tailings';
          case 'amd': return 'Acid Mine Drainage (AMD)';
          case 'slurry': return 'Coal Slurry/Sludge';
          case 'dust': return 'Dust and Particulate Matter';
          case 'methane': return 'Methane Emissions';
          case 'toxins': return 'Heavy Metals and Toxins';
          default: return '';
        }
    };

    const getWasteDescription = (wasteType) => {
        switch (wasteType) {
          case 'overburden': return 'Overburden refers to the soil and rock removed to access coal seams.';
          case 'tailings': return 'Leftover material after coal processing containing impurities.';
          case 'amd': return 'Acidic water formed when sulfide minerals are exposed to air and water.';
          case 'slurry': return 'A mixture of water and coal fines produced during processing.';
          case 'dust': return 'Dust generated during mining, transport, and handling of coal.';
          case 'methane': return 'Methane released during coal extraction, a potent greenhouse gas.';
          case 'toxins': return 'Heavy metals and toxins leached from mining waste materials.';
          default: return 'Please select a waste type from the dropdown.';
        }
    };

    const getManagementStrategy = (wasteType) => {
      switch (wasteType) {
          case 'overburden':
              return {
                  strategy: 'Overburden is the soil and rocks removed to access minerals. Management strategies include: ' +
                            '1. Land reclamation: Filling up the spaces left by mining. ' +
                            '2. Backfilling: Leveling the ground with the removed material. ' +
                            '3. Vegetation: Planting trees or grass to restore the area.',
                  videoSrc: '/Reclamation During Mining.mp4'
              };
          
          case 'tailings':
              return {
                  strategy: 'Tailings are the leftover materials after mineral extraction. Management strategies include: ' +
                            '1. Tailings dams: Specially built areas to store the waste safely. ' +
                            '2. Dry stacking: Drying the tailings and stacking them securely. ' +
                            '3. Recycling: Using the tailings for other purposes.',
                  videoSrc: 'https://www.youtube.com/embed/VIDEO_ID_FOR_TAILINGS'
              };
          
          case 'amd':
              return {
                  strategy: 'Acid Mine Drainage (AMD) occurs when water reacts with sulfur-containing rocks, creating acidic water. ' +
                            'Management strategies include: ' +
                            '1. Neutralization: Using substances like lime to reduce acidity. ' +
                            '2. Constructed wetlands: Using artificial wetlands to clean the water naturally.',
                  videoSrc: 'https://www.youtube.com/embed/VIDEO_ID_FOR_AMD'
              };
          
          case 'slurry':
              return {
                  strategy: 'Slurry is a mix of water and fine particles from mining. Management strategies include: ' +
                            '1. Dewatering: Removing water from the slurry. ' +
                            '2. Safe containment: Storing the solid part securely. ' +
                            '3. Reuse of water: Using the water again in the mining process.',
                  videoSrc: 'https://www.youtube.com/embed/VIDEO_ID_FOR_SLURRY'
              };
          
          case 'dust':
              return {
                  strategy: 'Dust from mining can be harmful. Management strategies include: ' +
                            '1. Water spraying: Keeping dust down with water. ' +
                            '2. Dust suppressants: Applying special chemicals to control dust. ' +
                            '3. Enclosed conveyors: Using covered conveyors to prevent dust spread.',
                  videoSrc: 'https://www.youtube.com/embed/VIDEO_ID_FOR_DUST'
              };
          
          case 'methane':
              return {
                  strategy: 'Methane is a gas released during mining, especially in coal mines. Management strategies include: ' +
                            '1. Methane capture: Collecting the gas. ' +
                            '2. Utilization: Using the captured methane as a source of energy.',
                  videoSrc: 'https://www.youtube.com/embed/VIDEO_ID_FOR_METHANE'
              };
          
          case 'toxins':
              return {
                  strategy: 'Toxic materials from mining require careful management. Strategies include: ' +
                            '1. Containment: Storing toxins securely. ' +
                            '2. Treatment: Reducing their harmful effects. ' +
                            '3. Safe disposal: Disposing of treated toxins to prevent contamination.',
                  videoSrc: 'https://www.youtube.com/embed/VIDEO_ID_FOR_TOXINS'
              };
          
          default:
              return {
                  strategy: 'Select a waste type to see its management strategy.',
                  videoSrc: ''
              };
      }
    };
    
    const getWasteImage = (wasteType) => {
        switch (wasteType) {
          case 'overburden': return 'https://images.unsplash.com/photo-1676134711864-97da91e82884?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Example image path
          case 'tailings': return '/images/tailings.jpg';
          case 'amd': return '/images/amd.jpg';
          case 'slurry': return '/images/slurry.jpg';
          case 'dust': return '/images/dust.jpg';
          case 'methane': return '/images/methane.jpg';
          case 'toxins': return '/images/toxins.jpg';
          default: return '';
        }
    };

    const { strategy, videoSrc } = selectedWaste ? getManagementStrategy(selectedWaste) : { strategy: '', videoSrc: '' };

    return (
      <div>
        {/* Waste Management Section */}
        <section id="waste-section" className="p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Coal Mining Waste Management</h1>
          <select
            id="waste-dropdown"
            value={selectedWaste}
            onChange={(e) => setSelectedWaste(e.target.value)}
            className="mb-6 p-2 border rounded-md"
          >
            <option value="">Select Waste Type</option>
            <option value="overburden">Overburden and Spoil</option>
            <option value="tailings">Coal Rejects/Tailings</option>
            <option value="amd">Acid Mine Drainage (AMD)</option>
            <option value="slurry">Coal Slurry/Sludge</option>
            <option value="dust">Dust and Particulate Matter</option>
            <option value="methane">Methane Emissions</option>
            <option value="toxins">Heavy Metals and Toxins</option>
          </select>

          <div id="waste-info" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Waste Information Card */}
            <div
              className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${
                selectedWaste ? 'bg-red-100' : 'bg-gray-50'
              }`}
            >
              <h2 className="text-xl font-semibold mb-2">
                {selectedWaste ? getWasteTitle(selectedWaste) : 'Select a Waste Type'}
              </h2>
              <p className="text-gray-700">
                {selectedWaste ? getWasteDescription(selectedWaste) : 'Please select a waste type from the dropdown.'}
              </p>

              {/* Display the waste image if a waste type is selected */}
              {selectedWaste && (
                <img
                  src={getWasteImage(selectedWaste)}
                  alt={getWasteTitle(selectedWaste)}
                  className="w-full h-96 object-cover mt-4 rounded-md"
                />
              )}
            </div>

            {/* Management Strategy Card */}
            <div
              className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${
                selectedWaste ? 'bg-green-100' : 'bg-gray-50'
              }`}
            >
              <h2 className="text-xl font-semibold mb-2 text-green-600">Management Strategy</h2>
              <p className="text-gray-700">
                {strategy || 'Select a waste type to see its management strategy.'}
              </p>
              
              {/* Display the video if a waste type is selected */}
              {videoSrc && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="315"
                    src={videoSrc}
                    title="Waste Management Strategy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
}

export default WasteMangement;
