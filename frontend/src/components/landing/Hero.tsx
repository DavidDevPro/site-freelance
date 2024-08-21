import { StyledButton } from "../StyledButton";

export const Hero = () => {
  return (
    <div className="header-bg">
      <section className=" container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-5xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#353535]  to-[#1b1b1e] text-transparent bg-clip-text">
                Développeur Web Créatif
              </span>
            </h1>{" "}
            <h2 className="inline text-4xl">
              <span className="inline text-primary">
                Création, Refonte & SEO
              </span>{" "}
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Boostez votre visibilité avec un site web performant et optimisé.
            Nous vous proposons des solutions sur-mesure alliant design et SEO.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <StyledButton className="w-full md:w-1/3">
              Nous Contacter
            </StyledButton>
            <StyledButton>
              <a
                rel="noreferrer noopener"
                href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                target="_blank"
              >
                Nos Tarifs
              </a>
            </StyledButton>
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
