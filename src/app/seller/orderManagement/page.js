"use client"
import React from "react";
import Loading from "@/components/Loading";
import InventoryItem from "@/components/InventoryItem";
import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";
import { useEffect } from "react";
import { useRouter } from "next/router";
function page() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuthState();
  const { role, loading: roleLoading } = useUserRole(user?.uid);

  useEffect(() => {
      if (role === "buyer") 
        router.push("/buyer/marketplace");
  }, [authLoading, roleLoading, role, router]);

  if (authLoading || roleLoading) {
    return <Loading />;
  }

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
