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
      <Wiatlist />

      <Goal />

      <AccesibleMarket />
      
      <Faqs />

      <Reachout />

      <Footer />
    </div>
  );
};

export default Metrics;
