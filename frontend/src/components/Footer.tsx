import { LuChevronRight } from "react-icons/lu";

import Logo from "@/assets/images/icon.webp";

import { socialIcons } from "@/utils/socialLinks";
import { GoogleCalendarModal } from "./googleCalendar/GoogleCalendarModal";
import { APP_NAME, Config } from "@/config";

const footerNavs = [
  {
    label: "Produits",
    items: [
      { href: "/#features", name: "Services" },
      { href: "/#pricing", name: "Tarifs" },
      { href: "/#testimonials", name: "Avis" },
    ],
  },
  {
    label: "Contact",
    items: [
      {
        href: socialIcons.find((icon) => icon.label === "Linkedin")?.href,
        name: "Linkedin",
        external: true,
      },
      {
        href: socialIcons.find((icon) => icon.label === "Facebook")?.href,
        name: "Facebook",
        external: true,
      },
      {
        href: socialIcons.find((icon) => icon.label === "Twitter")?.href,
        name: "Twitter",
        external: true,
      },
      {
        href: socialIcons.find((icon) => icon.label === "Instagram")?.href,
        name: "Instagram",
        external: true,
      },
      { href: "/contact", name: "Contact" },
    ],
  },
  {
    label: "Legal",
    items: [
      { href: "/mentions-legales", name: "Mentions Légales" },
      {
        href: "/politique-de-confidentialite",
        name: "Politique de confidentialité",
      },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const yearText = currentYear === 2024 ? "2024" : `2024 - ${currentYear}`;

  return (
    <div className="bg-card border-t border-gray-200 dark:border-neutral-700">
      <footer className="px-7  max-w-[1400px] mx-auto">
        <div className="flex flex-col py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start  justify-start gap-y-5">
            <a href="#" className="flex items-center gap-x-2.5">
              <img
                className="h-10 w-10"
                src={Logo}
                alt="logo david web projects"
              />
              <h1 className="text-xl font-bold text-primary dark:text-white">
                {APP_NAME}
              </h1>
            </a>
            <p className="tracking-tight text-neutral-700 dark:text-neutral-400">
              Création, Refonte & SEO
            </p>
            <div className="flex justify-center md:justify-start">
              <GoogleCalendarModal />
            </div>
          </div>
          <div className="pt-8 md:w-1/2">
            <div className="flex items-start justify-between gap-x-6 lg:pl-10">
              {footerNavs.map((nav) => (
                <div key={nav.label}>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-primary dark:text-white">
                    {nav.label}
                  </h2>
                  <ul className="space-y-2">
                    {nav.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="group inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                          {item.name}
                          <LuChevronRight className="ml-1 h-4 w-4 transition-transform transform group-hover:translate-x-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t text-center text-sm text-gray-600 md:flex md:items-center md:justify-between">
          {/* Icônes sociales en colonne */}
          <div className="mb-4 py-4 flex justify-center space-x-6 md:mb-0">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-primary transition-colors duration-200 hover:text-gray-600 dark:hover:text-secondary"
                  target="_blank"
                  rel="noreferrer noopener"
                  title={social.title}
                >
                  <IconComponent className="size-5" />
                  <span className="sr-only">{social.title}</span>
                </a>
              );
            })}
          </div>
          <div>
            <span className="block text-sm tracking-tight text-primary dark:text-neutral-400 sm:text-center">
              Copyright &copy; {yearText} {APP_NAME} - Tous Droits Réservés -
              Version {Config.version} du {Config.releaseDate}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
