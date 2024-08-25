import { useState, useEffect } from "react";
import Logo from "@/assets/images/icon.webp";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { StyledButton } from "./StyledButton";

interface RouteProps {
  to: string;
  label: string;
}

const routeList: RouteProps[] = [
  { to: "/#features", label: "Services" },
  { to: "/#testimonials", label: "Témoignages" },
  { to: "/#pricing", label: "Tarif" },
  { to: "/#faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Fonction pour fermer le menu après un clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky border-b-[2px] top-0 z-40 w-full bg-card dark:border-b-slate-700 dark:bg-background py-[8px]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="flex items-center gap-1">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="flex items-center"
              aria-label="Page d'accueil David Web Projects"
            >
              <img
                className="h-10 w-10"
                src={Logo}
                alt="Logo de David Web Projects"
                loading="lazy"
              />
              <span className="ml-2 font-bold text-xl text-primary">
                David Web Projects
              </span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2" aria-label="Ouvrir le menu">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-primary">
                    David Web Projects
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col justify-center items-center gap-2 mt-4"
                  aria-label="Menu de navigation mobile"
                >
                  {routeList.map(({ to, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      to={to}
                      onClick={handleLinkClick} // Ferme le menu lors du clic
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  <StyledButton>
                    <Link
                      rel="noreferrer noopener"
                      to="/login"
                      onClick={handleLinkClick} // Ferme également le menu ici
                    >
                      Se connecter
                    </Link>
                  </StyledButton>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav
            className="hidden md:flex gap-2"
            aria-label="Menu de navigation principal"
          >
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                to={route.to}
                key={i}
                className={buttonVariants({
                  variant: "ghost",
                  className: "text-primary hover:bg-primary hover:text-white",
                })}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <StyledButton>
              <Link rel="noreferrer noopener" to="/login">
                Se connecter
              </Link>
            </StyledButton>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
