import { Link } from "react-router-dom";
import { StyledButton } from "../StyledButton";
import heroImage from "@/assets/background-hero.jpg";

export const Hero = () => {
  return (
    <section
      className="relative w-full h-[750px]"
      role="banner" // Indique que cette section est une bannière principale pour le site.
    >
      {/* Image de fond en noir et blanc */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "grayscale(100%)",
        }}
        aria-hidden="true"
      ></div>

      <div className="container grid place-items-center h-full py-16 md:py-28 gap-8 lg:gap-10 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Développeur Web Créatif
            <span className="block text-primary mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
              Création, Refonte & SEO
            </span>
          </h1>
          <div className="text-center max-w-[600px] mx-auto space-y-6">
            <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Boostez votre visibilité avec un site web performant et optimisé.
              Nous vous proposons des solutions sur-mesure alliant design et
              SEO.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" aria-label="Nous Contacter">
                <StyledButton className="text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-8 transition-all duration-200">
                  Nous Contacter
                </StyledButton>
              </Link>
              <Link to="/#pricing" aria-label="Nos Tarifs">
                <StyledButton
                  variant="secondary"
                  className="text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-8 transition-all duration-200"
                >
                  Nos Tarifs
                </StyledButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Image description for accessibility */}
        <img
          src={heroImage}
          alt="Arrière-plan représentant un design web moderne"
          className="hidden"
        />
      </div>

      {/* Overlay pour améliorer le contraste du texte */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};
