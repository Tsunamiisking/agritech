"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { addToFavorite, removeFromFavorite } from "@/store/favoriteSlice";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import RelatedProducts from "./RelatedProducts";

function ProductCard({ product, closeModal, filteredProducts }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items); 

  // Add to cart handler
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Item added to cart successfully");
    closeModal();
  };

  // Toggle favorite handler
  const toggleFavorite = () => {
    if (favorites.some((fav) => fav.id === product.id)) {
      dispatch(removeFromFavorite(product.id)); // Remove from favorites
    } else {
      dispatch(addToFavorite(product)); // Add to favorites
    }
  };

  const router = useRouter();

  // Handle overlay click to close modal
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
    >
      <div className="relative bg-primary rounded-xl shadow-lg w-full max-w-4xl md:flex md:space-x-4 p-6">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
        >
          X
        </button>
        {/* Product Details Section */}
        <div className="bg-white rounded-lg p-5 md:w-48 md:h-80 lg:h-80">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-md mt-2">
            Price: #{product.price} {product.currency}
          </p>
          <p className="text-xs font-thin mt-2">{product.description}</p>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={200}
            className="rounded-lg mt-4 h-24"
          />
          <div className="mt-4 flex justify-around bg-secondary p-2 rounded-lg items-center text-2xl text-white">
            {/* Favorite Button */}
            <button onClick={toggleFavorite}>
              {favorites.some((fav) => fav.id === product.id) ? (
                <AiFillHeart className="text-red-500" /> // Filled heart if in favorites
              ) : (
                <AiOutlineHeart /> // Outline heart if not in favorites
              )}
            </button>
            {/* Add to Cart Button */}
            <button onClick={handleAddToCart}>
              <BsCartPlus />
            </button>
            {/* Call Button */}
            <button>
              <IoCallOutline />
            </button>
          </div>
        </div>
        {/* Related Products Section */}
        <RelatedProducts filteredProducts={filteredProducts} product={product} />
      </div>

    </div>
  );
}

export default ProductCard;