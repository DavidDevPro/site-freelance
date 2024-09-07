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
      <Link
        to="/"
        className="font-bold text-xl sm:text-2xl flex items-center text-primary transition-text ease duration-300"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-12 sm:w-14 h-12 sm:h-14 mr-2 sm:mr-4 transition-w-h ease duration-300"
        />
        {APP_NAME2}
      </Link>
      {/* Mobile */}
      <NavBarMobile routes={headerRoutes} />

      {/* Desktop */}
      <NavBarDesktop routes={headerRoutes} />
    </>
  );
};
