"use client";
import SideNav from "@/components/SideNav";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const [favorites, setFavorites] = useState([]);
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
          <h1>Your Favorites</h1>
          {favorites.length > 0 ? (
            <div className="grid lg:grid-col-2">
              {favorites.map((item) => (
                <div key={item.id} className=" w-6/12">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <h3 className="mt-2">{product.name}</h3>
                  <p className="text-gray-500">#{product.price}</p>
                  <div>
                    <button>Remove</button>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No Favorites Yet</p>
          )}
        </div>
        <Link href="/"> <p>Back to Products </p></Link>
      </div>
    </>
  );
}

export default Page;
