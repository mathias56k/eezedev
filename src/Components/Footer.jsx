import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = ({ navbarOpen }) => {
  const imgOpacity = navbarOpen ? 0 : 50;

  return (
    <div className="h-40 mt-20">
      <div className="bg-[#16161A] w-full h-full flex flex-col items-center justify-center">
        <div className="w-[50%] lg:w-[30%] h-10 flex items-center justify-around">
            <FaFacebookF className="h-5 w-5 text-[#87878C] hover:text-[#7289F4] hover:opacity-100 cursor-pointer" />
          <a href="https://www.instagram.com/eezedev" target="_blank">
            <FaInstagram className="h-6 w-6 text-[#87878C] hover:text-[#7289F4] hover:opacity-100 cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@eezedev.com" target="_blank">
            <FaTiktok className="h-5 w-5 text-[#87878C] hover:text-[#7289F4] hover:opacity-100 cursor-pointer" />
          </a>
        </div>
        <div>
          <a href="./">
            <img
              src="./eezedev-dark-logo-2.png"
              alt="Logo"
              className={`h-8 mt-2 opacity-${imgOpacity} delay-100 transition-opacity duration-300 hover:opacity-100`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
