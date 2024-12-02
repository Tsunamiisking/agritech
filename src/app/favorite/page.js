"use client";
import SideNav from "@/components/SideNav";
import React, { useState, useEffect } from "react";
import Image from "next/image";


function Page() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <div className="flex px-5 lg:px-0">
        <SideNav
          option1={"Marketplace"}
          option2={"Purchase History"}
          option3={"Cart"}
          userType={"Buyer"}
        />
        <div className="ml-64 flex flex-col items-center w-full">
          <h1 className="text-2xl font-semibold mb-5">Your Favorites</h1>
          {favorites.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-4">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg flex  items-center"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded"
                    width={128}
                    height={128}
                  />
                  <div className="flex flex-col ml-2 items-center">
                    <div>
                      <h3 className="mt-2 text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500">#{item.price}</p>
                    </div>
                    <div className="mt-3 flex gap-4">
                      <button
                        onClick={() => {
                          const updatedFavorites = favorites.filter(
                            (fav) => fav.id !== item.id
                          );
                          setFavorites(updatedFavorites);
                          localStorage.setItem(
                            "favorites",
                            JSON.stringify(updatedFavorites)
                          );
                        }}
                        className="bg-secondary text-white px-3 py-1 rounded"
                      >
                        Remove
                      </button>
                      <button className="bg-primary text-white px-3 py-1 rounded">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No Favorites Yet</p>
          )}
        </div>
       
      </div>
    </>
  );
}

export default Page;
