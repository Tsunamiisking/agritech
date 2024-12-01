"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

function Modal({ product, closeModal, filteredProducts, toggleFavorite }) {
  console.log(product);
  return (
    <div className=" m-auto lg:w-6/12 h-3/4 bg-primary fixed inset-0 bg-opacity-85 flex justify-center items-center z-50 rounded-xl">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-circle p-3"
      >
        {" "}
        X{" "}
      </button>
      <div className="flex mx-auto">
        <div className="bg-white rounded-lg p-5 h-auto w-3/4 md:w-1/2 lg:w-1/3 my-auto ml-2">
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
          <div className="mt-1 bg-secondary flex space-x-7 p-1 rounded-ss-2xl rounded-ee-2xl items-center justify-items-center">
            <button onClick={() => toggleFavorite(product)}>
              {favorites.some((fav) => fav.id === product.id) ? (
                <AiFillHeart className="text-red-500" />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
            <button className="border-x-2 p-1">
              <BsCartPlus className="text-2xl" />
            </button>
            <button>
              <IoCallOutline className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <h3 className="text-xl font-semibold">
            More Products in {product.category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-2 place-items-center">
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
