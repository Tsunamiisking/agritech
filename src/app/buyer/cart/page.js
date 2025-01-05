import React from "react";
import SideNav from "@/components/SideNav";

function page() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <SideNav
        option1={"Marketplace"}
        option2={"Purchase History"}
        option3={"Cart"}
        userType={"Buyer"}
      />
      <div>
        <header>Cart</header>
        <div>
            {cartItems.length === 0 ? ( <p>Your cart is empty</p>) : (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default page;
