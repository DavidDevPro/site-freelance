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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/layout/header/ModeToggle";
import { logo } from "@/assets/images";
import { Link, useNavigate } from "react-router-dom";
import { CopyrightText, SocialIcons, PrimaryButton } from "@/components/shared";
import { APP_NAME } from "@/config/config";
import { BsPersonFillCheck } from "react-icons/bs";

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
    <div className="flex items-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={handleMenuToggle}>
        <SheetTrigger asChild>
          <Menu
            onClick={() => setIsOpen(true)}
            className="cursor-pointer text-primary"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col justify-between items-center rounded-tr-2xl rounded-br-2xl bg-card w-[75vw] max-w-md"
        >
          <div className="w-full flex flex-col items-center">
            <SheetHeader className="mb-8 flex items-center w-full">
              <SheetTitle className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center text-primary font-bold"
                >
                  <img
                    src={logo}
                    alt="Logo davidwebprojects"
                    className="w-12 h-12 mr-2 "
                  />
                  {APP_NAME}
                </Link>
              </SheetTitle>
              <SheetDescription className="mt-2 text-sm text-center text-muted-foreground">
                Menu principal du site, utilisez ce menu pour naviguer entre les
                différentes sections.
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-2 items-center w-full">
              <Button
                asChild
                variant="ghost"
                className="justify-center text-base w-full hover:bg-primary hover:text-card"
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
                  className="justify-center text-base w-full hover:bg-primary hover:text-card"
                >
                  <Link to={href} onClick={() => handleLinkClick(href)}>
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <SheetFooter className="sm:flex-col sm:justify-end sm:space-x-2 flex flex-col gap-2">
            <Separator className="w-full mb-4" />
            <div className="flex items-center gap-2 w-full justify-center">
              <PrimaryButton variant="primary">
                <Link
                  to="/login"
                  className="text-white no-underline flex items-center"
                >
                  <BsPersonFillCheck className="mr-2 h-4 w-4 shrink-0" />
                  Se Connecter
                </Link>
              </PrimaryButton>
              <ModeToggle />
            </div>
            <Separator className="w-full mt-4 mb-2" />
            <div className="text-center text-xs text-gray-500 w-full">
              {" "}
              {/* Réduire la taille de la police */}
              <SocialIcons
                iconSize="w-4 h-4 shrink-0"
                spaceBetween="space-x-4"
                containerClassName="mb-4"
              />
              <CopyrightText className="text-xs" />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
