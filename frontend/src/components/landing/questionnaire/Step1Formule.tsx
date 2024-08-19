"use client";

import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useFormContext } from "react-hook-form";

export const Step1Formule = () => {
  const { control } = useFormContext(); // Obtenir le contrôle du formulaire

  return (
    <FormField
      control={control}
      name="formule"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Formule</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Choisissez une formule" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Starter">Starter</SelectItem>
                <SelectItem value="Standard">Standard</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
