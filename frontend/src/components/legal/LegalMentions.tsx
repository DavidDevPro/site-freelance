// components/legal/LegalMentions.tsx

import { MentionsSections } from "./MentionsSection";

export const LegalMentions: React.FC = () => {
  return (
    <section className="container mx-auto py-10 relative z-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Mentions Légales
      </h1>
      {/* Utilisation du composant MentionsSections */}
      <MentionsSections />
    </section>
  );
};
