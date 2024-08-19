import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

interface Step1FormuleProps {
  setCurrentStep: (step: number) => void;
}

export const Step1Formule: React.FC<Step1FormuleProps> = ({
  setCurrentStep,
}) => {
  const { control } = useFormContext(); // Obtenir le contrôle du formulaire

  const handleChange = (value: string) => {
    if (value === "RendezVous") {
      setCurrentStep(4); // Passer directement à l'étape du calendrier
    }
  };

  return (
    <FormField
      control={control}
      name="formule"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Formule</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                handleChange(value);
              }}
              value={field.value}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisissez une formule" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Starter">Starter</SelectItem>
                <SelectItem value="Standard">Standard</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
                <SelectItem value="RendezVous">
                  Prendre un rendez-vous
                </SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
