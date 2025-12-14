import React from "react";

function Navbar({ select, setSelect }) {
  return (
    <nav className=" relative items-center flex justify-center ">
      <div className="fixed h-35 items-end flex justify-center px-8 mx-auto gap-25 mt-35 bg-black z-40 py-8">
        <div className="mr-20">
          <img src="Group.svg" alt="" />
        </div>

        <div className="flex">
          <ul className="style-none flex gap-8 text-[#39BAC4]">
            <li
              onClick={() => {
                setSelectselect("home");
              }}
            >
              <a
                href=""
                className={`${select === "home" && "text-white underline"} `}
              >
                Home
              </a>
            </li>

            <li
              onClick={() => {
                setSelect("about");
              }}
            >
              <a
                href=""
                className={`hover:underline ${
                  select === "about" && "text-white underline"
                } `}
              >
                About
              </a>
            </li>

            <li
              onClick={() => {
                setSelect("service");
              }}
            >
              <a
                href=""
                className={`hover:underline ${
                  select === "service" && "text-white underline"
                } `}
              >
                Services 
              </a>
            </li>

            <li
              onClick={() => {
                setSelect("caseStudio");
              }}
            >
              <a
                href=""
                className={`hover:underline ${
                  select === "caseStudio" && "text-white underline"
                } `}
              >
                Case Studio
              </a>
            </li>

            <li
              onClick={() => {
                setSelect("blog");
              }}
            >
              <a
                href=""
                className={`hover:underline ${
                  select === "blog" && "text-white underline"
                } `}
              >
                Blog
              </a>
            </li>

            <li
              onClick={() => {
                setSelect("contact");
              }}
            >
              <a
                href=""
                className={`hover:underline ${
                  select === "contact" && "text-white underline"
                } `}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="border-black text-white rounded-2xl px-5 py-1 bg-[#0882a7] ml-0 hover:bg-[#047a8c] transition-all duration-300">
          <button>Get a Quote</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
