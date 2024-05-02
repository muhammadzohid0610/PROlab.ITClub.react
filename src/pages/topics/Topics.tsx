import React, { FC, useState } from "react";
import transition from "../../transition";
import { NavLink, Outlet } from "react-router-dom";

const Topics: FC = () => {
  const [all, setAll] = useState(true);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);

  return (
    <div className="container mx-auto h-full flex justify-center">
      <div className="w-full my-auto h-full mt-[100px]">
        <h1 className="text-[--black] text-[32px]">Topics:</h1>
        <div className="flex  flex-col sm:flex-row gap-[20px] mt-[10px] w-full">
          <NavLink
            to="/topics/all"
            className={({ isActive }) =>
              `${
                isActive ? "bg-[--succes]" : ""
              } border-2 border-[--succes] py-[5px] px-[20px] text-[--black] font-[600] rounded-[10px] hover:bg-[--succes] transition-all duration-300 w-full flex justify-center items-center`
            }
          >
            All
          </NavLink>
          <NavLink
            to="/topics/frontend"
            className={({ isActive }) =>
              `${
                isActive ? "bg-[--succes]" : ""
              } border-2 border-[--succes] py-[5px] px-[20px] text-[--black] font-[600] rounded-[10px] hover:bg-[--succes] transition-all duration-300 w-full flex justify-center items-center`
            }
          >
            Front-End
          </NavLink>
          <NavLink
            to="/topics/backend"
            className={({ isActive }) =>
              `${
                isActive ? "bg-[--succes]" : ""
              } border-2 border-[--succes] py-[5px] px-[20px] text-[--black] font-[600] rounded-[10px] hover:bg-[--succes] transition-all duration-300 w-full flex justify-center items-center`
            }
          >
            Back-End
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default transition(Topics);
