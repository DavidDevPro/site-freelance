import { Footer } from "@/components/Footer";

import { termsSections } from "@/lib/TermsSections";

const PolitiqueConfidentialite = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center ">
        <section className="bg-gray-50 text-gray-800 flex flex-col px-6 py-10 md:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
              Politique de Confidentialité
            </h1>
            <div className="space-y-8">
              {termsSections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h2 className="text-2xl font-semibold ml-2 text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-lg text-gray-700">{section.content}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
