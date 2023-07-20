// src/PieChart.js

import React from 'react';
import 'chart.js';
import { Bar } from 'react-chartjs-2';

const PieChart = () => {
    const data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4'],
        datasets: [
          {
            label: 'Sample Bar Chart',
            data: [20, 35, 50, 15], // Sample data for the four things
            backgroundColor: '#36A2EB', // Color of the bars
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true, // Start y-axis from zero
          },
        },
      };
    
      return (
        <div>
          <h2>Bar Chart Example</h2>
          <Bar data={data} options={options} />
        </div>
      );
    };

export default PieChart;
