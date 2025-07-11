import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";
import { setUserDetails } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const response = await fetch(SummaryApi.userLogout.url, {
      method: SummaryApi.userLogout.method,
      credentials: "include",
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      navigate("/login");
      toast.success(dataResponse.message);
      dispatch(setUserDetails(null));
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };
  return (
    <header>
      <div className="mx-auto px-5 md:px-20 bg-navigation h-18 p-2 flex items-center justify-between">
        <Link to="/">
          <img src={logo} width={150} height={150} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-white text-sm">
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

        <div className="hidden md:flex items-center gap-6">
          {user?.role === "Admin" && (
            <Link
              to={"/admin-panel/all-courses"}
              className=" text-white hover:scale-125 cursor-pointer"
            >
              Admin Panel
            </Link>
          )}
          {user?._id && (
            <FaUser className="text-2xl text-white hover:scale-125 cursor-pointer" />
          )}

          {user?._id && (
            <FaShoppingCart className="text-2xl text-white hover:scale-125 cursor-pointer" />
          )}

          {user?._id ? (
            <button
              onClick={handleLogout}
              className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Responsive */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navigation text-white px-5 py-4 space-y-4 text-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block">
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            About Us
          </Link>

          <div className="space-y-4">
            <Link
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              Profile
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="block pb-5"
            >
              Cart
            </Link>
            {user?._id ? (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
                className=" border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className=" border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
