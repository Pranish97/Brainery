import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { MdModeEdit } from "react-icons/md";
import moment from "moment";
import ChangeUser from "../components/ChangeUser";

const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);
  const [openUpdateUser, setOpenUpdateUser] = useState();
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    const response = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      credentials: "include",
    });

    const dataResponse = await response.json();
    console.log(dataResponse);

    if (dataResponse.success) {
      setAllUser(dataResponse?.data);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100  text-white uppercase text-sm bg-navigation">
          <tr>
            <th className="px-6 py-3 border">SNO</th>
            <th className="px-6 py-3 border text-left">Name</th>
            <th className="px-6 py-3 border text-left">Email</th>
            <th className="px-6 py-3 border text-left">Role</th>
            <th className="px-6 py-3 border text-left">Created At</th>
            <th className="px-6 py-3 border text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {allUser?.map((user, index) => (
            <tr
              key={user._id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-colors`}
            >
              <td className="px-6 py-3 border text-center">{index + 1}</td>
              <td className="px-6 py-3 border">{user?.name}</td>
              <td className="px-6 py-3 border">{user?.email}</td>
              <td className="px-6 py-3 border">{user?.role}</td>
              <td className="px-6 py-3 border">
                {moment(user?.createdAt).format("ll")}
              </td>
              <td className="px-6 py-3">
                <button
                  className="bg-navigation text-white p-2 rounded cursor-pointer hover:scale-105"
                  onClick={() => {
                    setUpdateUserDetails(user);
                    setOpenUpdateUser(true);
                  }}
                >
                  <MdModeEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openUpdateUser && (
        <ChangeUser
          onClose={() => setOpenUpdateUser(false)}
          userId={updateUserDetails._id}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          fetchAllUsers={fetchAllUsers}
        />
      )}
    </div>
  );
};

export default AllUsers;
