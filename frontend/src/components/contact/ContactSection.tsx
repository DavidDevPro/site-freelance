// components/contact/ContactSection.tsx
import React from "react";
import { ContactForm } from "@/components/contact";
import { logo } from "@/assets/images";
import { GoogleCalendarModal, SocialIcons } from "@/components/shared";
import { contactInfo } from "@/config/data/contactAndLegalData";
import { Separator } from "@/components/ui";

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-card p-4 lg:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-stretch space-y-8 lg:space-y-0 relative z-10">
      <div className="w-full lg:w-1/2 space-y-4 flex gap-2 flex-col">
        <h2 className="text-2xl font-bold text-center text-primary">
          Discutons ! ! !
        </h2>
        <p className="text-muted-foreground text-center">
          {`Vous avez une grande idée ou une marque à développer et avez besoin d'aide ? Alors contactez-nous, nous serions ravis d'en entendre parler et de vous aider.`}
        </p>
        <div className="text-center">
          {/* Utilisez une balise img standard */}
          <img
            src={logo}
            alt="Votre Photo"
            className="rounded-full w-36 h-36 object-cover mx-auto mb-4"
            width={128}
            height={128}
          />
        </div>
        {/* Utilisation de la boucle pour générer les détails de contact */}
        <div className="flex justify-center items-center w-full">
          <div className="bg-background shadow-xl rounded-2xl p-4 flex flex-col w-11/12 sm:w-10/12 space-y-4">
            {contactInfo.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center flex-col justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-primary shrink-0" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-center md:text-lg text-muted-foreground">
                      {detail.text}
                    </span>
                    {detail.text2 && (
                      <span className="text-center md:text-base text-muted-foreground">
                        {detail.text2}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-center">
            Retrouvez-moi sur les réseaux sociaux
          </h3>
          <SocialIcons
            iconSize="w-6 h-6 shrink-0"
            spaceBetween="space-x-4"
            containerClassName="mt-2 flex justify-center"
            align="left"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-center">{`Besoin d'un échange téléphonique ?`}</h3>
          <GoogleCalendarModal />
        </div>
      </div>

      {/* Séparateur entre les deux colonnes */}
      <div className="hidden lg:block w-px bg-primary mx-4"></div>
      <Separator className="bg-primary lg:hidden w-10/12 mx-auto" />

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center text-primary">
          Formulaire de contact
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};
