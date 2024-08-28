import pilot from "@/assets/images/gerant.png";
import { StyledButton } from "../StyledButton";

export const About = () => {
  return (
    <section id="about" className="container py-14 sm:py-24">
      <div className="bg-white dark:bg-neutral-900 border border-primary rounded-2xl shadow-lg p-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={pilot}
            alt="Portrait de David Changea, fondateur de David Web Projects"
            className="w-[275px] h-[275px] object-cover rounded-full shadow-md"
            loading="lazy" // Améliore le temps de chargement de la page
          />
          <div className="flex flex-col justify-between md:w-2/3">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-primary text-transparent bg-clip-text">
                  À propos de{" "}
                </span>
                David Web Projects
              </h2>
              <p className="text-lg md:text-xl text-black/70 dark:text-white mt-6 leading-relaxed">
                Je suis David Changea, créateur et fondateur de David Web
                Projects, développeur web freelance spécialisé dans la création
                de sites web sur mesure. J’offre des services de refonte de
                sites, SEO, hébergement, et optimisation de la performance, avec
                une approche agile et centrée sur le client.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <p className="text-lg font-medium text-black dark:text-white">
                En savoir plus :
              </p>
              <StyledButton variant="primary">
                <a
                  href="https://portfolio.davidwebprojects.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Découvrir mon portfolio
                </a>
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
