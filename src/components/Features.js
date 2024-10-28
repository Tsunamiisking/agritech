import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="bg-green-200 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 justify-between p-10">
      <Feature src="/images/1.png" text="Buy and sell products" />
      <Feature src="/images/2.png" text="We provide 24/7 srupport" />
      <Feature src="/images/3.png" text="Access to Fresh farm procuce" />
      <Feature src="/images/4.png" text="Swift and secure payment" />
    </section>

    
  );
};

export default Features;
