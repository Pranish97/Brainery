import React, { useEffect, useRef, useState } from "react";
import fetchCategoryWiseCourse from "../helpers/fetchCategoryWiseCourse";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const scrollRef = useRef();

  const fetchData = async () => {
    const categoryCourse = await fetchCategoryWiseCourse(category);
    setData(categoryCourse?.data || []);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto relative my-10 overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {heading}
      </h1>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="bg-white shadow-lg rounded-full p-2 hover:scale-110 absolute top-1/2 -translate-y-1/2 left-2 z-10 hidden md:block"
      >
        <FaAngleLeft size={20} />
      </button>

      {/* Scrollable Content */}
      <div
        className="overflow-x-auto scroll-smooth scrollBar-none px-4"
        ref={scrollRef}
      >
        <div className="flex gap-6 w-max">
          {data.map((course) => (
            <Link
              to={`/course/${course._id}`}
              key={course._id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-transform duration-300 hover:scale-105 min-w-[280px] max-w-xs"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold line-clamp-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                {course.description}
              </p>
              <div className="mt-3 text-sm text-gray-500 space-y-1">
                <span className="block">👨‍🏫 {course.creatorName}</span>
                <span className="block">🌐 {course.language}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="bg-white shadow-lg rounded-full p-2 hover:scale-110 absolute top-1/2 -translate-y-1/2 right-2 z-10 hidden md:block"
      >
        <FaAngleRight size={20} />
      </button>
    </div>
  );
};

export default Card;
