import React from "react";

function Hero() {
  return (
    <>
      <div className="w-[50%]  flex flex-col justify-center mx-auto mt-50 relative">
        <div className="items-center text-center space-y-0">
          <h1 className=" text-[#47bec6] mx-auto text-[45px] mb-0">
            We build Software That
          </h1>
          <h1 className=" text-white mx-auto text-[50px] mt-0">
            Solves Real Business <span className="text-red-400">Problem</span>
          </h1>
          <p className="w-100% mx-auto text-center text-gray-200">
            Your Australian-Based software development partner for designing,
            building and scalling digital platform built with reliability,
            transparency and long term support
          </p>
        </div>

        <div className="mt-5 flex justify-center gap-8">
          <button className="text bg-[#0882a7] px-5 py-1 rounded-2xl text-white ">
            Get a Free Consulation
          </button>
          <button className="border-2 px-5 py-1 rounded-2xl text-[#47bec6]  hover:text-red-400 transition-all duration-300">
            View Our Work
          </button>
        </div>

        <div className="w-100% mt-15 flex items-center gap-[-50px]">
            <div className="h-[250px] w-[350px] rounded-2xl bg-white ">
                <h1></h1>

            </div>

            <div className="h-[300px] w-[400px] rounded-2xl bg-white z-10 border-2 transform-translate-x-6 ">

            </div>
            <div className="h-[250px] w-[350px] rounded-2xl bg-white ">

            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
