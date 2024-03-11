import React from "react";

import { FaArrowRight } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="bg-[#28293C] pb-16">
      <div className='flex justify-center items-center py-8'>
        <h3 className='text-4xl font-bold tracking-wider font-titleFont'>Pricing</h3>
      </div>
      <div className="flex justify-center">
        <div className="w-full flex flex-col items-center md:items-start justify-center gap-8 md:gap-4 lg:gap-16 md:flex-row">
          <div className="bg-[#16161A] rounded-[10px] w-[90%] ">
            <div className="bg-[#2CB67D] w-full h-[8%] rounded-t-[10px] flex items-center justify-center py-4">
              <h3 className="font-titleFont font-semibold text-[1.3rem]">Standard</h3>
            </div>
            <div className="w-full h-[17%] flex items-center justify-center py-12">
              <h3 className="font-titleFont font-bold text-[3rem]">150€</h3>
              <h3 className="font-titleFont font-bold text-[1.5rem] mt-6 ml-[.1rem]">/</h3>
              <h3 className="font-titleFont font-bold text-[1.5rem] mt-6">m</h3>
            </div>
            <div className="w-full h-[50%] flex flex-col gap-4 items-center">
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">One active job at a time</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Unlimited requests</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Average 48h delivery</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Fast & SEO optimized</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Easy credit-card payments</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Pause or cancel any time</p>
              </div>
            </div>
            <div className="w-full h-[20%] flex items-center justify-center">
              <button className="bg-[#7289F4] rounded-[10px] w-[80%] h-[60%]">
                <p className="font-titleFont font-bold text-[2rem]">Start now</p>
              </button>
            </div>
          </div>
          <div className="bg-[#16161A] rounded-[10px] w-[90%] ">
            <div className="bg-[#2CB67D] w-full h-[8%] rounded-t-[10px] flex items-center justify-center py-4">
              <h3 className="font-titleFont font-semibold text-[1.3rem]">Pro</h3>
            </div>
            <div className="w-full h-[17%] flex items-center justify-center py-12">
              <h3 className="font-titleFont font-bold text-[3rem]">250€</h3>
              <h3 className="font-titleFont font-bold text-[1.5rem] mt-6 ml-[.1rem]">/</h3>
              <h3 className="font-titleFont font-bold text-[1.5rem] mt-6">m</h3>
            </div>
            <div className="w-full h-[50%] flex flex-col gap-4 items-center">
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">One active job at a time</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Unlimited requests</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Average 48h delivery</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Fast & SEO optimized</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Easy credit-card payments</p>
              </div>
              <div className="flex items-center justify-start gap-3 pl-8 w-full">
                <img src="./checkmarkIcon.svg" className="h-6 w-6" alt="" />
                <p className="font-textFont text-2xl tracking-tight mt-[.2rem] leading-3">Pause or cancel any time</p>
              </div>
            </div>
            <div className="w-full h-[20%] flex items-center justify-center">
              <button className="bg-[#7289F4] rounded-[10px] w-[80%] h-[60%]">
                <p className="font-titleFont font-bold text-[2rem]">Start now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;