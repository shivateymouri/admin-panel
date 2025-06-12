import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import dev from "../../assets/img/dev.png"
export default function page() {
  return (
    <footer className="flex flex-col justify-center items-center font-sans lg:fixed lg:right-0 lg:bottom-0">
      <div className="w-full flex xl:flex-row-reverse flex-col xl:justify-around justify-center gap-5 xl:gap-0 py-5 xl:px-3 items-center">
        <Image
          className="w-[120px] h-[120px] object-cover rounded-full z-50"
          src={dev}
          alt="dev"
        />
        <div className="flex flex-col justify-center items-center gap-3 p-3">
          <p className="text-gray-500 animate-bounce">
            Developed by Shiva Teymouri
          </p>
          <div className="flex gap-3">
            <a
              className="text-gray-500 text-[20px]"
              href="https://www.instagram.com/shivateymouri.dev?igsh=MXh3NXBhMjhsZ2tiYg=="
            >
              <FaInstagram />
            </a>
            <a
              className="text-gray-500 text-[20px]"
              href="http://www.linkedin.com/in/shiva-teymoori"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
