import React, { useEffect } from "react";

const Header = ({ navbarOpen, setNavbarOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNavbarOpen]);

  return (
    <header className="w-full fixed top-0 left-0 flex z-20 px-8 p-2 bg-[#202831]">
      <div className="text-white flex-grow z-20">
        <a href="./">
          <img src="./eezedev-light-logo.png" alt="Logo" className="h-14" />
        </a>
      </div>
      <button
        className="md:hidden flex top-0 right-0 z-20 relative w-14 h-14 focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-8 transform -translate-x-8 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-1 w-8 bg-[#e8e6ce] rounded transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-2.5"
            }`}
          ></span>
          <span
            className={`absolute h-1 bg-[#e8e6ce] rounded transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-8 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-1 w-8 bg-[#e8e6ce] rounded transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-2.5"
            }`}
          ></span>
        </div>
      </button>
      <div className="hidden md:flex gap-5 text-[#e8e6ce] mr-4">
        <div className="h-full flex items-center justify-center">
          <p className="text-xl font-bold hover:text-[#46a2a1] cursor-pointer">about</p>
        </div>
        <div className="h-full flex items-center justify-center">
          <p className="text-xl font-bold hover:text-[#46a2a1] cursor-pointer">projects</p>
        </div>
        <div className="h-full flex items-center justify-center">
          <p className="text-xl font-bold hover:text-[#46a2a1] cursor-pointer">contact</p>
        </div>
      </div>
    </header>
  );
};
export default Header;