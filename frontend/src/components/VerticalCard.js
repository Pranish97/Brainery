import React from "react";
import { Link } from "react-router-dom";

const VerticalCard = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollBar-none transition-all">
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
          <h3 className="text-lg font-semibold line-clamp-2">{course.title}</h3>
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
  );
};

export default VerticalCard;
