import { APP_NAME2 } from "@/config/config";
import { logo } from "@/assets/images";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  CopyrightText,
  GoogleCalendarModal,
  SocialIcons,
} from "@/components/shared";
import { footerRoutes } from "@/config/routes/footerRoutes";

// Define types for footer navigation
type FooterRouteItem = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterRouteSection = {
  label: string;
  items: FooterRouteItem[];
};

export const SiteFooter = () => {
  return (
    <footer
      id="footer"
      className="bg-card dark:bg-background border-t py-4 relative "
    >
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 pt-2 pb-8">
          <div className="flex flex-col items-center lg:min-w-96 lg:items-start gap-8 lg:gap-4">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="flex items-center font-poppins text-primary"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 mr-1 sm:mr-4 "
              />
              <span className="text-primary text-2xl sm:text-4xl lg:text-3xl font-bold">
                {APP_NAME2}
              </span>
            </Link>
            <div className="text-center lg:max-w-sm">
              <h1 className="text-2xl font-bold lg:text-lg">
                Besoin d'un échange téléphonique ?
              </h1>
              <p className="mt-2 mb-4 text-sm text-gray-600">
                N'hésitez pas à me contacter pour un rendez-vous téléphonique.
              </p>
              <div className="flex justify-center">
                <GoogleCalendarModal />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-14 lg:gap-8 sm:grid-cols-3 justify-items-center mx-auto">
            {footerRoutes.map((nav: FooterRouteSection) => (
              <div key={nav.label} className="text-center sm:text-left">
                <h2 className="my-4 text-lg font-semibold uppercase text-primary dark:text-white">
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
                          className="group inline-flex items-center text-md font-medium text-secondary hover:text-primary transition-colors"
                        >
                          {item.name}
                          <ChevronRightIcon className="ml-1 h-4 w-4 shrink-0 transition-transform transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="group inline-flex items-center text-md font-medium text-secondary hover:text-primary transition-colors"
                        >
                          {item.name}
                          <ChevronRightIcon className="ml-1 h-4 w-4 shrink-0 transition-transform transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-primary pt-4 flex flex-col lg:flex-row lg:w-10/12 2xl:w-full mx-auto gap-4 text-center text-sm text-secondary lg:flex lg:items-center lg:justify-between">
          <SocialIcons
            iconSize="w-6 h-6 shrink-0"
            spaceBetween="space-x-6 lg:mb-0"
          />
          <CopyrightText className="text-base sm:text-center" />
        </div>
      </div>
    </footer>
  );
};
