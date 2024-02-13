import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = ({ navbarOpen }) => {
  const imgOpacity = navbarOpen ? 0 : 30;

  return (
    <div className="h-40 mt-20">
      <div className="bg-[#344150] w-full h-full flex flex-col items-center justify-center">
        <div className="w-[50%] lg:w-[30%] h-10 flex items-center justify-around">
          <FaFacebookF className="h-5 w-5 text-[#e8e6ce76] hover:text-[#46a2a1] hover:opacity-100 cursor-pointer" />
          <FaInstagram className="h-6 w-6 text-[#e8e6ce76] hover:text-[#46a2a1] hover:opacity-100 cursor-pointer" />
          <FaTiktok className="h-5 w-5 text-[#e8e6ce76] hover:text-[#46a2a1] hover:opacity-100 cursor-pointer" />
        </div>
        <div>
          <img
            src="./eezedev-light-logo.png"
            alt="Logo"
            className={`h-14 opacity-${imgOpacity} delay-100 transition-opacity duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
