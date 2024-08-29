import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logo from "@/assets/images/icon.webp";
import { StyledButton } from "./StyledButton";
import { APP_NAME } from "@/config";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/#features", label: "Services" },
  { href: "/#testimonials", label: "Témoignages" },
  { href: "/#pricing", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode] = useState<"light" | "dark">("dark");
  const navigate = useNavigate();
  const location = useLocation();

  // Gestion du scroll vers l'ancre
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleLinkClick = (href: string) => {
    navigate(href);
    setIsOpen(false);

    // Forcer le scroll vers l'ancre après la navigation
    const id = href.split("#")[1];
    if (id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // Le délai est utilisé pour s'assurer que la navigation a eu lieu
    }
  };

  return (
    <header
      className={`${
        mode === "light" ? "shadow-light" : "shadow-dark"
      } sticky w-full top-0 z-50 bg-card shadow-md border-b`}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center p-4">
        <Link
          to="/"
          className="font-bold text-lg flex items-center text-primary"
        >
          <img
            src={logo}
            alt="Logo davidwebprojects"
            className="w-10 h-10 mr-2 "
          />
          {APP_NAME}
        </Link>
        {/* Mobile */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link to="/" className="flex items-center">
                      {APP_NAME}
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={label}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link to={href} onClick={() => handleLinkClick(href)}>
                        {label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                <Separator className="mb-2" />
                <ModeToggle />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink asChild>
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start text-base text-primary hover:bg-primary hover:text-white"
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
          <div>
            <StyledButton variant="primary">
              <Link to="/login" className="text-white no-underline">
                Se Connecter
              </Link>
            </StyledButton>
          </div>

          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
