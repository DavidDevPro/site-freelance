import { Link } from "react-router-dom";
import { StyledButton } from "../StyledButton";

export const Hero = () => {
  return (
    <div className="header-bg">
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-5xl font-bold">
            <h1 className="inline">
              <span className="font-bold inline bg-gradient-to-r from-card  to-background text-transparent bg-clip-text">
                Développeur Web Créatif
              </span>
            </h1>{" "}
            <h2 className="inline font-semibold text-4xl">
              <span className="inline text-primary">
                Création, Refonte & SEO
              </span>{" "}
            </h2>
          </main>

          <p className="text-xl font-semibold text-background md:w-10/12 mx-auto lg:mx-0">
            Boostez votre visibilité avec un site web performant et optimisé.
            Nous vous proposons des solutions sur-mesure alliant design et SEO.
          </p>

          <div className="flex flex-col items-center justify-start sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <StyledButton
                variant="primary"
                className="text-base md:text-xl py-4 md:py-6 px-8 md:px-12"
              >
                Nous Contacter
              </StyledButton>
            </Link>
            <Link to="/#pricing">
              <StyledButton
                variant="secondary"
                className="text-base md:text-xl py-4 md:py-6 px-8 md:px-12"
              >
                Nos Tarifs
              </StyledButton>
            </Link>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className="z-10"></div>

        {/* Shadow effect */}
        {/* <div className="shadow"></div> */}
      </section>
    </div>
  );
};
