import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const img1 = {
    backgroundImage: `url('/images/open-farm.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    weight: "200",
    height: "300px",
  };
  const img2 = {
    backgroundImage: `url('/images/aboutus-1.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    weight: "300px",
    height: "300px",
  };
  return (
    <>
      <section className="mt-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-10">About Us</h1>
          <p className="font-playfair mb-10 p-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolore dolorum maiores vitae dolores, voluptate
            blanditiis minima tempora totam mollitia, voluptas veniam ratione
            harum praesentium alias, suscipit quos? Iure, accusantium!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 p-5">
          <div className="p-5 order-1 sm:order-1 md:order-1 lg:order-1">
            <h1 className="font-roboto text-2xl font-bold mb-5 ">
              Who are we?
            </h1>
            <p className="font-playfair">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dolore dolorum maiores vitae dolores, voluptate
              blanditiis minima tempora totam mollitia, voluptas veniam ratione
              harum praesentium alias, suscipit quos? Iure, accusantium!
            </p>
            </div>
          <div className="rounded-lg order-2 sm:order-2 md:order-2 lg:order-2"  style={img1}></div>
          <div className="font-playfair p-5 order-3 sm:order-3 md:order-4 lg:order-4">
            <h1 className="font-roboto text-2xl font-bold mb-5" >What we do?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dolore dolorum maiores vitae dolores, voluptate
              blanditiis minima tempora totam mollitia, voluptas veniam ratione
              harum praesentium alias, suscipit quos? Iure, accusantium!
            </p>
          </div>

          <div className="rounded-lg order-4 sm:order-4 md:order-3 lg:order3" style={img2}></div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
