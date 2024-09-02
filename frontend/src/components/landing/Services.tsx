// src/components/Services.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "../shared/PrimaryButton";
import { serviceList, ProService, tagList } from "@/config/data/servicesData";
import { LuInfo } from "react-icons/lu";

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = (link: string) => {
    navigate(`/services/${link}`);
  };

  return (
    <section id="services" className="container py-14">
      <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  font-bold text-center mb-4">
        Nos services
      </h2>

      <p className="text-xl leading-8 text-black/80 dark:text-white text-center mb-8 mx-auto max-w-4xl">
        Découvrez nos services conçus pour répondre aux besoins spécifiques de
        votre entreprise. Chaque service est conçu avec une attention
        particulière aux détails et à l'efficacité.
      </p>

      <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {serviceList.map(({ title, description, link, pro }) => {
          return (
            <Card
              key={title}
              className="relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-2xl border border-primary p-6 text-primary dark:text-white min-h-[400px] shadow-lg"
            >
              <div className="flex-grow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-semibold mb-4">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {description.map((desc, index) => (
                    <p
                      key={index}
                      className="text-base text-center leading-relaxed text-black/70 dark:text-white"
                    >
                      {desc}
                    </p>
                  ))}
                </CardContent>
              </div>
              <div className="flex justify-center mb-4">
                <CardFooter className="flex justify-center mt-6">
                  <PrimaryButton
                    variant="primary"
                    onClick={() => handleLearnMoreClick(link)}
                  >
                    <LuInfo className="mr-2 h-6 w-6" />
                    En Savoir Plus
                  </PrimaryButton>
                </CardFooter>
              </div>
              {pro === ProService.YES && (
                <Badge
                  variant="secondary"
                  className="absolute top-2 right-2 bg-primary text-card"
                >
                  PRO
                </Badge>
              )}
            </Card>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {tagList.map((tag: string) => (
          <div key={tag}>
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-primary text-white rounded-lg shadow-md"
            >
              {tag}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
};
