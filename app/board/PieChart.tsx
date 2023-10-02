


import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null); 

  useEffect(() => {
    if (chartRef.current) {
      
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const newChartInstance = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Label 1', 'Label 2', 'Label 3'],
            datasets: [
              {
                data: [10, 20, 30],
                backgroundColor: ['red', 'green', 'blue'],
              },
            ],
          },
          options: {
            
          },
        }) as Chart;

        
       chartInstanceRef.current = newChartInstance;
      }
    }
  }, []);

  return <canvas ref={chartRef} width={400} height={400}></canvas>;
}

export default PieChart;








      
