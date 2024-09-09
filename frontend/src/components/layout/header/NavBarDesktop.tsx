// NavBarDesktop.tsx
import { Button } from "@/components/ui";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";

// import { ModeToggle } from "@/components/layout/header/ModeToggle";
import { PrimaryButton } from "@/components/shared";
import { FaUserCheck } from "react-icons/fa";

// Définir les types pour les props
interface RouteProps {
  href: string;
  label: string;
}
// Définir les props pour NavBarDesktop
interface NavBarDesktopProps {
  routes: RouteProps[];
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({ routes }) => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    // Vérifie s'il s'agit d'un lien avec un hash (#) sur la même page
    if (href.includes("#")) {
      const [path, hash] = href.split("#");

      if (path !== window.location.pathname) {
        // Si le chemin est différent, navigue d'abord vers le nouveau chemin
        navigate(path, { replace: true });
      }

      // Fonction pour vérifier et ajuster le défilement
      const scrollToElement = () => {
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            // Ajuste cette valeur selon la hauteur de ton header ou tout autre élément fixe
            const offset = 60;
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = elementPosition - offset;

            // Vérifie si l'élément est visible et ajuster jusqu'à ce que l'élément soit correctement aligné
            if (Math.abs(window.scrollY - targetPosition) > 1) {
              window.scrollTo({ top: targetPosition, behavior: "smooth" });
              requestAnimationFrame(scrollToElement);
            }
          } else {
            // Si l'élément n'est pas encore trouvé, réessayer
            requestAnimationFrame(scrollToElement);
          }
        } else {
          // Si aucun hash, défiler vers le haut
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      // Appeler la fonction de défilement après une courte pause
      setTimeout(scrollToElement, 0);
    } else {
      // Si pas de hash, navigue simplement
      navigate(href);
    }
  };

  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {routes.map(({ href, label }) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink asChild>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-lg text-primary hover:bg-primary hover:text-card "
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
            className="text-white no-underline flex items-center py-4"
          >
            <FaUserCheck className="mr-2 h-5 w-5 shrink-0" />
            Se Connecter
          </Link>
        </PrimaryButton>
        {/* <ModeToggle /> */}
      </div>
    </>
  );
};
