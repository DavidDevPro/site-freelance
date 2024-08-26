import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/apiConfig';

// Interface pour les fichiers uploadés temporairement
export interface FileUploadResponse {
  filename: string;
  originalName: string;
}

// Interface pour la réponse générale de l'API avec un type générique pour `data`
interface ApiResponse<T = unknown> {
  status: string;
  message: string;
  data?: T;
}

// Interface pour les données du client
export interface CustomerData {
  civility_id?: number | null;
  company_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  postal_code?: string | null;
  city: string;
  country?: string | null;
  additional_info?: string | null;
  status_id: number; // Status "Prospect" by default
  created_by: number;
  updated_by?: number | null;
}

// URL de base pour l'upload temporaire des fichiers
const proposalRequestUrl = `${apiUrl}proposal-request`;
const customersUrl = `${apiUrl}customers`;

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
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Crée un nouveau client.
 * 
 * @param {CustomerData} customerData - Les données du client à créer.
 * @returns {Promise<ApiResponse<{ customerId: number }>>} Une promesse résolue avec la réponse de l'API.
 */
export const createCustomer = async (customerData: CustomerData): Promise<ApiResponse<{ customerId: number }>> => {
  try {
    const response: AxiosResponse<ApiResponse<{ customerId: number }>> = await axios.post(customersUrl, customerData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create customer:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
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
    const response: AxiosResponse<ApiResponse> = await axios.post(`${proposalRequestUrl}`, formData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create proposal request:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};