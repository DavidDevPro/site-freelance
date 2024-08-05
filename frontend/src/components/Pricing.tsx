import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
// import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  priceDaily: number;
  priceProject: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Starter",
    popular: PopularPlanType.NO,
    priceDaily: 250,
    priceProject: 2000,
    description: "Idéal pour les sites vitrines et les projets simples",
    buttonText: "Me contacter",
    benefitList: [
      "Développement web front-end",
      "Design responsive basique",
      "1 cycle de révision",
      "Support par email et/ou Discord",
    ],
  },
  {
    title: "Standard",
    popular: PopularPlanType.YES,
    priceDaily: 300,
    priceProject: 4500,
    description: "Parfait pour les projets de taille moyenne",
    buttonText: "Me contacter",
    benefitList: [
      "Développement web full-stack",
      "Design responsive avancé",
      "2 cycles de révision",
      "Intégration API basique",
      "Support par email, Discord et téléphone",
    ],
  },
  {
    title: "Premium",
    popular: PopularPlanType.NO,
    priceDaily: 350,
    priceProject: 8750,
    description: "Pour les projets complexes nécessitant une attention particulière",
    buttonText: "Me contacter",
    benefitList: [
      "Développement web full-stack",
      "Design personnalisé",
      "Cycles de révision illimités",
      "Intégration API avancée",
      "Optimisation des performances",
      "Support prioritaire 24/7",
    ],
  },
];

const formatPrice = (price: number) => {
  return price.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });
};

const Pricing: React.FC = () => {
  const [isProject, setIsProject] = useState(false);

  const togglePricing = () => setIsProject(!isProject);

  return (
    <section id="pricing" className="py-24 text-center">
      <div className="container mx-auto px-4">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Tarifs
          </h4>
        <h2 className="text-3xl md:text-4xl font-bold">
            Des 
          <span className="bg-gradient-primary">
            {" "}
            sites Web sur mesure{" "}
          </span>          
           pour vous
        </h2>
        <p className="mb-8">
        Trouvez <strong>{`l'offre parfaite`}</strong> pour vos besoins
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <Switch checked={isProject} onCheckedChange={togglePricing} />
            <span className="text-sm font-medium text-gray-900">
              {isProject ? "Forfait Projet" : "Taux Journalier"}
            </span>
          </div>
          <Badge className="ml-4 bg-black text-white">DEVIS GRATUIT ✨</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingList.map((pricing: PricingProps) => (
            <Card
              key={pricing.title}
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge variant="secondary" className="text-sm text-primary">
                      Le plus Populaire
                    </Badge>
                  ) : null}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">
                    {isProject
                      ? `${formatPrice(pricing.priceProject)} / projet`
                      : `${formatPrice(pricing.priceDaily)} / jour`}
                  </span>
                </div>
                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>                
                {/* <Link to="/contact" className="w-full md:w-1/3">
                  <Button className={`border ${buttonVariants({ variant: "outline", className: "w-full border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary" })}`}>{pricing.buttonText}</Button>
                </Link> */}
                <Link to="/contact" className="w-full md:w-1/3">
                  <Button
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "default",
                      }),
                      "w-full text-white px-6 text-sm font-semibold tracking-tighter transition-all ease-out hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50" 
                    )}
                  >
                  {pricing.buttonText}
                  </Button>
                </Link>
                <hr className="w-4/5 m-auto my-4 mb-4 " />
                <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex items-center">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                      <Check className="text-white" size={16} />
                    </div>
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing };
