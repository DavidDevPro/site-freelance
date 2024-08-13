// src/utils/toastUtils.tsx
import { toast } from "sonner";
import { MdCheckCircle, MdError } from "react-icons/md";

// Toast pour le succès de l'envoi du message
export const showMessageSuccess = () => {
  toast("", {
    description: (
      <div className="flex items-center">
        <MdCheckCircle className="mr-2 text-green-500" />
        <span>Votre message a été envoyé avec succès !</span>
      </div>
    ),
  });
};

// Toast pour l'erreur de l'envoi du message
export const showMessageError = () => {
  toast("", {
    description: (
      <div className="flex items-center">
        <MdError className="mr-2 text-red-500" />
        <span>Erreur lors de l'envoi du message.</span>
      </div>
    ),
  });
};

// Toast pour le succès de la création d'un témoignage
export const showTestimonialSuccess = () => {
  toast("", {
    description: (
      <div className="flex items-center">
        <MdCheckCircle className="mr-2 text-green-500" />
        <span>Le témoignage a été ajouté avec succès !</span>
      </div>
    ),
  });
};

// Toast pour l'erreur de la création d'un témoignage
export const showTestimonialError = () => {
  toast("", {
    description: (
      <div className="flex items-center">
        <MdError className="mr-2 text-red-500" />
        <span>Erreur lors de l'ajout du témoignage.</span>
      </div>
    ),
  });
};
