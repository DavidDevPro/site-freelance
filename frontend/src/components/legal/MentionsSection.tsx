// components/legal/MentionsSections.tsx
import React from "react";
import { mentionsContent, MentionContent } from "@/config/data/mentionsData"; // Import du contenu

export const MentionsSections: React.FC = () => {
  return (
    <div className="space-y-8">
      {mentionsContent.map((section: MentionContent, index: number) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {section.icon} {/* Affiche l'icône de chaque section */}
            <h2 className="text-2xl font-semibold ml-2 text-primary">
              {section.title}
            </h2>
          </div>
          <div className="text-lg text-gray-700">{section.description}</div>
        </div>
      ))}
    </div>
  );
};
