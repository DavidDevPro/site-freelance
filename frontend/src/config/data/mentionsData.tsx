// config/data/mentionsData.tsx

import { Mail, Globe, MapPin } from "lucide-react";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaServer, FaShieldAlt, FaHammer } from "react-icons/fa";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { PiBuildingsFill } from "react-icons/pi";
import { BsImages } from "react-icons/bs";
import { APP_ADRESS, APP_ADRESS2, APP_MAIL, APP_NAME2 } from "@/config/config";
import { legalInfo, contactInfo } from "@/config/data/contactAndLegalData"; // Import correct de legalInfo
import { Link } from "react-router-dom";
import { MdContactMail } from "react-icons/md";

// Définir le type pour chaque section de mention légale sans JSX
export type MentionContent = {
  title: string;
  description: JSX.Element; // Utilisation de JSX.Element pour les contenus
  icon: JSX.Element; // Changement pour accepter un composant JSX
};

// Contenu textuel des mentions légales
export const mentionsContent: MentionContent[] = [
  {
    title: "Identification de l'Entreprise",
    description: (
      <div className="flex flex-col">
        {/* Utilisation de flex-col pour une disposition verticale avec plus d'espacement */}
        {legalInfo.map((detail, index) => (
          <div key={index} className="mb-1">
            {/* Ajout d'un espace sous chaque bloc */}
            <div className="flex items-center">
              {/* Première ligne : icône + label */}
              {detail.icon && (
                <detail.icon className="w-6 h-6 text-primary mr-2" />
              )}
              <strong>{detail.label} :</strong>
            </div>
            <div className="ml-8">
              {/* Deuxième ligne : valeur */}
              {detail.isLink ? (
                <a href={detail.link} className="text-primary hover:underline">
                  {detail.text}
                </a>
              ) : (
                <span>{detail.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    icon: (
      <PiBuildingsFill className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />
    ),
  },
  {
    title: "Contact",
    description: (
      <div className="flex flex-col">
        {/* Utilisation de flex-col pour une disposition verticale avec espacement */}
        {contactInfo
          .filter((info) => info.text !== APP_ADRESS2) // Exclure APP_ADRESS2 de la boucle
          .map((info, index) => (
            <div key={index} className="mb-1">
              {/* Ajout d'un espace sous chaque bloc */}
              <div className="flex items-center">
                {/* Première ligne : icône + texte */}
                {info.icon && (
                  <info.icon className="w-6 h-6 text-primary mr-2" />
                )}
                <strong>{info.label} :</strong>
              </div>
              <div className="ml-8">
                {/* Deuxième ligne : valeur */}
                {info.text}
              </div>
            </div>
          ))}
      </div>
    ),
    icon: (
      <MdContactMail className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />
    ),
  },
  {
    title: "Hébergement",
    description: (
      <div className="flex flex-col">
        {/* Utilisation de flex-col pour une disposition verticale */}
        <div className="mb-1">
          {/* Espacement sous chaque bloc */}
          <strong>Serveur NAS Synology + Domaine chez Infomaniak</strong>
        </div>
        <div className="mb-1">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-primary mr-2" />
            <strong>Adresse :</strong>
          </div>
          <div className="ml-8">
            {APP_ADRESS} {APP_ADRESS2}
          </div>
        </div>
        <div className="mb-1">
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-primary mr-2" />
            <strong>Contact :</strong>
          </div>
          <div className="ml-8">
            <a
              href={`mailto:${APP_MAIL}`}
              className="text-primary hover:underline"
            >
              {APP_MAIL}
            </a>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-primary mr-2" />
            <strong>URL du site web :</strong>
          </div>
          <div className="ml-8">
            <a
              href="https://davidwebprojects.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://davidwebprojects.fr
            </a>
          </div>
        </div>
      </div>
    ),
    icon: <FaServer className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />,
  },
  {
    title: "Activité",
    description: (
      <div>
        <p>
          Le site <strong>{APP_NAME2}</strong> a pour vocation de présenter les
          services et produits offerts par <strong>{APP_NAME2}</strong>, ainsi
          que de fournir des informations et des actualités concernant son
          domaine d'activité.
        </p>
      </div>
    ),
    icon: (
      <TbDeviceAnalytics className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />
    ),
  },
  {
    title: "Propriété Intellectuelle",
    description: (
      <div>
        <p>
          Le contenu du site, incluant les textes, images, graphismes et logo,
          est protégé par le droit de la propriété intellectuelle et appartient
          à <strong>{APP_NAME2}</strong>. Toute utilisation, reproduction,
          diffusion, commercialisation, modification de toute ou partie du site,
          sans l'autorisation de <strong>{APP_NAME2}</strong>, est prohibée et
          peut entraîner des actions et poursuites judiciaires.
        </p>
      </div>
    ),
    icon: <BsImages className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />,
  },
  {
    title: "Limitation de Responsabilité",
    description: (
      <div>
        <p>
          <strong>{APP_NAME2}</strong> met tout en œuvre pour assurer la
          précision des informations présentes sur ce site. Toutefois, aucune
          garantie n'est donnée quant à leur exactitude ou à l'exhaustivité. La
          société ne pourra être tenue responsable des erreurs ou omissions dans
          les informations fournies.
        </p>
      </div>
    ),
    icon: <FaHammer className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />,
  },
  {
    title: "Cookies",
    description: (
      <div>
        <p>
          Les cookies sont des fichiers stockés sur votre ordinateur par les
          sites web que vous visitez. Ils sont largement utilisés pour faire
          fonctionner les sites web, ou les faire fonctionner plus efficacement,
          ainsi que pour fournir des informations aux propriétaires du site.
        </p>
      </div>
    ),
    icon: (
      <IoSettingsOutline className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />
    ),
  },
  {
    title: "Utilisation des cookies",
    description: (
      <div>
        <p>
          En visitant notre site web, vous consentez à l'utilisation de cookies
          et d'autres technologies. Ces cookies sont utilisés pour stocker des
          informations, telles que vos préférences personnelles lorsque vous
          visitez notre site. Cela pourrait inclure uniquement vous montrer une
          bannière une fois dans votre visite, ou la capacité de vous connecter
          à certaines de nos fonctionnalités, telles que les forums.
        </p>
      </div>
    ),
    icon: (
      <IoSettingsSharp className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />
    ),
  },
  {
    title: "Politique de Confidentialité",
    description: (
      <div>
        <p>
          <strong>{APP_NAME2}</strong> respecte votre vie privée et s'engage à
          protéger vos données personnelles conformément à la législation en
          vigueur. Pour plus d'informations, veuillez consulter notre{" "}
          <Link
            to="/politique-confidentialite"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    ),
    icon: (
      <FaShieldAlt className="inline w-8 h-8 min-w-8 min-h-8 text-primary" />
    ),
  },
];
