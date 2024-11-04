import Marketplace from "@/components/Marketplace";
import SideNav from "@/components/SideNav";
import React from "react";

function page() {
  return (
    <>
      <div className="flex">
        <SideNav />
        <Marketplace />
      </div>
    </>
  );
}

export default page;
