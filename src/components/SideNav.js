"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShop, CiShoppingCart } from "react-icons/ci";
import { RiFileList3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import NavItem from "./NavItem";
import { auth } from "@/app/firebase/config";
import { useSignOut } from "react-firebase-hooks/auth";

// function to help concat string and remove space for navigation
function concatstring(texts) {
  return texts && texts.toLowerCase().split(" ").join("");
}
function SideNav({ username, userType, option1, option2, option3, option4 }) {
  const [signOut] = useSignOut(auth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const handleOverlayClick = () => {
    if (isMobileMenuOpen) setMobileMenuOpen(false);
  };

  const SidebarContent = () => (
    <>
      <div className="p-5 flex flex-col items-center space-y-3">
        <Image
          src={"/images/"}
          width={100}
          height={100}
          alt="profile-picture"
          className="rounded-circle bg-secondary"
        />
        <h3 className="font-extrabold text-white">{username}</h3>
        <h4 className="bg-secondary py-1 px-6 rounded-lg font-semibold">
          {userType}
        </h4>
      </div>
      <div className="bg-secondary h-full flex justify-center py-20">
        <nav className="flex flex-col space-y-3 text-white">
          <NavItem href={`${concatstring(option1)}`}>
            <span className="flex items-center">
              <CiShop /> MarketPlace
            </span>
          </NavItem>

          <NavItem href={`${concatstring(option2)}`}>

            <span className="flex items-center">
              <RiFileList3Line /> Cart
            </span>
          </NavItem>
          <NavItem href={`${concatstring(option3)}`}>
            <span className="flex items-center">
              <CiShoppingCart /> Purchase History
            </span>
          </NavItem>
          <NavItem href={`${concatstring(option4)}`}>
            <span className="flex items-center">
              <AiOutlineHeart /> Favorite
            </span>
          </NavItem>
          <NavItem href={"/buyer/settings"}>
            <span className="flex items-center">
              <IoSettingsOutline /> Settings
            </span>
          </NavItem>
          <NavItem href={"/"}>
            <span onClick={signOut} className="flex items-center">
              <GrLogout /> Logout
            </span>
          </NavItem>
        </nav>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-primary h-screen fixed rounded-tr-xl rounded-br-xl font-playfair">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="fixed top-1 left-1 bg-primary text-white p-3 rounded-full shadow-lg z-50"
        >
          {isMobileMenuOpen ? (
            <MdClose size={24} />
          ) : (
            <HiOutlineMenuAlt3 size={24} />
          )}
        </button>
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={handleOverlayClick}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-primary shadow-lg transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40`}
        >
          <SidebarContent />
        </div>
      </div>
    </>
  );
}

export default SideNav;
