"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaSort } from "react-icons/fa";
import { PiChartPieFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { LuUserRoundPlus } from "react-icons/lu";
import Link from "next/link";
export default function header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-black text-gray-400 border-b-1 border-gray-700 p-3 flex justify-between items-center font-sans relative">
      <div className="flex justify-center items-center gap-3 text-xl *:cursor-pointer">
        <span onClick={toggleMenu}>
          <IoMenuOutline />
        </span>
        <span>
          <CiSearch />
        </span>
      </div>
      <div className="flex justify-center items-center gap-3 text-xl *:cursor-pointer">
        <span>
          <PiUsers />
        </span>
        <span>
          <IoMdNotificationsOutline />
        </span>
        <span className="bg-blue-800 rounded-full w-10 h-10 text-black flex justify-center items-center">
          hi
        </span>
        {isMenuOpen && (
          <>
            <div
              className={`fixed top-16 left-0 h-screen w-64 bg-black shadow-lg z-50 p-3 
            transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-400 ease-in-out`}
            >
              <div className="flex justify-center items-center gap-2 p-3 *:text-white">
                <span>
                  <RiDashboardHorizontalFill />
                </span>
                <h1>Dashboard</h1>
              </div>
              <div className="flex justify-center py-5 items-center w-full border-b-1 border-gray-700 *:text-[16px]">
                <div className="border border-gray-700 w-full rounded-md flex items-center gap-2">
                  <div className="flex flex-col justify-start items-start p-2 w-2/3">
                    <h6 className="text-gray-400">Workspace</h6>
                    <h6 className="text-white">Devias</h6>
                  </div>
                  <div className="flex justify-end p-2 items-center w-1/3 text-white">
                    <FaSort size={12} />
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-4 *:text-[16px]">
                <li className="p-2 text-gray-400 flex items-center gap-2 hover:bg-blue-800 rounded-md cursor-pointer">
                  <span>
                    <PiChartPieFill />
                  </span>
                  <Link href="/"> Overview</Link>
                </li>
                <li className="p-2 text-gray-400 flex items-center gap-2 hover:bg-blue-800 rounded-md cursor-pointer">
                  <span>
                    <PiUsers />
                  </span>
                  <Link href="/Customers">Customers</Link>
                </li>
                <li className="p-2 text-gray-400 flex items-center gap-2 hover:bg-blue-800 rounded-md cursor-pointer">
                  <span>
                    <IoSettingsOutline />
                  </span>
                  <Link href="/Setts"> Settings</Link>
                </li>
                <li className="p-2 text-gray-400 flex items-center gap-2 hover:bg-blue-800 rounded-md cursor-pointer">
                  <span>
                    <LuUserRound />
                  </span>
                  <Link href="/Account">Account</Link>
                </li>
                <li className="p-2 text-gray-400 flex items-center gap-2 hover:bg-blue-800 rounded-md cursor-pointer">
                  <span>
                  <LuUserRoundPlus />
                  </span>
                  <Link href="/Login">Log In</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
