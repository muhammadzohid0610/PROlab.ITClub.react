import React, { FC } from "react";

// icons
import { AiFillHome } from "react-icons/ai";
import { MdTopic } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// data link
const navData = [
  { name: "Home", path: "/", icon: <AiFillHome /> },
  { name: "Topics", path: "/topics/all", icon: <MdTopic /> },
  { name: "Tests", path: "/tests", icon: <RiCodeBoxFill /> },
  { name: "Games", path: "/games", icon: <FaGamepad /> },
  { name: "About us", path: "/aboutUs", icon: <FaUserGroup /> },
];

const Navbar: FC = () => {
  return (
    <nav className="bg-[--succesBg] z-50 navbar backdrop-blur-[5px] fixed w-full bottom-0 flex items-center justify-between py-[10px] px-[20px] text-[25px]  mn:text-[28px] xl:top-[27%]  xl:px-[0px] xl:py-[30px] xl:rounded-[35px] xl:h-[390px] xl:right-[20px] xl:w-max ">
      <div className="container mx-auto flex justify-between xl:flex-col h-full">
        {navData.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[--succes] group" : "group text-[--black]"}`
            }
            to={item.path}
            key={index}
          >
            <div className="absolute pr-16 right-0 hidden xl:group-hover:flex">
              <div
                className="bg-[--black] relative flex text-[--white] items-center
                 p-[6px] rounded-[3px] w-max"
              >
                <div className="text-[12px] leading-none font-semibold capitalize flex">
                  {item.name}
                </div>
                {/* triangle */}
                <div className="border-solid border-l-[--black] border-l-8 transition-all duration-300 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            <div>{item.icon}</div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
