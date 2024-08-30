import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns a formatted year range for display.
 * If the current year is 2024, returns "2024".
 * Otherwise, returns "2024 - <currentYear>".
 * 
 * @returns {string} The formatted year text.
 */
export function getYearText(): string {
  const currentYear = new Date().getFullYear();
  return currentYear === 2024 ? "2024" : `2024 - ${currentYear}`;
}

// Validation du nom de fichier
export const validateFileName = (fileName: string | undefined): string | true => {
  const FILE_NAME_REGEX = /^[a-zA-Z0-9_-]+$/;
  const FILE_NAME_MAX_LENGTH = 30;

  if (!fileName || fileName.length === 0) {
    return "Le nom du fichier ne peut pas être vide.";
  }

  if (!FILE_NAME_REGEX.test(fileName)) {
    return "Le nom du fichier ne doit pas contenir d'espaces ni de caractères spéciaux.";
  }
  if (fileName.length > FILE_NAME_MAX_LENGTH) {
    return `Le nom du fichier ne doit pas dépasser ${FILE_NAME_MAX_LENGTH} caractères.`;
  }

  return true;
};

// Fonction pour formater la date
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
