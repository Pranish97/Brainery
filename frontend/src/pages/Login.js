import React, { useState } from "react";
import backgroundImg from "../assets/loginBackground.png";
import logo from "../assets/loginLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.login.url, {
      method: SummaryApi.login.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
      navigate("/");
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  return (
    <section
      id="login"
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
          <div className="w-56 h-20 mx-auto mb-4">
            <img src={logo} alt="Brainery logo" className="object-contain" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="ml-2">Email:</span>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={data?.email}
                onChange={handleOnChange}
                className="mt-1 ml-2 w-full rounded border border-black px-3 py-2 outline-none"
              />
            </label>

            <label className="block">
              <span className="ml-2">Password:</span>

              <div className="relative mt-1">
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={data?.password}
                  onChange={handleOnChange}
                  className="w-full ml-2 rounded border border-black px-3 py-2 pr-10 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPwd((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-700 focus:outline-none"
                >
                  {showPwd ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
            <div>
              <Link
                to={"/forget-password"}
                className="block w-fit ml-auto hover:underline"
              >
                Forget password?
              </Link>
            </div>

            <button
              type="submit"
              className="block mx-auto rounded bg-navigation py-2 px-10 font-semibold text-white hover:scale-105  "
            >
              Login
            </button>
          </form>
          <p className="flex items-center justify-center gap-2 mt-5">
            Don't Have Account?
            <Link to="/register" className="block hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
