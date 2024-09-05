import { PageLayoutFullScreen } from "@/components/layout";
import { MentionsSections } from "@/components/legal";

const LegalPage: React.FC = () => {
  return (
    <PageLayoutFullScreen>
      <section className="container mx-auto py-10 relative z-10">
        <h1 className="text-4xl font-bold my-8 text-center text-primary">
          Mentions Légales
        </h1>
        {/* Utilisation du composant MentionsSections */}
        <MentionsSections />
      </section>
    </PageLayoutFullScreen>
  );
};

export default LegalPage;
