import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Cart = () => {
  const [data, setData] = useState([]);

  const fetchCartCourse = async () => {
    const response = await fetch(SummaryApi.getCartCourse.url, {
      method: SummaryApi.getCartCourse.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      setData(dataResponse?.data);
    }
  };

  const getTotal = () => {
    return data.reduce((total, item) => total + item.courseId.price, 0);
  };

  const getTotalDiscount = () => {
    return data.reduce(
      (total, item) =>
        total + item.courseId.price - item.courseId.discountPrice,
      0
    );
  };
  const total = getTotal() - getTotalDiscount();

  const handleRemove = async (id) => {
    const response = await fetch(SummaryApi.deleteCartCourse.url, {
      method: SummaryApi.deleteCartCourse.method,
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
      fetchCartCourse();
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchCartCourse();
  }, []);

  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="mt-5">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-4">
            {data?.length === 0 ? (
              <p>No Course in your Cart.</p>
            ) : (
              data.map((courseItem) => (
                <div
                  key={courseItem?._id}
                  className="flex items-start gap-4 p-4 border rounded-lg shadow-md"
                >
                  <img
                    src={courseItem?.courseId?.image}
                    alt={courseItem?.courseId?.name}
                    className="w-40 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      {courseItem.courseId.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {courseItem?.courseId?.creatorName}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleRemove(courseItem?._id)}
                      className="text-red-500 hover:underline mt-2"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-600 line-through">
                      ${courseItem?.courseId?.price}
                    </p>
                    <p className="text-lg font-semibold text-[#00143a]">
                      ${courseItem?.courseId?.discountPrice}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="w-full lg:w-1/3 mt-10 lg:mt-0 p-6 border rounded-lg shadow-md h-fit">
            <h2 className="text-lg font-semibold mb-4">Total:</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${getTotal()}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Discount</span>
              <span>${getTotalDiscount()}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button className="w-full bg-navigation hover:bg-[#09111f] text-white py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
