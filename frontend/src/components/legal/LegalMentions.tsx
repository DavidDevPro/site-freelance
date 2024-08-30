import { MentionsSections } from "@/lib/utils/MentionsSection";

const LegalMentions: React.FC = () => {
  return (
    <section className="container mx-auto py-10 relative z-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Mentions Légales
      </h1>
      <div className="space-y-8">
        {MentionsSections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <section.icon className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold ml-2 text-primary">
                {section.title}
              </h2>
            </div>
            <div className="text-lg text-gray-700">{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalMentions;
