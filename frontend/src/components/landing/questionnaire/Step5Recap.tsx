import { useFormContext } from "react-hook-form";

interface Step5RecapProps {
  selectedFormula: string | null;
  dataFormulas: Array<{ name: string; options: string[] }>;
}

export const Step5Recap: React.FC<Step5RecapProps> = ({
  selectedFormula,
  dataFormulas,
}) => {
  const { getValues } = useFormContext(); // Pour obtenir les valeurs du formulaire

  // Récupérer les valeurs du formulaire
  const formValues = getValues();

  // Trouver les options de la formule sélectionnée
  const formula = dataFormulas.find((f) => f.name === selectedFormula);

  if (!formula) {
    return <div>Aucune formule sélectionnée.</div>;
  }

  // Filtrer et formater les options sélectionnées
  const selectedOptions = formula.options
    .filter((option) => formValues[option] === true)
    .join(" | "); // Joindre les options avec " | "

  return (
    <div className="space-y-2">
      <div>
        <strong>Formule:</strong> {formValues.formule || "N/A"}
      </div>
      <div>
        <strong>Option(s) choisie(s):</strong> {selectedOptions || "Aucune"}
      </div>
      <div>
        <strong>Type de client:</strong>{" "}
        {formValues.customerType === "particulier"
          ? "Particulier"
          : "Entreprise"}
      </div>
      {formValues.customerType === "entreprise" && (
        <div>
          <strong>Raison Sociale:</strong> {formValues.company || "N/A"}
        </div>
      )}
      <div>
        <strong>Civilité:</strong> {formValues.civility || "N/A"}
      </div>
      <div>
        <strong>Prénom:</strong> {formValues.firstName || "N/A"}
      </div>
      <div>
        <strong>Nom:</strong> {formValues.lastName || "N/A"}
      </div>
      <div>
        <strong>Adresse:</strong> {formValues.address || "N/A"}
      </div>
      <div className="flex space-x-4">
        <div>
          <strong>Code Postal:</strong> {formValues.postalCode || "N/A"}
        </div>
        <div>
          <strong>Ville:</strong> {formValues.city || "N/A"}
        </div>
      </div>
      <div>
        <strong>Téléphone:</strong> {formValues.phone || "N/A"}
      </div>
      <div>
        <strong>Email:</strong> {formValues.email || "N/A"}
      </div>
    </div>
  );
};
