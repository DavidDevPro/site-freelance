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
  dataFormulas: Array<{ name: string }>;
  onSelectFormula: (formula: string) => void; // Ajout de la prop pour sélectionner la formule
}

export const Step1Formule: React.FC<Step1FormuleProps> = ({
  setCurrentStep,
  dataFormulas,
  onSelectFormula,
}) => {
  const { control } = useFormContext(); // Obtenir le contrôle du formulaire

  const handleChange = (value: string) => {
    onSelectFormula(value); // Appeler la fonction pour stocker la formule sélectionnée
    if (value === "Prendre un rendez-vous") {
      setCurrentStep(4); // Passer directement à l'étape du calendrier
    } else {
      setCurrentStep(1); // Passer à l'étape suivante
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
                {dataFormulas.map((pkg, index) => (
                  <SelectItem key={index} value={pkg.name}>
                    {pkg.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
