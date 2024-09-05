// NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBarDesktop, NavBarMobile } from "../";
import { logo } from "@/assets/images";
import { APP_NAME2 } from "@/config/config";
import { headerRoutes } from "@/config/routes/headerRoutes";

export const NavBar: React.FC = () => {
  return (
    <>
      <Link to="/" className="font-bold text-xl flex items-center text-primary">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-2 " />
        {APP_NAME2}
      </Link>
      {/* Mobile */}
      <NavBarMobile routes={headerRoutes} />

      {/* Desktop */}
      <NavBarDesktop routes={headerRoutes} />
    </>
  );
};
