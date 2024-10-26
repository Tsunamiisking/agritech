import React from "react";
import Link from "next/link";

const NavItem = ({children, href}) => {
  return (
      <Link href={href} className="hover:text-white text-lg font-bold ">
        {children}
      </Link>
  );
};

export default NavItem;
