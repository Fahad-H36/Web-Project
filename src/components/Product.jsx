import React, { useState } from "react";

function Product({ data }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product">
      <h2 className="text-lg font-medium">{data.title}</h2>
      <img src={data.img} className="w-64 h-64 object-cover mt-2" />
      <p className="text-gray-600 mt-2">this product is good</p>
      <p className="text-green-500 font-semibold mt-2">${data.price}</p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-2"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="details mt-2 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-medium">Details for {data.title}</h3>
          <p className="mt-2">very nicee</p>
        </div>
      )}
    </div>
  );
}

export default Product;
