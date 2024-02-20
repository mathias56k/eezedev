import React from "react";

const Hero = ({ navbarOpen }) => {
  const imgOpacity = navbarOpen ? 0 : 100;

  return (
    <div className="-mt-4 h-[30rem] p-5 md:h-[50rem] md:p-10 md:pt-5">
      <div className={`bg-[#e8e6ce] w-full h-full rounded-2xl flex flex-col opacity-${imgOpacity} delay-100 transition-opacity duration-300`}>
      <img src="./line.svg" alt="" className="w-[13rem] absolute top-[22.17rem] z-10 right-0 md:w-[23rem] md:top-[33.18rem]" />
        <div className="h-[50%] w-[83%] md:w-full lg:max-w-[60rem] xl:max-w-[80rem] max-w-[26rem] p-8">
          <div className="text-5xl font-black md:text-7xl xl:text-8xl text-[#202831] tracking-wide leading-[.9]">
            <span className="inline-flex items-center">
              <span>BEAUTIFUL</span>
              <img src="./star.svg" alt="Beautiful Image" className="w-10 md:w-14 md:mt-[-3rem] ml-[-1.25rem] mt-[-2rem] rotate-[30deg] animate-" />
              <img src="./star.svg" alt="Beautiful Image" className="w-4 md:w-6 ml-[-1.5rem] mt-[.5rem] rotate-[20deg]" />
            </span>
            <span className="lg:ml-6 ">WEBSITES MADE</span>
            <span className="text-[#46a2a1] lg:ml-4 inline-flex flex-col h-[calc(theme(fontSize.5xl)*0.9)] md:h-[calc(theme(fontSize.7xl)*0.9)] xl:h-[calc(theme(fontSize.8xl)*0.9)] overflow-hidden">
              <ul className="block animate-text-slide-5 text-left leading-[0.9] [&_li]:block">
                <li>EASY</li>
                <li>FAST</li>
                <li>CHEAP</li>
                <li>FROM US</li>
                <li>TO YOU</li>
                <li aria-hidden="true">EASY</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="h-[40%] w-[95%] bg-[#344150] rounded-r-[9rem] mt-3 relative">
          <img src="./star-blank.svg" alt="" className="w-[6.8rem] animate-spin rotate-[30deg] absolute top-[-2rem] right-[-1rem] md:w-48 md:top-[-4rem]" />
          <div className="flex flex-col items-center leading-[.9] font-bold text-xs absolute top-[-.2rem] right-0 rotate-12 text-[#202831] md:text-xl md:font-extrabold md:right-[1.1rem] md:top-[-.6rem]">
            <p>HASSLE</p>
            <p className="font-black text-2xl leading-[.9] md:leading-[.6] md:text-4xl">FREE</p>
            <p>GUARANTEE</p>
          </div>
          <img src="./character.png" alt="" className="w-48 absolute left-4 top-4 md:w-96 md:top-[-2rem] lg:w-[30rem] lg:top-[-8rem] lg:left-16" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
