"use client";
import React, {useState} from "react";
import UploadForm from "@/components/UploadForm";
import ProductListing from "@/components/ProductListing";
import Loading from "./Loading";

function ProductManagement() {
  const [activeComponent, setActiveComponent] = useState("uploadForm");
  if (authLoading || roleLoading) {
    return <Loading />;
  }
  return (
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
            activeComponent === "uploadForm"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } px-4 py-2 rounded`}
        >
          Add Product
        </button>
        <button
          onClick={() => setActiveComponent("productListing")}
          className={`${
            activeComponent === "productListing"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
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
  );
}

export default ProductManagement;
