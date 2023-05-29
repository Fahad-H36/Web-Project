import React, { useState } from "react";
import { data } from "../mockData";

function ShoppingCartItem({ item, setselectedProducts }) {
  const [Count, setCount] = useState(1);

  const removeProductClick = () => {
    setselectedProducts((e) => new Array(...e).filter((i) => i !== item));
  };

  return (
    <div>
      {Count && (
        <div className="p-4 bg-white  border-y-2 border-y-gray-200">
          
          <div className="flex flex-row items-start">
            <img src={item.img} className="w-24 h-24" />

            <div className="p-2 space-y-2 ">
              <h1 className="text-sm">{item.title}</h1>
              <div className="flex border">
                <button
                  className="border border-black px-2"
                  onClick={() => setCount(Count === 1 ? Count : Count - 1)}
                >
                  -
                </button>
                <h1 className="px-2">{Count}</h1>
                <button
                  className="border border-black px-2"
                  onClick={() => setCount(Count + 1)}
                >
                  +
                </button>
                <h1 className="px-4 text-sm text-gray-500">
                  {item.price * Count} USD
                </h1>
              </div>
            </div>

            <button onClick={removeProductClick} className="pl-8 ">
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartItem;
