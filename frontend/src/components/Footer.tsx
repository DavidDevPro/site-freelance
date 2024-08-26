import { Instagram, Linkedin, Twitter, ChevronRight } from "lucide-react";
import { useState } from "react";
import Logo from "@/assets/images/icon.webp";
import { StyledButton } from "./StyledButton";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com" },
  { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com" },
  { icon: <Twitter className="w-6 h-6" />, url: "https://www.twitter.com" },
];

type FooterLink = { id: number; title: string; url: string };

const footerLinks: FooterLink[][] = [
  [
    { id: 1, title: "About", url: "#" },
    { id: 2, title: "Contact", url: "#" },
    { id: 3, title: "Blog", url: "#" },
    { id: 4, title: "Story", url: "#" },
  ],
  [
    { id: 5, title: "Company", url: "#" },
    { id: 6, title: "Product", url: "#" },
    { id: 7, title: "Press", url: "#" },
    { id: 8, title: "More", url: "#" },
  ],
  [
    { id: 9, title: "Press", url: "#" },
    { id: 10, title: "Careers", url: "#" },
    { id: 11, title: "Newsletters", url: "#" },
    { id: 12, title: "More", url: "#" },
  ],
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 2000);
  };

  return (
    <div className="bg-card border-t border-gray-200 dark:border-neutral-700">
      <footer className="px-7 max-w-[1400px] mx-auto">
        <div className="flex flex-col py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start justify-start gap-y-5">
            <a href="#" className="flex items-center gap-x-2.5">
              <img
                className="h-10 w-10"
                src={Logo}
                alt="logo david web projects"
              />
              <h1 className="text-xl font-bold text-primary dark:text-white">
                David Web Projects
              </h1>
            </a>
            <p className="tracking-tight text-neutral-700 dark:text-neutral-400">
              Création, Refonte & SEO
            </p>
            <p className="text-sm tracking-tight text-neutral-500 dark:text-neutral-500">
              Tous droits réservés.
            </p>
          </div>
          <div className="pt-8 md:w-1/2">
            <div className="flex items-start justify-between gap-x-6 lg:pl-10">
              {footerLinks.map((column, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-y-2">
                  {column.map((link) => (
                    <li
                      key={link.id}
                      className="group inline-flex cursor-pointer items-center justify-start gap-1 text-base font-medium text-gray-600 transition duration-200 hover:text-primary dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      <a href={link.url}>{link.title}</a>
                      <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-8 border-t border-dashed border-gray-200 dark:border-neutral-700 py-8 md:flex-row md:items-center">
          <div className="flex items-start gap-x-6">
            <div className="mt-2.5 flex flex-col gap-y-2">
              <p className="text-lg font-bold text-gray-700 dark:text-neutral-200">
                Newsletter
              </p>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Nous avons une excellente équipe de support pour vous aider.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-x-2 pt-2"
              >
                <input
                  className="w-full max-w-xs rounded-lg border border-gray-300 bg-neutral-50 p-2 placeholder:text-neutral-400 focus:ring-2 focus:ring-primary focus:ring-offset-0 dark:bg-neutral-800 dark:border-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-500"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre Email"
                  required
                />
                <StyledButton
                  type="submit"
                  className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-500"
                >
                  {isSubscribed ? "Abonné" : "S'abonner"}
                </StyledButton>
              </form>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                className="text-primary transition-colors duration-200 hover:text-secondary dark:hover:text-secondary"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
