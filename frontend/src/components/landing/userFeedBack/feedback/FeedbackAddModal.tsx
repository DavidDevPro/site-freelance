import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm, FormProvider } from "react-hook-form";
import { FaCommentDots } from 'react-icons/fa';
import { FeedbackForm } from '@/components/landing/userFeedBack';
import { PrimaryButton } from '@/components/shared';

interface FeedbackAddModalProps {
  onTestimonialAdded: () => void;
}

export const FeedbackAddModal: React.FC<FeedbackAddModalProps> = ({ onTestimonialAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm(); // Instanciation du hook useForm

  const handleOpen = () => setIsOpen(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <PrimaryButton
          variant="primary" 
          onClick={handleOpen}
          className='px-2 sm:px-4'
        >
          <FaCommentDots className="mr-2 h-6 w-6 shrink-0" />
          Laisser un Avis ou une Recommandation
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent
        className="max-w-full mx-auto w-11/12 p-2 sm:p-6 bg-card rounded-md shadow-md sm:max-w-lg max-h-full
      sm:max-h-[85vh] flex flex-col"
      >
        <DialogHeader>
          <DialogTitle>Laisser un Avis ou une Recommandation</DialogTitle>
          <DialogDescription>
            Merci pour votre confiance. Nous espérons que vous êtes satisfait de notre travail.
          </DialogDescription>
        </DialogHeader>
        <FormProvider {...methods}>
          <FeedbackForm onSubmit={onTestimonialAdded} closeModal={() => setIsOpen(false)} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
