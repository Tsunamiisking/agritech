"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
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
  
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((items) => (
          <div
            key={items.id}
            className="p-2 rounded-lg m-2 border-2 border-secondary flex flex-col items-center "
          >
            <Image
              alt="product Image"
              src={items.imageUrl}
              width={200}
              height={100}
              className="h-24 w-28 rounded-md"
            />
            <p>{items.name}</p>
            <p>#{items.price}</p>
            <button
              className="rounded-lg bg-primary hover:bg-secondary ease-in px-5 py-2 mt-2 text-white"
              onClick={() => openModal(items)}
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
