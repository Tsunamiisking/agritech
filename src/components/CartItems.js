import React from "react";

function CartItems() {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{items.name}</td>
                    <td>{items.qty}</td>
                    <td>{items.price}</td>
                    <td>{items.price * items.qty}</td>
                    <td>
                      {" "}
                      <button>Remove From Cart</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CartItems;
