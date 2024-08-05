import { ContactForm } from "@/components/ContactForm";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { LuLinkedin,LuFacebook, LuGithub } from "react-icons/lu";
import { RxDiscordLogo } from "react-icons/rx";
import { cn } from "@/lib/utils";



const ContactPage = () => {
  return (
    <div className="bg-background py-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-foreground">Contactez-nous</h1>
        <p className="text-center text-muted-foreground mb-4">
          Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>
        
        <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-16">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Discutons ! ! !</h2>
            <p className="text-muted-foreground">
              Vous avez une grande idée ou une marque à développer et avez besoin d'aide ? Alors contactez-nous, nous serions ravis d'en entendre parler et de vous aider.
            </p>
            
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg text-muted-foreground">contact@fabwebprojects.fr</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg text-muted-foreground">+33 68 64 12 43</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg text-muted-foreground">31570 Bourg-Saint-Bernard, FRANCE</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Retrouvez-moi sur les réseaux sociaux</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" target="_blank" rel="noopener noreferrer">
                  <LuLinkedin className="w-6 h-6 text-primary" />
                </a>
                <a href="https://github.com/Fabrice-Perso/Fabrice-Perso" target="_blank" rel="noopener noreferrer">
                  <LuGithub  className="w-6 h-6 text-primary" />
                </a>
                <a href="https://www.facebook.com/FabWebProjects/" target="_blank" rel="noopener noreferrer">
                  <LuFacebook className="w-6 h-6 text-primary" />
                </a>
                
                <a href="https://discord.gg/eJmTCeZy" target="_blank" rel="noopener noreferrer">
                  <RxDiscordLogo className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Prenez rendez-vous</h3>
              <a
                href="https://calendar.app.google/JGYFvuLnpmWCxmCH8"
                target="_blank" rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "default",
                    }),
                    "text-white px-6 text-sm font-semibold tracking-tighter transition-all ease-out hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
                  )}
                >
                  Via Google Agenda
                </Button>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <ContactForm />
          </div>
          
        </div>
        
      </div>      
    </div>
  );
};

export default ContactPage;