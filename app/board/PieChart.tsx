import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
// import Chart from 'chart.js';
import pie from 'react-chartjs-2';




function generateRandomPieData() {
  return {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30], // Replace with your data
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
      },
    ],
  };
}

function PieChart() {
  const [pieChartData, setPieChartData] = useState({});
  const pieChartRef = useRef<Chart | null>(null);
  // const pieChartRef = useRef(null);

  useEffect(() => {
    
    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }

    
    const pieData = generateRandomPieData();
    setPieChartData(pieData);

    
    const ctx = document.getElementById('pieChart');
    
       pieChartRef.current = new Chart( ctx, {
        type: "pie",
      data: pieData,
    });
  }, []);

  return (
    <div className="p-6 w-60 h-60">
        <h1 className='text-bold text-xl text-black font-bold'>Top Products</h1>
        
      <canvas id="pieChart" width="80" height="80"></canvas>
       {/* <div className=''>
        <ul>
            <li>Basic Tree
                55%
            </li>
            <li>Custom Shorts Pants</li>
            <li>Super hoddies</li>
        </ul>
       </div> */}
    </div>
  );
}

export default PieChart;


// components/PieChart.tsx

// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// interface PieChartProps {
//   data: number[];
//   labels: string[];
// }

// const PieChart: React.FC<PieChartProps> = ({ data, labels }) => {
//   const chartData = {
//     labels,
//     datasets: [
//       {
//         data,
//         backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'], // Add more colors if needed
//       },
//     ],
//   };

//   return (
//     <div>
//       <Pie data={chartData} />
//     </div>
//   );
// };

// export default PieChart;











      
