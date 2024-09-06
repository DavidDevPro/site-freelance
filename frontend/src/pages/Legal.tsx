import { PageLayoutFullScreen } from "@/components/layout";
import { MentionsSections } from "@/components/legal";

const LegalPage: React.FC = () => {
  return (
    <PageLayoutFullScreen>
      <section className="container mx-auto py-10 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center py-8 font-bold  bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
          Mentions Légales
        </h1>
        {/* Utilisation du composant MentionsSections */}
        <MentionsSections />
      </section>
    </PageLayoutFullScreen>
  );
};

export default LegalPage;
