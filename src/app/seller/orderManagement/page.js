import React from "react";
import SideNavSeller from "@/components/SideNavSeller";
import InventoryItem from "@/components/InventoryItem";
import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";

function page() {
  return (
    <Layout>
      <SideNav
        option1={"Dashboard"}
        option2={"Product management"}
        option3={"Order Management"}
        option4={"Payment Management"}
        userType={"Seller"}
      />
      <div className="md:ml-64 lg:ml-64">
        My inventory
        {/* to do
      current order: customer detial, order status, delivery timeline 
      order history: archive of completed or canceled order
      tools for maeking order: not proccessed, proccesing, shipped, completed
      */}
        <InventoryItem />
      </div>
    </Layout>
  );
}

export default page;
