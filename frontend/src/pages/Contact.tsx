import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  LuLinkedin,
  LuFacebook,
  LuGithub,
  LuTwitter,
  LuInstagram,
} from "react-icons/lu";
import { GoogleCalendarModal } from "@/components/googleCalendar/GoogleCalendarModal";
import { socialLinks } from "@/utils/socialLinks";

import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-background py-4 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <h1 className="text-4xl font-bold mt-8 mb-2 text-center text-foreground">
          Contactez-nous
        </h1>
        <p className="text-center text-muted-foreground mb-4">
          Nous serions ravis de discuter de votre projet. Veuillez remplir le
          formulaire ci-dessous et nous vous répondrons dans les plus brefs
          délais.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col mb-10 md:flex-row items-start space-y-8 md:space-y-0 md:space-x-16">
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
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin icon"
                  title="Linkedin"
                >
                  <LuLinkedin className="w-6 h-6 text-primary hover:text-gray-600" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github icon"
                  title="Github"
                >
                  <LuGithub className="w-6 h-6 text-primary hover:text-gray-600" />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook icon"
                  title="Facebook"
                >
                  <LuFacebook className="w-6 h-6 text-primary hover:text-gray-600" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter icon"
                  title="Twitter"
                >
                  <LuTwitter className="w-6 h-6 text-primary hover:text-gray-600" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram icon"
                  title="Instagram"
                >
                  <LuInstagram className="w-6 h-6 text-primary hover:text-gray-600" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{`Besoin d'un échange téléphonique ?`}</h3>
              <GoogleCalendarModal />
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer en bas de la page avec flexbox */}
      <div className="bg-white w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
