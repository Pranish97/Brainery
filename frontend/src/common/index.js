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
};

export default SummaryApi;
