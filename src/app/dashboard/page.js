"use client";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import SideNav from "@/components/SideNavSeller";
import { Bar } from "react-chartjs-2";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CustomerType from "@/utils/CustomerType";
import { useUserRole } from "@/utils/CustomerType";

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
import { useAuthState } from "@/utils/auth";
import SellersDashboard from "@/components/SellersDashboard";

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

const Page = () => {
  const dummyLabels = ["Sales", "Stock"];
  const dummyData = [10, 15];
  const router = useRouter();

  const { user, loading: authLoading } = useAuthState();
  const { role, loading: roleLoading } = useUserRole(user?.uid);
  console.log(role)
  if (authLoading && roleLoading) {
    return <Loading />;
  } 
  if (role === "buyer") {
    router.push('/buyer/marketplace')
  }

  return (
    <>
      <div className="flex px-5 lg:px-0 font-roboto">
        <SideNav
          option1={"Dashboard"}
          option2={"Item History"}
          option3={"Add Item"}
          userType={role}
        />
        <SellersDashboard/>
        </div>
    </>
  );
};

export default function ProtectedDashboard() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
