"use client";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

export const Step2Options: React.FC<{
  addPages: boolean;
  setAddPages: React.Dispatch<React.SetStateAction<boolean>>;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ addPages, setAddPages, pageCount, setPageCount }) => {
  const { control } = useFormContext(); // Obtenez le contrôle du formulaire

  const handleCheckboxChange = (checked: CheckedState) => {
    setAddPages(checked === true);
  };

  return (
    <>
      <FormField
        control={control}
        name="addPages"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                checked={addPages}
                onCheckedChange={handleCheckboxChange}
              />
            </FormControl>
            <FormLabel className="leading-none">Ajout de pages supplémentaires</FormLabel>
          </FormItem>
        )}
      />

      {addPages && (
        <FormField
          control={control}
          name="pageCount"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Nombre de pages supplémentaires</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={pageCount}
                  onChange={(e) => setPageCount(parseInt(e.target.value))}
                />
              </FormControl>
            </FormItem>
          )}
        />
      )}

      <FormField
        control={control}
        name="specificFeatures"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2 mt-4">
            <FormControl>
              <Checkbox />
            </FormControl>
            <FormLabel className="leading-none">Fonctionnalités spécifiques</FormLabel>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="basicAPIIntegration"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2 mt-4">
            <FormControl>
              <Checkbox />
            </FormControl>
            <FormLabel className="leading-none">Intégration API basique</FormLabel>
          </FormItem>
        )}
      />
    </>
  );
};
