import React from "react";
import backgroundImg from "../assets/background.png";
import { GrDesktop } from "react-icons/gr";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="bg-cover bg-center h-[650px] w-full "
      >
        <div className="grid ">
          <h1 className="text-white text-3xl ml-5 lg:text-5xl font-bold mb-4 mt-36 lg:ml-20">
            Unlock Your Potential
            <br /> with Brainery
          </h1>
          <p className="text-white text-[13px] w-[370px] ml-5 lg:w-full lg:text-lg max-w-xl lg:ml-20">
            A powerful online learning management system designed to help you
            teach, learn, and grow — anytime, anywhere.
          </p>
          <button className="px-4 ml-5 py-2 bg-button w-32 lg:ml-20 mt-5 rounded hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="flex items-center lg:ml-20 ml-5 mt-28 text-white gap-20 ">
          <div className="flex items-center gap-4">
            <GrDesktop className="text-xl lg:text-4xl" />
            <div className="grid">
              <h1 className="font-bold text-sm lg:text:lg">5K</h1>
              <p className="font-medium text-xs lg:text:lg">Online Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaUserTie className="text-xl lg:text-4xl" />
            <div className="grid">
              <h1 className="font-bold text-sm lg:text:lg">100+</h1>
              <p className="font-medium text-xs lg:text:lg">Expert Tutors</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-xl lg:text-4xl" />
            <div className="grid">
              <h1 className="font-bold text-sm lg:text:lg">50K</h1>
              <p className="font-medium text-xs lg:text:lg">Online Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
