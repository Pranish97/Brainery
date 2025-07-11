import React, { useState } from "react";
import { IoClose, IoCloudUpload } from "react-icons/io5";
import courseCategory from "../helpers/courseCategory";
import { MdDelete } from "react-icons/md";
import uploadImage from "../helpers/uploadImage";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const UpdateCourse = ({ course, onClose, fetchData }) => {
  const [data, setData] = useState({
    ...course,
    title: course?.title,
    category: course?.category,
    price: course?.price,
    discountPrice: course?.discountPrice,
    description: course?.description,
    image: course?.image,
    hours: course?.hours,
    creatorName: course?.creatorName,
    language: course?.language,
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

  const handleDeleteCourseImage = () =>
    setData((prev) => ({ ...prev, image: "" }));

  const handleUploadCourse = async (e) => {
    const file = e.target.files[0];

    const uploadImageCloudinary = await uploadImage(file);
    setData((prev) => {
      return {
        ...prev,
        image: uploadImageCloudinary.url,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.updateCourse.url, {
      method: SummaryApi.updateCourse.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
      onClose();
      fetchData();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  return (
    <div className="fixed w-full h-full bg-white bg-opacity-70 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className=" p-4 rounded bg-white w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg ">Upload Course</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <IoClose />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
        >
          <label htmlFor="productName">Course Title :</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title Name"
            name="title"
            value={data.title}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="category" className="mt-3">
            Category :
          </label>
          <select
            name="category"
            value={data.category}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          >
            <option value={""}>Select Category</option>
            {courseCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="price" className="mt-3">
            Price :
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price"
            value={data.price}
            name="price"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="discountPrice" className="mt-3">
            Discount Price :
          </label>
          <input
            type="number"
            id="discountPrice"
            placeholder="Enter Discount Price"
            value={data.discountPrice}
            name="discountPrice"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label className="mt-3">Description :</label>
          <textarea
            className="h-20 bg-slate-100 border resize-none p-1"
            rows={3}
            placeholder="Enter Product Description"
            onChange={handleOnChange}
            name="description"
            value={data.description}
          ></textarea>

          <label htmlFor="courseImage" className="mt-3">
            Course Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl hover:scale-105">
                  <IoCloudUpload />
                </span>
                <p className="text-sm hover:scale-105">Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={handleUploadCourse}
                />
              </div>
            </div>
          </label>
          <div>
            {data.image ? (
              <div className="relative group w-fit mt-2">
                <img
                  src={data.image}
                  alt="course"
                  width={80}
                  height={80}
                  className="bg-slate-100 border cursor-pointer"
                />
                <div
                  onClick={handleDeleteCourseImage}
                  className="absolute bottom-0 right-0 p-1 text-white bg-red-500 rounded-full cursor-pointer"
                >
                  <MdDelete />
                </div>
              </div>
            ) : (
              <p className="text-red-600 text-xs">
                *Please Upload Course Image
              </p>
            )}
          </div>

          <label htmlFor="hours" className="mt-3">
            Course Hour :
          </label>
          <input
            type="text"
            id="hours"
            placeholder="Enter Course Hours"
            value={data.hours}
            name="hours"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="creatorName" className="mt-3">
            Creator Name :
          </label>
          <input
            type="text"
            id="creatorName"
            placeholder="Enter Creator Name"
            value={data.creatorName}
            name="creatorName"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <label htmlFor="language" className="mt-3">
            Language :
          </label>
          <input
            type="text"
            id="language"
            placeholder="Enter Language"
            value={data.language}
            name="language"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
            required
          />

          <button className="px-3 py-2 bg-navigation text-white mb-10 hover:scale-110 ">
            Upload Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
