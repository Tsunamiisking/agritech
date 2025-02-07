"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
import { useRouter } from "next/navigation";

import Loading from "./Loading";
import RelatedProducts from "./RelatedProducts";

function CartItems() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  if (!cart || !cart.items) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6">
      <div className="  lg:mx-14 lg:w-full  ">
        {cart.items.length > 0 && (
          <div className="grid grid-cols-5 gap-4 bg-primary text-white mb-2 p-4 rounded-t-lg font-bold">
            <p>Product</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Total Price</p>
            <p>Actions</p>
          </div>
        )}
        {cart.items.length === 0 ? (
          <p className="text-gray-500 mt-4">Your cart is empty</p>
        ) : (
          cart.items.map((item) => (
            <div
              className="grid grid-cols-5 gap-4 bg-secondary p-4 mb-2 rounded-lg items-center shadow-sm hover:shadow-md transition-shadow duration-300"
              key={item.id}
            >
              <h4 className="text-sm font-medium text-gray-700">{item.name}</h4>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              <input
                className="w-16 border border-gray-300 outline-none rounded-md text-center focus:ring-2 focus:ring-primary"
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: +e.target.value })
                  )
                }
              />
              <p className="text-sm font-semibold text-gray-700">
                ${item.totalPrice}
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Checkout Section */}
      <div className="lg:w-72 lg:h-screen w-screen bg-primary fixed bottom-0 lg:right-0 lg:top-0 p-6 flex flex-col justify-between">
        <div>
          <h4 className="text-center text-lg font-semibold mb-4 ">
            Cart Summary
          </h4>
          <p className="mb-2 text-sm text-white">
            Total Items: {cart.totalQuantity}
          </p>
          <p className="mb-6 text-sm text-white">
            Total Price: ${cart.totalPrice.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => router.push("checkout")}
          className="w-full bg-secondary text-white py-3 rounded-md hover:bg-green-400 transition-colors duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
      <RelatedProducts />
    </div>
  );
}

export default CartItems;
