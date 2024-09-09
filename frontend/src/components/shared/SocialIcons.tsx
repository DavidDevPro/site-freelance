// SocialIcons.tsx
import { socialMediaIcons } from "@/config/data/socialLinks";

interface SocialIconsProps {
  iconSize?: string; // Taille des icônes, ex: 'w-6 h-6'
  spaceBetween?: string; // Espacement entre les icônes, ex: 'space-x-4'
  containerClassName?: string; // Classes CSS supplémentaires pour le conteneur
  iconClassName?: string; // Classes CSS supplémentaires pour les icônes
  align?: "left" | "center" | "right"; // Alignement des icônes
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
  iconSize = "w-6 h-6",
  spaceBetween = "space-x-4",
  containerClassName = "",
  iconClassName = "text-primary hover:text-gray-600",
  align = "center", // Valeur par défaut: centré
}) => {
  // Déterminer la classe d'alignement en fonction de la prop 'align'
  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      className={`flex ${justifyClass} ${spaceBetween} ${containerClassName}`}
    >
      {socialMediaIcons.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            className={iconClassName}
            target="_blank"
            rel="noreferrer noopener"
            title={social.title}
            aria-label={social.label}
          >
            <IconComponent className={iconSize} />
            <span className="sr-only">{social.title}</span>
          </a>
        );
      })}
    </div>
  );
};
