// NavBarMobile.tsx
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui";
import { Separator } from "@/components/ui";
import { TiThMenu } from "react-icons/ti";
// import { ModeToggle } from "@/components/layout/header/ModeToggle";
import { logo } from "@/assets/images";
import { Link, useNavigate } from "react-router-dom";
import { CopyrightText, SocialIcons, PrimaryButton } from "@/components/shared";
import { APP_NAME2 } from "@/config/config";
import { FaUserCheck } from "react-icons/fa";

// Définir les types pour les props
interface RouteProps {
  href: string;
  label: string;
}

// Définir les props pour NavBarMobile
interface NavBarMobileProps {
  routes: RouteProps[];
}

export const NavBarMobile: React.FC<NavBarMobileProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleMenuToggle = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className="flex items-center lg:hidden ">
      <Sheet open={isOpen} onOpenChange={handleMenuToggle}>
        <SheetTrigger asChild>
          <span>
            <TiThMenu
              onClick={() => setIsOpen(true)}
              className="h-6 w-6 shrink-0 cursor-pointer text-primary"
            />
          </span>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col justify-between items-center rounded-tr-2xl rounded-br-2xl bg-card w-[75vw] max-w-md h-full max-h-screen overflow-y-auto px-1"
        >
          <div className="w-full flex flex-col items-center">
            <SheetHeader className="mb-8 flex items-center w-full">
              <SheetTitle className="flex items-center mb-4">
                <Link
                  to="/"
                  className="flex items-center text-primary text-xl font-bold"
                >
                  <img
                    src={logo}
                    alt="Logo davidwebprojects"
                    className="w-12 h-12 mr-2 "
                  />
                  {APP_NAME2}
                </Link>
              </SheetTitle>
              <SheetDescription className="mt-2 text-sm text-center text-secondary">
                Menu principal du site, utilisez ce menu pour naviguer entre les
                différentes sections.
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-2 items-center w-full">
              <Button
                asChild
                variant="ghost"
                className="justify-center text-lg w-full text-secondary hover:bg-primary hover:text-card"
              >
                <Link to="/" onClick={() => handleLinkClick("/")}>
                  Accueil
                </Link>
              </Button>

              {routes.map(({ href, label }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  className="justify-center text-secondary text-lg w-full hover:bg-primary hover:text-card"
                >
                  <Link to={href} onClick={() => handleLinkClick(href)}>
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <SheetFooter className="sm:flex-col sm:justify-end sm:space-x-2 flex flex-col gap-2">
            <Separator className="bg-primary w-full mb-4" />
            <div className="flex items-center gap-2 w-full justify-center">
              <PrimaryButton variant="primary">
                <Link
                  to="/login"
                  className="text-white no-underline flex items-center py-4"
                >
                  <FaUserCheck className="mr-2 h-5 w-5 shrink-0" />
                  Se Connecter
                </Link>
              </PrimaryButton>
              {/* <ModeToggle /> */}
            </div>
            <Separator className=" bg-primary w-full mt-4 mb-2" />
            <div className="text-center text-xs text-gray-500 w-full">
              {" "}
              {/* Réduire la taille de la police */}
              <SocialIcons
                iconSize="w-6 h-6 shrink-0"
                spaceBetween="space-x-6"
                containerClassName="mb-4"
              />
              <CopyrightText className="text-base sm:text-center " />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
