import React from "react";

const Hero = ({ navbarOpen }) => {
  const imgOpacity = navbarOpen ? 0 : 100;

  return (
    <div className="h-[38rem] lg:h-[45rem] xl:h-[50rem] w-full flex justify-center">
        <div
          className={`bg-[#28293C] w-[90%] md:w-[90%] lg:h-[35rem] xl:h-[40rem] h-[30rem] rounded-[2.5rem] absolute top-[4.6rem] opacity-${imgOpacity} delay-100 transition-opacity duration-300`}
        >
          <div className="h-full w-full flex items-start justify-center pt-16">
            <div className="text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-[#F8F8FF] tracking-wide flex flex-col items-center">
              <span className="inline-flex items-center leading-[0.9]">
                <span>BEAUTIFUL</span>
                <img
                  src="./star.svg"
                  alt="Beautiful Image"
                  className="w-10 md:w-14 md:mt-[-3rem] xl:w-16 ml-[-1.25rem] mt-[-2.5rem] rotate-[15deg]"
                />
                <img
                  src="./star.svg"
                  alt="Beautiful Image"
                  className="w-5 md:w-6 ml-[-1.3rem] xl:w-8 xl:mt-[2rem] xl:ml-[-2rem] rotate-[30deg]"
                />
              </span>
              <span className="leading-[0.9]">WEBSITES</span>
              <span className="leading-[0.9]">MADE</span>
              <span className=" text-gradient-to-r lg:ml-4 inline-flex flex-col h-[calc(theme(fontSize.5xl)*0.9)] sm:h-[calc(theme(fontSize.6xl)*0.9)] md:h-[calc(theme(fontSize.7xl)*0.9)] lg:h-[calc(theme(fontSize.8xl)*0.9)] xl:h-[calc(theme(fontSize.8xl)*0.9)] overflow-hidden">
                <ul className="block animate-text-slide-5 text-center leading-[0.9] [&_li]:block">
                  <li className="bg-gradient-to-r from-[#7289F4] to-[#2CB67D] text-transparent bg-clip-text inline-block">EASY</li>
                  <li className="bg-gradient-to-r from-[#7289F4] to-[#2CB67D] text-transparent bg-clip-text inline-block">FAST</li>
                  <li className="bg-gradient-to-r from-[#7289F4] to-[#2CB67D] text-transparent bg-clip-text inline-block">CHEAP</li>
                  <li className="bg-gradient-to-r from-[#7289F4] to-[#2CB67D] text-transparent bg-clip-text inline-block">FROM US</li>
                  <li className="bg-gradient-to-r from-[#7289F4] to-[#2CB67D] text-transparent bg-clip-text inline-block">TO YOU</li>
                  <li className="bg-gradient-to-r from-[#7289F4] to-[#2CB67D] text-transparent bg-clip-text inline-block" aria-hidden="true">EASY</li>
                </ul>
              </span>
            </div>
          </div>
          <div>
        </div>
        </div>
      </div>
  );
};

export default Hero;
