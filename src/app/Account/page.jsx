"use client";
import React from "react";
import Header from "@/components/Header/header";
import { useEffect, useState } from "react";
import Footer from "../Footer/page";
export default function account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="font-sans text-xl">
      <Header />
      <div className="w-full flex flex-col justify-center items-center gap-3 p-3">
        <div className="w-full p-3 flex flex-col justify-center items-start gap-3">
          <h2 className="font-bold text-gray-400">ACCOUNT</h2>
        </div>
        <div className="w-full flex p-1 lg:p-3 mt-10 lg:flex-row flex-col justify-center items-center gap-5 *:border-1 *:border-gray-700 *:w-[90%] *:rounded-md">
          <div className="lg:w-1/3 flex flex-col justify-center items-center *:p-5">
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="bg-blue-800 rounded-full w-20 h-20 text-black flex justify-center items-center">
                hi
              </span>
              <span className="text-[20px] font-bold">Sofia Rivers</span>
              <span className="text-gray-400">Los Angeles USA</span>
              <span className="text-gray-400">GTM-7</span>
            </div>
            <div className="w-full flex justify-center items-center cursor-pointer text-blue-800 border-t-1 border-gray-700">
              Upload Picture
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-center">
            <div className="w-full flex-flex-col justify-center items-start gap-5 p-3 border-b-1 border-gray-700 *:text-gray-400">
              <h3 className="font-bold text-[20px]">Profile</h3>
              <p>The information can be edited</p>
            </div>
            <div className="w-full flex flex-col lg:flex-row border-b-1 border-gray-700">
              <div className="lg:w-1/2 w-full flex flex-col justify-center gap-5 items-center p-2 *:w-full *:border-1 *:outline-none *:rounded-md *:border-gray-700 *:p-3">
                <input type="text" placeholder="First Name" />
                <input
                  type="email"
                  placeholder={user ? user.email : "Loading..."}
                  disabled
                />
                <select
                  id="cars"
                  name="State"
                  className="*:text-gray-400 *:hover:bg-blue-800"
                >
                  <option value="volvo">State</option>
                  <option value="volvo">Alabama</option>
                  <option value="saab">New York</option>
                  <option value="fiat">San Francisco</option>
                  <option value="audi">Los Angeles</option>
                </select>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col justify-center gap-5 items-center p-2 *:w-full *:border-1 *:outline-none *:rounded-md *:border-gray-700 *:p-3">
                <input type="text" placeholder="Last Name" />
                <input
                  type="number"
                  placeholder="Phone Number"
                  maxLength={11}
                  minLength={11}
                />
                <input type="text" name="city" placeholder="City" />
              </div>
            </div>
            <div className="w-full flex justify-end p-3 items-center">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-blue-800 cursor-pointer"
              >
                Save details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
