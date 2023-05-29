import React from "react";
import { data1 } from "../mockData";
import Card from "./Card";
import Product from "./Product";

function Products({ setselectedProducts }) {
  return (
    <div className="w-full h-full  mx-auto pb-16 bg-gray-800">
      <h1 className="text-gray-200 py-10 text-4xl">SHOP WITH US</h1>
      <div className="max-w-[1280px] mx-auto text-white bg-gray-800">
        <div className="flex flex-wrap  justify-center">
          {data1.map((item) => (
            <Card item={item} setselectedProducts={setselectedProducts} />
          ))}
        </div>
      </div>
      <button className="text-gray-800 mt-10  bg-white rounded-md px-8 py-4 border  hover:border-white hover:bg-gray-800 hover:text-white duration-300">
        VIEW MORE
      </button>
    </div>
  );
}

export default Products;
