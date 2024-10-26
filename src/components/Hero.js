import React from "react";
// import Image from "next/image";
import HeroText from "./HeroText";

const Hero = () => {
  const style = {
    backgroundImage: `url('/images/bg-img2.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };
  return (
    <>
      <div style={style}>
        <div className="absolute w-full inset-x opacity-30 h-screen bg-secondary"></div>
        <HeroText headertext="Where Technology Meets the Future of Farming" paragraphtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto deserunt praesentium! Corporis labore similique necessitatibus eum debitis amet architecto, doloremque natus. Aperiam ratione consectetur eveniet deserunt tenetur eum. Libero."/>
      </div>
    </>
  );
};

export default Hero;
