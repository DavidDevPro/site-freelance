import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisez 'useNavigate' de 'react-router-dom' pour la navigation
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/shared";
import { serviceList, ProService, tagList } from "@/config/data/servicesData";
import { LuInfo } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export const Services: React.FC = () => {
  const navigate = useNavigate(); // Utilisez 'useNavigate' pour gérer la redirection
  const [visibleRows, setVisibleRows] = useState(1);

  const handleLearnMoreClick = (link: string) => {
    navigate(`/services/${link}`); // Utilisez 'navigate' pour rediriger l'utilisateur
  };

  const handleShowMore = () => {
    setVisibleRows(visibleRows + 1);
  };

  const handleShowLess = () => {
    setVisibleRows(1);
  };

  const itemsPerRow = 3;
  const itemsToShow = visibleRows * itemsPerRow;

  return (
    <section id="services" className="container lg:px-0 py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Nos Services
      </h2>
      <h3 className="md:w-10/12 mx-auto text-xl text-center text-muted-foreground mb-8">
        {`Découvrez nos services conçus pour répondre aux besoins spécifiques de votre entreprise. Chaque service est conçu avec une attention particulière aux détails et à l'efficacité.`}
      </h3>

      <div className="grid lg:grid-cols-3 w-full sm:w-10/12 gap-6 lg:gap-6 lg:w-[95%] mx-auto relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="shadow"></div>
        </div>
        {serviceList
          .slice(0, itemsToShow)
          .map(({ title, description, link, pro }) => {
            return (
              <Card
                key={title}
                className="bg-card dark:bg-card border border-primary group flex flex-col justify-between min-h-[300px]  shadow-lg rounded-xl"
              >
                <div>
                  <CardHeader className="flex flex-col items-center mb-4">
                    <CardTitle className="text-center text-primary mt-4 text-2xl font-semibold">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-left space-y-2">
                    {description.map((desc, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-primary">
                          <RiCheckboxBlankCircleFill className="h-4 w-4 mt-1 shrink-0" />
                        </span>
                        <p className="break-words">{desc}</p>
                      </div>
                    ))}
                  </CardContent>
                </div>
                <CardFooter className="flex justify-center mt-auto">
                  <PrimaryButton
                    variant="primary"
                    onClick={() => handleLearnMoreClick(link)}
                  >
                    <LuInfo className="mr-2 h-6 w-6 shrink-0" />
                    En savoir plus
                  </PrimaryButton>
                </CardFooter>
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
      <div className="flex justify-center mt-8 space-x-4">
        {itemsToShow < serviceList.length && (
          <PrimaryButton variant="secondary" onClick={handleShowMore}>
            <IoIosArrowDown className="mr-2 h-5 w-5 shrink-0" />
            Afficher plus
          </PrimaryButton>
        )}
        {visibleRows > 1 && (
          <PrimaryButton variant="secondary" onClick={handleShowLess}>
            <IoIosArrowUp className="mr-2 h-5 w-5 shrink-0" />
            Afficher moins
          </PrimaryButton>
        )}
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
