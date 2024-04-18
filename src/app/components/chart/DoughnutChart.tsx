"use client";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement
 
} from "chart.js";
import { Line  ,Doughnut   } from "react-chartjs-2";
import type { ChartData, ChartOptions } from 'chart.js';
interface LineProps {
  options: ChartOptions<'doughnut'>;
  data: ChartData<'doughnut'>;
}
import Paper from "@mui/material/Paper";

function DoughnutChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    ArcElement
    
  );

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Sample Bar Chart",
        data: [12, 19, 3],
        backgroundColor: ["rgba(54, 162, 235, 0.6)",'yellow', 'red'],
        borderColor: "green",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      annotation: {
        annotations: {
          textLabel: {
           
            color: "green",
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        color: "red",
        grid: {
          color: "gray",
        },
        ticks: {
          color: "gray",
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "gray",
        },
        ticks: {
          color: "gray",
        },
      },
    },
  };

  return (
    <Box marginTop={"20px"}>
      <Paper>
        <Doughnut    data={data} />
      </Paper>
    </Box>
  );
}

export default DoughnutChart;
