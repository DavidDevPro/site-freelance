export const validateFileName = (fileName: string | undefined): string | true => {
    const FILE_NAME_REGEX = /^[a-zA-Z0-9_-]+$/;
    const FILE_NAME_MAX_LENGTH = 30;

    if (!fileName || fileName.length === 0) { // Vérifie si fileName est défini et non vide
        return "Le nom du fichier ne peut pas être vide.";
    }

    if (!FILE_NAME_REGEX.test(fileName)) {
        return "Le nom du fichier ne doit pas contenir d'espaces ni de caractères spéciaux.";
    }
    if (fileName.length > FILE_NAME_MAX_LENGTH) {
        return `Le nom du fichier ne doit pas dépasser ${FILE_NAME_MAX_LENGTH} caractères.`;
    }

    return true;
};