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

// Register chart elements
ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
export default function chartjs() {
  const barData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 15, 13, 14, 17, 10, 16],
        backgroundColor: "rgb(25, 60, 184)",
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const pieData = {
    datasets: [
      {
        label: "رای‌ها",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(25, 60, 184)",
          "rgb(255, 105, 0)",
          "rgb(0, 201, 81)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const pieOptions = {
    responsive: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // شروع از صفر
        max: 20,          // حداکثر مقدار محور
        ticks: {
          stepSize: 2,    // فاصله بین اعداد
          callback: function (value) {
            return `${value}K`; // افزودن پسوند
          },
        },
      },
    },
  };
  
  return (
    <div className="w-full text-xl flex p-1 lg:p-3 mt-10 lg:flex-row flex-col justify-center items-center gap-5 *:border-1 *:border-gray-700 *:w-[90%] *:rounded-md font-sans">
      <div className="lg:w-2/3 flex flex-col justify-center items-center">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="lg:w-1/3 lg:min-h-[622px] flex flex-col justify-center items-center *:p-5">
        <Pie data={pieData} options={pieOptions} width={350} height={350} />
        <div className="w-full flex justify-center gap-5 items-center *:w-1/6 *:flex *:flex-col *:justify-center *:items-center *:gap-3">
          <div>
            <span><IoIosDesktop /></span>
            <span>Desktop</span>
            <span>63%</span>
          </div>
          <div>
            <span><PiDeviceTabletLight /></span>
            <span>Tablet</span>
            <span>15%</span>
          </div>
          <div>
            <span><FaPhoneAlt /></span>
            <span>Phone</span>
            <span>22%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
