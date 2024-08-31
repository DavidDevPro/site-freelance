import { CheckIcon } from "@radix-ui/react-icons";
import { PrimaryButton } from "@/components/shared";
import { SiteFooter, SiteHeader } from "@/components/layout";

const EssentielPlanPage = () => {
  return (
    <>
      <SiteHeader />
      <section id="essentiel-package" className="max-w-screen-lg mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Formule Essentiel
          </h2>
          <p className="text-lg text-gray-700">
            L'option idéale pour les sites vitrines et les projets de petites
            envergures.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Détails de la formule :
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h4 className="text-lg font-medium">Type de site : Vitrine</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Un site vitrine conçu pour présenter votre activité ou vos
                  services de manière simple et élégante. Idéal pour ceux qui
                  souhaitent une présence en ligne sans fonctionnalités
                  complexes.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h4 className="text-lg font-medium">
                  Nombre de pages incluses : 3
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Trois pages clés pour structurer l'information de manière
                  concise, comme une page d'accueil, une page de services et une
                  page de contact.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h4 className="text-lg font-medium">
                  Page de contact : Simple
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Un formulaire de contact fonctionnel et sécurisé pour
                  permettre aux visiteurs de vous joindre facilement.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h4 className="text-lg font-medium">SEO : Essentiel</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimisation basique pour les moteurs de recherche, afin de
                  garantir que votre site soit bien indexé et visible sur
                  Google.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h4 className="text-lg font-medium">
                  Cycle(s) de révision : 1
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Une révision gratuite pour ajuster le contenu ou la mise en
                  page après la livraison du site, selon vos retours.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h4 className="text-lg font-medium">Support par : email</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Assistance technique par email pour répondre à vos questions
                  et résoudre d'éventuels problèmes.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">
              Options disponibles :
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Ajout de pages supplémentaires pour étendre votre site.</li>
              <li>
                Référencement Local pour améliorer votre visibilité dans les
                résultats de recherche géolocalisés.
              </li>
              <li>
                Google My Business pour gérer la présence de votre entreprise
                sur Google.
              </li>
              <li>
                Suivi Analytics pour analyser les performances de votre site.
              </li>
              <li>
                Révision des contenus tous les 6 mois pour garantir leur
                pertinence.
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <PrimaryButton variant="primary">
              Retour sur les formules
            </PrimaryButton>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
};
export default EssentielPlanPage;
