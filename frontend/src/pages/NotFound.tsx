// src/components/pages/NotFoundPage.tsx

import React from "react";
import { Link } from "react-router-dom"; // Utilisation de Link de react-router-dom pour la navigation
import { Button } from "@/components/ui"; // Assurez-vous que ce chemin est correct
import { Badge } from "@/components/ui"; // Assurez-vous que ce chemin est correct
import { Separator } from "@/components/ui"; // Assurez-vous que ce chemin est correct

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6 py-12 text-center">
      <div className="max-w-md">
        <Badge variant="outline" className="mb-4 text-sm">
          Erreur 404
        </Badge>
        <h1 className="text-4xl font-extrabold text-primary md:text-5xl">
          Page non trouvée
        </h1>
        <p className="mt-4 text-muted-foreground">
          {`Oups! Il semble que la page que vous recherchez n'existe pas ou a été déplacée.`}
        </p>
        <Separator className="my-8" />
        <Link to="/">
          {" "}
          {/* Utilisation de Link de react-router-dom pour la navigation */}
          <Button className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-primary rounded-full shadow-md hover:bg-blue-600 transition-colors">
            {`Retourner à l'accueil`}
          </Button>
        </Link>
      </div>
      <div className="flex justify-center w-full mt-12">
        {/* Centrer l'image SVG */}
        <svg
          className="w-32 h-32 text-primary opacity-30 animate-bounce"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9 12a1 1 0 112-0 1 1 0 01-2 0zm4 0a1 1 0 112-0 1 1 0 01-2 0zM7 15s0-1 5-1 5 1 5 1H7z" />
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
