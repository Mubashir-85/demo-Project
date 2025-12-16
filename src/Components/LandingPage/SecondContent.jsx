import React from "react";
import { motion } from "framer-motion";


function SecondContent() {
  return (
    <div className="md:w-[100%] bg-[#0C0C0C] mx-auto h-auto">
      <div className="w-[85%] md:w-[50%]  flex flex-col justify-center mx-auto pt-20 md:pt-30">
        <div>
          <motion.h1
          initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity: 1, y:0}}
        transition={{ duration: 0.8, delay: 0.1 }} 
          className="text-[#1A4B97] font-bold text-center text-[20px] md:text-3xl">
            We dont't just develop software,
          </motion.h1>
          <motion.h1
          initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity: 1, y:0}}
        transition={{ duration: 0.8, delay: 0.2 }}
           className="text-[#36C7D2] font-bold text-center md:text-3xl">
            We build <span className="text-white">long-term</span> degital
            capability.
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, x: -200 }}
        whileInView={{opacity: 1, x:0}}
        transition={{ duration: 1, delay: 0.5 }}
           className="text-gray-400 text-center mt-10 md:text-[25px] leading-tight">
            Our partnership approach means we work closely with you at every
            stage from concept and design to development, laung and ongoing
            support. You get reliability, clarity and a technology team invested
            in your success{" "}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
