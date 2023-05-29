import React, { useState } from "react";
import Product from "./Product";
import { BsFillCartPlusFill } from "react-icons/bs";

function Card({ item, setselectedProducts }) {
  const [imageUrl, setimageUrl] = useState(item.img);
  const [Flag, setFlag] = useState(false);

  function handleEnter() {
    setimageUrl(item.img1);
  }
  function handleLeave() {
    setimageUrl(item.img);
  }
  function handleClick() {
    setFlag(!Flag);
  }
  function handleItemClick() {
    console.log("working: ");
    var product = {
      title: item.title,
      img: item.img,
      price: item.price,
    };
    setselectedProducts((e) => [...e, product]);
  }

  return (
    <div>
      <div className="relative space-x-4 ">
        <img
          src={imageUrl}
          className="md:w-[300px] w-[200px] p-3 inline-block  ease-in-out  duration-200 "
          alt="/"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
        <BsFillCartPlusFill
          className="absolute top-6 right-12 hover:scale-110 "
          color="black"
          size={30}
          onClick={handleItemClick}
        />
        <h1 className=" text-xs lg:text-lg px-3 lg:px-9 ">{item.title}</h1>
        <h1 className="text-xs lg:text-lg">{item.price}</h1>
      </div>
      {Flag && <Product Flag={Flag} item={item} handleClick={handleClick} />}
    </div>
  );
}

export default Card;
