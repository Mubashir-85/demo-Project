import React from "react";

function Hero() {
  return (
    <>
      <div className="w-[50%] flex flex-col justify-center mx-auto mt-50 relative">
        <div className="items-center text-center space-y-0">
          <h1 className=" text-[#36C7D2] mx-auto text-[48px] mb-0 leading-tight">
            We build Software That
          </h1>
          <h1 className=" text-white mx-auto text-[48px] mt-0 font-semibold leading-tight">
            Solves Real Business <span className="text-[#CE014D]">Problems</span>
          </h1>
          <p className="w-100% mx-auto text-center text-gray-200">
            Your Australian-Based software development partner for designing,
            building and scalling digital platform built with reliability,
            transparency and long term support
          </p>
        </div>

        <div className="mt-3 flex justify-center gap-8">
          <button className="text bg-[#0882a7] px-5 py-1 rounded-2xl text-white ">
            Get a Free Consulation
          </button>
          <button className="border-2 px-5 py-1 rounded-2xl text-[#47bec6]  hover:text-[#CE014D] transition-all duration-300">
            View Our Work
          </button>
        </div>

        <div className=" mt-10 flex items-center relative">
            <div className="h-[200px] w-[350px] rounded-2xl bg-white translate-x-16 z-10 ">
                <h1></h1>

            </div>

            <div className="h-[250px] w-[500px] rounded-2xl bg-white z-30 shadow-xl  ">

            </div>
            <div className="h-[200px] w-[350px] rounded-2xl bg-white -translate-x-16 z-10 ">

            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
