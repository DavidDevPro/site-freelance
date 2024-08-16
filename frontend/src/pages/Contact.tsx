import { ContactForm } from "@/components/ContactForm";

import { Mail, Phone, MapPin } from "lucide-react";
import {
  LuLinkedin,
  LuFacebook,
  LuGithub,
  LuTwitter,
  LuInstagram,
} from "react-icons/lu";

import GoogleCalendarButton from "@/components/GoogleCalendarButton";

const ContactPage = () => {
  return (
    <div className="bg-background py-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-foreground">
          Contactez-nous
        </h1>
        <p className="text-center text-muted-foreground mb-4">
          Nous serions ravis de discuter de votre projet. Veuillez remplir le
          formulaire ci-dessous et nous vous répondrons dans les plus brefs
          délais.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-16">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Discutons ! ! !</h2>
            <p className="text-muted-foreground">
              Vous avez une grande idée ou une marque à développer et avez
              besoin d'aide ? Alors contactez-nous, nous serions ravis d'en
              entendre parler et de vous aider.
            </p>

            <div className="flex items-center">
              <Mail className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg text-muted-foreground">
                contact@davidwebprojects.fr
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg text-muted-foreground">
                +33 59 95 68 94
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg text-muted-foreground">
                26760 Beaumont lès Valence, FRANCE
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Retrouvez-moi sur les réseaux sociaux
              </h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/david-changea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuLinkedin className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://github.com/david-backup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://www.facebook.com/DavidWebProjects/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuFacebook className="w-6 h-6 text-primary" />
                </a>

                <a
                  href="https://x.com/DavidWebProject"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuTwitter className="w-6 h-6 text-primary" />
                </a>

                <a
                  href="https://www.instagram.com/davidwebprojects/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuInstagram className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Prenez rendez-vous :{" "}
              </h3>

              <GoogleCalendarButton
                url="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0yEWctaNOFUzuGNlw32_l1AWaEsu8_PosNlN5mb-gwCJ0c5h8aUgmPy2nNdZ6u89wS55ilCBgj?gv=true"
                color="#448FA3"
                label="Réserver un rendez-vous"
                border-radius="15px"
              />
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
