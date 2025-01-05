import React from "react";
import SideNav from "@/components/SideNav";
import CartItems from "@/components/CartItems";

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
       <CartItems/>
      </div>
    </div>
  );
}

export default page;
