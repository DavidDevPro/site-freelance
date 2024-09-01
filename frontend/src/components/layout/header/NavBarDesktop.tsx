// NavBarDesktop.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";

import { routeList } from "@/components/data/routes";

import { ModeToggle } from "@/components/layout/header/ModeToggle";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { BsPersonFillCheck } from "react-icons/bs";

export const NavBarDesktop: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink asChild>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-base text-primary hover:bg-primary hover:text-card "
                >
                  <Link to={href} onClick={() => handleLinkClick(href)}>
                    {label}
                  </Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center space-x-4">
        <PrimaryButton variant="primary">
          <Link
            to="/login"
            className="text-white no-underline flex items-center"
          >
            <BsPersonFillCheck className="mr-2 h-4 w-4 " />
            Se Connecter
          </Link>
        </PrimaryButton>
        <ModeToggle />
      </div>
    </>
  );
};
