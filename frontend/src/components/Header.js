import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="mx-auto px-20 bg-navigation h-18 p-2 flex items-center justify-between">
        <Link to="/">
          <img src={logo} width={190} height={180} />
        </Link>
        <div className=" flex gap-20 text-white text-sm">
          <Link to="/" className="hover:scale-125">
            Home
          </Link>
          <Link to="/courses" className="hover:scale-125">
            Courses
          </Link>
          <Link to="/contact" className="hover:scale-125">
            Contact Us
          </Link>
          <Link to="/about" className="hover:scale-125">
            About Us
          </Link>
        </div>
        <div className="flex items-center gap-7">
          <FaUser className="text-2xl text-white hover:scale-125 cursor-pointer" />
          <FaShoppingCart className="text-2xl text-white hover:scale-125 cursor-pointer" />
          <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:scale-105">
            Login
          </button>
          <div className=""></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
