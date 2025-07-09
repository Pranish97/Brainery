import logo from "./logo.svg";
import "./App.css";
import { data, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const location = useLocation();

  const hideFooterPaths = [
    "/login",
    "/register",
    "/forgetpassword",
    "/admin-panel",
    "/admin-panel/all-users",
    "/admin-panel/all-courses",
  ];

  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const response = await fetch(SummaryApi.userDetails.url, {
      method: SummaryApi.userDetails.method,
      credentials: "include",
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      dispatch(setUserDetails(dataResponse.data));
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails,
        }}
      >
        <ToastContainer />
        <Header />
        <main>
          <Outlet />
        </main>
        {!shouldHideFooter && <Footer />}
      </Context.Provider>
    </>
  );
}

export default App;
