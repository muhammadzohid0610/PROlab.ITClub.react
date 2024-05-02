import React, { useState } from "react";
import Logo from "./Logo";
import Translate from "../../Translate";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Set_Log from "./Set_Log";

interface darkMode {
  dark: boolean;
  red: boolean;
  green: boolean;
  yellow: boolean;
  setDark: React.Dispatch<boolean>;
  setRed: React.Dispatch<boolean>;
  setGreen: React.Dispatch<boolean>;
  setYellow: React.Dispatch<boolean>;
}

const Header: React.FC<darkMode> = ({
  dark,
  setDark,
  red,
  setRed,
  green,
  setGreen,
  yellow,
  setYellow,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="container mx-auto fixed top-[0] left-0 right-0 mt-[30px] ">
      <div className="px-[15px]  flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-[30px]  text-[26px]">
          <Set_Log modal={modal} setModal={setModal} />
        </div>
      </div>
      <div
        onClick={() => setModal(!modal)}
        className={` ${
          modal ? "flex" : "hidden"
        } w-[100vw] h-[100vh] fixed top-0 z-[90] left-0 bg-[--succesBg] backdrop-blur-[4px]  justify-center items-center`}
      > 
        <div
          className="w-[300px] xl:w-[500px] h-[500px] bg-[--white] rounded-[10px] flex justify-start px-[20px] py-[30px] flex-col  text-start items-start"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gap-[10px] flex text-start items-start text-[22px] flex-col">
            <h1 className="text-[--black] mt-[0px] text-[28px]">Settings:</h1>
            <div className="flex xl:flex-row  items-center gap-[6px] mt-[20px] text-start">
              <div>
                {dark ? (
                  <MdLightMode
                    onClick={() => setDark(!dark)}
                    className={`cursor-pointer text-[40px] xl:text-[80px] xl:border-r-2 xl:border-r-[--black] pr-[5px] mr-[2px]  text-[--black]`}
                  />
                ) : (
                  <MdDarkMode
                    onClick={() => setDark(!dark)}
                    className={`cursor-pointer text-[40px] xl:text-[80px] xl:border-r-2 xl:border-r-[--black] pr-[5px] mr-[2px]  text-[--black]`}
                  />
                )}
              </div>
              <Translate />
            </div>
          </div>

          <div className="w-full  flex flex-col gap-[20px]">
            <h1 className="text-[--black] mt-[70px] text-[28px]">
              Choose color:
            </h1>

            <div className="flex justify-between mt-[20px]">
              <div
                onClick={() => {
                  setRed((red = true));
                  setGreen((green = false));
                  setYellow((yellow = false));
                }}
                className={`border-2  flex justify-center w-[70px] xl:w-[100px] rounded-[10px] py-[10px] hover:bg-[--black] cursor-pointer transition-all duration-300 ${
                  red && "bg-[--black]"
                }`}
              >
                <div className="w-[50px] h-[50px] bg-[red] border-[--black] rounded-[50%]"></div>
              </div>

              <div
                onClick={() => {
                  setGreen((green = true));
                  setRed((red = false));
                  setYellow((yellow = false));
                }}
                className={`border-2  flex justify-center w-[70px] xl:w-[100px] rounded-[10px] py-[10px] hover:bg-[--black] cursor-pointer transition-all duration-300 ${
                  green && "bg-[--black]"
                }`}
              >
          <div className="w-[50px] h-[50px] bg-[green] border-[--black] rounded-[50%]"></div>
              </div>
              <div
                onClick={() => {
                  setYellow((yellow = true));
                  setGreen((green = false));
                  setRed((red = false));
                }}
                className={`border-2  flex justify-center w-[70px] xl:w-[100px] rounded-[10px] py-[10px] hover:bg-[--black] cursor-pointer transition-all duration-300 ${
                  yellow && "bg-[--black]"
                }`}
              >
                <div className="w-[50px] h-[50px] bg-[#9d159d] border-[--black] rounded-[50%]"></div>
              </div>
            </div>
            <button
              onClick={() => {
                setRed((red = false));
                setGreen((green = false));
                setYellow((yellow = false));
              }}
              className={`${
                red || green || yellow ? "flex" : "hidden"
              } text-[16px] text-[--black] border-2 border-[--black] w-max py-[7px] px-[20px] rounded-[10px] bg-[--succes]`}
            >
              Delete changess
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;