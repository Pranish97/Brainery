import { useState } from "react";
import backgroundImg from "../assets/loginBackground.png";
import logo from "../assets/loginLogo.png";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ForgertPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.forgetPassword.url, {
      method: SummaryApi.forgetPassword.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  console.log(email);
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
            <h1 className="font-semibold text-4xl">Forget Password?</h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="ml-2">Email:</span>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 ml-2 w-full rounded border border-black px-3 py-2 outline-none"
              />
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

export default ForgertPassword;
