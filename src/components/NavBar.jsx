import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import leanOn from "../assets/leanOn.png";

const NavBar = ({ selectedProducts, setselectedProducts }) => {
  const [Flag, setFlag] = useState(false);
  return (
    <div className="bg-gray-800">
      <div className="max-w-[1280px] mx-auto ">
        <div className="">
          <div className="flex justify-between p-2 ">
            <img className="w-10 h-10" src={leanOn} />
            <h1 className="text-yellow-400 font-bold text-4xl">
              Lean<span className="text-white">On</span>
            </h1>
            <button
              className="border-none"
              onClick={() => {
                setFlag(!Flag);
              }}
            >
              <AiOutlineShoppingCart color="white" size={30} className="px-1" />
            </button>
          </div>
          <ShoppingCart
            setFlag={setFlag}
            Flag={Flag}
            selectedProducts={selectedProducts}
            setselectedProducts={setselectedProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
