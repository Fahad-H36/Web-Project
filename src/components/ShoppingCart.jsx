import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({
  Flag,
  selectedProducts,
  setselectedProducts,
  setFlag,
}) {
  return (
    <div className="">
      <div
        className={
          Flag
            ? "absolute right-0 top-0   min-h-screen duration-500 ease-in-out z-40 bg-white w-[400px]  "
            : "fixed right-[-100%] "
        }
      >
        <div className="flex justify-between p-2 bg-gray-800 text-white">
          <h1 className="text-3xl  font-bold p-2">CART</h1>
          <button
            className="text-end text-xl p-2"
            onClick={() => setFlag(!Flag)}
          >
            x
          </button>
        </div>
        {selectedProducts.map((item, index) => (
          <ShoppingCartItem
            key={index}
            item={item}
            setselectedProducts={setselectedProducts}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
