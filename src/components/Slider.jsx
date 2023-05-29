import React from "react";
import { data1 } from "../mockData.js";
import Card from "./Card";

function Slider() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">TOP SELLERS</h1>
      <div className="md:flex space-between justify-center relative top  item-center bg-gray-800 text-white p-10 space-x-6 z-20">
        <div
          id="Slider"
          className="w-full flex h-full scroll overflow-x-scroll  whitespace-nowrap p-4 scrollbar-hide "
        >
          {data1.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
