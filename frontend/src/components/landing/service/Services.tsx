import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisez 'useNavigate' de 'react-router-dom' pour la navigation
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui";
import { PrimaryButton } from "@/components/shared";
import { serviceList, ProService, tagList } from "@/config/data/servicesData";
import { LuInfo } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Separator } from "@/components/ui";
import { FaAngleDoubleRight } from "react-icons/fa";

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
    <section
      id="services"
      className="xl:container pt-24 pb-4 px-3 sm:px-6 transition-p ease duration-200"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
        Mes Services
      </h2>
      <h3 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300">
        {`Explorez ma gamme de services, spécialement conçue pour répondre aux exigences uniques de votre entreprise. Chaque prestation est minutieusement élaborée pour garantir un niveau de détail et d'efficacité optimal.`}
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
                className="bg-card dark:bg-card border border-primary group flex flex-col justify-between min-h-[300px]  shadow-lg rounded-xl relative overflow-hidden"
              >
                <div>
                  <CardHeader className="flex flex-col items-center mb-4">
                    <CardTitle className="text-center text-primary mt-4 text-2xl font-bold">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-left space-y-2 text-lg dark:text-card">
                    {description.map((desc, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-primary">
                          <FaAngleDoubleRight className="h-4 w-4 mt-1 shrink-0" />
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
                {pro === ProService.YES && <Badge variant="default">PRO</Badge>}
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
            <Badge variant="secondary">{tag}</Badge>
          </div>
        ))}
      </div>
      <Separator className="mt-10 h-0.5 w-1/2 mx-auto bg-primary " />
    </section>
  );
};
