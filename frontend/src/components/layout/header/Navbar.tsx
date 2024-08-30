// NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBarDesktop, NavBarMobile } from "../";
import logo from "@/assets/images/icon.webp";
import { APP_NAME2 } from "@/config";

export const NavBar: React.FC = () => {
  return (
    <>
      <Link to="/" className="font-bold text-lg flex items-center text-primary">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2 " />
        {APP_NAME2}
      </Link>

      {/* Mobile */}
      <NavBarMobile />

      {/* Desktop */}
      <NavBarDesktop />
    </>
  );
};
