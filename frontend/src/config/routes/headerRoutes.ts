// headerRoutes.ts

// Définir les interfaces si elles ne sont pas encore définies ailleurs
interface RouteProps {
    href: string;
    label: string;
  }
  

  
  // Définir les routes principales
  export const headerRoutes: RouteProps[] = [
    { href: "/#features", label: "Services" },
  { href: "/#testimonials", label: "Témoignages" },
  { href: "/#pricing", label: "Tarifs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  ];
  
 
  