import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import transition from "../transition";
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState({
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    password: null,
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [phone, setPhone] = useState("");
function createData(e:any){
  e.preventDefault()
  
  setData({
    ...data,
    [e.target.name] : e.target.value
})
}
console.log(33, data.last_name);

  const registerAndSetToken = async () => {
    try {
      const response = await axios.post("https://hadzhi2003.pythonanywhere.com/api/v1/auth/register/", {
        first_name,
        last_name,
        email,
        phone,
        password,
      });
    
      const data = response.data;
      console.log(data);
      
      const token = data.token;
      localStorage.setItem('token', token);
      return token; // You may want to return the token for further use.
      
    } catch (error) {
      console.log(error);
      
      throw error;
    }
  }
  
  registerAndSetToken()
    .then((token) => {
      console.log(token); 
    })
    .catch(error => {
      console.error('Failed to register:', error);
    });

  return (
    <div className=" h-full  flex justify-center items-center  fixed top-0 left-0 right-0 backdrop-blur-[3px] bg-[--white]">
      <div className="flex relative min-h-max container mx-[15px] flex-col justify-center px-6 py-12 lg:px-8 border-2 rounded-[10px] max-w-[500px]">
        <Link to="/">
          <FaArrowAltCircleLeft className="absolute top-[-14px] left-[-14px] bg-[--black] rounded-[50%] cursor-pointer text-[--succes] text-[32px]" />
        </Link>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" >
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
                    // value={first_name}
                    onChange={createData}
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
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    // value={last_name}
                    onChange={(e) => setlast_name(e.target.value)}
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
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  // value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </Link></p>
        </div>
      </div>
    </div>);
};
export default transition(YourComponent);
