import pilot from "@/assets/images/gerant.png";
import { PrimaryButton } from "../shared/PrimaryButton";
import { APP_NAME } from "@/config";
import { FaDev } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="container py-14 sm:py-24">
      <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  text-center font-bold mb-4">
        Qui sommes-nous
      </h2>
      <p className="text-xl leading-8 text-black/80 dark:text-white text-center mb-8 mx-auto max-w-4xl">
        Présentation du gérant.
      </p>
      <div className="bg-white dark:bg-neutral-900 border border-primary rounded-2xl shadow-lg p-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={pilot}
            alt="Portrait de David Changea, fondateur de {APP_NAME}"
            className="w-[275px] h-[275px] object-cover rounded-full shadow-md"
            loading="lazy" // Améliore le temps de chargement de la page
          />
          <div className="flex flex-col justify-between md:w-2/3">
            <div className="pb-6">
              <h2 className="text-center text-3xl text-primary md:text-3xl font-bold leading-tight md:text-left">
                {APP_NAME}
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
                  className="text-white flex"
                >
                  <FaDev className="mr-2 mt-0.5 h-4 w-4 " />
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
