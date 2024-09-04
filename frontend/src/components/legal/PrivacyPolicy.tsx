import { PrivacySections } from "./PrivacySections";

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="container mx-auto py-10 relative z-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Politique de Confidentialité
      </h1>
      <PrivacySections />
    </section>
  );
};
