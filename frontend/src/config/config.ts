export const APP_NAME = import.meta.env.VITE_APP_NAME;
export const APP_NAME2 = import.meta.env.VITE_APP_NAME2;
export const APP_DEV = import.meta.env.VITE_APP_DEV;
export const APP_MAIL = import.meta.env.VITE_APP_MAIL;
export const APP_ADRESS = import.meta.env.VITE_APP_ADRESS;
export const APP_ADRESS2 = import.meta.env.VITE_APP_ADRESS2;
export const APP_ADRESS3 = import.meta.env.VITE_APP_ADRESS3;
export const APP_TEL = import.meta.env.VITE_APP_TEL;
export const APP_SIRET = import.meta.env.VITE_APP_SIRET;
export const APP_AXEPTIO_CLIENT_ID = import.meta.env.VITE_APP_AXEPTIO_CLIENT_ID;
export const APP_GOOGLE_ANALYTICS_ID = import.meta.env.VITE_APP_GOOGLE_ANALYTICS_ID;
export const APP_GOOGLE_TAG_MANAGER_ID = import.meta.env.VITE_APP_GOOGLE_TAG_MANAGER_ID;
export const APP_TMAXEPTIO_CLIENT_ID = import.meta.env.VITE_APP_TMAXEPTIO_CLIENT_ID;

// Définition de la variable `basename` en fonction du mode de l'environnement
// `name_files` correspond au nom du dossier où se trouvera le site en production (hors racine domaine)
// Si racine, il faut mettre "/"
// const basename: string = import.meta.env.MODE === "production" ? "/" : "";
const basename: string = import.meta.env.MODE === "production" ? "/freelanceV1/" : "/";

// Exportation de la variable `basename` pour l'utiliser dans d'autres fichiers
export { basename };

// Importation de `package.json`
import packageJson from '../../package.json';

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
