import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface Step1ChoosePackageProps {
  dataFormulas: Array<{ name: string }>;
  onSelectFormula: (formula: string) => void;
}

export const Step1ChoosePackage: React.FC<Step1ChoosePackageProps> = ({ dataFormulas, onSelectFormula }) => {
  const { control } = useFormContext(); // Obtenir le contrôle du formulaire
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // État pour gérer l'affichage des erreurs

  const handleChange = (value: string) => {
    setErrorMessage(null); // Réinitialiser le message d'erreur une fois une sélection effectuée
    onSelectFormula(value); // Appeler la fonction pour stocker la formule sélectionnée
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
              value={field.value || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisissez une formule" />
              </SelectTrigger>
              <SelectContent>
                {dataFormulas.map((pkg, index) => (
                  <SelectItem key={index} value={pkg.name}
                    className="hover:bg-primary hover:text-card focus:bg-primary focus:text-card">
                    {pkg.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {errorMessage && <FormMessage className="text-red-500">{errorMessage}</FormMessage>}
        </FormItem>
      )}
    />
  );
};
