import React from "react";

import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { TbStretching } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";

const Features = () => {
  return (
    <div className="">
        <div className="w-full flex flex-col gap-8 md:grid md:grid-rows-3 md:grid-cols-2 md:h-auto md:my-16 md:gap-2 xl:grid-cols-3 xl:grid-rows-2">
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[80%] justify-start">
                        <img src="./euroSymbol.svg" className="h-7 w-7 mr-4 fill-[#7289F4]" alt="Euro symbol icon" />
                        <p className="text-3xl font-bold font-titleFont">Affordable</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex my-2 leading-[1.35rem] text-[1.25rem] font-textFont">
                        <p>Pay us less than you would pay an agency or a seperate web team. Let us give you better and faster results than a freelancer.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[80%] justify-start">
                        <TbStretching className="h-10 w-10 mr-4 text-[#7289F4]" />
                        <p className="text-3xl font-bold font-titleFont">Flexible</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex my-2 leading-[1.35rem] text-[1.25rem] font-textFont">
                        <p>Enjoy the freedom to cancel or pause your subscription any time you like.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[80%] justify-start">
                        <img src="./speedometerIcon.svg" className="h-9 w-9 mr-4 fill-[#7289F4]" alt="Speedometer icon" />
                        <p className="text-3xl font-bold font-titleFont">Fast</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex my-2 leading-[1.35rem] text-[1.25rem] font-textFont">
                        <p>Most requests are typically completed in three days or less</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[80%] justify-start">
                        <FaCheck className="h-8 w-8 mr-4 text-[#7289F4]" />
                        <p className="text-3xl font-bold font-titleFont">Easy</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex my-2 leading-[1.35rem] text-[1.25rem] font-textFont">
                        <p>Simple experience with user-friendly and hassle-free processes. We provide good documentation and fast customer service</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[80%] justify-start">
                        <GoGraph className="h-9 w-9 mr-4 text-[#7289F4]" />
                        <p className="text-3xl font-bold font-titleFont">Fruitful</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex my-2 leading-[1.35rem] text-[1.25rem] font-textFont">
                        <p>We promise you fast loading and high ranking websites that yield better results than your competitors</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[80%] justify-start">
                        <img src="./lightbulbIcon.svg" className="h-8 w-8 mr-4 fill-[#7289F4]" alt="Lightbulb icon" />
                        <p className="text-3xl font-bold font-titleFont">Innovative</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex my-2 leading-[1.35rem] text-[1.25rem] font-textFont">
                        <p>We use the latest and most effective technologies to build your websites, ensuring a modern and efficient online presence</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Features;