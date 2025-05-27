"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginimg from "../../assets/img/auth-widgets.png";
import { useRouter } from "next/navigation";
import Footer from "../Footer/page";
import toast from "react-hot-toast";
export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!emailRegex.test(email)) {
      validationErrors.email = "Email is not valid !";
    }

    if (!passwordRegex.test(password)) {
      validationErrors.password =
        "Password should have at minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const loginInfo = {
        email,
        loginTime: new Date().toISOString(),
      };
      localStorage.setItem("user", JSON.stringify(loginInfo));
      
      toast.success("You loged in successfully !");
      router.push("/"); // ریدایرکت به صفحه اصلی
    }
  };

  return (
    <div className="font-sans text-xl w-full h-screen flex justify-center items-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center h-full bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-[95%] flex flex-col justify-center items-center lg:h-2/3 lg:gap-5 h-screen p-3 lg:w-1/2 bg-white lg:shadow-xl rounded-md *:flex *:flex-col *:p-3 *:text-black"
        >
          <h2 className="text-[30px] font-bold">Sign in</h2>
          <div className="w-full flex justify-center items-center gap-5 flex-col *:outline-none *:border-gray-400 *:border-1 *:rounded-md *:w-full">
            <input
              className="p-3"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-600 text-sm border-none px-3">
                {errors.email}
              </span>
            )}
            <input
              className="p-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-red-600 text-sm border-none px-3">
                {errors.password}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-3 *:p-2">
            <span className="text-blue-800 cursor-pointer">
              Forgot password ?
            </span>
            <button
              type="submit"
              className="w-full text-white py-2 rounded-md bg-blue-800 cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-3 w-1/2 h-full">
        <div className="flex justify-center items-center gap-2">
          <h2 className="flex flex-col justify-center items-center text-[25px] font-bold">
            Welcome to
          </h2>
          <h2 className="flex flex-col justify-center items-center text-[25px] font-bold text-[rgb(21,183,158)]">
            Admin Panel
          </h2>
        </div>
        <Image
          src={loginimg}
          className="w-1/2 h-1/2 object-cover"
          alt="login"
        />
      <Footer />
      </div>
    </div>
  );
}
