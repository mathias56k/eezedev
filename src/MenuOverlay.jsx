import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 right-0 w-full z-14 h-full bg-[#151a20] text-[#e8e6ce] bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <ul className="w-full flex flex-col items-center justify-center">
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro transition ease-in-out duration-300 hover:text-[#46a2a1]">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            home
          </a>
        </li>
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro hover:text-[#46a2a1]">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
           about
          </a>
        </li>
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro hover:text-[#46a2a1]">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
           projects
          </a>
        </li>
        <li className="nav-li text-[4.25rem] max-[490px]:text-[3.5rem] font-semibold font-sourceCodePro hover:text-[#46a2a1]">
          <a
            href="/"
            className="nav-link"
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