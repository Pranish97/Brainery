import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { useNavigate, useParams } from "react-router-dom";
import { LuClock5 } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { Ri24HoursFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import moment from "moment";
import addToCart from "../helpers/addToCart";

const CourseDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const fetchCourseDetail = async () => {
    const response = await fetch(SummaryApi.courseDetail.url, {
      method: SummaryApi.courseDetail.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseId: params?.id,
      }),
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      setData(dataResponse?.data);
    }
  };

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    navigate("/cart");
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);

  return (
    <div className="container mx-auto my-9 px-4">
      <div className="flex flex-col lg:flex-row rounded-md overflow-hidden bg-white">
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-[#c8c8c8] p-4 lg:p-6 flex flex-col justify-between">
          <div className="flex-grow">
            <h1 className="text-2xl font-semibold">{data?.title}</h1>

            <div className="flex flex-wrap items-start mt-3 gap-3">
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                <LuClock5 className="text-[#00143a] text-xl" />
                <p className="text-sm">
                  Last Updated {moment(data?.updatedAt).format("ll")}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                <RiGlobalLine className="text-[#00143a] text-xl" />
                <p className="text-sm">{data?.language}</p>
              </div>
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded">
                <Ri24HoursFill className="text-[#00143a] text-xl" />
                <p className="text-sm">{data?.hours}</p>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm">Created By: {data?.creatorName}</p>
            </div>

            <div className="mt-4 text-gray-700">
              <p className="text-sm">{data?.description}</p>
            </div>

            <p className="text-lg font-semibold mt-5">Pricing</p>

            <div className="bg-white py-3 px-4 rounded mt-3 space-y-4">
              <div>
                <span className="text-base font-semibold block">
                  Original course price before any discounts:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Regular Price:</span>
                  <span className="text-sm font-semibold text-gray-800 line-through">
                    ${data?.price}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-base font-semibold block">
                  Current limited-time offer for this course:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Discounted:</span>
                  <span className="text-green-600 text-sm font-semibold">
                    ${data?.discountPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-6 mt-6">
            <div className="w-full bg-gray-800 text-white h-20 flex flex-col sm:flex-row items-center justify-between px-6">
              <div className="flex items-center gap-4 text-lg font-semibold mb-2 sm:mb-0">
                <p className="line-through">${data?.price}</p>
                <p>${data?.discountPrice}</p>
              </div>

              <button
                className="px-4 py-2 bg-button text-black font-semibold rounded hover:bg-[#b09a6e] flex items-center gap-1"
                onClick={(e) => handleAddToCart(e, data?._id)}
              >
                Add To Cart <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
