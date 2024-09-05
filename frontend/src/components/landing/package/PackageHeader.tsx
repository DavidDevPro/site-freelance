import React from "react";

export const PackageHeader: React.FC = () => (
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
      Choisissez votre formule idéale.
    </h2>
    <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
      Sélectionnez une formule qui correspond à vos besoins. Chaque formule peut
      être personnalisée avec des options supplémentaires pour répondre à vos
      attentes.
    </p>
  </div>
);
