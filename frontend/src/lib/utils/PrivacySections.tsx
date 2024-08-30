import {
  FaUserShield,
  FaRegFileAlt,
  FaUserSecret,
  FaLock,
} from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { AiFillSecurityScan } from "react-icons/ai";
import { APP_NAME } from "@/config";

export const PrivacySections = [
  {
    title: "Introduction",
    content: (
      <p className="text-base text-neutral-700">
        Chez <strong>{APP_NAME}</strong>, nous accordons une grande importance à
        la protection de votre vie privée. Cette politique de confidentialité
        explique comment nous collectons, utilisons, stockons et protégeons vos
        informations personnelles lorsque vous utilisez notre site web et nos
        services.
      </p>
    ),
    icon: <FaUserShield className="text-primary h-8 w-8" />,
  },
  {
    title: "Données Collectées",
    content: (
      <>
        <p className="text-base text-neutral-700">
          Nous collectons plusieurs types de données personnelles, notamment :
        </p>
        <ul className="list-disc list-inside text-base text-neutral-700 space-y-2">
          <li>
            Informations d'identification (nom, adresse, numéro de téléphone,
            email, etc.).
          </li>
          <li>
            Informations sur votre utilisation de notre site (pages visitées,
            actions effectuées, etc.).
          </li>
          <li>
            Données techniques telles que l'adresse IP, le type de navigateur et
            l'appareil utilisé.
          </li>
        </ul>
      </>
    ),
    icon: <IoMdAnalytics className="text-primary h-8 w-8" />,
  },
  {
    title: "Utilisation des Données",
    content: (
      <>
        <p className="text-base text-neutral-700">
          Les informations collectées sont utilisées pour :
        </p>
        <ul className="list-disc list-inside text-base text-neutral-700 space-y-2">
          <li>Fournir nos services et répondre à vos demandes spécifiques.</li>
          <li>Améliorer votre expérience utilisateur sur notre site.</li>
          <li>
            Analyser et optimiser nos services pour mieux répondre à vos
            besoins.
          </li>
          <li>Respecter nos obligations légales et réglementaires.</li>
        </ul>
      </>
    ),
    icon: <FaRegFileAlt className="text-primary h-8 w-8" />,
  },
  {
    title: "Partage des Données",
    content: (
      <>
        <p className="text-base text-neutral-700">
          Vos données personnelles ne seront jamais vendues à des tiers.
          Toutefois, elles peuvent être partagées avec des partenaires de
          confiance ou des sous-traitants pour les raisons suivantes :
        </p>
        <ul className="list-disc list-inside text-base text-neutral-700 space-y-2">
          <li>Pour fournir les services que vous avez demandés.</li>
          <li>Pour respecter des obligations légales.</li>
          <li>Avec votre consentement explicite.</li>
        </ul>
      </>
    ),
    icon: <FaUserSecret className="text-primary h-8 w-8" />,
  },
  {
    title: "Sécurité des Données",
    content: (
      <p className="text-base text-neutral-700">
        La sécurité de vos données est notre priorité. Nous mettons en place des
        mesures techniques et organisationnelles adaptées pour protéger vos
        informations contre tout accès, divulgation, modification ou destruction
        non autorisé.
      </p>
    ),
    icon: <FaLock className="text-primary h-8 w-8" />,
  },
  {
    title: "Vos Droits",
    content: (
      <>
        <p className="text-base text-neutral-700">
          Conformément à la loi n°78-17 du 6 janvier 1978 relative à
          l'informatique, aux fichiers et aux libertés, vous disposez de
          plusieurs droits concernant vos données personnelles :
        </p>
        <ul className="list-disc list-inside text-base text-neutral-700 space-y-2">
          <li>
            Droit d'accès, de rectification et de suppression de vos données.
          </li>
          <li>Droit à la portabilité de vos données.</li>
          <li>Droit de vous opposer au traitement de vos données.</li>
          <li>
            Droit de définir des directives concernant l'utilisation de vos
            données après votre décès.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Pour exercer ces droits, vous pouvez nous contacter par email à
          l'adresse suivante :
          <a
            href="mailto:contact@fabwebprojects.fr"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {" "}
            contact@fabwebprojects.fr
          </a>
          .
        </p>
      </>
    ),
    icon: <AiFillSecurityScan className="text-primary h-8 w-8" />,
  },
  {
    title: "Modifications de la Politique",
    content: (
      <p className="text-base text-neutral-700">
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Toute modification sera publiée sur cette
        page et prendra effet immédiatement. Nous vous encourageons à consulter
        régulièrement cette page pour rester informé de la manière dont nous
        protégeons vos données.
      </p>
    ),
    icon: <FaRegFileAlt className="text-primary h-8 w-8" />,
  },
];
