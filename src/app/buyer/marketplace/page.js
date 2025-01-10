"use client";
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
          userType="Buyer"
          option1="MarketPlace"
          option2="Order History"
          option3="Cart"
          option4="Favourite"
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
