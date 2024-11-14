import React from "react";
import { fetchStats } from "@/lib/fetchStats";
import ServerCard from "@/components/ServerCard";

const Card = async () => {
  let data = [];
  try {
    data = await fetchStats();
  } catch (error) {
    console.error("Error fetching covid stats.");
  }

  return (
    <section>
      <div className="flex justify-between items-center gap-4">
        {data.map((stat, index) => (
          <div
            key={index}
            className="bg-white px-4 py-4 rounded-md shadow-sm flex flex-col items-center text-center card_border_bottom hover:ring-[1.5px] hover:ring-orange-600 hover:duration-300 hover:ease-in"
          >
            <h2 className="text-lg font-bold text-gray-700">{stat.country}</h2>
            <p className="text-sm text-gray-600">Cases: {stat.cases.total}</p>
            <p className="text-sm text-gray-600">Deaths: {stat.deaths.total}</p>
            <p className="text-sm text-gray-600">
              Recovered: {stat.cases.recovered}
            </p>
          </div>
        ))}
      </div>

      <ServerCard />
    </section>
  );
};

export default Card;
