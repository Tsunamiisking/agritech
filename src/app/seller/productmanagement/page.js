"use client"
import SideNav from "@/components/SideNav";
import UploadForm from "@/components/UploadForm";
import ProductListing from "@/components/ProductListing"; // Ensure this is imported
import React, { useState } from "react";
import Layout from "@/components/Layout";
import ProductManagement from "@/components/ProductManagement";

function Page() {
  const [activeComponent, setActiveComponent] = useState("uploadForm"); // Default component

  return (
    <Layout>
      <SideNav
        option1={"Dashboard"}
        option2={"Product management"}
        option3={"Order Management"}
        option4={"Payment Management"}
        userType={"Seller"}
      />
      <ProductManagement/>
    </Layout>
  );
}

export default Page;