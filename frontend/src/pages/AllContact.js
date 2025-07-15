import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { MdDelete } from "react-icons/md";
import moment from "moment";
import { toast } from "react-toastify";

const AllContact = () => {
  const [data, setData] = useState([]);

  const fetchAllCourse = async () => {
    const response = await fetch(SummaryApi.getAllContact.url, {
      method: SummaryApi.getAllContact.method,
      credentials: "include",
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      setData(dataResponse?.data);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(SummaryApi.deleteContact.url, {
      method: SummaryApi.deleteContact.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
      fetchAllCourse();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h2 className="font-bold text-lg">All Contact</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100  text-white uppercase text-sm bg-navigation">
            <tr>
              <th className="px-6 py-3 border">SNO</th>
              <th className="px-6 py-3 border text-left">Name</th>
              <th className="px-6 py-3 border text-left">Email</th>
              <th className="px-6 py-3 border text-left">Message</th>
              <th className="px-6 py-3 border text-left">Created At</th>
              <th className="px-6 py-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data?.map((contact, index) => (
              <tr
                key={contact._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-6 py-3 border text-center">{index + 1}</td>
                <td className="px-6 py-3 border">{contact?.name}</td>
                <td className="px-6 py-3 border">{contact?.email}</td>
                <td className="px-6 py-3 border">{contact?.message}</td>
                <td className="px-6 py-3 border">
                  {moment(contact?.createdAt).format("ll")}
                </td>
                <td className="px-6 py-3">
                  <button
                    className="bg-red-700 text-white p-2 rounded cursor-pointer hover:scale-105"
                    onClick={() => {
                      handleDelete(contact._id);
                    }}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContact;
