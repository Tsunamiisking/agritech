import React from "react";
import HeroText from "./HeroText";
import Features from "./Features";

const Hero = () => {
  return (
    <div
      className="hero relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/bg-img2.jpg')`,
        height: "100vh",
      }}
    >
      {/* Optional overlay for background dimming */}
      {/* <div className="absolute inset-0 bg-secondary opacity-30"></div> */}
      
      {/* Hero Text Section */}
      <div className="relative z-10 p-10">
        <HeroText
          headertext="Where Technology Meets the Future of Farming"
          paragraphtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto deserunt praesentium! Corporis labore similique necessitatibus eum debitis amet architecto, doloremque natus. Aperiam ratione consectetur eveniet deserunt tenetur eum. Libero."
        />
      </div>
    </div>
  );
};

export default Hero;
