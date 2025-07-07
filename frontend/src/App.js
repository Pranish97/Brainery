import logo from "./logo.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const hideFooterPaths = ["/login", "/register", "/forgetpassword"];

  const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  console.log(shouldHideFooter);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
