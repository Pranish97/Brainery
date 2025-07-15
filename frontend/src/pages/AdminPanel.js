import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { SiCoursera } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GrContact } from "react-icons/gr";
import { useEffect } from "react";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "Admin") {
      navigate("/");
    }
  }, [user?.role]);

  return (
    <div className="min-h-[calc(100vh-58px)] lg:flex hidden">
      <aside className="min-h-full w-full max-w-60 bg-navigation shadow-xl">
        <div className="h-32 gap-3 flex justify-center items-center mt-10 flex-col text-white">
          <FaUser className="text-5xl  cursor-pointer" />
          <p className="capitalize font-semibold ">{user?.name}</p>
          <p className="font-semibold text-sm mt-2">{user?.role}</p>
        </div>

        <div className="text-white mt-16 items-center justify-center space-y-5">
          <div className="flex items-center justify-center">
            <Link
              to="all-users"
              className="flex text-lg items-center gap-2 hover:scale-105"
            >
              <FiUsers />
              <span>All Users</span>
            </Link>
          </div>
          <div className="flex text-lg items-center justify-center">
            <Link
              to="all-courses"
              className="flex items-center gap-2 hover:scale-105"
            >
              <SiCoursera />
              <span>Courses</span>
            </Link>
          </div>

          <div className="flex text-lg items-center justify-center">
            <Link
              to="all-contact"
              className="flex items-center gap-2 hover:scale-105"
            >
              <GrContact />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </aside>

      <main className="w-full h-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
