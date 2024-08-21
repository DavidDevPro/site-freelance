import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const MAX_CHAR_COUNT = 2000;
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export const Step3SupplementalInfo = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const [charCount, setCharCount] = useState(0);
  const [fileInputs, setFileInputs] = useState<(File | null)[]>([
    null,
    null,
    null,
  ]);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [visibleInputs, setVisibleInputs] = useState<number>(1); // Suivi du nombre d'inputs visibles

  const supplementalInfo = watch("supplementalInfo", "");

  useEffect(() => {
    setCharCount(supplementalInfo.length);
  }, [supplementalInfo]);

  const handleFileChange = (index: number, file: File | null) => {
    const newFileInputs = [...fileInputs];
    const newFileErrors = [...fileErrors];

    if (file) {
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        newFileErrors[
          index
        ] = `Type de fichier non supporté. Types acceptés: .jpg, .jpeg, .png, .doc, .docx, .pdf, .xls, .xlsx`;
      } else if (file.size > MAX_FILE_SIZE) {
        newFileErrors[index] = `Le fichier dépasse la taille maximale de 3 Mo.`;
      } else {
        newFileErrors[index] = "";
      }
      newFileInputs[index] = file;
    } else {
      newFileInputs[index] = null;
      newFileErrors[index] = "";
    }

    setFileInputs(newFileInputs);
    setFileErrors(newFileErrors);

    // Réinitialiser la valeur de l'input file
    if (!file) {
      const inputElement = document.getElementById(
        `fileInput${index}`
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = "";
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    handleFileChange(index, null);
  };

  const handleAddInput = () => {
    setVisibleInputs(visibleInputs + 1);
  };

  return (
    <div>
      <FormField
        control={control}
        name="supplementalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Détails supplémentaires</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Entrez les détails supplémentaires ici..."
                {...field}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_CHAR_COUNT) {
                    field.onChange(e);
                    setCharCount(e.target.value.length);
                  }
                }}
              />
            </FormControl>
            <div className="text-left text-sm text-gray-500">
              {charCount}/{MAX_CHAR_COUNT} caractères
            </div>
            {errors.supplementalInfo && (
              <p className="text-red-500">
                {String(errors.supplementalInfo.message)}
              </p>
            )}
          </FormItem>
        )}
      />
      <div className="border-t border-gray-300 my-6"></div>{" "}
      {/* Séparation entre la saisie du texte et les documents */}
      <div className="mt-6">
        <FormLabel>Ajouter des documents (maximum 3)</FormLabel>

        {[0, 1, 2].map(
          (index) =>
            index < visibleInputs && (
              <FormItem key={index} className="mt-4">
                <FormLabel>Document {index + 1}</FormLabel>
                <FormControl>
                  <Input
                    id={`fileInput${index}`}
                    type="file"
                    accept=".jpg,.jpeg,.png,.doc,.docx,.pdf,.xls,.xlsx"
                    onChange={(e) => {
                      handleFileChange(
                        index,
                        e.target.files ? e.target.files[0] : null
                      );
                    }}
                    className="cursor-pointer"
                  />
                </FormControl>
                {fileInputs[index] && (
                  <div className="mt-2 flex items-center justify-between border border-gray-300 rounded-lg p-2 bg-gray-50">
                    <span className="text-sm text-gray-500">
                      {fileInputs[index]?.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <MdClose className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {fileErrors[index] && (
                  <div className="text-red-500 text-sm mt-1">
                    {fileErrors[index]}
                  </div>
                )}
              </FormItem>
            )
        )}

        {visibleInputs < 3 && (
          <button
            type="button"
            onClick={handleAddInput}
            className="mt-4 flex items-center text-blue-500 hover:text-blue-700"
          >
            <FaPlus className="mr-2" /> Ajouter un autre document
          </button>
        )}
      </div>
    </div>
  );
};
