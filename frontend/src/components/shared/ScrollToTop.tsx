import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui";
import { LuArrowUpToLine } from "react-icons/lu";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Si un hash est présent, fais défiler jusqu'à l'ancre
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        // Utilise `setTimeout` pour permettre à React Router de terminer la navigation
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else {
      // Défile en haut si aucun hash n'est présent
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-50">
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 opacity-90 shadow-md text-card"
          size="icon"
        >
          <LuArrowUpToLine className="h-4 w-4 shrink-0" />
        </Button>
      )}
    </div>
  );
};
