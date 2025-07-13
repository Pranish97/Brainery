import React, { useState } from "react";
import ROLE from "../common/role";
import { IoClose } from "react-icons/io5";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ChangeUser = ({ userId, name, email, role, onClose, fetchAllUsers }) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChange = (e) => {
    setUserRole(e.target.value);
  };

  const updateUser = async () => {
    const response = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
      onClose();
      fetchAllUsers();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-40 ">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
        <button className="block ml-auto text-xl" onClick={onClose}>
          <IoClose />
        </button>
        <h1 className="pb-4 text-lg font-medium">Change User Role</h1>

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <div className="flex items-center justify-between my-4">
          <p>Role:</p>
          <select
            className="border px-4 py-1"
            value={userRole}
            onChange={handleOnChange}
          >
            {Object.values(ROLE).map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button
          className="w-fit mx-auto block bg-navigation border px-3 py-2 text-white rounded cursor-pointer hover:scale-125"
          onClick={updateUser}
        >
          Update User
        </button>
      </div>
    </div>
  );
};

export default ChangeUser;
