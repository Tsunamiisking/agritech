"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./ProductCard";
import products from "../data/products";

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const filteredProducts =
    selectedProduct &&
    products.filter((product) => product.category === selectedProduct.category);

  const toggleFavorite = (product) => {
    const isFavorited = favorites.some((fav) => fav.id === product.id);
    const updatedFavorites = isFavorited
      ? favorites.filter((fav) => fav.id !== product.id)
      : [...favorites, product];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to localStorage
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-lg border border-secondary shadow-md flex flex-col items-center bg-white hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            alt="Product Image"
            src={item.imageUrl}
            width={200}
            height={200}
            className="rounded-md h-24  "
          />
          <p className="mt-2 font-semibold text-center">{item.name}</p>
          <p className="text-gray-500 text-sm">#{item.price}</p>
          <button
            className="mt-4 px-4 py-2 rounded-lg bg-primary text-white hover:bg-secondary transition-colors duration-300"
            onClick={() => openModal(item)}
          >
            More
          </button>
        </div>
      ))}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          closeModal={closeModal}
          filteredProducts={filteredProducts}
          favorites={favorites}
          setFavorites={setFavorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default Product;
