import { PrimaryButton, GoogleCalendarModal } from "@/components/shared";
import { RiMailSendLine } from "react-icons/ri";

export const Cta = () => {
  const handleContactClick = () => {
    window.location.href = "/contact"; // Redirection native
  };

  return (
    <>
      {/* Texte en dehors de la section */}
      <div className="text-center mt-12">
        <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text font-bold p-2">
          Besoin d'accompagnement sur votre projet ?
        </h2>
        <p className="text-lg md:text-xl text-black/70 dark:text-white py-6 mb-2">
          Nous sommes là pour vous aider à concrétiser vos idées en solutions
          performantes et adaptées à vos besoins.
        </p>
      </div>

      {/* Section CTA avec bordures et ombre */}
      <section
        id="cta"
        className="bg-card py-16 border-t border-b border-gray-200 dark:border-neutral-700 shadow-md"
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
              <RiMailSendLine className="mr-2 mt-0.5 h-4 w-4 " />
              Contactez-nous
            </PrimaryButton>
            <GoogleCalendarModal />
          </div>
        </div>
      </section>
    </>
  );
};
