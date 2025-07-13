import { toast } from "react-toastify";
const { default: SummaryApi } = require("../common");

const addToCart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  const response = await fetch(SummaryApi.addToCart.url, {
    method: SummaryApi.addToCart.method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      courseId: id,
    }),
  });

  const dataResponse = await response.json();

  console.log(dataResponse);

  if (dataResponse.success) {
    toast.success(dataResponse.message);
  }

  if (dataResponse.error) {
    toast.error(dataResponse.message);
  }

  return dataResponse;
};

export default addToCart;
