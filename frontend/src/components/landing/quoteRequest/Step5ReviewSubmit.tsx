import { useFormContext } from "react-hook-form";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuFileText } from "react-icons/lu";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";

interface Step5ReviewSubmitProps {
  selectedFormula: string | null;
  dataFormulas: Array<{
    name: string;
    options: Array<{ name: string; value?: string }>;
  }>;
}

export const Step5ReviewSubmit: React.FC<Step5ReviewSubmitProps> = ({
  selectedFormula,
  dataFormulas,
}) => {
  const { getValues } = useFormContext();

  // Récupérer les valeurs du formulaire
  const formValues = getValues();

  // Récupérer les fichiers uploadés et leurs commentaires
  const uploadedFiles = [
    { file: formValues.fileInput0, comment: formValues.fileComment0 },
    { file: formValues.fileInput1, comment: formValues.fileComment1 },
    { file: formValues.fileInput2, comment: formValues.fileComment2 },
  ].filter((entry) => entry.file);

  // Trouver les options de la formule sélectionnée
  const formula = dataFormulas.find((f) => f.name === selectedFormula);

  if (!formula) {
    return <div>Aucune formule sélectionnée.</div>;
  }

  // Filtrer et formater les options sélectionnées
  const selectedOptions = formula.options
    .filter((option) => formValues[`option_${option.name}`] === true) // Vérifie si l'option est sélectionnée
    .map((option) => {
      if (
        option.name === "Ajout de pages supplémentaires" &&
        formValues.pageCount
      ) {
        return `${option.name} (+${formValues.pageCount} pages)`;
      }
      return option.value ? `${option.name} : ${option.value}` : option.name;
    });

  const formatPhoneNumber = (phone: string | undefined): string => {
    if (!phone) return "N/A";

    // Supprime tous les caractères non numériques
    const cleaned = phone.replace(/\D/g, "");

    // Formate le numéro de téléphone en ajoutant un espace ou un caractère spécifique après chaque 2 chiffres
    const formattedPhone = cleaned.replace(/(\d{2})(?=\d)/g, "$1 ");

    return formattedPhone;
  };

  return (
    <div className="space-y-6">
      {/* Section 1: Formule et Options */}
      <div className="p-2 sm:p-4 border rounded-lg shadow-md bg-card">
        <h2 className="text-lg sm:text-xl font-semibold flex items-center mb-4">
          <HiOutlineClipboardDocumentList className="mr-2 text-primary h-6 w-6 shrink-0" />{" "}
          Détails de la Formule
        </h2>
        <div className="mb-2">
          <strong>Formule :</strong> {formValues.formule || "N/A"}
        </div>
        <div className="mb-2">
          <strong>Option(s) choisie(s) :</strong>
          <ul className="list-disc list-inside ml-4">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option, index) => (
                <li key={index}>{option}</li>
              ))
            ) : (
              <li>Aucune</li>
            )}
          </ul>
        </div>
        {formValues.supplementalInfo &&
          formValues.supplementalInfo !== "N/A" && (
            <div className="whitespace-pre-wrap">
              <p className="mb-2">
                <strong>Détails supplémentaires :</strong>
              </p>
              <p>{formValues.supplementalInfo}</p>
            </div>
          )}
      </div>

      {/* Section 2: Fichiers Uploadés */}
      <div className="p-4 border rounded-lg shadow-md bg-card">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <LuFileText className="mr-2 text-primary h-6 w-6 shrink-0" />{" "}
          Fichier(s) Téléchargé(s)
        </h2>
        <ul className="list-disc list-inside ml-4">
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((entry, index) => (
              <li key={index}>
                {entry.comment
                  ? `${entry.comment}.${entry.file.split(".").pop()}`
                  : entry.file}
              </li>
            ))
          ) : (
            <li>Aucun fichier téléchargé.</li>
          )}
        </ul>
      </div>

      {/* Section 3: Informations Client */}
      <div className="p-4 border rounded-lg shadow-md bg-card">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FaRegUser className="mr-2 text-primary shrink-0" /> Coordonnées
          Client
        </h2>
        <div className="mb-2 flex items-center">
          <strong className="w-32">Type de client :</strong>
          <span className="mr-4">
            {formValues.customerType === "particulier"
              ? "Particulier"
              : "Entreprise"}
          </span>
          {formValues.customerType === "entreprise" && (
            <>
              <strong className="w-32">Raison Sociale :</strong>
              <span>{formValues.company || "N/A"}</span>
            </>
          )}
        </div>
        <div className="mb-2 flex items-center">
          <FaRegUser className="mr-2 text-primary h-5 w-5 shrink-0" />
          <span>
            {`${formValues.civility || ""} ${formValues.firstName || ""} ${
              formValues.lastName || ""
            }`.trim() || "N/A"}
          </span>
        </div>
        <div className="mb-2 flex items-center">
          <FiMapPin className="mr-2 text-primary h-5 w-5 shrink-0" />
          <span>
            {formValues.address || "N/A"} {formValues.postalCode || "N/A"}{" "}
            {formValues.city || "N/A"}
          </span>
        </div>
        {/* Phone and Email on the same line */}
        <div className="mb-2 flex flex-col gap-2 sm:gap-0 sm:flex-row items-start sm:items-center">
          <div className="flex ">
            <FiPhone className="mr-2 mt-0.5 text-primary h-5 w-5 shrink-0" />
            <span className="mr-6">{formatPhoneNumber(formValues.phone)}</span>
          </div>
          <div className="flex">
            <FaRegEnvelope className="mr-2 mt-0.5 text-primary h-5 w-5 shrink-0" />
            <span>{formValues.email || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
