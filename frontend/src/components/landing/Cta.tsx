import { PrimaryButton, GoogleCalendarModal } from "@/components/shared";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <>
      {/* Texte en dehors de la section */}
      <div className="text-center xl:container pt-14 px-2 sm:px-6 ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
          Je vous accompagne sur votre projet
        </h2>
        <h3 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300 dark:text-card">
          Je suis là pour vous aider à concrétiser vos idées en solutions
          performantes et adaptées à vos besoins.
        </h3>
      </div>

      {/* Section CTA avec bordures et ombre */}
      <section
        id="cta"
        className="bg-card py-16 mb-14 border-t border-b border-primary dark:border-neutral-700 shadow-md"
        aria-labelledby="cta-title"
      >
        <div className="container text-center lg:text-left lg:grid lg:grid-cols-2 place-items-center">
          <div className="lg:col-start-1">
            <h2 className="text-3xl text-primary font-bold leading-tight">
              Transformez vos idées et projets en réalité numérique.
            </h2>
            <p className="text-muted-foreground text-lg mt-4 mb-8 lg:mb-0">
              Je me tiens à votre disposition pour répondre à vos besoins, du
              concept initial à la mise en ligne de votre site. Je vous offre un
              accompagnement personnalisé et des solutions sur mesure pour
              garantir la qualité, la performance et l’efficacité de votre
              projet. Contactez-moi dès maintenant pour échanger sur vos idées
              et donner vie à vos ambitions digitales.
            </p>
          </div>

          <div className="flex flex-col items-center lg:col-start-2 gap-6">
            <Link to="/contact">
              <PrimaryButton
                className=" md:w-auto text-base"
                aria-label="Contactez-nous"
              >
                <FaEnvelopeCircleCheck className="mr-2 h-6 w-6 shrink-0" />
                Contactez-moi
              </PrimaryButton>
            </Link>
            <GoogleCalendarModal />
          </div>
        </div>
      </section>
    </>
  );
};
