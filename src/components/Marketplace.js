import React from "react";
import MarketPlaceHeader from "./MarketPlaceHeader";

function Marketplace() {
 
  const  products = [
    {
      "id": 101,
      "name": "Organic Tomatoes",
      "category": "Vegetables",
      "price": 3500,
      "currency": "NGN  ",
      "description": "Fresh organic tomatoes from local farms.",
      "imageUrl": "https://www.pexels.com/photo/tomatoes-in-a-basket-28039617/",
      "unit": "kg"
    },
    {
      "id": 102,
      "name": "Bananas",
      "category": "Fruits",
      "price": 1200,
      "currency": "NGN",
      "description": "Sweet, organic bananas from tropical regions.",
      "imageUrl": "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
      "unit": "kg"
    },
    {
      "id": 103,
      "name": "Whole Milk",
      "category": "Dairy",
      "price": 2500,
      "currency": "NGN",
      "description": "Fresh whole milk from grass-fed cows.",
      "imageUrl": "https://images.pexels.com/photos/6803752/pexels-photo-6803752.jpeg?auto=compress&cs=tinysrgb&w=400",
      "unit": "liter"
    },
    {
      "id": 104,
      "name": "Basmati Rice",
      "category": "Grains",
      "price": 5000,
      "currency": "NGN",
      "description": "Premium quality basmati rice.",
      "imageUrl": "https://images.pexels.com/photos/8108170/pexels-photo-8108170.jpeg?auto=compress&cs=tinysrgb&w=400",
      "unit": "kg"
    }
  ]; 

  return (
    <div className="px-5 flex flex-col items-center w-screen font-playfair ">
      <h3 className="font-bold">Marketplace</h3>
     <MarketPlaceHeader/>
     <h3 className="font-bold">All Items</h3>

    </div>
  );
}

export default Marketplace;
