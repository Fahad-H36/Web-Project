import React from "react";

function TrendCard({ data }) {
  return (
    <div className="relative flex items-center bg-black text-white justify-center group hover:text-black  duration-300">
      <img className=" w-[400px]" src={data.img} />
      <h1 className="absolute  rounded-2xl px-4 py-2 font-bold bg-black group-hover:bg-white duration-200  ">
        {data.title}
      </h1>
    </div>
  );
}

export default TrendCard;
