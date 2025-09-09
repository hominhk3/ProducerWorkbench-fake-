import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const MasterLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D1117] text-gray-100">
      <header className="sticky top-0 z-50 shadow-md">
        <Header />
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-gray-700 bg-[#111827] py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default MasterLayout;
