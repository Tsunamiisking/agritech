"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

function Modal({
  product,
  closeModal,
  filteredProducts,
  favorites,
  setFavorites,
  toggleFavorite,
}) {
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);
  return (
    <div className="m-auto   ml-72 lg:w-3/4 h-3/4 bg-primary fixed inset-0 bg-opacity-85 z-50 rounded-xl">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-white text-black rounded-circle p-3"
      >
        X
      </button>
      <div className="flex">
        <div className="bg-white rounded-lg p-5  w-3/4 md:w-1/2 lg:w-1/3  my-24 ml-2">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-md mt-2">
            Price: #{product.price} {product.currency}
          </p>
          <p className="text-sm mt-2">{product.description}</p>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={200}
            className="rounded-lg mt-4 h-28"
          />
          <div className="mt-1 justify-evenly bg-secondary flex  p-1 rounded-ss-2xl rounded-ee-2xl items-center  text-2xl h-10 ">
            <button onClick={() => toggleFavorite(product)}>
              {favorites.some((fav) => fav.id === product.id) ? (
                <AiFillHeart className="text-red-500" />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
            <button className="">
              <BsCartPlus className="" />
            </button>
            <button>
              <IoCallOutline className="" />
            </button>
            {/* <span className="flex flex-col -space-y-3 ">
              <button>+</button>
              <button>-</button>
            </span> */}
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <h3 className="text-xl font-semibold">
            More Products in {product.category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-2 place-items-center">
            {filteredProducts &&
              filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="p-2 rounded-lg m-2 border-2 bg-white w-40 border-secondary flex flex-col items-center"
                >
                  <Image
                    alt="product Image"
                    src={prod.imageUrl}
                    width={200}
                    height={100}
                    className="h-24 w-28 rounded-md"
                  />
                  <p>{prod.name}</p>
                  <p>#{prod.price}</p>
                  <button
                    className="rounded-lg bg-primary hover:bg-secondary ease-in px-5 py-2 mt-2 text-white"
                    onClick={() => openModal(prod)}
                  >
                    More
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
