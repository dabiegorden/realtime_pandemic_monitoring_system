import Card from "@/shared/Card";
import Link from "next/link";
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
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* right-side 1 */}
        <div className="bg-white px-4 py-4 rounded-md hover:ring-[3px] hover:ring-orange-600 hover:transition hover:duration-300 hover:ease-in border_right">
          <h2 className="text-lg mb-4 font-bold text-orange-600">
            Notifications 🔔
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[1.1rem] text-gray-900">
              Stay safe there's a pandemic outbreak!
            </p>
            <p className="text-[0.95rem] text-gray-600">
              Stay active for possible updates that will come, we will do our
              best to provide you with the insight.
            </p>
          </div>
        </div>
        {/* right-side 2 */}
        <div className="bg-white px-4 py-4 rounded-md hover:ring-[3px] hover:ring-orange-600 hover:transition hover:duration-300 hover:ease-in border_right">
          <h2 className="text-lg mb-4 font-bold text-orange-600">
            Recent Cases 🦟
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[1.1rem] text-gray-900">
              Totoal active cases, and activ pandemics around the world.
            </p>
            <p className="text-[0.95rem] text-gray-600">
              Stay active for possible updates that will come, we will do our
              best to provide you with the insight.
            </p>
          </div>
        </div>
        {/* right-side 2 */}
        <div className="bg-white px-4 py-4 rounded-md hover:ring-[3px] hover:ring-orange-600 hover:transition hover:duration-300 hover:ease-in border_right">
          <h2 className="text-lg mb-[1.5rem] font-bold text-orange-600">
            Check home activities 🏠
          </h2>
          <Link
            href={"/"}
            className="bg-orange-500 text-white px-4 py-3 rounded-md text-[1.1rem] font-bold shadow-sm  hover:bg-transparent hover:text-[#222] hover:ring-[1.5px] hover:ring-orange-600 hover:transition hover:duration-300 hover:ease-in"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
