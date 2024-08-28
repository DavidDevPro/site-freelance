import { Footer } from "@/components/Footer";
import { BiSolidUserRectangle } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsImages, BsInfoSquareFill } from "react-icons/bs";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcase,
  FaServer,
  FaShieldAlt,
  FaGavel,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Mentions = () => {
  return (
    <>
      <section className="bg-gray-50 text-gray-800 flex flex-col px-6 py-14 md:px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Mentions Légales
          </h1>

          {/* Partie Informations Légales */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <BsInfoSquareFill className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">Informations Légales</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaHome className="text-primary h-6 w-6" />
                <div>
                  <h3 className="text-lg font-semibold">Raison Sociale :</h3>
                  <p className="text-base text-neutral-700">
                    David Web Projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BiSolidUserRectangle className="text-primary h-6 w-6" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Représentant Légal :
                  </h3>
                  <p className="text-base text-neutral-700">CHANGEA David</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaBriefcase className="text-primary h-6 w-6" />
                <div>
                  <h3 className="text-lg font-semibold">SIRET :</h3>
                  <p className="text-base text-neutral-700">80219689900024</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary h-6 w-6" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Adresse du Siège Social :
                  </h3>
                  <p className="text-base text-neutral-700">
                    3 place Helene Grail, 26760 Beaumont Lès Valence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partie Contact */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <MdContactMail className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">Contact</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-primary h-6 w-6" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Numéro de Téléphone :
                  </h3>
                  <p className="text-base text-neutral-700">
                    <a
                      href="tel:+33659956894"
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      +33 6 59 95 68 94
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary h-6 w-6" />
                <div>
                  <h3 className="text-lg font-semibold">Email :</h3>
                  <p className="text-base text-neutral-700">
                    <a
                      href="mailto:contact@davidwebprojects.fr"
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      contact@davidwebprojects.fr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partie Activité */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <TbDeviceAnalytics className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">Activité</h2>
            </div>
            <p className="text-base text-neutral-700">
              Développeur web freelance spécialisé dans la création et la
              refonte de sites web, l'optimisation SEO, l'amélioration des
              performances et l'hébergement de sites web.
            </p>
          </div>

          {/* Partie Hébergement */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <FaServer className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">Hébergement</h2>
            </div>
            <p className="text-base text-neutral-700">
              Les sites développés par David Web Projects sont hébergés par
              différents fournisseurs en fonction des besoins du client.
            </p>
          </div>

          {/* Partie Propriété Intellectuelle */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <BsImages className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">
                Propriété Intellectuelle
              </h2>
            </div>
            <p className="text-base text-neutral-700">
              Le contenu de ce site web (textes, images, codes, etc.) est la
              propriété exclusive de David Web Projects. Toute reproduction ou
              distribution, même partielle, est strictement interdite sans
              autorisation préalable.
            </p>
          </div>

          {/* Partie Limitation de responsabilité */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <FaGavel className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">
                Limitation de Responsabilité
              </h2>
            </div>
            <p className="text-base text-neutral-700">
              David Web Projects met tout en œuvre pour assurer la précision des
              informations présentes sur ce site. Toutefois, aucune garantie
              n'est donnée quant à leur exactitude ou à l'exhaustivité. La
              société ne pourra être tenue responsable des erreurs ou omissions
              dans les informations fournies.
            </p>
          </div>

          {/* Partie Politique de Confidentialité */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-8 text-neutral-800">
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-primary h-8 w-8" />
              <h2 className="text-2xl font-semibold">
                Politique de Confidentialité
              </h2>
            </div>
            <p className="text-base text-neutral-700">
              David Web Projects respecte votre vie privée et s'engage à
              protéger vos données personnelles conformément à la législation en
              vigueur. Pour plus d'informations, veuillez consulter notre{" "}
              <a
                href="/politique-de-confidentialite"
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mentions;
