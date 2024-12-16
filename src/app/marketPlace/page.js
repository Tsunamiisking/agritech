"use client";
import Marketplace from "@/components/Marketplace";
import SideNav from "@/components/SideNav";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { CustomerType } from "@/utils/CustomerType";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { CiShop } from "react-icons/ci";
import { RiFileList3Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai"; 

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
          // options={[
          //   { name: "Marketplace", link: "/marketplace", icon: <CiShop /> },
          //   { name: "Orders", link: "/orders", icon: <RiFileList3Line /> },
          //   { name: "Cart", link: "/cart", icon: <CiShoppingCart /> },
          //   { name: "Favorites", link: "/favorite", icon: <AiOutlineHeart /> },
          //   {
          //     name: "Settings",
          //     link: "/settings",
          //     icon: <IoSettingsOutline />,
          //   },
          //   { name: "Logout", link: "/logout", icon: <GrLogout /> },
          // ]}
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
