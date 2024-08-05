// src/utils/toastUtils.tsx
import { toast } from "sonner";
import { MdCheckCircle, MdError } from "react-icons/md";

export const showToastSuccess = () => {
  toast("", {
    description: (
      <div className="flex items-center">
        <MdCheckCircle className="mr-2 text-green-500" />
        <span>Votre message a été envoyé avec succès !</span>
      </div>
    ),
  });
};

export const showToastError = () => {
  toast("", {
    description: (
      <div className="flex items-center">
        <MdError className="mr-2 text-red-500" />
        <span>Erreur lors de l'envoi du message.</span>
      </div>
    ),
  });
};