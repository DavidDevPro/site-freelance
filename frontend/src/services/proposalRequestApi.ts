import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/apiConfig';

// Interface pour les fichiers uploadés temporairement
export interface FileUploadResponse {
  filename: string;
  originalName: string;
}

// Interface pour la réponse générale de l'API
interface ApiResponse {
  status: string;
  message: string;
}

// URL de base pour l'upload temporaire des fichiers
const proposalRequestUrl = `${apiUrl}proposal-request`;

/**
 * Envoie les fichiers temporairement au serveur.
 * 
 * @param {FormData} formData - Les données du fichier sous forme de FormData.
 * @returns {Promise<FileUploadResponse>} Une promesse résolue avec le nom du fichier temporaire.
 */
export const uploadTemporaryFile = async (formData: FormData): Promise<FileUploadResponse> => {
  try {
    const response: AxiosResponse<FileUploadResponse> = await axios.post(`${proposalRequestUrl}/temporary-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to upload file:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Crée une nouvelle demande de devis en stockant les fichiers temporairement.
 * 
 * @param {FormData} formData - Les données du formulaire avec les fichiers.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const createProposalRequest = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(`${proposalRequestUrl}/create`, formData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create proposal request:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};