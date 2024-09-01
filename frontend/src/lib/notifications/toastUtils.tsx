// lib/notifications/toastUtils.tsx
import { toast } from "sonner";
import { MdCheckCircle, MdError } from "react-icons/md";

// Définir un type pour les messages de toast
type ToastType = "success" | "error";

// Fonction utilitaire générique pour afficher les toasts
export const showToast = (type: ToastType, message: string) => {
  const IconComponent = type === "success" ? MdCheckCircle : MdError;
  const colorClass = type === "success" ? "text-green-500" : "text-red-500";

  toast("", {
    description: (
      <div className="flex items-center">
        <IconComponent className={`mr-2 ${colorClass}`} />
        <span>{message}</span>
      </div>
    ),
  });
};
