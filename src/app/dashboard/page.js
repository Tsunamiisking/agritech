"use client"
import React from "react";
import SideNav from "@/components/SideNav";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// BarChart component
const BarChart = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Metrics",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Inventory",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

// Main page component
function Page() {
  const dummyLabels = ["Sales", "Stock"];
  const dummyData = [10, 15];

  return (
    <>
      <div className="flex px-5 lg:px-0">
        <SideNav
          option1={"Dashboard"}
          option2={"Item History"}
          option3={"Add Item"}
          userType={"Seller"}
        />
        <div className="lg:ml-64 lg:px-5 flex flex-col items-center w-screen font-playfair">
          <h3 className="text-left">Good Morning, Douglas</h3>
          
          <div className="w-6/12 mt-5 border-2 border-green-600 rounded-lg p-4 mr-auto">
            <BarChart data={dummyData} labels={dummyLabels} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
