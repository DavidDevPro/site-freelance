// src/components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrimaryButton } from "@/components/shared";
import { RiMailSendLine } from "react-icons/ri";

// Importer les données de FAQ
import { FAQList, FAQProps } from "@/config/data/faqData";

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
        <PrimaryButton>
          <a rel="noreferrer noopener" href="/contact" className="flex">
            <RiMailSendLine className="mr-2 mt-0.5 h-4 w-4 shrink-0" />
            Contactez-nous
          </a>
        </PrimaryButton>
      </div>
    </section>
  );
};
