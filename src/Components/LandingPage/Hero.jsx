import React from "react";

function Hero() {
  return (
    <>
      <div className="md:w-[100%] w-[100%] md:mx-auto bg-[#0C0C0C] md:pt-50 pt-30">
        <div className="md:w-[60%] w-[85%] mx-auto flex flex-col justify-center  md:mx-auto  relative">
          <div className="items-center text-center space-y-0">
            <h1 className=" text-[#36C7D2] mx-auto text-[24px]  md:text-[48px] mb-0 leading-tight">
              We Build Software That
            </h1>
            <h1 className=" text-white mx-auto text-[24px] md:text-[48px] mt-0 font-semibold leading-tight">
              Solves Real Business{" "}
              <span className="text-[#CE014D] ">Problems</span>
            </h1>
            <p className="md:w-[80%] text-sm mx-auto text-center leading-tight text-[#BBBBBB] mt-2">
              Your Australian-Based software development partner for designing,
              building and scalling digital platform built with reliability,
              transparency and long term support
            </p>
          </div>

          <div className="mt-3 md:w-[80%] md:mx-auto w-[85%] flex flex-col md:flex-row mx-auto gap-4 md:flex md:justify-center md:gap-8">
            <button className="text bg-[#0882a7] hover:bg-[#1A4B97] transition-all duration-500 px-5 py-1 rounded-2xl text-white ">
              Get a Free Consulation
            </button>
            <button className="border-2 px-5 py-1 rounded-2xl text-[#47bec6]  hover:text-[#CE014D] transition-all duration-300">
              View Our Work
            </button>
          </div>

          <div className=" mt-10 flex items-center relative">
            <div className="translate-x-8 md:translate-x-10 z-10 ">
              <img
                src="Frame 330.svg"
                className="w-[350px] rounded-2xl hover:scale-105 transition-all duration-300"
                alt=""
              />
            </div>

            <div className="z-30  rounded-2xl  ">
              <img
                src="MiddlePhoto.svg"
                className=" w-[500px] rounded-2xl  hover:scale-105 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="-translate-x-10 md:-translate-x-16 z-10 ">
              <img
                src="RightPhoto.svg"
                className="w-[350px] rounded-2xl hover:scale-105 transition-all duration-300"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
