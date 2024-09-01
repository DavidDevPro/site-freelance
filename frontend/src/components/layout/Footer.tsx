import { APP_NAME2 } from "@/config/config";
import logo from "@/assets/images/icon.webp";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  CopyrightText,
  GoogleCalendarModal,
  SocialIcons,
} from "@/components/shared";
import { footerRoutes } from "@/config/routes/footerRoutes";

// Define types for footer navigation
type FooterNavItem = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterNavSection = {
  label: string;
  items: FooterNavItem[];
};

export const SiteFooter = () => {
  return (
    <footer
      id="footer"
      className="bg-white dark:bg-background border-t py-4 relative z-1"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-4">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="flex items-center gap-2 font-poppins text-primary"
            >
              <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
              <span className="text-primary text-2xl font-bold">
                {APP_NAME2}
              </span>
            </Link>
            <div className="text-center md:text-left max-w-sm">
              <h1 className="text-2xl font-bold lg:text-xl">
                Besoin d'un échange téléphonique ?
              </h1>
              <p className="mt-2 mb-4 text-sm text-gray-600">
                N'hésitez pas à me contacter pour un rendez-vous téléphonique.
              </p>
              <div className="flex justify-center md:justify-start">
                <GoogleCalendarModal />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center mx-auto lg:grid-cols-3">
            {footerRoutes.map((nav: FooterNavSection) => (
              <div key={nav.label} className="text-center sm:text-left">
                <h2 className="mb-6 text-sm font-semibold uppercase text-primary dark:text-white">
                  {nav.label}
                </h2>
                <ul className="space-y-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                          {item.name}
                          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="group inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                          {item.name}
                          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t pt-2 text-center text-sm text-gray-600 md:flex md:items-center md:justify-between">
          <SocialIcons
            iconSize="w-5 h-5"
            spaceBetween="space-x-6 md:mb-0"
            containerClassName="mb-4"
          />
          {/* Utilisation du composant CopyrightText */}
          <CopyrightText className="text-sm sm:text-center" />
        </div>
      </div>
    </footer>
  );
};
