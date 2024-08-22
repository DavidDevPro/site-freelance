import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionnairePage from "./QuestionnairePage";
import { StyledButton } from "@/components/StyledButton";

interface Formula {
  name: string;
  options: string[];
}

interface QuestionnaireModalProps {
  dataFormulas: Formula[];
}

export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  dataFormulas,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <StyledButton onClick={handleOpen}>
          Demander un devis personnalisé
        </StyledButton>
      </DialogTrigger>
      <DialogContent
        className="max-w-full mx-auto p-6 bg-white rounded-md shadow-md w-full
        xl:max-w-5xl 2xl:max-w-6xl xl:max-h-[80vh] 2xl:max-h-[90vh] flex flex-col"
      >
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl font-bold text-center">
            Demande de devis personnalisé
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-center">
            Veuillez suivre les étapes ci-dessous pour nous fournir les
            informations nécessaires.
          </DialogDescription>
        </DialogHeader>

        {/* Le contenu du modal */}
        <div className="flex-grow overflow-y-auto">
          <QuestionnairePage dataFormulas={dataFormulas} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
