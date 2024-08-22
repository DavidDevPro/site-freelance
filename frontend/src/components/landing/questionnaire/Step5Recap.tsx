import { useFormContext } from "react-hook-form";
import {
  FaFileAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClipboardList,
} from "react-icons/fa";

interface Step5RecapProps {
  selectedFormula: string | null;
  dataFormulas: Array<{
    name: string;
    options: Array<{ name: string; description?: string }>;
  }>;
}

export const Step5Recap: React.FC<Step5RecapProps> = ({
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
    .filter((option) => formValues[option.name] === true)
    .map((option) => {
      if (
        option.name === "Ajout de pages supplémentaires" &&
        formValues.pageCount
      ) {
        return `${option.name} (+${formValues.pageCount} pages)`;
      }
      return option.description
        ? `${option.name} : ${option.description}`
        : option.name;
    });

  return (
    <div className="space-y-6">
      {/* Section 1: Formule et Options */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FaClipboardList className="mr-2 text-primary" /> Détails de la
          Formule
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
        <div className="whitespace-pre-wrap">
          <p className="mb-2">
            <strong>Détails supplémentaires :</strong>
          </p>
          <p>{formValues.supplementalInfo || "N/A"}</p>
        </div>
      </div>

      {/* Section 2: Fichiers Uploadés */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FaFileAlt className="mr-2 text-primary" /> Fichier(s) Téléchargé(s)
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
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FaUser className="mr-2 text-primary" /> Informations Client
        </h2>
        <div className="mb-2 flex items-center">
          <strong className="w-32">Type de client :</strong>
          <span>
            {formValues.customerType === "particulier"
              ? "Particulier"
              : "Entreprise"}
          </span>
        </div>
        {formValues.customerType === "entreprise" && (
          <div className="mb-2 flex items-center">
            <strong className="w-32">Raison Sociale :</strong>
            <span>{formValues.company || "N/A"}</span>
          </div>
        )}
        <div className="mb-2 flex items-center">
          <strong className="w-32">Civilité :</strong>
          <span>{formValues.civility || "N/A"}</span>
        </div>
        <div className="mb-2 flex items-center">
          <strong className="w-32">Prénom :</strong>
          <span>{formValues.firstName || "N/A"}</span>
        </div>
        <div className="mb-2 flex items-center">
          <strong className="w-32">Nom :</strong>
          <span>{formValues.lastName || "N/A"}</span>
        </div>
        <div className="mb-2 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-primary" />
          <span>{formValues.address || "N/A"}</span>
        </div>
        <div className="flex space-x-4 items-center mb-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-primary" />
            <span>
              <strong>Code Postal :</strong> {formValues.postalCode || "N/A"}
            </span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-primary" />
            <span>
              <strong>Ville :</strong> {formValues.city || "N/A"}
            </span>
          </div>
        </div>
        <div className="mb-2 flex items-center">
          <FaPhone className="mr-2 text-primary" />
          <span>{formValues.phone || "N/A"}</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-primary" />
          <span>{formValues.email || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};
