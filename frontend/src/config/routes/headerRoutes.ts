// headerRoutes.ts

// Définir les interfaces si elles ne sont pas encore définies ailleurs
interface RouteProps {
    href: string;
    label: string;
  }
  

  
  // Définir les routes principales
  export const headerRoutes: RouteProps[] = [
    { href: "/#services", label: "Services" },
    { href: "/#package", label: "Tarifs" },
    { href: "/#testimonials", label: "Témoignages" },
    { href: "/contact", label: "Contact" },
  ];
  
 
  