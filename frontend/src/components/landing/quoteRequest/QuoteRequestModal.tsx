import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuoteRequestForm } from "@/components/landing/quoteRequest";
import { useForm } from "react-hook-form";
import { FiFileText } from "react-icons/fi";
import { PrimaryButton } from "@/components/shared";

interface Option {
  name: string;
  description?: string;
}

interface Formula {
  name: string;
  options: Option[];
}

interface QuoteRequestModalProps {
  dataFormulas: Formula[];
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  dataFormulas,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm(); // Initialise useForm ici pour pouvoir utiliser reset

  const handleOpen = () => setIsOpen(true);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      methods.reset(); // Réinitialiser le formulaire lors de la fermeture
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <PrimaryButton onClick={handleOpen}>
          <FiFileText className="h-5 w-5 mr-2" />
          Demander un devis personnalisé
        </PrimaryButton>
      </DialogTrigger>

      <DialogContent
        className="max-w-full mx-auto w-11/12 p-2 md:p-6 bg-white rounded-md shadow-md lg:max-w-5xl 2xl:max-w-6xl max-h-full
      sm:max-h-[70vh] md:max-h-[80vh] lg:max-h-[85vh] xl:max-h-[80vh]  2xl:max-h-[90vh] flex flex-col"
      >
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl lg:text-2xl font-bold text-center text-primary">
            Demande de devis personnalisé
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base lg:text-lg text-center">
            Veuillez suivre les étapes ci-dessous pour nous fournir les
            informations nécessaires.
          </DialogDescription>
        </DialogHeader>

        {/* Le contenu du modal */}
        <div className="flex-grow overflow-y-auto">
          <QuoteRequestForm
            dataFormulas={dataFormulas}
            closeModal={() => setIsOpen(false)}
            methods={methods}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};