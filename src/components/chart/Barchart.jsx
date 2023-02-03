import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const styles = {
  width: '100%',
  display: "grid",
  "place-items": "center",
};

export const Barchart = ({ chartData }) => {
  return (
    <div style={styles}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: 'Spending - Last 7 Days',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
