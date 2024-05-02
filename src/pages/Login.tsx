import React, { useState } from "react";
import transition from "../transition";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://baibolot-front-api.prolabagency.com/api/v1/auth/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login:email, password }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      // Handle successful login, such as redirecting to another page
    } catch (error) {
    }
  };

  return (
    <div className="h-full flex justify-center items-center fixed top-0 left-0 right-0 backdrop-blur-[3px] bg-[--white]">
      <div className="flex relative min-h-max container mx-[15px] flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-[10px] max-w-[500px]">
        <Link to="/">
          <FaArrowAltCircleLeft className="absolute top-[-14px] left-[-14px] bg-[--black] rounded-[50%] cursor-pointer text-[--success] text-[32px]" />
        </Link>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-[--black]">
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-[--black]">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[--success] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--success2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--success3]"
              >
                Login
              </button>
            </div>
          </form>

          {error && <p className="mt-2 text-red-500">{error}</p>}

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              to="/register"
              className="font-semibold ml-[20px] leading-6 text-[--success] hover:text-[--success2]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default transition(Login);
