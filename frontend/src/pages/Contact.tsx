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
          <h1 className="text-4xl font-bold my-8 text-center text-primary">
            Contactez-nous
          </h1>
          <p className="text-center text-muted-foreground mb-4">
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
