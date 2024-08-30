import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StyledButton } from "../shared/StyledButton";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Quels sont vos services de développement web sur mesure ?",
    answer:
      "Je propose la création de sites web sur mesure, optimisés pour les performances, le SEO, et l'accessibilité, en suivant les meilleures pratiques du développement moderne.",
    value: "item-1",
  },
  {
    question: "Offrez-vous des services d'optimisation SEO ?",
    answer:
      "Oui, chaque site que je développe inclut une stratégie SEO pour améliorer votre visibilité sur les moteurs de recherche et attirer plus de visiteurs qualifiés.",
    value: "item-2",
  },
  {
    question: "Travaillez-vous en méthode agile avec des réunions régulières ?",
    answer:
      "Absolument. J'utilise la méthode agile pour rester aligné sur vos besoins, avec des réunions régulières pour ajuster le projet en fonction de vos retours.",
    value: "item-3",
  },
  {
    question: "Quelles sont vos pratiques pour garantir l'accessibilité ?",
    answer:
      "Tous mes projets respectent les standards d'accessibilité web (WCAG) pour garantir que vos sites soient utilisables par tous, y compris les personnes en situation de handicap.",
    value: "item-4",
  },
  {
    question: "Proposez-vous des services d'hébergement et de maintenance ?",
    answer:
      "Oui, je propose des solutions d'hébergement performantes et une maintenance régulière pour assurer que votre site reste sécurisé et à jour.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  text-center font-bold mb-4">
        Questions Fréquentes
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-b border-muted-foreground"
          >
            <AccordionTrigger
              className="text-left font-semibold text-lg py-4"
              aria-expanded="false"
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-4">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex items-center justify-center space-x-6 mt-10">
        <p className="font-medium">Vous avez encore des questions ?</p>
        <StyledButton>
          <a rel="noreferrer noopener" href="#" className="">
            Contactez-moi
          </a>
        </StyledButton>
      </div>
    </section>
  );
};
