import { Mail, Phone, MapPin } from "lucide-react";
import { FaHome, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";

export const contactDetails = [
  {
    icon: Mail,
    text: "contact@davidwebprojects.fr",
    alt: "Email",
  },
  {
    icon: Phone,
    text: "+33 06 59 95 68 94",
    alt: "Téléphone",
  },
  {
    icon: MapPin,
    text: "26760 Beaumont lès Valence, FRANCE",
    alt: "Adresse",
  },
];


export const legalDetails = [
  {
    icon: FaHome,
    label: "Raison Sociale",
    text: "David Web Projects",
  },
  {
    icon: BiSolidUserRectangle,
    label: "Représentant Légal",
    text: "CHANGEA David",
  },
  {
    icon: FaBriefcase,
    label: "SIRET",
    text: "80219689900024",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Adresse du Siège Social",
    text: "3 place Helene Grail, 26760 Beaumont Lès Valence",
  },
];