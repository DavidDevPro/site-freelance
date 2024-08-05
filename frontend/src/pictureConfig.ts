// src/api/pictureConfig.ts

// Importation de la variable pictureUrl à partir des variables d'environnement de Vite
const pictureUrl: string = import.meta.env.VITE_IMAGE_BASE_URL as string;

// Exportation de la variable pictureUrl pour la rendre accessible depuis d'autres fichiers
export { pictureUrl };
