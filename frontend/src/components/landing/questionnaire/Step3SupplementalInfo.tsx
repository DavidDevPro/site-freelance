import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { uploadTemporaryFile } from '@/services/proposalRequestApi'; // Importer la fonction API
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MdClose } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { validateFileName } from "@/utils/utils";

const MAX_CHAR_COUNT = 2000;
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

export const Step3SupplementalInfo = () => {
  const { control, watch, setValue, getValues, formState: { errors }, clearErrors, setError, trigger } = useFormContext();
  const [charCount, setCharCount] = useState(0);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [visibleInputs, setVisibleInputs] = useState<number>(1);

  const supplementalInfo = watch("supplementalInfo", "");
  const fileInputs = getValues(["fileInput0", "fileInput1", "fileInput2"]);
  const fileNames = getValues(["fileName0", "fileName1", "fileName2"]);
  const fileComments = watch(["fileComment0", "fileComment1", "fileComment2"]);

  useEffect(() => {
    setCharCount(supplementalInfo.length);
    const filledFileInputsCount = fileInputs.filter(file => file).length;
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
        newFileErrors[index] = '';

        const formData = new FormData();
        formData.append('file', file);
        try {
          const { filename } = await uploadTemporaryFile(formData);
          setValue(`fileInput${index}`, filename);
          setValue(`fileName${index}`, file.name);
          if (visibleInputs <= index && visibleInputs < 3) {
            setVisibleInputs(visibleInputs + 1);
          }
        } catch {
          newFileErrors[index] = 'Erreur lors du téléchargement.';
        }
      }
    } else {
      newFileErrors[index] = '';
      setValue(`fileInput${index}`, '');
      setValue(`fileName${index}`, '');
      setValue(`fileComment${index}`, '');
      clearErrors(`fileComment${index}`);
      if (index + 1 === visibleInputs) {
        setVisibleInputs(visibleInputs - 1);
      }
    }

    setFileErrors(newFileErrors);
    await trigger();  // Revalidate the form
  };

  const handleRemoveFile = (index: number) => {
    // Effacez le fichier et le nom du fichier associé
    setValue(`fileInput${index}`, '');
    setValue(`fileName${index}`, '');
    setValue(`fileComment${index}`, '');
    
    // Effacez les erreurs associées
    clearErrors(`fileComment${index}`);
    
    // Mettez à jour l'état des erreurs de fichier
    const newFileErrors = [...fileErrors];
    newFileErrors[index] = '';
    setFileErrors(newFileErrors);
    
    // Si on enlève le dernier fichier visible, réduisez le nombre d'inputs visibles
    if (index + 1 === visibleInputs) {
        setVisibleInputs(visibleInputs - 1);
    }
  };

  const handleAddInput = () => {
    if (visibleInputs < 3) {
      setVisibleInputs(visibleInputs + 1);
    }
  };

  const handleFileCommentChange = async (index: number, value: string) => {
    const validation = validateFileName(value);
    if (validation === true) {
      clearErrors(`fileComment${index}`);
      const event = new CustomEvent("fileCommentValid", { detail: { index } });
      window.dispatchEvent(event);
    } else {
      setError(`fileComment${index}`, { type: "manual", message: validation });
    }
    setValue(`fileComment${index}`, value);
    await trigger();  // Revalidate the form
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
            {errors.supplementalInfo && <p className="text-red-500">{String(errors.supplementalInfo.message)}</p>}
          </FormItem>
        )}
      />

      <div className="border-t border-gray-300 my-6"></div>

      <div className="mt-6">
        <FormLabel>Ajouter des documents ( maximum 3)</FormLabel>
        <p className="text-sm font-medium">Formats Acceptés : .jpg | .jpeg | .png | .pdf | .doc | .docx | .xls | .xlsx</p>
        <p className="text-xs text-primary">Par exemple : Cahier des charges, Charte Graphique, Logo, etc.</p>
        {[0, 1, 2].map((index) => (
          index < visibleInputs && (
            <FormItem key={index} className="mt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <FormLabel>Document {index + 1}</FormLabel>
                  {!fileInputs[index] ? (
                    <FormControl className="mt-2">
                      <Input
                        id={`fileInput${index}`}
                        type="file"
                        accept=".jpg,.jpeg,.png,.doc,.docx,.pdf,.xls,.xlsx"
                        onChange={(e) => {
                          handleFileChange(index, e.target.files ? e.target.files[0] : null);
                        }}
                        className="cursor-pointer"
                      />
                    </FormControl>
                  ) : (
                    <div className="mt-2 flex items-center justify-between border border-gray-300 rounded-lg p-2 bg-gray-50">
                      <span className="text-sm text-gray-500">{fileNames[index]}</span>
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
                  <FormControl className="mt-2">
                    <Input
                      type="text"
                      value={fileComments[index] || ''}
                      onChange={(e) => handleFileCommentChange(index, e.target.value)}
                      placeholder="Définir le nom du fichier"
                      className={errors[`fileComment${index}`] ? 'border-red-500' : ''}
                    />
                  </FormControl>
                  {errors[`fileComment${index}`] && (
                    <p className="text-xs font-medium text-red-500 mt-1">
                      {String(errors[`fileComment${index}`]?.message)}
                    </p>
                  )}
                </div>
              </div>
            </FormItem>
          )
        ))}

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
