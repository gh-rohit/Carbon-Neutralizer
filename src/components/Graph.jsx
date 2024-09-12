import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GasEmissionsChart = () => {
  const data = {
    labels: ['CH4', 'CO2', 'NO2', 'Other Gases'],
    datasets: [
      {
        label: 'Gas Emissions (tons)',
        data: [45, 78, 34, 56], // Example data
        backgroundColor: ['#4bc0c0', '#9966ff', '#ff9f40', '#36a2eb'],
        borderColor: ['#4bc0c0', '#9966ff', '#ff9f40', '#36a2eb'],
        borderWidth: 1,
        barThickness: 10, // Thinner bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    
      <div className="w-96 max-w-lg p-6 bg-white rounded-lg shadow-lg absolute top-1/2 right-7">
        <h2 className="text-lg font-bold mb-4 text-center">Gas Emissions Overview</h2>
        <Bar data={data} options={options} />
      </div>
   
  );
};

export default GasEmissionsChart;
