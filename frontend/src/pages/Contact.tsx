// ContactPage.tsx
import { ContactSection } from "@/components/contact/ContactSection";
import { PageLayoutOneScreen } from "@/components/layout";

const ContactPage = () => {
  return (
    <PageLayoutOneScreen>
      <section
        id="contact"
        className=" container flex-grow flex items-center justify-center px-0"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pt-8 pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
            Contactez-nous
          </h1>
          <p className="mx-auto text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300">
            Nous serions ravis de discuter de votre projet. Veuillez remplir le
            formulaire ci-dessous et nous vous répondrons dans les plus brefs
            délais.
          </p>
          <ContactSection />
        </div>
      </section>
    </PageLayoutOneScreen>
  );
};

export default ContactPage;
