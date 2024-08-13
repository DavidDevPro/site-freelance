import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '@/apiConfig';

// Définir l'interface pour les données des témoignages
export interface TestimonialData {
  name: string;
  role: string;
  description: string;
  avatar?: File | null;
  avatarUrl?: string;  // Ajouter ce champ pour gérer les URL d'avatar par défaut
  rating?: number;
}

// Définir l'interface pour la réponse de l'API
interface ApiResponse {
  status: string;
  message: string;
}

// Définir l'interface pour un témoignage
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  description: string;
  image_url: string | null;
  rating: number;
  created_at: string;
}

// URL de base pour les témoignages
const testimonialsUrl = `${apiUrl}testimonials`;

/**
 * Envoie les données du témoignage à l'API Laravel pour création.
 *
 * @param {FormData} formData - Les données du témoignage sous forme de FormData.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const createTestimonial = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(testimonialsUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create testimonial:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Récupère la liste des témoignages depuis l'API Laravel.
 *
 * @returns {Promise<Testimonial[]>} Une promesse résolue avec la liste des témoignages.
 */
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response: AxiosResponse<Testimonial[]> = await axios.get(testimonialsUrl);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch testimonials:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Met à jour les données d'un témoignage via l'API Laravel.
 *
 * @param {number} id - L'ID du témoignage à mettre à jour.
 * @param {FormData} formData - Les données du témoignage sous forme de FormData.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const updateTestimonial = async (id: number, formData: FormData): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(`${testimonialsUrl}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to update testimonial:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

/**
 * Supprime un témoignage via l'API Laravel.
 *
 * @param {number} id - L'ID du témoignage à supprimer.
 * @returns {Promise<ApiResponse>} Une promesse résolue avec la réponse de l'API.
 */
export const deleteTestimonial = async (id: number): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.delete(`${testimonialsUrl}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to delete testimonial:", error.response?.data || error.message);
      throw new Error(error.response?.data.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};