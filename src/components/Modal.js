"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Modal({
  product,
  closeModal,
  filteredProducts,
  favorites,
  setFavorites,
  toggleFavorite,
}) {
  const router = useRouter();
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);
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
        <div className="bg-white rounded-lg p-5  md:w-48 md:h-80 lg:h-80">
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
            className="rounded-lg mt-4  h-24"
          />
          <div className="mt-4 flex justify-around bg-secondary p-2 rounded-lg items-center text-2xl text-white">
            <button onClick={() => toggleFavorite(product)}>
              {favorites.some((fav) => fav.id === product.id) ? (
                <AiFillHeart className="text-red-500" />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
            <button onClick={() => router.push("/checkout")}>
              <BsCartPlus />
            </button>
            <button>
              <IoCallOutline />
            </button>
          </div>
        </div>
        {/* Related Products Section */}
        {filteredProducts && (
          <div className="hidden md:block md:w-10/12">
            <h3 className="text-xl font-semibold text-white text-center mb-4">
              More Products in {product.category}
            </h3>
            <div className="grid grid-cols-3 gap-2 h-96 overflow-y-scroll">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center h-56"
                >
                  <Image
                    alt="product Image"
                    src={prod.imageUrl}
                    width={150}
                    height={100}
                    className="rounded-md h-24"
                  />
                  <p className="mt-2 text-sm font-semibold">{prod.name}</p>
                  <p className="text-gray-500 text-sm">#{prod.price}</p>
                  <button
                    className="mt-4 px-3 py-1 rounded-lg bg-primary text-white hover:bg-secondary transition duration-300"
                    onClick={() => openModal(prod)}
                  >
                    More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
