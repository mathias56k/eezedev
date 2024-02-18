import React from "react";

import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const Features = () => {
  return (
    <div className="my-10">
        <div className="bg-red-900 w-full h-[50rem] flex flex-col md:grid md:grid-rows-3 md:grid-cols-2 md:h-auto md:my-16 gap-2 xl:grid-cols-3 xl:grid-rows-2">
            <div className="bg-blue-900 w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex items-center w-[50%] justify-left">
                    <RiMoneyEuroCircleLine className="h-12 w-12 mr-4" />
                    <p className="text-2xl font-bold">Affordable</p>
                </div>
            </div>
            <div className="bg-green-900 w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex items-center w-[50%] justify-left">
                    <IoIosSpeedometer className="h-12 w-12 mr-4" />
                    <p className="text-2xl font-bold">Fast</p>
                </div>
            </div>
            <div className="bg-yellow-900 w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex items-center w-[50%] justify-left">
                    <IoIosSpeedometer className="h-12 w-12 mr-4" />
                    <p className="text-2xl font-bold">Flexible</p>
                </div>
            </div>
            <div className="bg-orange-900 w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex items-center w-[50%] justify-left">
                    <IoIosSpeedometer className="h-12 w-12 mr-4" />
                    <p className="text-2xl font-bold">Easy</p>
                </div>
            </div>
            <div className="bg-pink-900 w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex items-center w-[50%] justify-left">
                    <GoGraph className="h-12 w-12 mr-4" />
                    <p className="text-2xl font-bold">Fruitful</p>
                </div>
            </div>
            <div className="bg-green-900 w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex items-center w-[50%] justify-left">
                    <FaLightbulb className="h-12 w-12 mr-4" />
                    <p className="text-2xl font-bold">Innovative</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Features;