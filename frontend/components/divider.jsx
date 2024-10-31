import React from "react";
import { Divider } from "antd";
const DividerPage = () => (
  <section id="learnmore">
    <h1 className="text-center my-8 font-bold text-2xl text-[#222]">
      Why this system <span className="text-orange-600">matters?</span>
    </h1>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white px-4 py-4 rounded-md shadow-xl">
        <p className="text-[#222] tracking-wide leading-8">
          With the rise in global travel, urbanization, and environmental
          changes, pandemics are no longer isolated incidents, they affect every
          corner of the world. COVID-19 and other recent outbreaks have shown
          that rapid information dissemination and data-driven decisions are
          critical in managing and containing health crises. The Real-Time
          Pandemic Monitoring System aims to address this need by:
        </p>
        <Divider />
      </div>
      <div className="bg-white px-4 py-4 rounded-md shadow-xl">
        <p className="text-[#222] tracking-wide leading-8">
          Providing instant access to reliable pandemic data, Helping
          governments, health organizations, and communities make informed
          decisions, Offering users predictions to prepare for potential
          outbreaks, and Reducing misinformation by ensuring accurate, verified,
          and timely data is available to all users.
        </p>
        <Divider />
      </div>
    </div>
  </section>
);
export default DividerPage;
