import React from "react";
import Typed from "react-typed";

import background from "../assets/background.jpeg";

const Home = () => {
  return (
    <section className="relative">
      <img src={background} className="  min-h-screen  " />
      <div className="absolute left-10  text-4xl uppercase font-bold text-white top-[30%]">
        <Typed
          typeSpeed={60}
          backSpeed={80}
          strings={["make it simple, but significant."]}
        ></Typed>
      </div>
      <div className="max-w-[1280px] relative "></div>
    </section>
  );
};

export default Home;
