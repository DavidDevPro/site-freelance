import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "daily" | "project";

export const toHumanPrice = (price: number) => {
  return price.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });
};

const demoPrices = [
  {
    id: "price_1",
    name: "Starter",
    description: "Idéal pour les sites vitrines et les projets simples",
    features: [
      "Développement web front-end",
      "Design responsive basique",
      "1 cycle de révision",
      "Support par email et/ou Discord",
    ],
    dailyPrice: 250,
    projectPrice: 2000,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Standard",
    description: "Parfait pour les projets de taille moyenne",
    features: [
      "Développement web full-stack",
      "Design responsive avancé",
      "2 cycles de révision",
      "Intégration API basique",
      "Support par email, Discord et téléphone",
    ],
    dailyPrice: 300,
    projectPrice: 4500,
    isMostPopular: true,
  },
  {
    id: "price_3",
    name: "Premium",
    description:
      "Pour les projets complexes nécessitant une attention particulière",
    features: [
      "Développement web full-stack",
      "Design personnalisé",
      "Cycles de révision illimités",
      "Intégration API avancée",
      "Optimisation des performances",
      "Support prioritaire 24/7",
    ],
    dailyPrice: 350,
    projectPrice: 8750,
    isMostPopular: false,
  },
];

export function Pricing() {
  const [interval, setInterval] = useState<Interval>("daily");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Tarifs
          </h4>

          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Des tarifs simples pour tous.
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choisissez un <strong>plan abordable</strong> qui est rempli des
            meilleures fonctionnalités pour engager votre audience, créer de la
            fidélité client, et augmenter vos ventes.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "project" : "daily");
            }}
          />
          <span>
            {interval === "daily" ? "Taux Journalier" : "Forfait Projet"}
          </span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            Devis GRATUITS ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                " relative flex w-full max-w-[400px] flex-col gap-4 overflow-hidden rounded-2xl border p-4 text-black dark:text-white",
                {
                  "border-2 border-neutral-700 shadow-lg shadow-neutral-500 dark:border-neutral-400 dark:shadow-neutral-600":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-16 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  {toHumanPrice(
                    interval === "project"
                      ? price.projectPrice
                      : price.dailyPrice
                  )}
                  <span className="text-xs">
                    {" "}
                    / {interval === "project" ? "projet" : "jour"}
                  </span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out text-white hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white  opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Subscribe</p>
                )}

                {isLoading && id === price.id && <p>Subscribing</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-primary p-[2px] text-white dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
