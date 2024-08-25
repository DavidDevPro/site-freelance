import pilot from "@/assets/images/gerant.jpg";
import { StyledButton } from "../StyledButton";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-card border border-gray-300 dark:border-slate-700 rounded-lg shadow-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={pilot}
            alt="David Changea - Fondateur"
            className="w-[275px] h-[275px] object-cover rounded-full shadow-md"
          />
          <div className="flex flex-col justify-between md:w-2/3">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  À propos de{" "}
                </span>
                David Web Projects
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
                Je suis David Changea, créateur et fondateur de David Web
                Projects, développeur web freelance spécialisé dans la création
                de sites web sur mesure. J’offre des services de refonte de
                sites, SEO, hébergement, et optimisation de la performance, avec
                une approche agile et centrée sur le client.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                En savoir plus :
              </p>
              <StyledButton>
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
