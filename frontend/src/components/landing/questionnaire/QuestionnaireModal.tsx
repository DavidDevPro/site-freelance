import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { StyledButton } from "@/components/StyledButton";
import QuestionnairePage from "@/components/landing/questionnaire/QuestionnairePage";
interface Formula {
  name: string;
  options: string[];
}
export const QuestionnaireModal: React.FC<{ dataFormulas: Formula[] }> = ({
  dataFormulas,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <StyledButton variant="primary" onClick={handleOpen}>
          Demander un devis personnalisé
        </StyledButton>
      </DialogTrigger>
      <DialogContent className="max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto p-6 bg-white rounded-md shadow-md w-full">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl font-bold text-center">
            Demande de devis personnalisé
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-center">
            Veuillez suivre les étapes ci-dessous pour nous fournir les
            informations nécessaires.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[80vh]">
          {" "}
          {/* Gérer le défilement sur les petits écrans */}
          <QuestionnairePage dataFormulas={dataFormulas} />
        </div>
        <DialogClose asChild>
          <StyledButton
            variant="secondary"
            className="mt-4 w-full md:w-auto mx-auto"
            onClick={handleClose}
          >
            Fermer
          </StyledButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
