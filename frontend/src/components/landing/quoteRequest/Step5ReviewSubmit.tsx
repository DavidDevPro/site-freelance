import { useFormContext } from "react-hook-form";
import { ClipboardList, FileText, Mail, MapPin, Phone, User } from "lucide-react";

interface Step5ReviewSubmitProps {
  selectedFormula: string | null;
  dataFormulas: Array<{ name: string, options: Array<{ name: string; description?: string }> }>;
}

export const Step5ReviewSubmit: React.FC<Step5ReviewSubmitProps> = ({ selectedFormula, dataFormulas }) => {
  const { getValues } = useFormContext(); 

  // Récupérer les valeurs du formulaire
  const formValues = getValues();

  // Récupérer les fichiers uploadés et leurs commentaires
  const uploadedFiles = [
    { file: formValues.fileInput0, comment: formValues.fileComment0 },
    { file: formValues.fileInput1, comment: formValues.fileComment1 },
    { file: formValues.fileInput2, comment: formValues.fileComment2 },
  ].filter(entry => entry.file);

  // Trouver les options de la formule sélectionnée
  const formula = dataFormulas.find(f => f.name === selectedFormula);

  if (!formula) {
    return <div>Aucune formule sélectionnée.</div>;
  }

  // Filtrer et formater les options sélectionnées
  const selectedOptions = formula.options
    .filter(option => formValues[`option_${option.name}`] === true) // Vérifie si l'option est sélectionnée
    .map(option => {
      if (option.name === "Ajout de pages supplémentaires" && formValues.pageCount) {
        return `${option.name} (+${formValues.pageCount} pages)`;
      }
      return option.description ? `${option.name} : ${option.description}` : option.name;
    });

  const formatPhoneNumber = (phone: string | undefined): string => {
    if (!phone) return 'N/A';
    
    // Supprime tous les caractères non numériques
    const cleaned = phone.replace(/\D/g, '');
    
    // Formate le numéro de téléphone en ajoutant un espace ou un caractère spécifique après chaque 2 chiffres
    const formattedPhone = cleaned.replace(/(\d{2})(?=\d)/g, '$1 ');
    
    return formattedPhone;
  };
  
  return (
    <div className="space-y-6">
      {/* Section 1: Formule et Options */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <ClipboardList className="mr-2 text-primary" /> Détails de la Formule
        </h2>
        <div className="mb-2">
          <strong>Formule :</strong> {formValues.formule || 'N/A'}
        </div>
        <div className="mb-2">
          <strong>Option(s) choisie(s) :</strong>
          <ul className="list-disc list-inside ml-4">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option, index) => <li key={index}>{option}</li>)
            ) : (
              <li>Aucune</li>
            )}
          </ul>
        </div>
        {formValues.supplementalInfo && formValues.supplementalInfo !== 'N/A' && (
          <div className="whitespace-pre-wrap">
            <p className="mb-2"><strong>Détails supplémentaires :</strong></p>
            <p>{formValues.supplementalInfo}</p>
          </div>
        )}
      </div>

      {/* Section 2: Fichiers Uploadés */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold flex items-center mb-4">
          <FileText className="mr-2 text-primary" /> Fichier(s) Téléchargé(s)
        </h2>
        <ul className="list-disc list-inside ml-4">
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((entry, index) => (
              <li key={index}>
                {entry.comment ? `${entry.comment}.${entry.file.split('.').pop()}` : entry.file}
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
          <User className="mr-2 text-primary" /> Coordonnées Client
        </h2>
        <div className="mb-2 flex items-center">
        <strong className="w-32">Type de client :</strong>
        <span className="mr-4">
          {formValues.customerType === 'particulier' ? 'Particulier' : 'Entreprise'}
        </span>
        {formValues.customerType === 'entreprise' && (
          <>
            <strong className="w-32">Raison Sociale :</strong>
            <span>{formValues.company || 'N/A'}</span>
          </>
        )}
      </div>
       <div className="mb-2 flex items-center">
          <User className="mr-2 text-primary" />
          <span>{`${formValues.civility || ''} ${formValues.firstName || ''} ${formValues.lastName || ''}`.trim() || 'N/A'}</span>
        </div>
        <div className="mb-2 flex items-center">
          <MapPin className="mr-2 text-primary" />
          <span>{formValues.address || 'N/A'} {formValues.postalCode || 'N/A'} {formValues.city || 'N/A'}</span>
        </div>
        {/* Phone and Email on the same line */}
        <div className="mb-2 flex items-center">
          <Phone className="mr-2 text-primary" />
          <span className="mr-6">{formatPhoneNumber(formValues.phone)}</span>
          <Mail className="mr-2 text-primary" />
          <span>{formValues.email || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};
