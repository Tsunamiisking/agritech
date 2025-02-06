import React from "react";
import SideNav from "@/components/SideNav";
import CartItems from "@/components/CartItems";
import Layout from "@/components/Layout";

function page() {
  return (
    <Layout>
      <CartItems />
    </Layout>
  );
}

export default page;
