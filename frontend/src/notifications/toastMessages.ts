// notifications/toastMessages.ts

import { showToast } from "@/lib/notifications/toastUtils";

// Fonctions spécifiques pour les toasts
export const showMessageSuccess = () => {
  
  
  showToast("success", "Votre message a été envoyé avec succès !");
};

export const showMessageError = () => {
  showToast("error", "Erreur lors de l'envoi du message.");
};

export const showProposalSuccess = () => {
  showToast("success", "Votre demande de devis a été soumise avec succès !");
};

export const showProposalError = () => {
  showToast("error", "Une erreur s'est produite lors de la soumission de votre demande.");
};

export const showTestimonialSuccess = () => {
  showToast("success", "Le témoignage a été ajouté avec succès !");
};

export const showTestimonialError = () => {
  showToast("error", "Erreur lors de l'ajout du témoignage.");
};
