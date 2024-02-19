import React from "react";

import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const Features = () => {
  return (
    <div className="my-20">
        <div className="w-full flex flex-col md:grid md:grid-rows-3 md:grid-cols-2 md:h-auto md:my-16 md:gap-2 xl:grid-cols-3 xl:grid-rows-2">
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[45%] justify-center">
                        <RiMoneyEuroCircleLine className="h-10 w-10 mr-4" />
                        <p className="text-2xl font-bold">Affordable</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex text-center my-2 leading-[1.2rem]">
                        <p>Transform your online presence with our affordable web design and development services, delivering excellence without compromising your budget</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-4 md:hidden">
                <hr className="w-[85%] h-1 bg-[#e8e6ce] border-0 rounded-full" />
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[45%] justify-center">
                        <IoIosSpeedometer className="h-10 w-10 mr-4" />
                        <p className="text-2xl font-bold">Flexible</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex text-center my-2 leading-[1.2rem]">
                        <p>Enjoy the freedom to pause or cancel your subscription at your convenience</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-4 md:hidden">
                <hr className="w-[85%] h-1 bg-[#e8e6ce] border-0 rounded-full" />
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[45%] justify-center">
                        <IoIosSpeedometer className="h-10 w-10 mr-4" />
                        <p className="text-2xl font-bold">Fast</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex text-center my-2 leading-[1.2rem]">
                        <p>Swift and efficient solutions tailored to your needs, where client requests are typically completed in three days or less, ensuring speedy delivery of exceptional results</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-4 md:hidden">
                <hr className="w-[85%] h-1 bg-[#e8e6ce] border-0 rounded-full" />
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[45%] justify-center">
                        <IoIosSpeedometer className="h-10 w-10 mr-4" />
                        <p className="text-2xl font-bold">Easy</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex text-center my-2 leading-[1.2rem]">
                        <p>Simplify your experience with user-friendly and hassle-free processes. We provide good documentation and fast customer service</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-4 md:hidden">
                <hr className="w-[85%] h-1 bg-[#e8e6ce] border-0 rounded-full" />
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[45%] justify-center">
                        <GoGraph className="h-10 w-10 mr-4" />
                        <p className="text-2xl font-bold">Fruitful</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex text-center my-2 leading-[1.2rem]">
                        <p>We specialize in crafting fast-loading, SEO-optimized websites that yield impressive results, ensuring your digital journey is both seamless and successful</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-4 md:hidden">
                <hr className="w-[85%] h-1 bg-[#e8e6ce] border-0 rounded-full" />
            </div>
            <div className="w-full h-[20%] flex items-start justify-center pt-2 md:row-span-1 md:col-span-1 md:h-[10rem]">
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[45%] justify-center">
                        <FaLightbulb className="h-10 w-10 mr-4" />
                        <p className="text-2xl font-bold">Innovative</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] flex text-center my-2 leading-[1.2rem]">
                        <p>We leverage the latest and most effective technologies to build your websites, ensuring a modern and efficient online presence</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Features;