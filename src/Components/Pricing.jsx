import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className='flex justify-center mb-5 mt-5'>
        <h3 className='text-4xl font-bold tracking-wider lg:font-extrabold lg:text-5xl'>Pricing</h3>
      </div>
      <div className="h-96 p-5 pt-0 md:h-[50rem] md:p-10 md:pt-0 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-6 md:grid-rows-4 gap-3 md:gap-5 w-full h-full xl:w-[80%]">
          <div className="col-span-2 row-span-2 md:col-span-4 md:row-span-1 bg-yellow-200 rounded-2xl"></div>
          <div className="row-start-5 col-start-2 row-span-2 md:row-start-4 md:row-span-1 md:col-start-5 md:col-span-2 bg-blue-300 rounded-2xl"></div>
          <div className="row-start-3 row-span-2 md:row-span-3 md:col-start-5 md:row-start-1 md:col-span-2 bg-red-800 rounded-2xl"></div>
          <div className="row-start-3 col-start-1 row-span-4 md:row-span-3 md:col-span-4 md:row-start-2 bg-cyan-200 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;