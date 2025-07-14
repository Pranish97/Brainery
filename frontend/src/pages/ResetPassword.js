import { useState } from "react";
import backgroundImg from "../assets/loginBackground.png";
import logo from "../assets/loginLogo.png";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showConfPwd, setShowConfPwd] = useState(false);
  const { token } = useParams();

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

    if (data.password === data.confirmPassword) {
      const response = await fetch(SummaryApi.resetPassword.url, {
        method: SummaryApi.resetPassword.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          newPassword: data?.password,
        }),
      });
      const dataResponse = await response.json();

      if (dataResponse.success) {
        toast.success(dataResponse.message);
      }

      if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } else {
      toast.error("Password and Confirm Password Doesnt Match");
    }
  };
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
          <div className="w-56 h-20 mx-auto mb-4">
            <img src={logo} alt="Brainery logo" className="object-contain" />
          </div>

          <div className="flex items-center justify-center mb-10">
            <h1 className="font-semibold text-4xl">Reset Your Password</h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="ml-2">Password:</span>

              <div className="relative mt-1">
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={data?.password}
                  onChange={handleOnChange}
                  required
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

            <label className="block">
              <span className="ml-2">Confirm Password:</span>

              <div className="relative mt-1">
                <input
                  type={showConfPwd ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  name="confirmPassword"
                  value={data?.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className="w-full ml-2 rounded border border-black px-3 py-2 pr-10 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfPwd((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-700 focus:outline-none"
                >
                  {showConfPwd ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>

            <button
              type="submit"
              className="block mx-auto rounded bg-navigation py-2 px-10 font-semibold text-white hover:scale-105  "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
