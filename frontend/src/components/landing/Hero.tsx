import { Link } from "react-router-dom";
import { StyledButton } from "../StyledButton";

import heroSmallWebp from "@/assets/images/hero-small.webp";
import heroMediumWebp from "@/assets/images/hero-medium.webp";
import heroLargeWebp from "@/assets/images/hero-large.webp";
import hero2xWebp from "@/assets/images/hero-2x.webp";
import heroSmallJpg from "@/assets/images/hero-small.jpg";
import heroMediumJpg from "@/assets/images/hero-medium.jpg";
import heroLargeJpg from "@/assets/images/hero-large.jpg";
import hero2xJpg from "@/assets/images/hero-2x.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full h-[750px]" role="banner">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        aria-hidden="true"
      >
        <picture>
          <source
            srcSet={`${heroSmallWebp} 768w, ${heroMediumWebp} 1280w, ${heroLargeWebp} 1920w, ${hero2xWebp} 3840w`}
            sizes="(max-width: 768px) 768px,
                   (max-width: 1280px) 1280px,
                   (max-width: 1920px) 1920px,
                   3840px"
            type="image/webp"
          />
          <source
            srcSet={`${heroSmallJpg} 768w, ${heroMediumJpg} 1280w, ${heroLargeJpg} 1920w, ${hero2xJpg} 3840w`}
            sizes="(max-width: 768px) 768px,
                   (max-width: 1280px) 1280px,
                   (max-width: 1920px) 1920px,
                   3840px"
            type="image/jpg"
          />
          <img
            src={heroLargeJpg}
            alt="image de bannière de david web projects"
            className="w-full h-full object-cover grayscale"
            loading="lazy" // Améliore le temps de chargement de la page
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

      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};
