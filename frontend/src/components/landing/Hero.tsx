import { Link } from "react-router-dom";
import { StyledButton } from "../StyledButton";
import heroImage from "@/assets/background-hero3.jpg";

export const Hero = () => {
  return (
    <div
      className="relative w-full h-[calc(80vh-80px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <section className="container grid place-items-center h-full py-20 md:py-32 gap-10 relative z-10">
        <div className="text-center lg:text-center space-y-8 ">
          <h1 className="text-card text-5xl md:text-6xl font-extrabold leading-tight">
            Développeur Web Créatif
            <span className="md:text-5xl font-bold block text-primary mt-2">
              Création, Refonte & SEO
            </span>
          </h1>
          <div className="text-center lg:text-center space-y-8 max-w-[650px] mx-auto">
            <p className="text-lg md:text-xl font-medium text-card w-full mx-auto lg:mx-0 leading-relaxed">
              Boostez votre visibilité avec un site web performant et optimisé.
              Nous vous proposons des solutions sur-mesure alliant design et
              SEO.
            </p>

            <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-center">
              <Link to="/contact">
                <StyledButton className="text-lg md:text-xl py-4 px-8">
                  Nous Contacter
                </StyledButton>
              </Link>
              <Link to="/#pricing">
                <StyledButton
                  variant="secondary"
                  className="text-lg md:text-xl py-4 px-8"
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
          alt="Hero background with modern web design"
          className="hidden"
        />
      </section>

      {/* Overlay for a better text contrast */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>
    </div>
  );
};
