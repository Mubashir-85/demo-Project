import React from "react";
import { DiCode } from "react-icons/di";
import { CiGrid42 } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { FaPencilRuler } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";


function Offer() {
  return (
    <div className="bg-[#0C0C0C] md:w-[100%] flex mx-auto pt-20">
      <div className=" w-[85%] md:w-[70%] mx-auto flex flex-col justify-center">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity: 1, y:0}}
        transition={{ duration: 1 }}
         className="text-center">
          <h1 className="text-[40px] text-white">What We Offer</h1>
          <p className="text-gray-300 text-sm">
            Your Australian-Based Software Development partner for designing,
            building, and scalling digital platforms built with reliabilty,
            Transparency and long term support.
          </p>
        </motion.div>
        {/* Cards */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity: 1, y:0}}
        transition={{ duration: 1.2, delay: 0.2 }}
         className="mt-10  flex md:grid md:grid-cols-3 justify-center mx-auto md:justify-items-center flex-wrap gap-8 ">
          {/* 1St card */}
          <div className="relative h-60 w-64 text-left bg-[#222222] text-[#47bec6] border transition-all duration-300 ease-out transform  hover:scale-[1.02] p-4 md:p-6 translate-y-0 group  ">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <DiCode className="size-10 text-[#47bec6] border-black bg-black" />
            <h2 className="font-bold text-[24px] mt-2 text-white">
              Software Development
            </h2>
            <p className="text-[#BBBBBB] text-[15px] leading-tight mt-2">
              Tailored business system that enhances workflow efficiency{" "}
            </p>
          </div>

          {/* 2nd Card */}

          <div className="relative h-60 w-64 text-left bg-[#222222] text-[#47bec6] border transition-all duration-300 ease-out transform  hover:scale-[1.02] p-4 md:p-6 md:translate-y-12 group   ">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <CiGrid42 className="size-10 text-[#47bec6] border-black bg-black p-2" />
            <h2 className="font-semibold text-[24px] mt-2 text-white">
              Web Applications
            </h2>
            <p className="text-[#BBBBBB]">
              Fast, secure and scalable web Platform{" "}
            </p>
          </div>

          {/* 3rd card */}
          <div className="relative h-60 w-64 text-left bg-[#222222] text-[#47bec6] border transition-all duration-300 ease-out transform hover:scale-[1.02] p-4 md:p-6 md:translate-y-24 group">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <CiMobile1 className="size-10 text-[#47bec6] border-black bg-black p-2" />
            <h2 className="font-bold text-[25px] mt-2 text-white">
              Mobile App Development
            </h2>
            <p className="text-gray-300">
              Intuitive iOS and Android App build for performance{" "}
            </p>
          </div>

          {/* 4th card */}
          <div className="md:relative h-60 w-64 text-left bg-[#222222] text-[#47bec6] border transition-all duration-300 ease-out transform  hover:scale-[1.02] p-4 md:p-6 md:translate-y-0 group ">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <FaPencilRuler className="size-10 text-[#47bec6] border-black p-3 bg-black" />
            <h2 className="font-bold text-[25px] mt-2 text-white">
              UI/UX Design
            </h2>
            <p className="text-gray-300">
              Modern, user-centered interfaces that improves engagement.{" "}
            </p>
          </div>

          {/* 5th card */}
          <div className="relative h-60 w-64 text-left bg-[#222222] text-[#47bec6] border transition-all duration-300 ease-out transform  hover:scale-[1.02] p-4 md:p-6 md:translate-y-12 group">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <CiCloudOn className="size-10 text-[#47bec6] border-black bg-black p-2" />
            <h2 className="font-bold text-[25px] mt-2 text-white">
              Cloud & Devops
            </h2>
            <p className="text-gray-300">
              Secure deployment with high uptime & scalability{" "}
            </p>
          </div>

          {/* 6th card */}
          <div className="relative h-60 w-64 text-left bg-[#222222] text-[#47bec6] border transition-all duration-300 ease-out transform  hover:scale-[1.00] md:p-6 p-4 md:translate-y-24 group  ">
            <span
              className="absolute top-0 right-0 h-0 w-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:h-full"
            ></span>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#47bec6]
    transition-all duration-300 group-hover:w-full"
            ></span>
            <FaCartShopping className="size-10 text-[#47bec6] border-black p-2 bg-black" />
            <h2 className="font-bold text-[25px] mt-2 text-white">
              E-Commerce & Integrations
            </h2>
            <p className="text-gray-300">
              Payments, logistics, CRM and business system integration.{" "}
            </p>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{opacity: 1, y:0}}
        transition={{ duration: 1.2, delay: 0.2 }} 
        className="flex justify-center mt-15 md:mt-40 flex-row ">
          <button className="text-[#47bec6] border px-5  rounded-2xl py-1  hover:text-[#CE014D] transition-all duration-500">
            Explore Services ⇾{" "}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Offer;
