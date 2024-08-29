import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaServer,
  FaShieldAlt,
  FaGavel,
  FaGlobe,
} from "react-icons/fa";

import { TbDeviceAnalytics } from "react-icons/tb";
import { BsImages } from "react-icons/bs";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { legalDetails } from "@/utils/contactData";
import { APP_NAME } from "@/config";

export const MentionsSections = [
  {
    title: "Informations Légales",
    icon: FaHome,
    content: (
      <div>
        {legalDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <detail.icon className="text-primary h-6 w-6" />
            <div>
              <h3 className="text-lg font-semibold">{detail.label} :</h3>
              <p className="text-base text-neutral-700">{detail.text}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Contact",
    icon: MdContactMail,
    content: (
      <div>
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-primary h-6 w-6" />
          <div>
            <h3 className="text-lg font-semibold">Numéro de Téléphone :</h3>
            <p className="text-base text-neutral-700">
              <a
                href="tel:+33659956894"
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                +33 6 59 95 68 94
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-primary h-6 w-6" />
          <div>
            <h3 className="text-lg font-semibold">Email :</h3>
            <p className="text-base text-neutral-700">
              <a
                href="mailto:contact@davidwebprojects.fr"
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                contact@davidwebprojects.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Activité",
    icon: TbDeviceAnalytics,
    content: (
      <p className="text-base text-neutral-700">
        Développeur web freelance spécialisé dans la création et la refonte de
        sites web, l'optimisation SEO, l'amélioration des performances et
        l'hébergement de sites web.
      </p>
    ),
  },
  {
    title: "Hébergement",
    icon: FaServer,
    content: (
      <div>
        <p>Serveur NAS Synology + Domaine chez INFOMANIAK</p>
        <p>Adresse : 3 place Helene Grail, 26760 Beaumont Lès Valence</p>
        <p>
          <FaEnvelope className="text-primary inline w-4 h-4 mr-1" />
          Contact :{" "}
          <a
            href="mailto:contact@davidwebprojects.fr"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            contact@davidwebprojects.fr
          </a>
        </p>
        <p>
          <FaGlobe className="text-primary inline w-4 h-4 mr-1" />
          URL du site web :{" "}
          <a
            href="https://davidwebprojects.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            https://davidwebprojects.fr
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Propriété Intellectuelle",
    icon: BsImages,
    content: (
      <p className="text-base text-neutral-700">
        Le contenu de ce site web (textes, images, codes, etc.) est la propriété
        exclusive de {APP_NAME}. Toute reproduction ou distribution, même
        partielle, est strictement interdite sans autorisation préalable.
      </p>
    ),
  },
  {
    title: "Limitation de Responsabilité",
    icon: FaGavel,
    content: (
      <p className="text-base text-neutral-700">
        {APP_NAME} met tout en œuvre pour assurer la précision des informations
        présentes sur ce site. Toutefois, aucune garantie n'est donnée quant à
        leur exactitude ou à l'exhaustivité. La société ne pourra être tenue
        responsable des erreurs ou omissions dans les informations fournies.
      </p>
    ),
  },
  {
    title: "Cookies",
    icon: IoSettingsOutline,
    content: (
      <p className="text-base text-neutral-700">
        Les cookies sont des fichiers stockés sur votre ordinateur par les sites
        web que vous visitez. Ils sont largement utilisés pour faire fonctionner
        les sites web, ou les faire fonctionner plus efficacement, ainsi que
        pour fournir des informations aux propriétaires du site.
      </p>
    ),
  },
  {
    title: "Utilisation des Cookies",
    icon: IoSettingsSharp,
    content: (
      <p className="text-base text-neutral-700">
        En visitant notre site web, vous consentez à l'utilisation de cookies et
        d'autres technologies. Ces cookies sont utilisés pour stocker des
        informations, telles que vos préférences personnelles lorsque vous
        visitez notre site. Cela pourrait inclure uniquement vous montrer une
        bannière une fois dans votre visite, ou la capacité de vous connecter à
        certaines de nos fonctionnalités, telles que les forums.
      </p>
    ),
  },
  {
    title: "Politique de Confidentialité",
    icon: FaShieldAlt,
    content: (
      <p className="text-base text-neutral-700">
        {APP_NAME} respecte votre vie privée et s'engage à protéger vos données
        personnelles conformément à la législation en vigueur. Pour plus
        d'informations, veuillez consulter notre{" "}
        <a
          href="/politique-de-confidentialite"
          className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          politique de confidentialité
        </a>
        .
      </p>
    ),
  },
];
