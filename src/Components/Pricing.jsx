import React from "react";

import { FaArrowRight } from "react-icons/fa";

const Pricing = () => {
  return (
    <div>
      <div className='flex justify-center mb-5 mt-5'>
        <h3 className='text-4xl font-bold tracking-wider lg:font-extrabold lg:text-5xl lg:mb-2'>Pricing</h3>
      </div>
      <div className="p-8 pt-0 flex justify-center">
        <div className="w-full flex flex-col items-center md:items-start justify-center gap-8 md:gap-4 lg:gap-16 md:flex-row">
          <div className="bg-[#e8e6ce] rounded-2xl w-full max-w-[27.2rem] md:h-[30rem] flex flex-col items-center">
            <div className="w-full h-[15%] flex items-center justify-center text-[#202831]">
              <p className="font-bold text-3xl">Standard</p>
            </div>
            <hr className="w-[85%] h-1 bg-[#202831] border-0 rounded-full mb-5"/>
            <div className="flex items-start justify-start w-full h-16">
            <div className="w-[60%] bg-[#202831] h-full rounded-r-full flex items-center justify-center">
                <p className="text-[#e8e6ce] font-bold text-4xl">250€</p>
                <p className="text-[#e8e6ce] font-bold text-x mb-[-.5rem] ml-[.2rem]">/</p>
                <p className="text-[#e8e6ce] font-bold text-x mb-[-.7rem] ml-[.1rem]">m</p>
              </div>
            </div>
            <div className="w-full h-[60%] pl-16 pt-3">
              <ul className="font-semibold text-[#202831] text-md list-disc leading-10">
                <li>One active job at a time</li>
                <li>Average 48h delivery</li>
                <li>Unlimited requests</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel any time</li>
              </ul>
            </div>
            <div className="h-[20%] w-full flex justify-center">
              <button className="bg-[#46a2a1] h-16 w-[90%] mb-5 rounded-2xl flex text-[#202831]">
                <p className="text-2xl font-black w-[60%] h-full flex items-center justify-center">Start now</p>
                <div className="w-[40%] h-full flex items-center justify-end p-5">
                  <FaArrowRight className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
          <div className="bg-[#e8e6ce] rounded-2xl w-full h-full max-w-[27.2rem] md:h-[30rem] flex flex-col items-center">
            <div className="w-full h-[15%] flex items-center justify-center text-[#202831]">
              <p className="font-bold text-3xl">Pro</p>
            </div>
            <hr className="w-[85%] h-1 bg-[#202831] border-0 rounded-full mb-5"/>
            <div className="flex items-start justify-start w-full h-16">
              <div className="w-[60%] bg-[#202831] h-full rounded-r-full flex items-center justify-center">
                <p className="text-[#e8e6ce] font-bold text-4xl">400€</p>
                <p className="text-[#e8e6ce] font-bold text-x mb-[-.5rem] ml-[.2rem]">/</p>
                <p className="text-[#e8e6ce] font-bold text-x mb-[-.7rem] ml-[.1rem]">m</p>
              </div>
            </div>
            <div className="w-full h-[60%] pl-16 pt-3">
              <ul className="font-semibold text-[#202831] text-md list-disc leading-10">
                <li className="font-black">Two active jobs at a time</li>
                <li>Average 48h delivery</li>
                <li>Unlimited requests</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel any time</li>
              </ul>
            </div>
            <div className="h-[20%] w-full flex justify-center">
              <button className="bg-[#46a2a1] h-16 w-[90%] mb-5 rounded-2xl flex text-[#202831]">
                <p className="text-2xl font-black w-[60%] h-full flex items-center justify-center">Start now</p>
                <div className="w-[40%] h-full flex items-center justify-end p-5">
                <FaArrowRight className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;