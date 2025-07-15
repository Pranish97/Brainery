import React, { useState } from "react";
import contactImg1 from "../assets/team.jpg";
import contactImg2 from "../assets/support.jpg";
import contactImg3 from "../assets/workspace.jpg";
import contactImg4 from "../assets/learning.jpg";
import contactImg5 from "../assets/visual.jpg";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    const response = await fetch(SummaryApi.addContact.url, {
      method: SummaryApi.addContact.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#00143a]">
        Contact Us
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        <img
          src={contactImg1}
          alt="Team"
          className="rounded-xl shadow-md w-full h-48 object-cover"
        />
        <img
          src={contactImg2}
          alt="Support"
          className="rounded-xl shadow-md w-full h-48 object-cover"
        />
        <img
          src={contactImg3}
          alt="Workspace"
          className="rounded-xl shadow-md w-full h-48 object-cover"
        />
        <img
          src={contactImg4}
          alt="Learning Environment"
          className="rounded-xl shadow-md w-full h-48 object-cover"
        />
        <img
          src={contactImg5}
          alt="Virtual Collaboration"
          className="rounded-xl shadow-md w-full h-48 object-cover hidden md:block"
        />
      </div>

      <div className="bg-white shadow-xl rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-[#00143a]">
          Send Us a Message
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={data?.name}
              onChange={handleOnChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00143a]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              name="email"
              value={data?.email}
              onChange={handleOnChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00143a]"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              name="message"
              value={data?.message}
              onChange={handleOnChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="bg-[#00143a] text-white px-6 py-2 rounded-lg hover:bg-[#03070c] transition hover:scale-110">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-gray-700 space-y-2">
        <p>
          <strong>Email:</strong> support@brainery.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (234) 567-890
        </p>
        <p>
          <strong>Location:</strong> Online & Global 🌐
        </p>
      </div>
    </div>
  );
};

export default Contact;
