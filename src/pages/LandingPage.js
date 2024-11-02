import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Wiatlist from "@/components/Wiatlist";
import Goal from "@/components/Goal";
import AccesibleMarket from "@/components/AccesibleMarket";
import Faqs from "@/components/Faqs";
import Reachout from "@/components/Reachout";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="font-playfair">
        <Header />
        <Hero />
        <Features />
        <AboutUs />
        <Wiatlist />
        <Goal />
        <AccesibleMarket />
        <Faqs />
        <Reachout />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
