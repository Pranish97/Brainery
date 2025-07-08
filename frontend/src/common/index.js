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
};

export default SummaryApi;
