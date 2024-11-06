import Sidebar from "@/shared/Sidebar";
import Nav from "@/shared/Nav";
import React from "react";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-[20%] md:w-[8%] lg:w-[16%] xl:w-[20%]  bg-blue-600 shadow-md">
        <span className="hidden lg:block pl-4 mb-4 pt-4">
          <h1 className="font-bold text-2xl text-white">PMS</h1>
        </span>
        <Sidebar />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
