import React from "react";
import SideNav from "@/components/SideNav";
import CartItems from "@/components/CartItems";

function page() {
  return (
    <div className="flex flex-col lg:flex-row">
      <SideNav
        option1={"Marketplace"}
        option2={"Purchase History"}
        option3={"Cart"}
        option4={"Favourite"}
        userType={"Buyer"}
      />
      <div className="ml-64">
        <h3 className="text-xl font-semibold mb-4 text-center">Your Cart</h3>
        <CartItems />
      </div>
    </div>
  );
}

export default page;
