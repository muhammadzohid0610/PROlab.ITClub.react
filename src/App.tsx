import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Topics from "./pages/Topics";
import Tests from "./pages/Tests";
import Games from "./pages/Games";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const [red, setRed] = useState<boolean>(() => {
    const savedRedMode = localStorage.getItem("redMode");
    return savedRedMode ? JSON.parse(savedRedMode) : false;
  });

  const [green, setGreen] = useState<boolean>(() => {
    const savedGreenMode = localStorage.getItem("greenMode");
    return savedGreenMode ? JSON.parse(savedGreenMode) : false;
  });

  const [yellow, setYellow] = useState<boolean>(() => {
    const savedYellowMode = localStorage.getItem("yellowMode");
    return savedYellowMode ? JSON.parse(savedYellowMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("redMode", JSON.stringify(red));
  }, [red]);

  useEffect(() => {
    localStorage.setItem("greenMode", JSON.stringify(green));
  }, [green]);

  useEffect(() => {
    localStorage.setItem("yellowMode", JSON.stringify(yellow));
  }, [yellow]);

  return (
    <div
      className={`main w-full min-h-[100vh] bg-[--white] ${
        dark ? "mainDark" : ""
      } ${red ? "redMode" : ""} ${green ? "greenMode" : ""} ${
        yellow ? "yellowMode" : ""
      }`}
    >
      <Navbar />
      <Header
        dark={dark}
        setDark={setDark}
        red={red}
        setRed={setRed}
        green={green}
        setGreen={setGreen}
        yellow={yellow}
        setYellow={setYellow}
      />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/games" element={<Games />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
