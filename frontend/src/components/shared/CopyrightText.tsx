// CopyrightText.tsx
import React from "react";
import { APP_NAME, Config } from "@/config/config";
import { getYearText } from "@/lib/utils";

interface CopyrightTextProps {
  className?: string; // Permet de personnaliser les classes CSS
}

export const CopyrightText: React.FC<CopyrightTextProps> = ({ className }) => {
  const yearText = getYearText();

  return (
    <span
      className={`block tracking-tight text-primary dark:text-neutral-400 ${className}`}
    >
      Copyright &copy; {yearText} {APP_NAME} - Tous Droits Réservés - Version{" "}
      {Config.version} du {Config.releaseDate}
    </span>
  );
};
