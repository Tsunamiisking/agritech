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
        <div className="absolute w-full inset-x opacity-20 h-screen bg-secondary"></div>
        <HeroText headertext="Where Technology Meets the Future of Farming" paragraphtext="Welcome to the revolutionary world where tech meets agriculture for the better of the people, Lets help you get that fresh farm produce swift and easy."/>
      </div>
    </>
  );
};

export default Hero;
