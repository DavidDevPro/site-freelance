// src/components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrimaryButton } from "@/components/shared";

// Importer les données de FAQ
import { FAQList, FAQProps } from "@/config/data/faqData";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative xl:container py-14 px-3 sm:px-6 transition-p ease duration-200 "
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
        Questions Fréquentes
      </h2>
      <h3 className="mx-auto lg:w-10/12 pb-8 text-center text-secondary font-medium text-base md:text-lg lg:text-xl transition-text ease duration-300  dark:text-white">
        Besoin d'éclaircissements ? Parcourez mes réponses aux questions les
        plus posées pour mieux comprendre mes offres et profiter pleinement de
        mes services.
      </h3>
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="shadow"></div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-card border border-primary px-3 sm:px-6 pb-6 lg:py-10 rounded-xl shadow-lg "
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-b-primary lg:w-10/12 mx-auto "
          >
            <AccordionTrigger
              className="text-secondary py-4 text-lg "
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

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center py-4 mt-10">
        <h3 className=" text-secondary font-medium text-base md:text-lg lg:text-xl transition-text ease duration-300">
          Vous avez encore des questions ?
        </h3>
        <PrimaryButton>
          <Link to="/contact" className="flex py-4">
            <FaEnvelopeCircleCheck className="mr-2 h-5 w-5 shrink-0" />
            Me contacter
          </Link>
        </PrimaryButton>
      </div>
    </section>
  );
};
