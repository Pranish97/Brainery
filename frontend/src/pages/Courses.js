import React, { useEffect, useState } from "react";
import courseCategory from "../helpers/courseCategory";
import SummaryApi from "../common";
import VerticalCard from "../components/VerticalCard";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("web-development");
  const [sortBy, setSortBy] = useState("");

  const fetchData = async (category) => {
    try {
      const url = `${SummaryApi.filterCourse.url}/${category}`;
      const response = await fetch(url, {
        method: SummaryApi.filterCourse.method,
      });

      const dataResponse = await response.json();
      if (dataResponse.success) {
        setAllCourses(dataResponse.data);
        setFilteredCourses(dataResponse.data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleCategoryClick = (categoryValue) => {
    setSelectedCategory(categoryValue);
    setSortBy("");
    fetchData(categoryValue);
  };

  const handleSort = (value) => {
    setSortBy(value);

    let sorted = [...filteredCourses];
    if (value === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = [...allCourses];
    }

    setFilteredCourses(sorted);
  };

  useEffect(() => {
    fetchData("web-development");
  }, []);

  return (
    <div className="container mx-auto flex">
      <div className="bg-navigation w-64 min-h-screen overflow-y-auto flex flex-col items-center text-white px-5 py-2">
        <div className="flex flex-col items-center mt-3 gap-2">
          <p className="text-lg font-bold">Sort By:</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="asc"
              onChange={(e) => handleSort(e.target.value)}
              checked={sortBy === "asc"}
            />
            <p>Low To High</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="desc"
              onChange={(e) => handleSort(e.target.value)}
              checked={sortBy === "desc"}
            />
            <p>High To Low</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="reset"
              onChange={() => handleSort("reset")}
              checked={sortBy === "reset"}
            />
            <p>Reset</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <p className="text-lg font-bold">Category:</p>
          <div className="flex flex-col items-start gap-2 mt-3 my-4">
            {courseCategory.map((cat, index) => (
              <button
                key={index}
                className={`hover:scale-105 transition-transform capitalize ${
                  selectedCategory === cat.value ? "font-bold underline" : ""
                }`}
                onClick={() => handleCategoryClick(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4 capitalize">
          Courses in "{selectedCategory}"
        </h2>

        {filteredCourses?.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          <VerticalCard data={filteredCourses} />
        )}
      </div>
    </div>
  );
};

export default Courses;
