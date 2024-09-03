import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeedbackForm } from "./FeedbackForm";
import { PrimaryButton } from "@/components/shared";
import { FaCommentDots } from "react-icons/fa";

interface FeedbackAddModalProps {
  onTestimonialAdded: () => void;
}

export const FeedbackAddModal: React.FC<FeedbackAddModalProps> = ({
  onTestimonialAdded,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <PrimaryButton variant="primary" onClick={handleOpen}>
          <FaCommentDots className="mr-2 h-6 w-6" />
          Laisser un Avis ou une Recommandation
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-primary">
            Laisser un Avis ou une Recommandation
          </DialogTitle>
          <DialogDescription className="text-center mx-auto max-w-md">
            Merci pour votre confiance. Nous espérons que vous êtes satisfait de
            notre travail.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm
          onSubmit={onTestimonialAdded}
          closeModal={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
