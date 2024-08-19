"use client";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export const Step3SupplementalInfo = () => {
  const { control } = useFormContext(); // Obtenez le contrôle du formulaire

  return (
    <FormField
      control={control}
      name="supplementalInfo"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Détails supplémentaires</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Entrez les détails supplémentaires ici..."
              {...field} // Connecter le Textarea avec le formulaire
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
