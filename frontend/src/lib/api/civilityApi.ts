import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/config/apiConfig';

// Définir l'interface pour les données de civilité
export interface Civility {
  id: number;
  shortLabel: string;
  longLabel: string;
}

// Définir l'interface pour la réponse de l'API
interface ApiResponse {
  status: string;
  message: string;
}

// URL de base pour les civilités
const civilitiesUrl = `${apiUrl}civilities`;

/**
 * Récupère la liste des civilités depuis l'API Laravel.
 *
 * @returns {Promise<Civility[]>} Une promesse résolue avec la liste des civilités.
 */
export const fetchCivilities = async (): Promise<Civility[]> => {
  try {
    const response: AxiosResponse<Civility[]> = await axios.get(civilitiesUrl);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch civilities:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Crée une nouvelle civilité via l'API Laravel.
 *
 * @param {FormData} formData - Les données de la civilité sous forme de FormData.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const createCivility = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(civilitiesUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create civility:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Met à jour les données d'une civilité via l'API Laravel.
 *
 * @param {number} id - L'ID de la civilité à mettre à jour.
 * @param {FormData} formData - Les données de la civilité sous forme de FormData.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const updateCivility = async (id: number, formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(`${civilitiesUrl}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to update civility:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Supprime une civilité via l'API Laravel.
 *
 * @param {number} id - L'ID de la civilité à supprimer.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const deleteCivility = async (id: number): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.delete(`${civilitiesUrl}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to delete civility:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};
