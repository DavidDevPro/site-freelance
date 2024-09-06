import { PrimaryButton, GoogleCalendarModal } from "@/components/shared";
import { RiMailSendLine } from "react-icons/ri";

export const Cta = () => {
  const handleContactClick = () => {
    window.location.href = "/contact"; // Redirection native
  };

  return (
    <>
      {/* Texte en dehors de la section */}
      <div className="text-center xl:container pt-14 px-2 sm:px-6 ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
          On vous accompagne sur votre projet
        </h2>
        <h3 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300 dark:text-card">
          Nous sommes là pour vous aider à concrétiser vos idées en solutions
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
            <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
              Vous avez des questions ou des demandes spécifiques concernant
              votre projet ? Notre équipe est à votre disposition pour répondre
              à vos besoins et vous accompagner vers le succès de vos
              initiatives.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:col-start-2 gap-4">
            <PrimaryButton
              className=" md:w-auto"
              onClick={handleContactClick}
              aria-label="Contactez-nous"
            >
              <RiMailSendLine className="mr-2 mt-0.5 h-4 w-4 shrink-0" />
              Contactez-nous
            </PrimaryButton>
            <GoogleCalendarModal />
          </div>
        </div>
      </section>
    </>
  );
};
