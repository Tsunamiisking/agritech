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
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <SideNav
        option1={"Marketplace"}
        option2={"Purchase History"}
        option3={"Cart"}
        userType={"Buyer"}
      />

      {/* Main Content */}
      <div className="lg:ml-64 w-full px-4 lg:px-10 py-5">
        <h1 className="text-2xl font-semibold mb-5 text-center lg:text-left">
          Your Favorites
        </h1>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {favorites.map((item) => (
              <div
                key={item.id}
                className=" p-2 lg:p-4 border rounded-lg flex justify-center items-center border-secondary bg-white shadow-md"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-28 lg:w-32 lg:h-32 object-cover rounded"
                  width={128}
                  height={128}
                />
                <div className="lg:m-auto ml-2">
                  <div className="flex flex-col mt-3 ">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500 mt-1">#{item.price}</p>
                  </div>
                  <div className="mt-3 flex gap-2 lg:w-full justify-center">
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
                      className="bg-secondary text-white px-3 py-1 rounded hover:bg-opacity-90"
                    >
                      Remove
                    </button>
                    <button className="bg-primary text-white px-3 py-1 rounded hover:bg-opacity-90">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center lg:text-left">
            No Favorites Yet
          </p>
        )}
      </div>
    </div>
  );
}

export default Page;
