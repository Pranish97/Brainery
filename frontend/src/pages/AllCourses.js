import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import AddCourse from "../components/AddCourse";

const AllCourses = () => {
  const [openAddSection, setOpenAddSection] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center px-20 py-2">
        <h2 className="text-bold text-lg">All Courses</h2>
        <button
          className="bg-navigation px-4 py-2 text-white rounded hover:scale-105 flex items-center"
          onClick={() => setOpenAddSection(true)}
        >
          <MdAdd className="pr-1 text-2xl" />
          Add Courses
        </button>
      </div>

      {openAddSection && <AddCourse onClose={() => setOpenAddSection(false)} />}
    </div>
  );
};

export default AllCourses;
