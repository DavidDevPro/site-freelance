// src/config/apiConfig.ts

// Importation de la variable apiUrl à partir des variables d'environnement de Vite
const apiUrl: string = import.meta.env.VITE_API_URL as string;

// Exportation de la variable apiUrl pour la rendre accessible depuis d'autres fichiers
export { apiUrl };
