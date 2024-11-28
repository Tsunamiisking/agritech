"use client";
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
import NavItem from "@/components/NavItem";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
const item = [
  {
    id: "FP001",
    itemName: "Tomatoes",
    description:
      "Fresh organic tomatoes harvested from local farms, ideal for salads and cooking.",
  },
  {
    id: "FP002",
    itemName: "Maize",
    description:
      "High-quality dried maize grains, perfect for flour production and animal feed.",
  },
  {
    id: "FP003",
    itemName: "Carrots",
    description:
      "Crisp, sweet carrots grown in nutrient-rich soil, ideal for raw consumption or cooking.",
  },
  {
    id: "FP004",
    itemName: "Potatoes",
    description:
      "Freshly harvested potatoes, suitable for boiling, frying, or making mashed potatoes.",
  },
  {
    id: "FP005",
    itemName: "Cabbage",
    description:
      "Large, green cabbages perfect for salads, coleslaw, and stir-fry dishes.",
  },
];

const messages = [
  {
    name: "John Doe",
    id: "ORD123456",
    messageContent:
      "I need a quick update on the delivery status of my fertilizer order.",
  },
  {
    name: "Jane Smith",
    id: "ORD987654",
    messageContent:
      "Can you confirm if the tractor parts I ordered are in stock?",
  },
  {
    name: "Samuel Brown",
    id: "ORD112233",
    messageContent:
      "The seeds I received were damaged. Please assist with a replacement.",
  },
  {
    name: "Emily Davis",
    id: "ORD445566",
    messageContent: "Do you offer bulk discounts for pesticides?",
  },
  {
    name: "Michael Johnson",
    id: "ORD778899",
    messageContent:
      "Can I change the delivery address for my irrigation equipment?",
  },
];

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
          <h3 className="mr-auto font-bold mt-2">Good Morning, Douglas</h3>

          <div className="flex flex-row mt-10  mb-10 ">
            <div className="border-2 border-green-600 rounded-lg p-4 mr-auto ">
              <BarChart data={dummyData} labels={dummyLabels} />
            </div>
            <div className="border-2 border-secondary ml-5 flex flex-col p-2 rounded-lg  ">
              <p className="mx-auto"> Messages</p>
              <div className="flex flex-col">
                {messages.map((message) => (
                  <span key={message.id} className="border-b-2 pb-2">
                    <span className=" flex font-bold">
                      <span>{message.name}</span>
                      <span className="ml-auto"> {message.id}</span>
                    </span>
                    <span>{message.messageContent}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col border-2 border-secondary rounded-xl">
            <p className="mx-auto">Recent</p>
            <div>
              {item.map((item) => (
                <div key={item.id} className="p-2 border-b-2">
                  <p className="font-bold">{item.itemName}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
