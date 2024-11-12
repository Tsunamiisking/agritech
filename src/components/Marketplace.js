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
        "https://images.pexels.com/photos/7543161/pexels-photo-7543161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "https://images.pexels.com/photos/220989/pexels-photo-220989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "https://images.pexels.com/photos/3735181/pexels-photo-3735181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "https://images.pexels.com/photos/50707/cocoa-man-colombia-peasant-50707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "https://images.pexels.com/photos/1872902/pexels-photo-1872902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "https://images.pexels.com/photos/128403/pexels-photo-128403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      unit: "kg",
    },
  ];

  return (
    <div className="lg:ml-64 lg:px-5 flex flex-col items-center w-screen font-playfair ">
      <h3 className="font-bold">Marketplace</h3>
      <MarketPlaceHeader />
      <h3 className="font-bold">All Items</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((items) => (
          <div key={items.id} className="p-5 rounded-lg m-3 border-2 border-secondary flex flex-col items-center">
            <Image
              alt="product Image"
              src={items.imageUrl}
              width={200}
              height={100}
              className="h-24 w-28"
            />
            <p>{items.name}</p>
            <p>{items.description}</p>
            <button className="rounded-lg bg-primary hover:bg-secondary ease-in px-5 py-2 mt-2 text-white ">More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
