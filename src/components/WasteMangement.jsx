
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
      
      const getManagementTitle = (wasteType) => 'Management Strategy';
      
      const getManagementStrategy = (wasteType) => {
        switch (wasteType) {
          case 'overburden': return 'Land reclamation, backfilling, and vegetation.';
          case 'tailings': return 'Stored in tailings dams, dry stacking, and recycling.';
          case 'amd': return 'Neutralization with lime, constructed wetlands.';
          case 'slurry': return 'Dewatering, safe containment, and reuse of water.';
          case 'dust': return 'Water spraying, dust suppressants, enclosed conveyors.';
          case 'methane': return 'Methane capture and utilization as energy.';
          case 'toxins': return 'Containment, treatment, and safe disposal.';
          default: return 'Select a waste type to see its management strategy.';
        }
      };
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
              selectedWaste ? "bg-red-100" : "bg-gray-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {selectedWaste ? getWasteTitle(selectedWaste) : "Select a Waste Type"}
            </h2>
            <p className="text-gray-700">
              {selectedWaste ? getWasteDescription(selectedWaste) : "Please select a waste type from the dropdown."}
            </p>
          </div>

          {/* Management Strategy Card */}
          <div
            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${
              selectedWaste ? "bg-green-100" : "bg-gray-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {selectedWaste ? getManagementTitle(selectedWaste) : "Management Strategy"}
            </h2>
            <p className="text-gray-700">
              {selectedWaste ? getManagementStrategy(selectedWaste) : "Select a waste type to see its management strategy."}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WasteMangement
