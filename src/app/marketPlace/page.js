"use client"
import Marketplace from "@/components/Marketplace";
import SideNav from "@/components/SideNav";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { CustomerType } from "@/utils/CustomerType";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const Page = () => {

  return (
    <>
      <div className="flex px-5 lg:px-0">
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
};

export default function ProtectedMarketPlace() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
