import React from "react";

const Hero = ({ navbarOpen }) => {
  const imgOpacity = navbarOpen ? 0 : 100;

  return (
    <div className="absolute top-0 w-full">
      <div className="w-full bg-[#e8e6ce] h-[28rem] rounded-b-[2rem] flex justify-center md:h-[28rem]">
        <div
          className={`bg-[#202831] w-[90%] md:w-[90%] lg:h-[35rem] xl:h-[40rem] h-[30rem] rounded-[2.5rem] absolute top-[4.6rem] opacity-${imgOpacity} delay-100 transition-opacity duration-300`}
        >
          <img
            src="./line.svg"
            alt=""
            className="w-[17rem] lg:w-[22rem] lg:top-[17.93rem] xl:w-[30rem] xl:top-[16.72rem] absolute top-[16.8rem] z-10 right-[20]"
          />
          <div className="h-full w-full flex items-start justify-center pt-16">
            <div className="text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-[#e8e6ce] tracking-wide flex flex-col items-center">
              <span className="inline-flex items-center leading-[0.9]">
                <span>BEAUTIFUL</span>
                <img
                  src="./star.svg"
                  alt="Beautiful Image"
                  className="w-10 md:w-14 md:mt-[-3rem] xl:w-16 ml-[-1.25rem] mt-[-2rem] rotate-[30deg]"
                />
                <img
                  src="./star.svg"
                  alt="Beautiful Image"
                  className="w-4 md:w-6 ml-[-1.5rem] xl:w-8 xl:mt-[2rem] xl:ml-[-2rem] mt-[.5rem] rotate-[20deg]"
                />
              </span>
              <span className="leading-[0.9]">WEBSITES</span>
              <span className="leading-[0.9]">MADE</span>
              <span className="text-[#46a2a1] lg:ml-4 inline-flex flex-col h-[calc(theme(fontSize.5xl)*0.9)] sm:h-[calc(theme(fontSize.6xl)*0.9)] md:h-[calc(theme(fontSize.7xl)*0.9)] lg:h-[calc(theme(fontSize.8xl)*0.9)] xl:h-[calc(theme(fontSize.8xl)*0.9)] overflow-hidden">
                <ul className="block animate-text-slide-5 text-center leading-[0.9] [&_li]:block">
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
        </div>
        <div>
          <img
            src="./star-blank.svg"
            alt=""
            className="w-[9rem] animate-spin rotate-[30deg] absolute top-[21rem] right-[3.5rem] sm:w-[11rem] sm:top-[22rem] sm:right-[3.5srem] md:top-[22rem] md:right-[5rem] lg:w-[14rem] lg:right-[5rem] xl:w-[18rem] 2xl:w-[20rem] 2xl:right-[10rem]"
          />
          <div className="flex flex-col items-center leading-[.9] font-bold text-md absolute top-[23.5rem] right-[5.25rem] sm:text-xl sm:leading-[.9] sm:top-[24.8rem] sm:right-[5.3rem] md:top-[25rem] md:right-[6.8rem] lg:text-2xl lg:leading-[.9] lg:top-[26rem] lg:right-[7.4rem] xl:text-4xl xl:leading-[.9] xl:right-[8.2rem] xl:top-[26.6rem] 2xl:right-[14.2rem] 2xl:top-[27.5rem] rotate-12 text-[#202831]">
            <p>HASSLE</p>
            <p className="font-black text-4xl leading-[.9] sm:text-5xl sm:leading-[.9] lg:text-6xl lg:leading-[.9] xl:text-7xl xl:leading-[.9]">
              FREE
            </p>
            <p className="text-sm leading-[.9] sm:text-lg sm:leading-[.9] lg:text-xl lg:leading-[.9] xl:text-3xl xl:leading-[.9]">
              GUARANTEE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
