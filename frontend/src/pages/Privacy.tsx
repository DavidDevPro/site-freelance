import { PageLayoutFullScreen } from "@/components/layout";
import { PrivacySections } from "@/components/legal";

const PrivacyPage = () => {
  return (
    <PageLayoutFullScreen>
      <section className="container mx-auto py-10 relative z-10">
        <h1 className="text-4xl font-bold my-8 text-center text-primary">
          Politique de Confidentialité
        </h1>
        <PrivacySections />
      </section>
    </PageLayoutFullScreen>
  );
};

export default PrivacyPage;
