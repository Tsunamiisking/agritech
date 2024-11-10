import Marketplace from "@/components/Marketplace";
import SideNav from "@/components/SideNav";
import React from "react";

function page() {
  return (
    <>
      <div className="flex">
        <SideNav
          option1={"Marketplace"}
          option2={"Purchase History"}
          option3={"Cart"}
          userType={"Buyer"}
        />
        <Marketplace />
      </div>
    </>
  );
}

export default page;
