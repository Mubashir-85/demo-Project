import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ select, setSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" relative  flex justify-center md:w-[100%] z-40 bg-white">
      <div className="md:w-[100%] fixed h-25 w-full items-center flex justify-center px-8  gap-25  bg-[#0C0C0C] z-40 ">
        <div className="mr-15">
          <img src="Group.svg" alt="" />
        </div>

        <div className="flex">
          <ul className="style-none hidden md:flex gap-6 text-[15px] text-[#39BAC4]">
            <li
              onClick={() => {
                setSelectselect("home");
              }}
              className="group relative"
            >
              <a
                href=""
                className={`group relative ${
                  select === "home"
                    ? "text-white"
                    : "<span class=absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full></span>"
                } `}
              >
                Home
              </a>
              {/* <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full"></span> */}
            </li>

            <li
              onClick={() => {
                setSelect("about");
              }}
              className="group relative"
            >
              <a href="" className={`${select === "about" && "text-white"} `}>
                About
              </a>
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => {
                setSelect("service");
              }}
              className="group relative"
            >
              <a href="" className={`${select === "service" && "text-white"} `}>
                Services
              </a>
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => {
                setSelect("caseStudio");
              }}
              className="group relative"
            >
              <a
                href=""
                className={`${
                  select === "caseStudio" && "text-white underline"
                } `}
              >
                Case Studio
              </a>
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => {
                setSelect("blog");
              }}
              className="group relative"
            >
              <a
                href=""
                className={`${select === "blog" && "text-white underline"} `}
              >
                Blog
              </a>
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li
              onClick={() => {
                setSelect("contact");
              }}
              className="group relative"
            >
              <a
                href=""
                className={`${select === "contact" && "text-white underline"} `}
              >
                Contact
              </a>
              <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39BAC4] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        <button className="hidden md:block rounded-2xl px-5 py-1 text-white bg-gradient-to-r from-[#1A4B97] to-[#36C7D2] hover:opacity-90 transition">
          Get a Quote
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {open && (
          <div className="fixed top-[70px] left-0 w-full bg-[#0C0C0C] pb-5 z-30 md:hidden">
            <ul className="flex flex-col items-center justify-center mx-auto my-auto gap-6  text-[#39BAC4]">
              {[
                "home",
                "about",
                "service",
                "caseStudio",
                "blog",
                "contact",
              ].map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelect(item);
                    setOpen(false);
                  }}
                >
                  <a
                    href="#"
                    className={`hover:underline ${
                      select === item && "text-white "
                    }`}
                  >
                    {item === "caseStudio"
                      ? "Case Studio"
                      : item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}

              <div className="border-black text-white rounded-2xl px-5 py-1 bg-linear-to-r from-[#1A4B97] to-[#36C7D2] ml-0 hover:bg-[#1A4B97] transition-all duration-300">
                <button>Get a Quote</button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
