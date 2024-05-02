import React, { FC } from "react";
import transition from "../transition";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./../components/variants";

const Home: FC = () => {
  return (
    <div className="container mx-auto h-[100vh] flex justify-center">
      <div className="navbar overflow-hidden  w-full my-auto   flex flex-col xl:flex-row border-2  border-[--black] rounded-[10px] justify-between pl-[15px] xl:h-[450px]">
        <div className="text-center xl:text-start xl:pt-[140px]  py-[50px] px-[15px] text-[--black]">
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <span className="text-[22px] font-[700]  text-[--succes] xl:text-[38px]">
              PROlab.ITClub
            </span>
            <span className="xl:text-[30px] text-[20px] font-[600]">
              - Programming courses
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:w-[600px] text-[--gray] mt-[20px] xl:text-[18px]"
          >
            Welcome to a platform full of practical programming courses. Here
            you can learn all paid courses for free.
          </motion.p>

          <Link to="/topics">
            <button className="border-2 w-max transition duration-300 hover:bg-[--succes] hover:text-[--black] px-[60px] py-[5px] mt-[20px] rounded-[10px] border-[--black] text-[--black]">
              Topics
            </button>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={fadeIn("left", 0.3)}
          className="hidden xl:flex w-full  justify-end items-center "
        >
          <BiLogoReact className="text-[400px] w-[500px] home_page h-[448px] rounded-[10px]  text-[--black]" />
        </motion.div>
      </div>
    </div>
  );
};

export default transition(Home);
