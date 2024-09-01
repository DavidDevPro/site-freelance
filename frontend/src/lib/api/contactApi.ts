import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/config/apiConfig';

// Définir l'interface pour les données du formulaire de contact
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

// Définir l'interface pour la réponse de l'API
interface ApiResponse {
  // Ajouter ici les propriétés de la réponse API
  status: string;
  message: string;
}

/**
 * Envoie les données du formulaire de contact à l'API Laravel et envoie un email.
 *
 * @param {ContactFormData} contactData - Les données du formulaire de contact.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
const sendContactForm = async (contactData: ContactFormData): Promise<ApiResponse> => {
  const contactUrl = `${apiUrl}contact`;

  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(contactUrl, contactData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to send contact form:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export default sendContactForm;
