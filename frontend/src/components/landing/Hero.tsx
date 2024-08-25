import { Link } from "react-router-dom";
import { StyledButton } from "../StyledButton";

export const Hero = () => {
  return (
    <section
      className="relative w-full h-[750px]"
      role="banner" // Indique que cette section est une bannière principale pour le site.
    >
      {/* Image de fond en noir et blanc avec gestion des résolutions */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        aria-hidden="true"
      >
        <picture>
          {/* Format WebP pour les navigateurs modernes */}
          <source
            srcSet="
              ./src/assets/hero-small.webp 768w,
              ./src/assets/hero-medium.webp 1280w,
              ./src/assets/hero-large.webp 1920w,
              ./src/assets/hero-2x.webp 3840w"
            sizes="(max-width: 768px) 768px,
                   (max-width: 1280px) 1280px,
                   (max-width: 1920px) 1920px,
                   3840px"
            type="image/webp"
          />
          {/* Fallback JPEG pour les anciens navigateurs */}
          <source
            srcSet="
              ./src/assets/hero-small.jpg 768w,
              ./src/assets/hero-medium.jpg 1280w,
              ./src/assets/hero-large.jpg 1920w,
              ./src/assets/hero-2x.jpg 3840w"
            sizes="(max-width: 768px) 768px,
                   (max-width: 1280px) 1280px,
                   (max-width: 1920px) 1920px,
                   3840px"
            type="image/jpg"
          />
          {/* Image de fallback ultime */}
          <img
            src="./src/assets/hero-large.jpg"
            alt="image de bannière de david web projects"
            className="w-full h-full object-cover grayscale"
          />
        </picture>
      </div>

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
      </div>

      {/* Overlay pour améliorer le contraste du texte */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};
