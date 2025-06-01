"use client";
import React from "react";
import { IoIosDesktop } from "react-icons/io";
import { PiDeviceTabletLight } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Chartjs() {
  const barData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [{
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3, 15, 13, 14, 17, 10, 16],
      backgroundColor: "rgb(25, 60, 184)",
      borderRadius: 5,
      barThickness: 20,
    }],
  };

  const pieData = {
    datasets: [{
      label: "رای‌ها",
      data: [300, 50, 100],
      backgroundColor: ["rgb(25, 60, 184)", "rgb(255, 105, 0)", "rgb(0, 201, 81)"],
      borderWidth: 1,
    }],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 2,
          callback: function (value) {
            return `${value}K`;
          },
        },
      },
    },
  };


  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-5 mt-8 px-2 text-white">
      <div className="lg:w-2/3 w-full bg-[#1f1f1f] border border-gray-700 rounded-md p-4 min-h-[680px]">
        <Bar data={barData} options={barOptions} />
      </div>

      <div className="lg:w-1/3 w-full bg-[#1f1f1f] border border-gray-700 rounded-md p-4 min-h-[680px] flex flex-col justify-between">
        <div className="flex-grow flex justify-center items-center">
          <div className="w-full h-[300px]">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
        <div className="flex justify-around items-center mt-4 text-sm text-gray-300">
          <div className="flex flex-col items-center gap-1">
            <IoIosDesktop className="text-2xl text-blue-500" />
            <span>Desktop</span>
            <span className="text-blue-400">63%</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <PiDeviceTabletLight className="text-2xl text-orange-400" />
            <span>Tablet</span>
            <span className="text-orange-300">15%</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaPhoneAlt className="text-2xl text-green-400" />
            <span>Phone</span>
            <span className="text-green-300">22%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
