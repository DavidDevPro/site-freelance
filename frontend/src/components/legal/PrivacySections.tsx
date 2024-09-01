// components/legal/PrivacySections.tsx
import { privacyContent } from "@/config/data/privacyData"; // Import des données

export const PrivacySections: React.FC = () => {
  return (
    <div className="space-y-8">
      {privacyContent.map((section, index) => (
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
  );
};
