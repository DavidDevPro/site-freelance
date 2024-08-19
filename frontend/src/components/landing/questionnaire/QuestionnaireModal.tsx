// components/QuestionnaireModal.tsx
"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { StyledButton } from '@/components/StyledButton';
import QuestionnairePage from './QuestionnairePage'; // Assurez-vous que le chemin est correct

export const QuestionnaireModal: React.FC = () => {
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
      <DialogContent className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Demande de devis personnalisé</DialogTitle>
          <DialogDescription className="text-center">
            Veuillez suivre les étapes ci-dessous pour nous fournir les informations nécessaires.
          </DialogDescription>
        </DialogHeader>
        <QuestionnairePage />
        <DialogClose asChild>
          <StyledButton variant="secondary" className="mt-4" onClick={handleClose}>
            Fermer
          </StyledButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
