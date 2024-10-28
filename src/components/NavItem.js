import React from "react";
import Link from "next/link";

const NavItem = ({children, href}) => {
  return (
      <Link href={href} className="hover:text-green-300 text-lg font-medium">
        {children}
      </Link>
  );
};

export default NavItem;
