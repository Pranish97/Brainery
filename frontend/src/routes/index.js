import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllCourses from "../pages/AllCourses";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import CourseDetails from "../pages/CourseDetails";
import ForgertPassword from "../pages/ForgertPassword";
import ResetPassword from "../pages/ResetPassword";
import AllContact from "../pages/AllContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgertPassword />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-courses",
            element: <AllCourses />,
          },
          {
            path: "all-contact",
            element: <AllContact />,
          },
        ],
      },
    ],
  },
]);

export default router;
