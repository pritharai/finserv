import Navbar from "../pages/Navbar";
// import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />


      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* This is where the page content goes */}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
