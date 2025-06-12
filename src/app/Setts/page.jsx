import React from 'react'
import Header from '@/components/Header/header'
import Footer from "../Footer/page";
export default function page() {
  return (
    <div className='font-sans text-xl bg-black'>
      <Header />
      <div className="w-full flex flex-col justify-center items-center gap-3 p-3">
      <div className="w-full p-3 flex flex-col justify-center items-start gap-3">
          <h2 className="font-bold text-gray-400">SETTINGS</h2>
        </div>
        <div className="w-full flex p-1 lg:p-3 mt-10 flex-col justify-center items-center gap-5 *:border-1 *:border-gray-700 *:w-[90%] *:rounded-md *:lg:w-2/3">
        <div className="lg:w-2/3 flex flex-col justify-center items-center">
            <div className="w-full flex-flex-col justify-center items-start gap-5 p-3 border-b-1 border-gray-700 *:text-gray-400">
              <h3 className="font-bold text-[20px]">Notifications</h3>
              <p>Manage the notifications</p>
            </div>
            <div className="w-full flex flex-col lg:flex-row border-b-1 border-gray-700">
              <div className="lg:w-1/2 w-full flex flex-col justify-center gap-3 items-center p-2 *:w-full *:p-3">
              <h5 className='font-bold text-[20px]'>Email</h5>
                <div>
                <input type="checkbox"  id="ProductUpdates" name="ProductUpdates"/>
                <label className='text-gray-400' htmlFor="productUpdates"> Product Updates</label>
                </div>
                <div>
                <input type="checkbox"  id="security" name="security"/>
                <label className='text-gray-400' htmlFor="security"> Security updates</label>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col justify-center gap-3 items-center p-2 *:w-full *:p-3">
                <h5 className='font-bold text-[20px]'>Phone</h5>
                <div>
                <input type="checkbox"  id="Email" name="Email"/>
                <label className='text-gray-400' htmlFor="Email"> Email</label>
                </div>
                <div>
                <input type="checkbox"  id="securitytwo" name="securitytwo"/>
                <label className='text-gray-400' htmlFor="securitytwo"> Security updates</label>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end p-3 items-center">
              <button type="submit" className="px-6 py-2 rounded-md bg-blue-800 cursor-pointer">Save changes</button>
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-center">
            <div className="w-full flex-flex-col justify-center items-start gap-5 p-3 border-b-1 border-gray-700 *:text-gray-400">
              <h3 className="font-bold text-[20px]">Password</h3>
              <p>Update password</p>
            </div>
            <div className="w-full flex flex-col lg:flex-row border-b-1 border-gray-700">
              <div className="lg:w-1/2 w-full flex flex-col justify-center gap-5 items-center p-2 *:w-full *:border-1 *:outline-none *:rounded-md *:border-gray-700 *:p-3">
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div className="lg:w-1/2 w-full flex flex-col justify-center gap-5 items-center p-2 *:w-full *:border-1 *:outline-none *:rounded-md *:border-gray-700 *:p-3">
         
              </div>
            </div>
            <div className="w-full flex justify-end p-3 items-center">
              <button type="submit" className="px-6 py-2 rounded-md bg-blue-800 cursor-pointer">Update</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
