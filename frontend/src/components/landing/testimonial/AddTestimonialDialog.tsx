import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import TestimonialForm from "./TestimonialForm";

import { StyledButton } from "@/components/StyledButton";

interface AddTestimonialDialogProps {
  onTestimonialAdded: () => void;
}

const AddTestimonialDialog: React.FC<AddTestimonialDialogProps> = ({
  onTestimonialAdded,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <StyledButton onClick={handleOpen}>Ajouter un témoignage</StyledButton>
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Ajouter un témoignage
          </DialogTitle>
          <DialogDescription>
            Merci pour votre confiance. Nous espérons que vous êtes satisfait de
            notre travail.
          </DialogDescription>
        </DialogHeader>
        <TestimonialForm
          onSubmit={onTestimonialAdded}
          closeModal={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonialDialog;
