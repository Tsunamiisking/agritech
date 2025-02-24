"use client"
import SideNav from "@/components/SideNav";
import UploadForm from "@/components/UploadForm";
import ProductListing from "@/components/ProductListing"; // Ensure this is imported
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

function Page() {
  const [activeComponent, setActiveComponent] = useState("uploadForm"); // Default component

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
        <div>

          {/* todo
          add product
          product listing: list of uploaded product
          edit update or deleteproduct
            */}
          <button
            onClick={() => setActiveComponent("uploadForm")}
            className={`${
              activeComponent === "uploadForm" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            } px-4 py-2 rounded`}
          >
            Add Product
          </button>
          <button
            onClick={() => setActiveComponent("productListing")}
            className={`${
              activeComponent === "productListing" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            } px-4 py-2 rounded ml-2`}
          >
            Product Listing
          </button>
        </div>

        {/* Dynamically Render Components */}
        <div className="mt-4">
          {activeComponent === "uploadForm" && <UploadForm />}
          {activeComponent === "productListing" && <ProductListing />}
        </div>
      </div>
    </Layout>
  );
}

export default Page;