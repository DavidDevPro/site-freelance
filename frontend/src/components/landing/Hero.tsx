import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/shared";
import {
  heroSmallWebp,
  heroMediumWebp,
  heroLargeWebp,
  hero2xWebp,
  heroSmallJpg,
  heroMediumJpg,
  heroLargeJpg,
  hero2xJpg,
} from "@/assets/images";
import { RiMailSendLine } from "react-icons/ri";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
export const Hero = () => {
  return (
    <section
      className="relative w-full h-[800px] overflow-hidden"
      role="banner"
    >
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
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </picture>
      </div>
      {/* Utilisation d'un dégradé plus doux pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-0"></div>
      <div className="w-full grid place-items-center h-full py-16 md:py-28 gap-8 lg:gap-10 relative z-10">
        <div className="text-center space-y-6 px-1 md:space-y-8 max-w-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg shadow-black animate-fade-in">
            Concevez un Site Web Sur Mesure qui Reflète Votre Vision
            <span className="block text-primary mt-4 text-2xl md:text-3xl font-semibold drop-shadow-sm shadow-black ">
              Des Solutions Personnalisées en Développement, Refonte, SEO et
              Hébergement.
            </span>
          </h1>
          <div className="text-center  mx-auto space-y-6">
            <p className="text-white text-lg mb-16 md:text-xl font-medium leading-relaxed drop-shadow-lg shadow-black animate-fade-in">
              Augmentez votre impact en ligne grâce à un site web performant et
              sur-mesure. Alliez design unique et stratégie SEO pour maximiser
              votre présence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <Link to="/contact" aria-label="Nous Contacter">
                <PrimaryButton className="  text-xl py-3 sm:py-4 px-6 sm:px-8 transition-all duration-300 drop-shadow-lg shadow-black">
                  <RiMailSendLine className="mr-2 mt-0.5 h-4 w-4 shrink-0" />
                  Nous Contacter
                </PrimaryButton>
              </Link>
              <Link to="/#pricing" aria-label="Nos Tarifs">
                <PrimaryButton
                  variant="secondary"
                  className="text-xl py-3 sm:py-4 px-6 sm:px-8 transition-all duration-300 drop-shadow-lg shadow-black"
                >
                  <HiMiniCurrencyEuro className="mr-2 mt-0.5 h-6 w-6 shrink-0" />
                  Nos Tarifs
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
