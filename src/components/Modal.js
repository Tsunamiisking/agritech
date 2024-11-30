import React from "react";
import Image from "next/image";

function Modal({ product, closeModal, selectedCategory, filteredProducts }) {
  console.log(product);
  return (
    <div className=" ml-64 m-auto lg:w-6/12 h-96 bg-secondary fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-3"
      >
        {" "}
        X{" "}
      </button>
      <div className="bg-white rounded-lg p-5 w-3/4 md:w-1/2 lg:w-1/3 relative">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-md mt-2">
          Price: #{product.price} {product.currency}
        </p>
        <p className="text-sm mt-2">{product.description}</p>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300} // Add appropriate width
          height={200} // Add appropriate height
          className="rounded-lg mt-4"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left side - Selected Category */}
        <h3 className="mt-4 text-xl font-semibold">
          More Products from {selectedCategory}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-2 rounded-lg m-2 border-2 border-secondary flex flex-col items-center"
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
  );
}

export default Modal;
