import React from "react";

function Info() {
  return (
    <div className="md:w-[100%] mx-auto bg-[#f5f7fa] h-auto pt-5">
      <div className="text-center flex flex-col">
        <h1 className="text-[20px] md:text-[36px] text-[#1A4B97] font-medium leading-tight">
          Got a great idea?{" "}
          <span className="font-semibold leading-tight">
            Let's bring it to life.
          </span>
        </h1>
        <p className="text-[15px] md:text-[24px] font-normal">
          Book a free strategy call no obligations.
        </p>
      </div>
      <div className="mt-5 w-[80%] mx-auto flex md:flex-row flex-col md:flex justify-center md:gap-8 gap-4">
        <button className="text bg-[#0882a7] hover:bg-[#1A4B97] transition-all duration-500 px-5 py-1 rounded-2xl text-white ">
          Book a 30-Minute Call
        </button>
        <button className="border-2 px-5 py-1 rounded-2xl text-[#47bec6] font-normal text-[16px]  hover:text-[#CE014D] transition-all duration-300">
          Send Project Details
        </button>
      </div>

      <div className="text-center mt-10">
        <h1 className="font-medium text-[20px] md:text-[36px] text-[#1A4B97]">
          We are here for you
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 w-[70%] mx-auto text-left mt-10">
          <div>
            <label className="block text-sm mb-2 text-[16px] font-medium">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[16px] font-medium">
              Budget Range
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[16px] font-medium">
              Phone
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[16px] font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[16px] font-medium">
              Message
            </label>
            <input
              type="text"
              placeholder="Tell us how we can help?"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[16px] font-medium">
              File Upload
            </label>
            <input
              type="text"
              placeholder="Tell us how we can help?"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
          </div>
        </form>
        <div className="flex md:justify-end w-[50%] md:mt-2 mt-3 md:w-[70%] mx-auto">
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-blue-800 to-cyan-400 text-white font-medium shadow-md hover:opacity-90 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
