import SummaryApi from "../common";

const fetchCategoryWiseCourse = async (category) => {
  const response = await fetch(SummaryApi.categoryWiseCourse.url, {
    method: SummaryApi.categoryWiseCourse.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchCategoryWiseCourse;
