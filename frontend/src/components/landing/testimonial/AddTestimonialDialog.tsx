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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TestimonialForm from "./TestimonialForm";
import { buttonVariants } from "@/components/ui/button";

interface AddTestimonialDialogProps {
  onTestimonialAdded: () => void;
}

const AddTestimonialDialog: React.FC<AddTestimonialDialogProps> = ({
  onTestimonialAdded,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "default",
            }),
            "text-white px-6 text-sm font-semibold tracking-tighter transition-all ease-out hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50 "
          )}
          onClick={handleOpen}
        >
          Ajouter un témoignage
        </Button>
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
        <TestimonialForm onSubmit={onTestimonialAdded} onClose={handleClose} />
        <DialogClose onClick={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTestimonialDialog;
