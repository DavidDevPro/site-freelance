import { PageLayoutFullScreen } from "@/components/layout";
import { PrivacySections } from "@/components/legal";

const PrivacyPage = () => {
  return (
    <PageLayoutFullScreen>
      <section className="container mx-auto py-10 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center py-8 font-bold  bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
          Politique de Confidentialité
        </h1>
        <PrivacySections />
      </section>
    </PageLayoutFullScreen>
  );
};

export default PrivacyPage;
