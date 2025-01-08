import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";

function CartItems() {
  return (
    <div>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.items.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <p>Total Price: ${item.totalPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(
                  updateQuantity({ id: item.id, quantity: +e.target.value })
                )
              }
            />
          </div>
        ))
        // <div>
        //   <table>
        //     <thead>
        //       <tr>
        //         <th>Product Name</th>
        //         <th>Qty</th>
        //         <th>Price</th>
        //         <th>Rate</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {cartItems.map((items, index) => {
        //         return (
        //           <tr key={index}>
        //             <td>{items.name}</td>
        //             <td>{items.qty}</td>
        //             <td>{items.price}</td>
        //             <td>{items.price * items.qty}</td>
        //             <td>
        //               {" "}
        //               <button>Remove From Cart</button>
        //             </td>
        //           </tr>
        //         );
        //       })}
        //     </tbody>
        //   </table>
        // </div>
      )}
      <h3>Total Items: {cart.totalQuantity}</h3>
      <h3>Total Price: {atRule.totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default CartItems;
