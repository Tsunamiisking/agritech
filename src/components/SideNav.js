import React from "react";
import Image from "next/image";
import { CiShop } from "react-icons/ci";
import { RiFileList3Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import NavItem from "./NavItem";

function SideNav({ userType, option1, option2, option3 }) {
  return (
    <div className="w-64 bg-primary h-screen hidden lg:block lg:fixed   rounded-tr-xl rounded-br-xl font-playfair">
      <div className="p-5 flex flex-col  items-center space-y-3">
        <Image
          src={"/images/"}
          width={100}
          height={100}
          alt="profile-picture"
          className="rounded-circle bg-secondary"
        />
        <h3 className="font-extrabold">AllenDouglas</h3>
        <h4 className="bg-secondary py-1 px-6 rounded-lg font-semibold">
          {userType}
        </h4>
      </div>
      <div className="bg-secondary h-full flex justify-center rounded-br-xl rounded-tr-full py-20">
        <nav className="flex flex-col space-y-3  text-white rounded-br-xl ">
          <NavItem href={"marketplace"}>
            <span className="flex items-center">
              <CiShop /> {option1}
            </span>
          </NavItem>
          <NavItem href={"/favorite"}>
            <span className="flex items-center">
              <RiFileList3Line /> {option2}
            </span>
          </NavItem>
          <NavItem href={"/"}>
            <span className="flex items-center">
              <CiShoppingCart /> {option3}
            </span>
          </NavItem>
          <NavItem href={"/"}>
            <span className="flex items-center ">
              <IoSettingsOutline /> Settings
            </span>
          </NavItem>
          <NavItem href={"/"}>
            <span className="flex items-center">
              <GrLogout /> Logout
            </span>
          </NavItem>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
