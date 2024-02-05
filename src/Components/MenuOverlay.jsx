import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 right-0 w-full z-14 h-full bg-[#202831] text-[#e8e6ce] bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <ul className="w-full flex flex-col items-center justify-center">
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
      </ul>
    </nav>
  );
};

export default MenuOverlay;