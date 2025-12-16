import React from "react";

function Work() {
  return (
    <div className="md:w-[100%] bg-[#0C0C0C] mx-auto h-auto">
      <div className="w-[75%] mx-auto flex flex-col justify-center pt-15 pb-15">
        <div className="text-center">
          <h1 className="text-white text-[36px] font-semibold">How We Work</h1>
          <p className="text-[#BBBBBB]">Build & Grow Process</p>
        </div>

        <div className="mt-15 flex justify-center flex-wrap gap-10">
          <div className="relative h-45 w-65 text-left bg-[#222222] text-[#47bec6] border p-6 group transition-all duration-300 transform hover:scale-[1.02]">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <h1 className="font-bold text-[25px] text-white">Understand</h1>
            <p className="text-[#BBBBBB] leading-tight mt-2">
              we dive into your goal, workfolw and challenges
            </p>
          </div>

          <div className="relative h-45 w-65 text-left bg-[#222222] text-[#47bec6] border p-6 group transition-all duration-300 transform hover:scale-[1.02]">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <h1 className="font-bold text-[25px] text-white">Plan</h1>
            <p className="text-[#BBBBBB] leading-tight mt-2">
              We architect scalable, future-ready solution{" "}
            </p>
          </div>

          <div className="relative h-45 w-65 text-left bg-[#222222] text-[#47bec6] border p-6 group transition-all duration-300 transform hover:scale-[1.02]">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <h1 className="font-bold text-[25px] text-white">Build</h1>
            <p className="text-[#BBBBBB] leading-tight mt-2">
              Our agile dev team delivers in tested increament
            </p>
          </div>

          <div className="relative h-45 w-65 text-left bg-[#222222] text-[#47bec6] border p-6 group transition-all duration-300 transform hover:scale-[1.02]">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <h1 className="font-bold text-[25px] text-white">Support & Grow</h1>
            <p className="text-[#BBBBBB] leading-tight mt-2">
              Ongoing improvement, support and feature scaling
            </p>
          </div>

          <div className="relative h-45 w-65 text-left bg-[#222222] text-[#47bec6] border p-6 group transition-all duration-300 transform hover:scale-[1.02]">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <h1 className="font-bold text-[25px] text-white">Launch</h1>
            <p className="text-[#BBBBBB] leading-tight mt-2">
              Seamless handover with stability and performance gaurantee
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10 flex-row ">
          <button className="text-[#47bec6] border px-5  rounded-2xl py-1  hover:text-[#CE014D] transition-all duration-500 ">
            Learn How We Work ⇾{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
