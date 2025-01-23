import SideNav from "@/components/SideNav";
import UploadForm from "@/components/UploadForm";
import React from "react";

function page() {
  return (
    <>
        <SideNav />
      <div className=" md:ml-64 lg:ml-64">
        <h1>Upload Product</h1>
        <UploadForm/>
      </div>
    </>
  );
}

export default page;
