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
      <DialogContent
        className=" mx-auto w-11/12 p-2 md:p-6 bg-white rounded-md shadow-md 
       flex flex-col"
      >
        <DialogHeader>
          <DialogTitle>Laisser un Avis ou une Recommandation</DialogTitle>
          <DialogDescription>
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
