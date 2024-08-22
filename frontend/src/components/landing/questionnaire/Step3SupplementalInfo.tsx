import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { uploadTemporaryFile } from "@/services/proposalRequestApi"; // Importer la fonction API
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
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const [charCount, setCharCount] = useState(0);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [visibleInputs, setVisibleInputs] = useState<number>(1); // Suivi du nombre d'inputs visibles

  const supplementalInfo = watch("supplementalInfo", "");

  // Stocker les fichiers et les commentaires dans le formulaire
  const fileInputs = getValues(["fileInput0", "fileInput1", "fileInput2"]);
  const fileNames = getValues(["fileName0", "fileName1", "fileName2"]);
  const fileComments = watch(["fileComment0", "fileComment1", "fileComment2"]);

  useEffect(() => {
    setCharCount(supplementalInfo.length);

    // Déterminer combien d'inputs doivent être visibles en fonction des fichiers déjà présents
    const filledFileInputsCount = fileInputs.filter((file) => file).length;
    setVisibleInputs(filledFileInputsCount > 0 ? filledFileInputsCount + 1 : 1);
  }, [supplementalInfo, fileInputs]);

  const handleFileChange = async (index: number, file: File | null) => {
    const newFileErrors = [...fileErrors];

    if (file) {
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        newFileErrors[index] = `Type de fichier non supporté.`;
      } else if (file.size > MAX_FILE_SIZE) {
        newFileErrors[index] = `Le fichier dépasse la taille maximale de 3 Mo.`;
      } else {
        newFileErrors[index] = "";

        // Télécharger le fichier temporairement
        const formData = new FormData();
        formData.append("file", file);
        try {
          const { filename } = await uploadTemporaryFile(formData);
          // Stocker le nom du fichier temporaire dans le formulaire
          setValue(`fileInput${index}`, filename);
          // Stocker le nom original du fichier
          setValue(`fileName${index}`, file.name);
          // Augmenter le nombre d'inputs visibles si nécessaire
          if (visibleInputs <= index && visibleInputs < 3) {
            setVisibleInputs(visibleInputs + 1);
          }
        } catch {
          newFileErrors[index] = "Erreur lors du téléchargement.";
        }
      }
    } else {
      newFileErrors[index] = "";
      setValue(`fileInput${index}`, ""); // Réinitialiser la valeur dans le formulaire
      setValue(`fileName${index}`, ""); // Réinitialiser le nom du fichier
      setValue(`fileComment${index}`, ""); // Réinitialiser le commentaire correspondant
      // Réduire le nombre d'inputs visibles si aucun fichier n'est présent dans l'input
      if (index + 1 === visibleInputs) {
        setVisibleInputs(visibleInputs - 1);
      }
    }

    setFileErrors(newFileErrors);
  };

  const handleRemoveFile = (index: number) => {
    handleFileChange(index, null);
  };

  const handleAddInput = () => {
    if (visibleInputs < 3) {
      setVisibleInputs(visibleInputs + 1);
    }
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
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <FormLabel>Document {index + 1}</FormLabel>
                    {!fileInputs[index] ? (
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
                    ) : (
                      <div className="mt-2 flex items-center justify-between border border-gray-300 rounded-lg p-2 bg-gray-50">
                        <span className="text-sm text-gray-500">
                          {fileNames[index]}
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
                  </div>
                  <div className="flex-1">
                    <FormLabel>Nom du fichier</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        value={fileComments[index] || ""}
                        onChange={(e) =>
                          setValue(`fileComment${index}`, e.target.value)
                        }
                        placeholder="Définir le nom du fichier"
                      />
                    </FormControl>
                  </div>
                </div>
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
