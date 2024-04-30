import React, { FC } from "react";

// icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SettingLogin {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
}

const setting = [
  { name: "Settings", icon: <IoSettingsSharp /> },
  { name: "Login", icon: <FaUser /> },
];

const Set_Log: FC<SettingLogin> = ({ modal, setModal }) => {
  return (
    <>
      {setting.map((item) => (
        <div>
          {item.name == "Settings" ? (
            <button
              onClick={() => setModal(!modal)}
              className="group relative border-2 border-[--succes] w-[40px] h-[40px] flex justify-center items-center rounded-[5px] hover:bg-[--succes] hover:text-[--white] transition-all duration-300"
            >
              <div className="absolute left-[-2px] top-12 right-0 hidden xl:group-hover:flex">
                <div
                  className="bg-[--black] relative flex text-[--white] items-center
                   p-[6px] rounded-[3px] w-max"
                >
                  <div className="text-[12px] text-[--white] leading-none font-semibold capitalize flex">
                    {item.name}
                  </div>
                  {/* triangle */}
                </div>
              </div>

              <div className="text-[--black]">{item.icon}</div>
            </button>
          ) : (
            <Link to="/login">
              <button className="group relative border-2 border-[--succes] w-[40px] h-[40px] flex justify-center items-center rounded-[5px] hover:bg-[--succes] hover:text-[--white] transition-all duration-300">
                <div className="absolute left-[-2px] top-12 right-0 hidden xl:group-hover:flex">
                  <div
                    className="bg-[--black] relative flex text-[--white] items-center
                 p-[6px] rounded-[3px] w-max"
                  >
                    <div className="text-[12px] text-[--white] leading-none font-semibold capitalize flex">
                      {item.name}
                    </div>
                    {/* triangle */}
                  </div>
                </div>

                <div className="text-[--black]">{item.icon}</div>
              </button>
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default Set_Log;
