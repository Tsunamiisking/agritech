"use client";
import React from "react";

import MarketPlaceHeader from "./MarketPlaceHeader";
import Product from "./Product";

function Marketplace() {
  return (
    <div className="lg:ml-64 lg:px-5 flex flex-col items-center w-screen font-playfair ">
      <h3 className="font-bold mt-3">Marketplace</h3>
      <MarketPlaceHeader />
      <h3 className="font-bold">All Items</h3>

      <Product />
    </div>
  );
}

export default Marketplace;
