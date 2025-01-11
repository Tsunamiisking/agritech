"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiShop } from "react-icons/ci";
import { RiFileList3Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import NavItem from "./NavItem";
import { auth } from "@/app/firebase/config";
import { useSignOut } from "react-firebase-hooks/auth";

function SideNav({
  username = "User",
  userType = "Buyer",
  profilePicture = "/images/default-profile.png",
  option1,
  option2,
  option3,
  option4,
}) {
  const [signOut] = useSignOut(auth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleOverlayClick = () => {
    if (isMobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block lg:block w-64 bg-primary h-screen fixed rounded-tr-xl rounded-br-xl font-playfair">
        <div className="p-5 flex flex-col items-center space-y-3">
          <Image
            src={profilePicture}
            width={100}
            height={100}
            alt="profile-picture"
            className="rounded-circle bg-secondary"
          />
          <h3 className="font-extrabold text-white">{username}</h3>
          <h4 className="bg-secondary py-1 px-6 rounded-lg font-semibold text-white">
            {userType}
          </h4>
        </div>
        <div className="bg-secondary h-full flex justify-center rounded-br-xl rounded-tr-full py-20">
          <nav className="flex flex-col space-y-3 text-white rounded-br-xl">
            <NavItem href={"/marketplace"}>
              <span className="flex items-center">
                <CiShop /> {option1}
              </span>
            </NavItem>
            <NavItem href={"/orders"}>
              <span className="flex items-center">
                <RiFileList3Line /> {option2}
              </span>
            </NavItem>
            <NavItem href={"/buyer/cart"}>
              <span className="flex items-center">
                <CiShoppingCart /> {option3}
              </span>
            </NavItem>
            <NavItem href={"/buyer/favorite"}>
              <span className="flex items-center">
                <AiOutlineHeart /> {option4}
              </span>
            </NavItem>
            <NavItem href={"/buyer/settings"}>
              <span className="flex items-center">
                <IoSettingsOutline /> Settings
              </span>
            </NavItem>
            <NavItem href={"/"}>
              <span
                onClick={signOut}
                className="flex items-center cursor-pointer"
              >
                <GrLogout /> Logout
              </span>
            </NavItem>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 bg-primary text-white p-3 rounded-full shadow-lg z-50"
        >
          {isMobileMenuOpen ? (
            <MdClose size={24} />
          ) : (
            <HiOutlineMenuAlt3 size={24} />
          )}
        </button>

        {/* Overlay for Mobile Menu */}
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
          <div className="p-5 flex flex-col items-center space-y-3">
            <Image
              src={profilePicture}
              width={100}
              height={100}
              alt="profile-picture"
              className="rounded-circle bg-secondary"
            />
            <h3 className="font-extrabold text-white">{username}</h3>
            <h4 className="bg-secondary py-1 px-6 rounded-lg font-semibold text-white">
              {userType}
            </h4>
          </div>
          <div className="bg-secondary h-full flex justify-center py-20">
            <nav className="flex flex-col space-y-3 text-white">
              <NavItem href={"/marketplace"}>
                <span className="flex items-center">
                  <CiShop /> {option1}
                </span>
              </NavItem>
              <NavItem href={"/orders"}>
                <span className="flex items-center">
                  <RiFileList3Line /> {option2}
                </span>
              </NavItem>
              <NavItem href={"/buyer/cart"}>
                <span className="flex items-center">
                  <CiShoppingCart /> {option3}
                </span>
              </NavItem>
              <NavItem href={"/buyer/favorite"}>
                <span className="flex items-center">
                  <AiOutlineHeart /> {option4}
                </span>
              </NavItem>
              <NavItem href={"/buyer/settings"}>
                <span className="flex items-center">
                  <IoSettingsOutline /> Settings
                </span>
              </NavItem>
              <NavItem href={"/"}>
                <span
                  onClick={signOut}
                  className="flex items-center cursor-pointer"
                >
                  <GrLogout /> Logout
                </span>
              </NavItem>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
