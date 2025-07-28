import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
