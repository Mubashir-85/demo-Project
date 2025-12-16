import React from "react";

function Industries() {
  return (
    <div className="bg-[#222222] md:w-[100%] flex flex-col justify-center mx-auto pt-2 pb-8">
      <div className="text-center flex flex-col mx-auto w-[95%] md:w-[60%] text-white mt-5">
        <h1 className="text-[36px] font-semibold">
          Industries{" "}
          <span className="text-[#47bec6] font-semibold ">We Serve</span>
        </h1>
        <p className="text-[#BBBBBB] leading-tight mt-2">
          Your Australian-based software development partner for designing,
          building and scalling degital platform built with reliability,
          transparency and long-term support.{" "}
        </p>
      </div>

      {/* cards */}
      <div className="md:w-[95%] mx-auto md:flex gap-5 justify-center mt-10">
        {/* card-1 */}
        <div className="h-75 w-66 text-center flex flex-col items-center bg-[#222222] text-white rounded-xl border border-transparent hover:border-white transition-all duration-600 hover:bg-black p-5  hover:rounded-xl ">
          <img src="Vector.svg" alt="" className="hover:text-white mt-3" />
          <h1 className="font-bold text-[25px] text-white mt-4 leading-tight">
            Logistics & Warehousing
          </h1>
          <p className="text-[#BBBBBB] leading-tight mt-2">
            Barcode scanning, inventory dashboard, automation workflows.
          </p>
        </div>
        {/* card-2 */}
        <div className="h-75 w-66 text-center flex flex-col items-center bg-[#222222] text-white rounded-xl border border-transparent hover:border-white transition-all duration-600 hover:bg-black p-5  hover:rounded-xl ">
          <img src="Vector (1).svg" alt="" className="hover:text-white mt-3" />
          <h1 className="font-bold text-[25px] text-white mt-4 leading-tight">
            Education & Tutoring.
          </h1>
          <p className="text-[#BBBBBB] leading-tight mt-2">
            Learning platforms, student portal, scheduling apps.
          </p>
        </div>
        {/* card-3 */}
        <div className="h-75 w-66 text-center flex flex-col items-center bg-[#222222] text-white rounded-xl border border-transparent hover:border-white transition-all duration-600 hover:bg-black p-5  hover:rounded-xl ">
          <img src="Vector (2).svg" alt="" className="hover:text-white mt-3" />
          <h1 className="font-bold text-[25px] text-white mt-4 leading-tight">
            Retail & E-Commerce
          </h1>
          <p className="text-[#BBBBBB] leading-tight mt-2">
            Online stores, payments integration, delivery system.
          </p>
        </div>
        {/* card-4 */}
        <div className="h-75 w-66 text-center flex flex-col items-center bg-[#222222] text-white rounded-xl border border-transparent hover:border-white transition-all duration-600 hover:bg-black p-6  hover:rounded-xl ">
          <img src="Vector (3).svg" alt="" className="hover:text-white mt-3" />
          <h1 className="font-bold text-[25px] text-white mt-4 leading-tight">
            Startup & MVPs
          </h1>
          <p className="text-[#BBBBBB] leading-tight mt-2">
            Product strategy, prototype ⇾ MVP ⇾ scalable release.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10 flex-row ">
        <button className="text-[#47bec6] border px-5  rounded-2xl py-1  hover:text-[#CE014D] transition-all duration-500 ">
          Learn How We Work ⇾{" "}
        </button>
      </div>
    </div>
  );
}

export default Industries;
