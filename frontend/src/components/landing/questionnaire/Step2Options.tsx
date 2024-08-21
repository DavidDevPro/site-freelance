import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface Step2OptionsProps {
  selectedFormula: string | null;
  dataFormulas: Array<{ name: string; options: string[] }>;
}

export const Step2Options: React.FC<{
  addPages: boolean;
  setAddPages: React.Dispatch<React.SetStateAction<boolean>>;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  selectedFormula: string | null;
  dataFormulas: Step2OptionsProps["dataFormulas"];
}> = ({
  addPages,
  setAddPages,
  pageCount,
  setPageCount,
  selectedFormula,
  dataFormulas,
}) => {
  const { control, setValue } = useFormContext();

  // Trouver les options de la formule sélectionnée
  const formula = dataFormulas.find((f) => f.name === selectedFormula);

  if (!formula) {
    return <div>Aucune formule sélectionnée.</div>;
  }

  const handleCheckboxChange = (option: string, checked: CheckedState) => {
    if (option === "Ajout de pages supplémentaires") {
      setAddPages(checked === true);
    }
    setValue(option, checked === true); // Mettre à jour la valeur du champ dans react-hook-form
  };

  return (
    <>
      {formula.options.map((option, index) => (
        <div key={index}>
          <FormField
            control={control}
            name={option} // Utiliser le nom de l'option comme clé
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0 space-x-2 mt-4">
                <FormControl>
                  <Checkbox
                    checked={field.value || false} // Récupérer la valeur depuis react-hook-form
                    onCheckedChange={(checked) => {
                      field.onChange(checked); // Mettre à jour le champ dans react-hook-form
                      handleCheckboxChange(option, checked);
                    }}
                  />
                </FormControl>
                <FormLabel className="leading-none">{option}</FormLabel>
              </FormItem>
            )}
          />
          {option === "Ajout de pages supplémentaires" && addPages && (
            <FormField
              control={control}
              name="pageCount"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Nombre de pages supplémentaires</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value || pageCount} // Récupérer la valeur depuis react-hook-form
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        field.onChange(value);
                        setPageCount(value);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          )}
        </div>
      ))}
    </>
  );
};
