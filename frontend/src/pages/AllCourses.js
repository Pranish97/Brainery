import React, { useEffect, useState } from "react";
import { MdAdd, MdModeEdit } from "react-icons/md";
import AddCourse from "../components/AddCourse";
import SummaryApi from "../common";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import UpdateCourse from "../components/UpdateCourse";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [openAddSection, setOpenAddSection] = useState(false);
  const [openUpdateCourse, setOpenUpdateCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchCourseData = async () => {
    const response = await fetch(SummaryApi.getCourse.url, {
      method: SummaryApi.getCourse.method,
      credentials: "include",
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      setData(dataResponse.data);
    }
  };

  const handleDeleteCourse = async (id) => {
    const response = await fetch(SummaryApi.deleteCourse.url, {
      method: SummaryApi.deleteCourse.method,
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
      fetchCourseData();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center px-20 py-2">
        <h2 className="font-bold text-lg">All Courses</h2>
        <button
          className="bg-navigation px-4 py-2 text-white rounded hover:scale-105 flex items-center"
          onClick={() => setOpenAddSection(true)}
        >
          <MdAdd className="pr-1 text-2xl" />
          Add Courses
        </button>
      </div>

      <div>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100  text-white uppercase text-sm bg-navigation">
            <tr>
              <th className="px-6 py-3 border">SNO</th>
              <th className="px-6 py-3 border text-left">Title</th>
              <th className="px-6 py-3 border text-left">Category</th>
              <th className="px-6 py-3 border text-left">Price</th>
              <th className="px-6 py-3 border text-left">Discount Price At</th>
              <th className="px-6 py-3 border text-left">Description</th>
              <th className="px-6 py-3 border text-left">Image</th>
              <th className="px-6 py-3 border text-left">Hours</th>
              <th className="px-6 py-3 border text-left">Creator Name</th>
              <th className="px-6 py-3 border text-left">Language</th>
              <th className="px-6 py-3 border text-left">Created At</th>
              <th className="px-6 py-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data?.map((course, index) => (
              <tr
                key={course._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-6 py-3 border text-center">{index + 1}</td>
                <td className="px-6 py-3 border">{course?.title}</td>
                <td className="px-6 py-3 border">{course?.category}</td>
                <td className="px-6 py-3 border">{course?.price}</td>
                <td className="px-6 py-3 border">{course?.discountPrice}</td>
                <td className="px-6 py-3 border max-w-xs">
                  <p className="line-clamp-4 overflow-hidden text-ellipsis text-sm text-gray-800">
                    {course?.description}
                  </p>
                </td>
                <td className="px-6 py-3 border">
                  <img
                    src={course?.image}
                    width={100}
                    height={100}
                    alt={course?.title}
                  />
                </td>
                <td className="px-6 py-3 border">{course?.hours}</td>
                <td className="px-6 py-3 border">{course?.creatorName}</td>
                <td className="px-6 py-3 border">{course?.language}</td>
                <td className="px-6 py-3 border">
                  {moment(course?.createdAt).format("ll")}
                </td>
                <td className="px-6 py-3 flex items-center justify-center gap-4">
                  <button
                    className="bg-navigation text-white p-2 rounded cursor-pointer hover:scale-105"
                    onClick={() => {
                      setSelectedCourse(course);
                      setOpenUpdateCourse(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                  <button
                    className="bg-red-700 text-white p-2 rounded cursor-pointer hover:scale-105"
                    onClick={() => handleDeleteCourse(course?._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openAddSection && (
        <AddCourse
          onClose={() => setOpenAddSection(false)}
          fetchData={fetchCourseData}
        />
      )}

      {openUpdateCourse && selectedCourse && (
        <UpdateCourse
          onClose={() => setOpenUpdateCourse(false)}
          course={selectedCourse}
          fetchData={fetchCourseData}
        />
      )}
    </div>
  );
};

export default AllCourses;
