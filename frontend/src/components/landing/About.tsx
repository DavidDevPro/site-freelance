import { boss } from "@/assets/images";
import { PrimaryButton } from "@/components/shared";
import { APP_NAME2 } from "@/config/config";
import { FaDev } from "react-icons/fa";

export const About = () => {
  return (
    <section
      id="about"
      className="xl:container pt-4 pb-14 px-2 sm:px-6 transition-p ease duration-200"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
        Qui sommes-nous
      </h2>
      <h3 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300">
        Présentation du gérant.
      </h3>
      <div className="bg-card dark:bg-card border border-primary rounded-2xl shadow-lg p-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={boss}
            alt="Portrait de David Changea, fondateur de {APP_NAME}"
            className="w-[275px] h-[275px] object-cover rounded-full shadow-md"
            loading="lazy" // Améliore le temps de chargement de la page
          />
          <div className="flex flex-col justify-between md:w-2/3">
            <div className="pb-6">
              <h2 className="text-center text-3xl text-primary md:text-3xl font-bold leading-tight md:text-left">
                {APP_NAME2}
              </h2>
              <p className="text-lg md:text-xl text-black/70 dark:text-white mt-6 leading-relaxed">
                Je suis David Changea, créateur et fondateur de David Web
                Projects, développeur web freelance spécialisé dans la création
                de sites web sur mesure. J’offre des services de refonte de
                sites, SEO, hébergement, et optimisation de la performance, avec
                une approche agile et centrée sur le client.
              </p>
            </div>
            <div className="flex flex-col md:flex-row  items-center justify-center md:items-center md:justify-start gap-3 md:gap-8">
              <p className="text-lg font-medium text-black dark:text-white">
                En savoir plus :
              </p>
              <PrimaryButton variant="primary">
                <a
                  href="https://portfolio.davidwebprojects.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex py-3"
                >
                  <FaDev className="mr-2 h-5 w-5 shrink-0" />
                  Découvrir mon portfolio
                </a>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
