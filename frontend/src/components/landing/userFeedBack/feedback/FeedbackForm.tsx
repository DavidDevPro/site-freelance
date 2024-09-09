import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, Textarea } from "@/components/ui";
import { useDropzone } from 'react-dropzone';
import { FaPaperPlane, FaRegUser, FaRegEnvelope, FaTimes } from "react-icons/fa";
import { PrimaryButton, StarRating } from "@/components/shared";
import { showTestimonialSuccess, showTestimonialError } from "@/notifications/toastMessages";
import { createTestimonial } from "@/lib/api/testimonialsApi"; 

const MAX_CHAR_COUNT = 300;
const MIN_CHAR_COUNT = 50;

// Schéma de validation du formulaire avec Zod
const formSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères." }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  userName: z.string().min(2, { message: "Le rôle doit contenir au moins 2 caractères." }),
  comment: z.string().min(MIN_CHAR_COUNT, { message: `Le témoignage doit contenir au moins ${MIN_CHAR_COUNT} caractères.` })
    .max(MAX_CHAR_COUNT, { message: `Le témoignage ne doit pas dépasser ${MAX_CHAR_COUNT} caractères.` }),
  rating: z.number().min(0.5).max(5), // Validation pour la note
});

interface FeedbackFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  comment: string;
  rating: number;
}

interface FeedbackFormProps {
  onSubmit: () => void;
  closeModal: () => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit, closeModal }) => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FeedbackFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      comment: "",
      rating: 0, // Valeur par défaut pour la note
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    maxSize: 5242880, // 5MB
  });

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  }, [selectedFile]);

  const handleFormSubmit: SubmitHandler<FeedbackFormInputs> = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('role', data.userName);
      formData.append('comment', data.comment);
      formData.append('rating', data.rating.toString());
      
      if (selectedFile) {
        formData.append('avatar', selectedFile);
      }

      await createTestimonial(formData);
      
      setLoading(false);
      reset();
      setSelectedFile(null);
      showTestimonialSuccess();
      onSubmit();
      closeModal();
    } catch {
      setLoading(false);
      showTestimonialError();
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Champs Prénom et Nom sur une seule ligne en grand écran, colonne en petit écran */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex-1">
          <FormLabel>Prénom <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <div className="relative">
              <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
              <Input
                placeholder="John"
                {...register('firstName')}
                className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </FormControl>
          {errors.firstName && <FormMessage className="text-red-500">{errors.firstName.message}</FormMessage>}
        </div>
        <div className="flex-1">
          <FormLabel>Nom <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <div className="relative">
              <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
              <Input
                placeholder="Doe"
                {...register('lastName')}
                className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </FormControl>
          {errors.lastName && <FormMessage className="text-red-500">{errors.lastName.message}</FormMessage>}
        </div>
      </div>

      {/* Champs Email et Rôle sur une seule ligne en grand écran, colonne en petit écran */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex-1">
          <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <div className="relative">
              <FaRegEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 shrink-0" />
              <Input
                placeholder="john.doe@example.com"
                {...register('email')}
                className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </FormControl>
          {errors.email && <FormMessage className="text-red-500">{errors.email.message}</FormMessage>}
        </div>
        <div className="flex-1">
          <FormLabel>Rôle <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <Input
              placeholder="CEO"
              {...register('userName')}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </FormControl>
          {errors.userName && <FormMessage className="text-red-500">{errors.userName.message}</FormMessage>}
        </div>
      </div>

      {/* Champ pour télécharger un avatar */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Avatar</label>
        {!imagePreview && (
          <div
            {...getRootProps({
              className:
                'dropzone border-dashed border-2 border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-colors duration-200 hover:bg-gray-100 sm:p-6',
            })}
          >
            <input {...getInputProps()} />
            <p className="text-gray-500 text-sm sm:text-base">
              Glissez-déposez ou sélectionnez une image
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              .jpeg / .jpg / .png (MAX: 5MB)
            </p>
          </div>
        )}
        {imagePreview && (
          <div className="relative mt-4 border-dashed border-2 border-gray-300 rounded-lg p-4 text-center sm:p-6">
            <img
              src={imagePreview}
              alt="Avatar Preview"
              className="w-32 h-32 object-cover rounded-full mx-auto sm:w-40 sm:h-40"
            />
            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700"
            >
              <FaTimes className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
            </button>
          </div>
        )}
      </div>

      {/* Champ de notation avant le champ de commentaire */}
      <FormField
        control={control}
        name="rating"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Note <span className="text-red-500">*</span></FormLabel>
            <FormControl>
              <StarRating
                rating={field.value}
                onRatingChange={(rate) => {
                  field.onChange(rate);
                }}
                sizeClass="w-6 h-6"
              />
            </FormControl>
            {errors.rating && <FormMessage className="text-red-500">{errors.rating.message}</FormMessage>}
          </FormItem>
        )}
      />

      {/* Champ de saisie du commentaire */}
      <FormField
        control={control}
        name="comment"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Avis <span className="text-red-500">*</span></FormLabel>
            <FormControl>
              <Textarea
                {...register('comment')}
                onChange={(e) => {
                  handleCommentChange(e);
                  field.onChange(e);
                }}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Dites-nous pourquoi vous nous recommanderiez"
              />
            </FormControl>
            <div className="text-right text-sm text-gray-500">
              {charCount}/{MAX_CHAR_COUNT} caractères
            </div>
            {errors.comment && <FormMessage className="text-red-500">{errors.comment.message}</FormMessage>}
          </FormItem>
        )}
      />

      {/* Bouton de soumission */}
      <div className="flex justify-center mb-4">
        <PrimaryButton type="submit" variant="primary" isLoading={loading}>
          Soumettre un Avis
          <FaPaperPlane className="ml-2 h-5 w-5 shrink-0" />
        </PrimaryButton>
      </div>
    </form>
  );
};
