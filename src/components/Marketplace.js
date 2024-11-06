import React from "react";
import MarketPlaceHeader from "./MarketPlaceHeader";

function Marketplace() {
 
  return (
    <div className="px-5 flex flex-col items-center w-screen font-playfair ">
      <h3 className="font-bold">Marketplace</h3>
     <MarketPlaceHeader/>
     <h3 className="font-bold">All Items</h3>

    </div>
  );
}

export default Marketplace;
