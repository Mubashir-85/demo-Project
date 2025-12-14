import React from "react";
import { DiCode } from "react-icons/di";
import { CiGrid42 } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { FaPencilRuler } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Offer() {
  return (
    <div className="w-[60%] mx-auto flex flex-col justify-center mt-30">
      <div className="text-center">
        <h1 className="text-[40px] text-white">What We Offer</h1>
        <p className="text-gray-300">
          Your Australian-Based Software Development partner for designing,
          building, and scalling digital platforms built with reliabilty,
          Transparency and long term support.
        </p>
      </div>
      {/* Cards */}
      <div className="mt-10 grid grid-cols-3 justify-items-center flex-wrap gap-8 ">
        {/* 1St card */}
        <div className=" h-60 w-64 text-left bg-[#222222] text-[#47bec6] border hover:scale-z-105 p-6 translate-y-0  ">
          <DiCode className="size-10 text-[#47bec6] border-black bg-black" />
          <h2 className="font-bold text-[24px] mt-2 text-white">
            Software Development
          </h2>
          <p className="text-gray-300 text-[15px] leading-tight mt-2">
            Tailored business system that enhances workflow efficiency{" "}
          </p>
        </div>

        {/* 2nd Card */}

        <div className="h-62 w-62 text-left bg-[#222222] text-[#47bec6] border hover:scale-z-105 p-5 translate-y-12   ">
          <CiGrid42 className="size-10 text-[#47bec6] border-black bg-black p-2" />
          <h2 className="font-semibold text-[24px] mt-2 text-white">
            Web Applications
          </h2>
          <p className="text-[#BBBBBB]">
            Fast, secure and scalable web Platform{" "}
          </p>
        </div>

        {/* 3rd card */}
        <div className="h-62 w-62 text-left bg-[#222222] p-6 text-[#47bec6] border hover:scale-z-105 translate-y-24  ">
          <CiMobile1 className="size-10 text-[#47bec6] border-black bg-black p-2" />
          <h2 className="font-bold text-[25px] mt-2 text-white">
            Mobile App Development
          </h2>
          <p className="text-gray-300">
            Intuitive iOS and Android App build for performance{" "}
          </p>
        </div>

        {/* 4th card */}
        <div className="h-60 w-62 text-left bg-[#222222] p-6 text-[#47bec6] border hover:scale-z-105 translate-y-0  ">
          <FaPencilRuler className="size-10 text-[#47bec6] border-black p-3 bg-black" />
          <h2 className="font-bold text-[25px] mt-2 text-white">
            UI/UX Design
          </h2>
          <p className="text-gray-300">
            Modern, user-centered interfaces that improves engagement.{" "}
          </p>
        </div>

        {/* 5th card */}
        <div className="h-60 w-62 text-left bg-[#222222] p-6 text-[#47bec6] border hover:scale-z-105 translate-y-12  ">
          <CiCloudOn className="size-10 text-[#47bec6] border-black bg-black p-2" />
          <h2 className="font-bold text-[25px] mt-2 text-white">
            Cloud & Devops
          </h2>
          <p className="text-gray-300">
            Secure deployment with high uptime & scalability{" "}
          </p>
        </div>

        {/* 6th card */}
        <div className="h-62 w-62 text-left bg-[#222222] p-6 text-[#47bec6] border hover:scale-z-105 translate-y-24 ">
          <FaCartShopping className="size-10 text-[#47bec6] border-black p-2 bg-black" />
          <h2 className="font-bold text-[25px] mt-2 text-white">
            E-Commerce & Integrations
          </h2>
          <p className="text-gray-300">
            Payments, logistics, CRM and business system integration.{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-40 flex-row ">
        <button className="text-[#47bec6] border px-5  rounded-2xl py-1  hover:text-[#CE014D] transition-all duration-500">
          Explore Services ⇾{" "}
        </button>
      </div>
    </div>
  );
}

export default Offer;
