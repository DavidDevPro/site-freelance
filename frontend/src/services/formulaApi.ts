import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/apiConfig';

// Définir l'interface pour les données d'une formule
export interface Formula {
  id: string;
  name: string;
  description: string;
  features: string[];
  options: string[];
  isMostPopular: boolean;
}

// Définir l'interface pour la réponse de l'API
interface ApiResponse {
  status: string;
  message: string;
}

// URL de base pour les formules
const formulasUrl = `${apiUrl}formulas`;

/**
 * Récupère la liste des formules depuis l'API Laravel.
 *
 * @returns {Promise<Formula[]>} Une promesse résolue avec la liste des formules.
 */
export const fetchFormulas = async (): Promise<Formula[]> => {
  try {
    const response: AxiosResponse<Formula[]> = await axios.get(formulasUrl);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch formulas:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Envoie les données d'une nouvelle formule à l'API Laravel pour création.
 *
 * @param {FormData} formData - Les données de la formule sous forme de FormData.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const createFormula = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(formulasUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create formula:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Met à jour les données d'une formule via l'API Laravel.
 *
 * @param {string} id - L'ID de la formule à mettre à jour.
 * @param {FormData} formData - Les données de la formule sous forme de FormData.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const updateFormula = async (id: string, formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(`${formulasUrl}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to update formula:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Supprime une formule via l'API Laravel.
 *
 * @param {string} id - L'ID de la formule à supprimer.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const deleteFormula = async (id: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.delete(`${formulasUrl}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to delete formula:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};