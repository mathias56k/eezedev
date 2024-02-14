import React, { useEffect } from "react";

import { LuSunMedium } from "react-icons/lu";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  useEffect(() => {
    const body = document.body;

    if (navbarOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [navbarOpen]);

  return (
    <nav
      className={`fixed flex flex-col justify-between top-0 right-0 w-full z-14 h-full bg-[#202831] text-[#e8e6ce] bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0 z-20" : "opacity-0 translate-x-full"
      }`}
    >
      <ul className="w-full flex flex-col items-center justify-center h-full">
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro">
          <a
            href="/"
            className="nav-link hover:text-[#46a2a1]"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
           about
          </a>
        </li>
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro">
          <a
            href="/"
            className="nav-link hover:text-[#46a2a1]"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
           projects
          </a>
        </li>
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro">
          <a
            href="/"
            className="nav-link hover:text-[#46a2a1]"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
           contact
          </a>
        </li>
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro">
          <a
            href="/"
            className="nav-link hover:text-[#46a2a1]"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
           faq
          </a>
        </li>
      </ul>
      <div className="h-16 w-full flex">
        <div className="h-full w-[50%] flex justify-center items-center">   
          <button className="font-bold text-xl w-8 h-8 border-[#e8e6ce] border-2 rounded-md flex justify-center items-center hover:text-[#46a2a1]">
            <LuSunMedium />
          </button>
        </div>
        <div className="h-full w-[50%] flex gap-2 justify-center items-center">
            <p className="font-bold text-xl -mb-1 hover:text-[#46a2a1] cursor-pointer">ENG</p>
            <p className="font-bold text-xl">|</p>
            <p className="font-bold text-xl -mb-1 hover:text-[#46a2a1] cursor-pointer">EST</p>
        </div>
      </div>
    </nav>
  );
};

export default MenuOverlay;