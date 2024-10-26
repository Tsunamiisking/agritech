import React from "react";
// import Image from "next/image";

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
        <div className="absolute w-full inset-x opacity-40 h-screen bg-secondary"></div>
      </div>
    </>
  );
};

export default Hero;
