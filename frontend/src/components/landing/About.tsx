import { boss } from "@/assets/images";
import { PrimaryButton } from "@/components/shared";
import { APP_NAME2 } from "@/config/config";
import { TbWorldShare } from "react-icons/tb";

export const About = () => {
  return (
    <section
      id="about"
      className="xl:container pt-4 pb-14 px-3 sm:px-6 transition-p ease duration-200"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
        À propos de moi
      </h2>
      <h3 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300">
        L'expertise d'un créateur passionné : Des sites web sur mesure avec une
        attention constante à vos besoins et objectifs.
      </h3>
      <div className="bg-card dark:bg-card border border-primary rounded-2xl shadow-lg p-4 sm:p-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={boss}
            alt="Portrait de David Changea, fondateur de {APP_NAME}"
            className="w-[275px] h-[275px] object-cover rounded-full shadow-md"
            loading="lazy" // Améliore le temps de chargement de la page
          />
          <div className="flex flex-col justify-between md:w-2/3 ">
            <div className="pb-6">
              <h2 className="text-center text-3xl text-primary lg:text-4xl font-bold leading-tight lg:text-left">
                {APP_NAME2}
              </h2>
              <p className="text-lg text-muted-foreground text-center lg:text-left dark:text-card mt-6">
                Je suis David Changea, créateur et fondateur de David Web
                Projects, Je mets à disposition un éventail de services
                complémentaires, allant de la refonte complète de sites web à
                l'optimisation pour les moteurs de recherche (SEO), en passant
                par des solutions d'hébergement sécurisées et l'amélioration des
                performances. Mon approche, à la fois agile et rigoureusement
                centrée sur le client, garantit des résultats à la hauteur des
                attentes tout en anticipant les besoins futurs. Chaque projet
                que je conduis est le reflet d'une volonté inébranlable d'allier
                innovation, qualité et flexibilité, afin d'offrir des solutions
                pérennes et en constante évolution.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row  items-center justify-center lg:items-center lg:justify-start gap-4 lg:gap-8">
              <p className="text-lg font-medium text-black dark:text-white">
                En savoir plus sur moi :
              </p>
              <PrimaryButton variant="primary">
                <a
                  href="https://portfolio.davidwebprojects.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex py-3"
                >
                  <TbWorldShare className="mr-2 h-5 w-5 shrink-0" />
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
