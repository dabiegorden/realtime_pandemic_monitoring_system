import Card from "@/shared/Card";
import React from "react";

const AdminDashboard = () => {
  return (
    <section className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3">
        {/* Card */}
        <div className="flex items-center gap-4 justify-between">
          <Card />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8 bg-white">Right</div>
    </section>
  );
};

export default AdminDashboard;
