import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";

function SideNav({ userType, option1, option2, option3 }) {
  return (
    <div className="w-64 bg-primary h-screen fixed   rounded-tr-xl rounded-br-xl font-playfair">
      <div className="p-10 flex flex-col  items-center space-y-3">
        <Image
          src={""}
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
          <NavItem href={"/"}> {option1}</NavItem>
          <NavItem href={"/"}>{option2}</NavItem>
          <NavItem href={"/"}>{option3}</NavItem>
          <NavItem href={"/"}>Settings</NavItem>
          <NavItem href={"/"}>Logout</NavItem>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
