const backendApi = "http://localhost:8000";

const SummaryApi = {
  register: {
    url: `${backendApi}/api/register`,
    method: "post",
  },
  login: {
    url: `${backendApi}/api/login`,
    method: "post",
  },
  forgetPassword: {
    url: `${backendApi}/api/forget-password`,
    method: "post",
  },
  resetPassword: {
    url: `${backendApi}/api/reset-password`,
    method: "post",
  },
  addContact: {
    url: `${backendApi}/api/add-contact`,
    method: "post",
  },
  userDetails: {
    url: `${backendApi}/api/user-details`,
    method: "get",
  },
  userLogout: {
    url: `${backendApi}/api/userLogout`,
    method: "get",
  },
  allUsers: {
    url: `${backendApi}/api/all-users`,
    method: "get",
  },
  updateUser: {
    url: `${backendApi}/api/update-user`,
    method: "post",
  },
  addCourse: {
    url: `${backendApi}/api/add-course`,
    method: "post",
  },
  getCourse: {
    url: `${backendApi}/api/get-course`,
    method: "get",
  },
  deleteCourse: {
    url: `${backendApi}/api/delete-course`,
    method: "post",
  },
  updateCourse: {
    url: `${backendApi}/api/update-course`,
    method: "post",
  },
  categoryWiseCourse: {
    url: `${backendApi}/api/category-course`,
    method: "post",
  },
  courseDetail: {
    url: `${backendApi}/api/course-detail`,
    method: "post",
  },
  addToCart: {
    url: `${backendApi}/api/add-to-cart`,
    method: "post",
  },
  getCartCourse: {
    url: `${backendApi}/api/get-cartCourse`,
    method: "get",
  },
  deleteCartCourse: {
    url: `${backendApi}/api/delete-cartCourse`,
    method: "post",
  },
  filterCourse: {
    url: `${backendApi}/api/filter`,
    method: "get",
  },
  fetchAllCourse: {
    url: `${backendApi}/api/all-course`,
    method: "get",
  },
  getAllContact: {
    url: `${backendApi}/api/get-contact`,
    method: "get",
  },
  deleteContact: {
    url: `${backendApi}/api/delete-contact`,
    method: "post",
  },
};

export default SummaryApi;
