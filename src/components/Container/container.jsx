import React from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { LuDollarSign } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import Header from "../Header/header";
import Chartjs from "../Chartjs/chartjs";
export default function container() {
  return (
    <div>
      <Header />
      <div className="text-white font-sans text-xl overflow-y-hidden">
        <div className="w-full flex flex-wrap justify-around mt-8 px-2">
          <div className="bg-[#1f1f1f] sm:w-[47%] lg:w-[23%] w-full rounded-md border border-gray-700">
            <div className="flex justify-between items-center p-5">
              <div className="flex flex-col gap-2">
                <h5 className="font-bold text-[16px] text-blue-800">BUDGET</h5>
                <h6 className="font-bold text-[16px] text-gray-400">$24K</h6>
              </div>
              <div className="text-black w-12 h-12 flex justify-center items-center rounded-full bg-purple-500">
                <LuDollarSign size={20} />
              </div>
            </div>
            <div className="p-5 text-sm text-gray-400 flex items-center gap-2">
              <GoArrowUp className="text-green-500" />
              <span className="text-green-500">12%</span>
              <span>Since last month</span>
            </div>
          </div>
          <div className="bg-[#1f1f1f] sm:w-[47%] lg:w-[23%] w-full rounded-md border border-gray-700">
            <div className="flex justify-between items-center p-5">
              <div className="flex flex-col gap-2">
                <h5 className="font-bold text-[16px] text-blue-800">
                  TOTAL CUSTOMERS
                </h5>
                <h6 className="font-bold text-[16px] text-gray-400">1.6K</h6>
              </div>
              <div className="text-black w-12 h-12 flex justify-center items-center rounded-full bg-green-500">
                <PiUsers size={20} />
              </div>
            </div>
            <div className="p-5 text-sm text-gray-400 flex items-center gap-2">
              <GoArrowDown className="text-red-500" />
              <span className="text-red-500">16%</span>
              <span>Since last month</span>
            </div>
          </div>

          <div className="bg-[#1f1f1f] sm:w-[47%] lg:w-[23%] w-full rounded-md border border-gray-700">
            <div className="flex justify-between items-center p-5">
              <div className="flex flex-col gap-2">
                <h5 className="font-bold text-[16px] text-blue-800">
                  TASK PROGRESS
                </h5>
                <h6 className="font-bold text-[16px] text-gray-400">75.5%</h6>
              </div>
              <div className="text-black w-12 h-12 flex justify-center items-center rounded-full bg-orange-500">
                <TfiMenuAlt size={20} />
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="w-full flex items-center">
                <div className="bg-blue-800 h-2 w-2/3 rounded-l-full"></div>
                <div className="bg-blue-200 h-2 w-1/3 rounded-r-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-[#1f1f1f] sm:w-[47%] lg:w-[23%] w-full rounded-md border border-gray-700">
            <div className="flex justify-between items-center p-5">
              <div className="flex flex-col gap-2">
                <h5 className="font-bold text-[16px] text-blue-800">
                  TOTAL PROFIT
                </h5>
                <h6 className="font-bold text-[16px] text-gray-400">$15K</h6>
              </div>
              <div className="text-black w-12 h-12 flex justify-center items-center rounded-full bg-blue-400">
                <PiNewspaperClippingLight size={20} />
              </div>
            </div>
            <div className="p-5 text-black text-lg flex justify-center items-center gap-1">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        </div>

        <Chartjs />
      </div>
    </div>
  );
}
