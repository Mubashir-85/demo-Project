import React from "react";

function SecondContent() {
  return (
    <div className="md:w-[100%] bg-[#0C0C0C] mx-auto h-auto">
      <div className="w-[85%] md:w-[50%]  flex flex-col justify-center mx-auto pt-20 md:pt-30">
        <div>
          <h1 className="text-[#1A4B97] font-bold text-center text-[20px] md:text-3xl">
            We dont't just develop software,
          </h1>
          <h1 className="text-[#36C7D2] font-bold text-center md:text-3xl">
            We build <span className="text-white">long-term</span> degital
            capability.
          </h1>
          <p className="text-gray-400 text-center mt-10 md:text-[25px] leading-tight">
            Our partnership approach means we work closely with you at every
            stage from concept and design to development, laung and ongoing
            support. You get reliability, clarity and a technology team invested
            in your success{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
