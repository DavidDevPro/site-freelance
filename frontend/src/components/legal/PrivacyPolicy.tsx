import { PrivacySections } from "./PrivacySections";

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 flex flex-col px-6 py-10 md:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Politique de Confidentialité
        </h1>
        <PrivacySections />
      </div>
    </section>
  );
};
