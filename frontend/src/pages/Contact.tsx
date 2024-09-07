// ContactPage.tsx
import { ContactSection } from "@/components/contact/ContactSection";
import { PageLayoutFullScreen } from "@/components/layout";

const ContactPage = () => {
  return (
    <PageLayoutFullScreen>
      <section id="contact" className="container mx-auto py-10 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pt-8 pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
          Contactez-nous
        </h1>
        <h2 className="mx-auto text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300">
          Nous serions ravis de discuter de votre projet. Veuillez remplir le
          formulaire ci-dessous et nous vous répondrons dans les plus brefs
          délais.
        </h2>
        <ContactSection />
      </section>
    </PageLayoutFullScreen>
  );
};

export default ContactPage;
