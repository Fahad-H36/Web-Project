import React from "react";
import { trendData } from "../mockData";
import TrendCard from "./TrendCard";

function Trend() {
  return (
    <div className="py-24  bg-white">
      <div className="mx-auto max-w-[1280px] flex  justify-between">
        {trendData.map((data) => (
          <TrendCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Trend;
