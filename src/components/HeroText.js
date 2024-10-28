import React from 'react';
import HeroButton from './HeroButton';

const HeroText = ({ headertext, paragraphtext }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      <h1 className="mb-10 text-4xl lg:text-6xl md:text-5xl font-extrabold font-roboto text-primary" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
        {headertext}
      </h1>
      <p className="font-playfair text-shadow text-white">
        {paragraphtext}
      </p>
      <HeroButton />
    </div>
  );
};

export default HeroText;
