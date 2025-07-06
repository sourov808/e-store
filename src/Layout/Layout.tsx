import { FilterProvider } from "@/lib/components/Context/FilterContext";
import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-1 bg-gray-300">
      <Navbar />
      <main className="border h-auto my-2">
        <FilterProvider>
          <Outlet />
        </FilterProvider>
      </main>
      <div className="border-red-500 border-2">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
