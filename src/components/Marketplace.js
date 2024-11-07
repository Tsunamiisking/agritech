import React from "react";
import Image from "next/image";
import MarketPlaceHeader from "./MarketPlaceHeader";

function Marketplace() {
  const products = [
    {
      id: 101,
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: 3500,
      currency: "NGN  ",
      description: "Fresh organic tomatoes from local farms.",
      imageUrl:
        "https://images.pexels.com/photos/28039617/pexels-photo-28039617/free-photo-of-tomatoes-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "kg",
    },
    {
      id: 102,
      name: "Bananas",
      category: "Fruits",
      price: 1200,
      currency: "NGN",
      description: "Sweet, organic bananas from tropical regions.",
      imageUrl:
        "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 103,
      name: "Whole Milk",
      category: "Dairy",
      price: 2500,
      currency: "NGN",
      description: "Fresh whole milk from grass-fed cows.",
      imageUrl:
        "https://images.pexels.com/photos/6803752/pexels-photo-6803752.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "liter",
    },
    {
      id: 104,
      name: "Basmati Rice",
      category: "Grains",
      price: 5000,
      currency: "NGN",
      description: "Premium quality basmati rice.",
      imageUrl:
        "https://images.pexels.com/photos/8108170/pexels-photo-8108170.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 105,
      name: "Maize",
      category: "Grains",
      price: 2000,
      currency: "NGN",
      description: "Organic, non-GMO maize kernels.",
      imageUrl:
        "https://images.pexels.com/photos/1058349/pexels-photo-1058349.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 106,
      name: "Wheat Flour",
      category: "Flour",
      price: 1500,
      currency: "NGN",
      description: "Finely milled wheat flour, ideal for baking.",
      imageUrl:
        "https://images.pexels.com/photos/4110224/pexels-photo-4110224.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 107,
      name: "Groundnut Oil",
      category: "Oils",
      price: 7000,
      currency: "NGN",
      description: "Pure groundnut oil for cooking and frying.",
      imageUrl:
        "https://images.pexels.com/photos/2135673/pexels-photo-2135673.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "litre",
    },
    {
      id: 108,
      name: "Cassava Flour",
      category: "Flour",
      price: 1800,
      currency: "NGN",
      description: "High-quality cassava flour for various recipes.",
      imageUrl:
        "https://images.pexels.com/photos/4197588/pexels-photo-4197588.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 109,
      name: "Palm Oil",
      category: "Oils",
      price: 4500,
      currency: "NGN",
      description: "Rich and nutritious palm oil, ideal for cooking.",
      imageUrl:
        "https://images.pexels.com/photos/4493120/pexels-photo-4493120.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "litre",
    },
    {
      id: 110,
      name: "Soybeans",
      category: "Legumes",
      price: 3000,
      currency: "NGN",
      description: "High-protein soybeans, perfect for meals and processing.",
      imageUrl:
        "https://images.pexels.com/photos/276503/pexels-photo-276503.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 111,
      name: "Cocoa Beans",
      category: "Nuts & Seeds",
      price: 8000,
      currency: "NGN",
      description: "Quality cocoa beans for chocolate production.",
      imageUrl:
        "https://images.pexels.com/photos/2752372/pexels-photo-2752372.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
    {
      id: 112,
      name: "Honey",
      category: "Sweeteners",
      price: 2500,
      currency: "NGN",
      description: "Pure, raw honey from organic sources.",
      imageUrl:
        "https://images.pexels.com/photos/5314466/pexels-photo-5314466.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "litre",
    },
    {
      id: 113,
      name: "Ginger",
      category: "Spices",
      price: 1000,
      currency: "NGN",
      description: "Fresh ginger, perfect for cooking and tea.",
      imageUrl:
        "https://images.pexels.com/photos/4110258/pexels-photo-4110258.jpeg?auto=compress&cs=tinysrgb&w=400",
      unit: "kg",
    },
  ];

  return (
    <div className="px-5 flex flex-col items-center w-screen font-playfair ">
      <h3 className="font-bold">Marketplace</h3>
      <MarketPlaceHeader />
      <h3 className="font-bold">All Items</h3>

      <div>
        {products.map((items) => (
          <div key={items.id}>
            <Image
              alt="product Image"
              src={items.imageUrl}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
