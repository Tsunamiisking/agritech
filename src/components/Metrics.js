import React from "react";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Wiatlist from "./Wiatlist";
import Reachout from "./Reachout";
import AccesibleMarket from "./AccesibleMarket";
import Goal from "./Goal";

const Metrics = () => {
  return (
    <div className="font-playfair">
      <Goal />

      <div className="bg-green-100 text-wrap flex flex-col space-y-5 items-center lg:flex-row lg:space-x-20 m-5 p-5">
        <span>
          <Image src={"/agric.jpg"} width={300} height={500} alt="agric" />
        </span>
        <span>
          <p>
            We aim at enhancing market access for small and local farmers in
            Nigeria. The system provides a digital marketplace, market
            intelligence, and financial services tailored to the needs of small
            farm holders.
          </p>
        </span>
        <span>
          <p>
            We offer a user-friendly platform for farmers to sell their produce directly
            to buyers with real-time market data, providing a fair price, demand, and market forecast.
          </p>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row px-5 items-center justify-items-center">
        <div className="font-extrabold font-roboto text-2xl text-balance text-center text-green-600 my-3">
          <h3>An Accessible Marketplace For Fresh Farm Produce</h3>
        </div>

        <div className="flex m-auto text-center space-x-10 rounded-xl bg-green-100 p-5 my-3">
          <span>
            <h1 className="font-extrabold text-2xl">15+</h1>
            <h5>Active States</h5>
          </span>
          <span>
            <h1 className="font-extrabold text-2xl">100%</h1>
            <h5>Guarantee</h5>
          </span>
          <span>
            <h1 className="font-extrabold text-2xl">100%</h1>
            <h5>Fee Based</h5>
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-5 font-roboto text-center text-2xl">
          Join the waitlist and get notified when we launch
        </p>
        <span>
          <input
            className="w-3/5 p-5 mr-2 rounded-lg border-4 border-green-100 lg:w-5/6"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-primary p-5 rounded-lg">Join Waitlist</button>
        </span>
      </div>

      <Faqs />

      <AccesibleMarket />

      <Wiatlist />

      <Reachout />

      <Footer />
    </div>
  );
};

export default Metrics;
