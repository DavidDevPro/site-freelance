import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarIframe, PrimaryButton } from "@/components/shared";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SiGooglecalendar } from "react-icons/si";

export const GoogleCalendarModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <PrimaryButton>
          <SiGooglecalendar className="mr-2 h-6 w-6 shrink-0" />
          Prendre un rendez-vous
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent
        className="max-w-full mx-auto w-11/12 p-2 md:p-6 bg-card rounded-md shadow-md lg:max-w-5xl 2xl:max-w-6xl max-h-full
      sm:max-h-[70vh] md:max-h-[80vh] lg:max-h-[85vh] xl:max-h-[80vh]  2xl:max-h-[90vh] flex flex-col"
      >
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg md:text-xl font-bold text-center text-primary">
            Prendre un rendez-vous
          </DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        {/* Utilisation de votre composant CalendarIframe */}
        <div className="flex-grow overflow-y-auto">
          <CalendarIframe />
        </div>
      </DialogContent>
    </Dialog>
  );
};
