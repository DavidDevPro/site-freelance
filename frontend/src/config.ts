// Définition de la variable `APP_NAME` pour le nom de l'application (à afficher dans l'onglet du navigateur)
export const APP_NAME: string = "DavidWebProjects";

// Définition de la variable `APP_DEV` pour le nom du développeur pour le copyright
export const APP_DEV: string = "David CHANGEA"; 

// Définition de la variable `basename` en fonction du mode de l'environnement
// `name_files` correspond au nom du dossier où se trouvera le site en production (hors racine domaine)
// Si racine, il faut mettre "/"
const basename: string = import.meta.env.MODE === "production" ? "/" : "";

// Exportation de la variable `basename` pour l'utiliser dans d'autres fichiers
export { basename };

// Importation de `package.json`
import packageJson from '../package.json';

// Définition du type pour `Config`
interface ConfigType {
  version: string;
  releaseDate: string;
  showMaintenance: boolean;
}

// Exportation de la configuration avec la version et toute autre configuration nécessaire
export const Config: ConfigType = {
  version: packageJson.version,
  releaseDate: packageJson.releaseDate,
  showMaintenance: import.meta.env.VITE_SHOW_MAINTENANCE === 'false',
};
