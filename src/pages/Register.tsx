import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import transition from "../transition";

const Register: React.FC = () => {
  return (
    <div className=" h-full  flex justify-center items-center  fixed top-0 left-0 right-0 backdrop-blur-[3px] bg-[--white]">
      <div className="flex relative min-h-max container mx-[15px] flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-[10px] max-w-[500px]">
        <Link to="/">
          <FaArrowAltCircleLeft className="absolute top-[-14px] left-[-14px] bg-[--black] rounded-[50%] cursor-pointer text-[--succes] text-[32px]" />
        </Link>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm w-max relative">
              <img
                className="mx-auto h-[100px] w-auto"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Your Company"
              />
              <input
                type="file"
                required
                className="w-[30px] absolute bottom-0 right-[37%] rounded-[50%] chooseAvatar "
              />
            </div>
            <div className="flex w-full gap-[20px]">
              <div className="w-full">
                <label className="block text-sm font-medium leading-6 text-[--black]">
                  Имя
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-[--black]">
                    Фамилия
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-[--black]">
                  Электронный почта
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-[--black]">
                  Номер телефона
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-[--black]">
                  Пароль
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[--succes] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--succes2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--succes3]"
              >
                Регистрация
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            У вас есть акаунт?
            <Link
              to="/login"
              className="font-semibold ml-[20px] leading-6 text-[--succes] hover:text-[--succes2]"
            >
              Вход
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default transition(Register);
