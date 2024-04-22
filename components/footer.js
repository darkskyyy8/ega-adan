import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-center font-poppins pb-4 pt-10">
      <a href="https://dillamaulana18.vercel.app/">
        <div className="flex items-center justify-center hover:scale-110 transition duration-500">
          <Image src="/asset/dshi.png" width={35} height={35} alt="ds" />
        </div>
      </a>
      <a href="https://www.instagram.com/dillamaulana_18/">
        <div className="flex justify-center items-center hover:text-[#E0AA3E] transition duration-500 hover:scale-105">
          <FaInstagram />
          <h2 className="pl-1 font-semibold">dillamaulana_18</h2>
        </div>
      </a>
    </div>
  );
}

export default Footer;
