import React from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { LuDollarSign } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import Header from "../Header/header"
import Chartjs from "../Chartjs/chartjs";
export default function container() {
  return (
    <div className="text-white font-sans text-xl overflow-y-hidden">
      <Header />
      <div className="w-full flex p-1 lg:p-3 mt-8 md:flex-row flex-col justify-center items-center gap-5 *:lg:w-2/8 *:border-1 *:border-gray-700 *:w-[90%] *:rounded-md">
        <div className="flex flex-col">
          <div className="w-full flex h-2/3">
            <div className="w-2/3 flex flex-col gap-5 text-gray-400 justify-center items-start p-5">
              <h5 className="font-bold text-[16px] text-blue-800">BUDGET</h5>
              <h6 className="font-bold text-[16px] text-gray-400">$24K</h6>
            </div>
            <div className="w-1/3 flex justify-end items-center p-5">
              <span className="bg-purple-500 rounded-full w-15 text-black h-15 flex justify-center items-center">
                <LuDollarSign />
              </span>
            </div>
          </div>
          <div className="w-full h1/3 flex justify-start items-center gap-2 p-5">
            <span className="text-green-500">
              <GoArrowUp />
            </span>
            <span className="text-green-500">12%</span>
            <span className="text-gray-400">Since last month</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex h-2/3">
            <div className="w-2/3 flex flex-col gap-5 text-gray-400 justify-center items-start p-5">
              <h5 className="font-bold text-[16px] text-blue-800">
                TOTAL CUSTOMERS
              </h5>
              <h6 className="font-bold text-[16px] text-gray-400">1.6K</h6>
            </div>
            <div className="w-1/3 flex justify-end items-center p-5">
              <span className="bg-green-500 rounded-full w-15 text-black h-15 flex justify-center items-center">
                <PiUsers />
              </span>
            </div>
          </div>
          <div className="w-full h1/3 flex justify-start items-center gap-2 p-5">
            <span className="text-red-500">
              <GoArrowDown />
            </span>
            <span className="text-red-500">16%</span>
            <span className="text-gray-400">Since last month</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex h-2/3">
            <div className="w-2/3 flex flex-col gap-5 text-gray-400 justify-center items-start p-5">
              <h5 className="font-bold text-[16px] text-blue-800">
                TASK PROGRESS
              </h5>
              <h6 className="font-bold text-[16px] text-gray-400">75.5%</h6>
            </div>
            <div className="w-1/3 flex justify-end items-center p-5">
              <span className="bg-orange-500 rounded-full w-15 text-black h-15 flex justify-center items-center">
                <TfiMenuAlt />
              </span>
            </div>
          </div>
          <div className="w-full p-5 h-1/3 flex justify-center items-center">
            <span className="bg-blue-800 w-2/3 h-2"></span>
            <span className="bg-blue-200 w-1/3 h-2"></span>
            <span className="text-black">.</span>
          </div>
        </div>
        <div>
          <div className="w-full flex h-2/3">
            <div className="w-2/3 flex flex-col gap-5 justify-center items-start p-5">
              <h5 className="font-bold text-[16px] text-blue-800">
                TOTAL PROFIT
              </h5>
              <h6 className="font-bold text-[16px] text-gray-400">$15K</h6>
            </div>
            <div className="w-1/3 flex justify-end items-center p-5">
              <span className="bg-blue-400 rounded-full w-15 text-black h-15 flex justify-center items-center">
                <PiNewspaperClippingLight />
              </span>
            </div>
          </div>
          <div className="w-full p-5 h-1/3 flex justify-center items-center">
            <span className="text-black">.</span>
            <span className="text-black">.</span>
            <span className="text-black">.</span>
          </div>
        </div>
      </div>
      <Chartjs />
    </div>
  );
}
